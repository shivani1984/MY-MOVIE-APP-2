

function MovieCard(props){
   
    const { movie, addStars, removeStars, toggleFav, toggleCart } = props; // Change from movies to movie
    const { title, plot, price, rating, stars, fav, cart } = movie; // Change from movies to movie
    
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img 
              alt="Poster" 
              src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/960x1440/v3/assets/p8815512_p_v8_ax.jpg" 
            />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">{price}</div>
            
            <div className="footer">
            <div className="rating">{rating}</div>
              <div className="star-dis">
                <img 
                  className="str-btn"
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/10308/10308959.png"
                  onClick={() => { removeStars(movie); }} // Change from movies to movie
                />
                <img 
                  className="stars"
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/2893/2893811.png"
                />
                <img 
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/3416/3416075.png"
                  onClick={() => { addStars(movie); }} // Change from movies to movie
                />
                <span className="starCount">{stars}</span> 
              </div>
              <div>
              <button 
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={() => { toggleFav(movie); }} // Change from movies to movie
              >
                {fav ? "unfavourite" : "favourite" }
              </button>
              <button 
                className={cart ? "remove-btn" : "cart-btn"}
                onClick={() => { toggleCart(movie); }} // Change from movies to movie
              >
                {cart ? "remove from cart" : "add to cart" }
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default MovieCard;
