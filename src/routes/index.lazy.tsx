import { FullLoading } from "@/components/Loading";
import { MovieCard } from "@/components/MovieCard";
import { IndexNavigation } from "@/components/Common";
import { useInfiniteQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { E_LANGUAGE, E_ORDER } from "types/common";
import { apis, queryKeys } from "utils/apis";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const [lang] = useState<E_LANGUAGE>(E_LANGUAGE.ko);
  const [order] = useState<E_ORDER>(E_ORDER.desc);
  const { ref, inView } = useInView();

  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: [queryKeys.nowPlaying],
    queryFn: ({ pageParam = 0 }) => apis.nowPlaying({ lang, order, pageParam }),
    initialPageParam: 1,
    getNextPageParam: (last) => last.page + 1,
  });

  useEffect(() => {
    fetchNextPage();
  }, [inView]);

  if (isLoading) return <FullLoading />;

  return (
    <>
      <IndexNavigation />
      <div className="container-fluid">
        <div className="my-4">
          <h1>현재 상영중</h1>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
          {data?.pages?.map((movies: any) =>
            movies?.results?.map((m: any) => (
              <MovieCard key={m.id} movie={m} />
            )),
          )}
        </div>
        <div ref={ref} className="h-2" />
      </div>
    </>
  );
}
