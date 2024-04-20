import { StarRating } from "./StarRating";

export const MovieCard = ({ movie, genreList }) => {
  console.log(movie);
  return (
    <article key={movie.id} className="">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        <h2
          className="text-center mt-[10px]"
          aria-label={movie.title}
          title={movie.title}
        >
          {movie.title}(
          {movie.genre_ids.map(
            (g: any, index: number) =>
              (index > 0 ? ", " : "") +
              genreList?.find((gl: any) => gl.id === g).name,
          )}
          )
        </h2>
      </div>
      <div className="justify-end flex mt-[10px]">
        <StarRating starPoint={Math.round(movie.vote_average)} />
      </div>
      <p
        className="line-clamp-3 text-[14px] mt-[10px]"
        aria-label={movie.overview}
        title={movie.overview}
      >
        {movie.overview}
      </p>
    </article>
  );
};
