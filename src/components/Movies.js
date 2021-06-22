import React from 'react'
import './Movies.css';





class Movies extends React.Component {
  state = { movies: []}

  componentDidMount() {
    fetch("https://code-challenge.spectrumtoolbox.com/api/movies", {
      headers: ({
          "Content-Type": "application/json",
        Authorization: "Api-Key q3MNxtfep8Gt",
      }),
    })
      .then((res) => res.json())
      .then(({ data }) => {
        const movies = data
        this.setState({ movies });
  });
}

  render() {
   
        console.log(this.state.movies);
      return (
        <div className='movie_list'>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              {movie.title}
              <img src={`ImageHeros/${movie.id}.jpeg`} />
            </li>
          ))}
        </ul>
        </div>
      );
    }
  }

export default Movies;