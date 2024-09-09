import React, { Component } from 'react';
import MovieCard from './MovieCard';
import { movies } from './moviesData';

class MovieList extends Component {
  

  render() {
    const { movies, addStars, removeStars, toggleFav, toggleCart } = this.props;
    console.log(this.props);
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
}

export default MovieList;