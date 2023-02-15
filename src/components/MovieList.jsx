const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m3">
          <img src={movie.Poster} alt="movie-image" />
          <div
            onClick={() =>
              props.handleFavouritesClick(movie)
            }
            className="overlay d-flex align-items-center justify-content-center">
              <FavouriteComponent />
            </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
