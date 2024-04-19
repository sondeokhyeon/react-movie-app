import { createLazyFileRoute } from "@tanstack/react-router";
import { apis, queryKeys } from "utils/apis";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { E_LANGUAGE, E_ORDER } from "types/common";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const [lang] = useState<E_LANGUAGE>(E_LANGUAGE.ko);
  const [order] = useState<E_ORDER>(E_ORDER.desc);

  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.nowPlaying, { lang, order }],
    queryFn: apis.nowPlaying,
  });

  console.log(isLoading);
  console.log(data);

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
}
