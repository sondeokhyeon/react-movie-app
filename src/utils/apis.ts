import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 10000,
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_API_KEY,
  },
});

export const apis = {
  nowPlaying: (args: any) => {
    const p = {
      language: args.lang,
      order: args.order,
      page: args.pageParam,
    };
    return get("movie/now_playing", p);
  },
};

export const queryKeys = {
  nowPlaying: "nowPlaying",
};

const get = async (url: string, params: any) => {
  return await instance
    .get(url, { params: { ...params } })
    .then((r) => {
      return r.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
