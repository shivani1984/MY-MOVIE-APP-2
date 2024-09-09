import React from "react";
import MovieList from "./MovieList";
import NavBar from "./NavBar";
import { movies } from "./moviesData";
import './index.css';
class App extends React.Component{
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount : 0
    }
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
    const { movies} = this.state;
    let {cartCount} = this.state;
    const mid = movies.indexOf(movie);
    const updatedMovies = [...movies];
    updatedMovies[mid] = { ...updatedMovies[mid], cart: !updatedMovies[mid].cart };
    console.log(updatedMovies[mid].cart);

    if(updatedMovies[mid].cart){
      cartCount = cartCount+1;

    }
    else {cartCount = cartCount -1;}
    this.setState({ movies: updatedMovies, cartCount});
    console.log(cartCount);
  };

  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    const updatedMovies = [...movies];
    updatedMovies[mid] = { ...updatedMovies[mid], fav: !updatedMovies[mid].fav };
    this.setState({ movies: updatedMovies });
  };
  render(){
    const {movies, cartCount}= this.state ;
   return (
      <>
      <NavBar cartCount ={cartCount}/>
      <MovieList movies ={movies}
                 addStars={this.handleIncStars}
                 removeStars={this.handleDcrStars}
                 toggleFav={this.handleToggleFav}
                 toggleCart={this.handleToggleCart}
                 
                  />
      </>
    );
  }
}
  
  export default App;
  