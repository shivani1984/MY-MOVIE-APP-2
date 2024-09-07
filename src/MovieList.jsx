import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          id:1,
          title: "The Avengers",
          plot: "Earth's mightiest heroes",
          price: "Rs 199",
          rating: 8.9,
          stars: 0,
          fav: false,
          cart: false,
        },
        {
            id:2,
          title: "Iron Man",
          plot: "A genius billionaire in a high-tech suit",
          price: "Rs 150",
          rating: 7.9,
          stars: 0,
          fav: false,
          cart: false,
        },
        {
          id:3,
          title: "Black Panther",
          plot: "The king of Wakanda fights for his people",
          price: "Rs 180",
          rating: 8.3,
          stars: 0,
          fav: false,
          cart: false,
        },
      ],
    };
  }

  handleIncStars = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    const updatedMovies = [...movies];
    if (updatedMovies[mid].stars >= 5) return;
    updatedMovies[mid] = { ...updatedMovies[mid], stars: updatedMovies[mid].stars + 0.5 };
    this.setState({ movies: updatedMovies });
  };

  handleDcrStars = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    const updatedMovies = [...movies];
    if (updatedMovies[mid].stars <= 0) return;
    updatedMovies[mid] = { ...updatedMovies[mid], stars: updatedMovies[mid].stars - 0.5 };
    this.setState({ movies: updatedMovies });
  };

  handleToggleCart = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    const updatedMovies = [...movies];
    updatedMovies[mid] = { ...updatedMovies[mid], cart: !updatedMovies[mid].cart };
    this.setState({ movies: updatedMovies });
  };

  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    const updatedMovies = [...movies];
    updatedMovies[mid] = { ...updatedMovies[mid], fav: !updatedMovies[mid].fav };
    this.setState({ movies: updatedMovies });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            movie={movie}
            addStars={this.handleIncStars}
            removeStars={this.handleDcrStars}
            toggleFav={this.handleToggleFav}
            toggleCart={this.handleToggleCart}
            
          />
        ))}
      </>
    );
  }
}

export default MovieList;