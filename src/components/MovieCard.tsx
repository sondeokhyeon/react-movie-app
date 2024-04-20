export const MovieCard = ({ movie }) => {
  return (
    <article key={movie.id} className="col-lg-3 col-md-2 col-xs-1">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h3 className="text-center">{movie.title}</h3>
    </article>
  );
};
