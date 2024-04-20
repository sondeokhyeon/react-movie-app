import { useEffect, useState } from "react";
import { apis } from "@/utils/apis";

const useGetMovieGenre = (lang: any) => {
  const [genreList, setGenreList] = useState();

  useEffect(() => {
    const fetch = async () => {
      if (genreList) return;
      const r = await apis.genreList({ lang });
      setGenreList(r.genres);
    };
    fetch();
  }, []);

  return genreList;
};

export default useGetMovieGenre;
