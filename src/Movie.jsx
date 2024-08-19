import React, { useState, useEffect } from 'react';
import './Movie.css';

const Movie = () => {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    // OMDB API Key
    const apiKey = '47e55505';
    // OMDB API URL for the movie with ID 'tt3896198'
    const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;

    useEffect(() => {
        // Fetch movie data from OMDB API
        const fetchMovieData = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                
                if (data.Response === "True") {
                    setMovie(data);
                } else {
                    setError('Movie not found!');
                }
            } catch (error) {
                setError('Error fetching movie data.');
                console.error(error);
            }
        };

        fetchMovieData();
    }, [apiUrl]);

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-container">
            <img src={movie.Poster} alt={movie.Title} />
            <h2 className="movie-title">{movie.Title}</h2>
            <p className="movie-info"><strong>Year:</strong> {movie.Year}</p>
            <p className="movie-info"><strong>Genre:</strong> {movie.Genre}</p>
            <p className="movie-info"><strong>Director:</strong> {movie.Director}</p>
            <p className="movie-info"><strong>Plot:</strong> {movie.Plot}</p>
            <p className="movie-info"><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        </div>
    );
};

export default Movie;
