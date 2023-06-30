import Movie from "./Movie";
export default function Movies(props) {
  const { movies = [] } = props;
  return (
    <div className="movies">
    {movies.length ? (
      movies.map((movie) => <Movie key={movie.imbdID} {...movie} />)
      ) : (
        <div className="error-page">
        <h1>404 Not Found</h1>
        </div>
        )}
        </div>
        );
      }
      