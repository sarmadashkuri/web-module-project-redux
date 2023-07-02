import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/favoritesActions';
import { useHistory } from 'react-router-dom';

const FavoriteMovieList = (props) => {
    const { push } = useHistory();

    const { favorites, removeFavorite } = props;

    const handleRemoveFavorite = (movieId) => {
        removeFavorite(movieId);
        console.log('anybody there?')
        push('/movies');
    };

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span class="material-icons" onClick={() => handleRemoveFavorite(movie.id)}>remove_circle</span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites.favorites,
    }
}

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);