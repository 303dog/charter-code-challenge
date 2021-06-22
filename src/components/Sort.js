import React from 'react'


class Sort extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            genreSort: [],
        }
    }

    sortByGenre = () => {
        this.setState({
          genreSort: this.props.movies
        })
        return (
        this.props.movies.sort((a, b) => (a.genre == b.genre) ? 1 : -1).map(({}) => (
          console.log(this.state.genreSort),
          <div>{this.genreSort}</div>
            ),)
            )      
          }
    
          render() {
            return (
              <button className='movie_sort' onClick={this.sortByGenre()}>Sort</button>
            )
          }
}

export default Sort;