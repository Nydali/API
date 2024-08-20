import React, { useState } from 'react';
import './Movie.css';

const Search = () => {
    const [query, setQuery] = useState('');
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    const apiKey = '47e55505';

    const handleSearch = async () => {
        if (query.trim() === '') {
            setError('Please enter a movie title.');
            return;
        }

        const apiUrl = `https://www.omdbapi.com/?t=${encodeURIComponent(query)}&apikey=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            
            if (data.Response === "True") {
                setMovie(data);
                setError(null);
            } else {
                setError('Movie not found!');
                setMovie(null);
            }
        } catch (error) {
            setError('Error fetching movie data.');
            setMovie(null);
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Search for a Movie</h1>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Enter movie title" 
            />
            <button onClick={handleSearch}>Search</button>

            {error && <div className="error-message">{error}</div>}

            {movie && (
                <div className="movie-container">
                    <img src={movie.Poster} alt={movie.Title} />
                    <h2 className="movie-title">{movie.Title}</h2>
                    <p className="movie-info"><strong>Year:</strong> {movie.Year}</p>
                    <p className="movie-info"><strong>Genre:</strong> {movie.Genre}</p>
                    <p className="movie-info"><strong>Director:</strong> {movie.Director}</p>
                    <p className="movie-info"><strong>Plot:</strong> {movie.Plot}</p>
                    <p className="movie-info"><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
                </div>
            )}
        </div>
    );
};

export default Search;
