
import MovieCard from './MovieCard';
import { movies } from './moviesData';

function MovieList(props) {
  


    const { movies, addStars, removeStars, toggleFav, toggleCart } = props;
   
    return (
      <>
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            movie={movie}
            addStars={addStars}
            removeStars={removeStars}
            

            toggleFav={toggleFav}
            toggleCart={toggleCart}

            
          />
        ))}
      </>
    );
  }


export default MovieList;