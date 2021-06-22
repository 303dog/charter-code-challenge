import React from "react";
import "./Movies.css";

class Movies extends React.Component {
  state = { 
    movies: [],
   };

  componentDidMount() {
    fetch("https://code-challenge.spectrumtoolbox.com/api/movies", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Api-Key q3MNxtfep8Gt",
      },
    })
      .then((res) => res.json())
      .then(({ data }) => {
        const movies = data;
        this.setState({ movies });
      });
  }


  render() {
    console.log(this.state.movies);
    return (
      <div className='movie_container'>
         <button onClick={this.sortByGenre}>
          By Genre
        </button>
        {this.state.movies.map((movie) => (
          <div key={movie.id}>
            {movie.title}
            <img src={`asset/${movie.id}.jpeg`} />
          </div>
        ))}
      </div>
    );
  }
}

export default Movies;
