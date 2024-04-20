import { FullLoading } from "@/components/Loading";
import { MovieCard } from "@/components/MovieCard";
import { IndexNavigation } from "@/components/Common";
import { useInfiniteQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { apis, queryKeys } from "utils/apis";
import { LANGUAGE, ORDER } from "@/types/common";
import {
  HP_LANGUAGE_PARAMETER_FILTER,
  HP_MULTI_LANG_HANDLER,
  HP_ORDER_PARAMETER_FILTER,
} from "utils/helper";
import useGetMovieGenre from "@/hooks/useGetMovieGenre";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const router = Route.useSearch<{
    lang: keyof typeof LANGUAGE;
    order: keyof typeof ORDER;
  }>();
  const [lang] = useState(HP_LANGUAGE_PARAMETER_FILTER(router?.lang));
  const [order] = useState(HP_ORDER_PARAMETER_FILTER(router?.order));
  const { ref, inView } = useInView();
  const genreList = useGetMovieGenre(lang);

  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: [queryKeys.nowPlaying],
    queryFn: ({ pageParam = 0 }) => apis.nowPlaying({ lang, order, pageParam }),
    initialPageParam: order === "desc" ? 1 : 174,
    getNextPageParam: (last) =>
      order === "desc" ? last.page + 1 : last.page - 1,
  });

  useEffect(() => {
    fetchNextPage();
  }, [inView]);

  if (isLoading) return <FullLoading />;

  return (
    <>
      <IndexNavigation lang={lang} order={order} />
      <div className="container-fluid">
        <div className="my-4">
          <h1>{HP_MULTI_LANG_HANDLER(lang, "현재 상영중", "Now Playing")}</h1>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
          {data?.pages?.map((movies: any) =>
            movies?.results?.map((m: any) => (
              <MovieCard key={m.id} movie={m} genreList={genreList} />
            )),
          )}
        </div>
        <div ref={ref} className="h-2" />
      </div>
    </>
  );
}
