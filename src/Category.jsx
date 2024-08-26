import React, { useState } from 'react';
import './Movie.css';

const Category = () => {
    const [category, setCategory] = useState('Action');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    const apiKey = '47e55505';

    const categories = [
        'Action',
        'Adventure',
        'Animation',
        'Biography',
        'Comedy',
        'Crime',
        'Documentary',
        'Drama',
        'Family',
        'Fantasy',
        'Film-Noir',
        'History',
        'Horror',
        'Music',
        'Musical',
        'Mystery',
        'Romance',
        'Science Fiction',
        'Sport',
        'Thriller',
        'War',
        'Western',
    ];

    const handleCategoryChange = async (selectedCategory) => {
        setCategory(selectedCategory);
        fetchMoviesByCategory(selectedCategory);
    };

    const fetchMoviesByCategory = async (selectedCategory) => {
        setError(null);

        const apiUrl = `https://www.omdbapi.com/?s=${encodeURIComponent(selectedCategory)}&type=movie&apikey=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            
            if (data.Response === "True") {
                setMovies(data.Search);
            } else {
                setError('No movies found in this category!');
                setMovies([]);
            }
        } catch (error) {
            setError('Error fetching movies.');
            setMovies([]);
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Movie Categories</h1>
            <div className="category-selection">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={category === cat ? 'active-category' : ''}
                        onClick={() => handleCategoryChange(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {error && <div className="error-message">{error}</div>}

            <div className="movie-list">
                {movies.map((movie) => (
                    <div key={movie.imdbID} className="movie-container">
                        <img src={movie.Poster} alt={movie.Title} />
                        <h2 className="movie-title">{movie.Title}</h2>
                        <p className="movie-info"><strong>Year:</strong> {movie.Year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
