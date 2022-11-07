import React, { useEffect, useState, useRef } from 'react';

import { Card } from '../components/Card';

const API_KEY = process.env.API_KEY;
const url = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`;

const fetchMovies = async movie => {
  const res = await fetch(`${url}&s=${movie}`);
  const { Search } = await res.json();
  return Search;
};

export const List = () => {
  const inputRef = useRef();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();

    const inputValue = inputRef.current;

    if (!inputValue.value.trim()) return;

    setLoading(true);
    try {
      const data = await fetchMovies(inputValue.value);
      setMovies(data);
      setLoading(false);
    } catch ({ message }) {
      console.log('error', message);
      setLoading(false);
    }
  };

  useEffect(() => {
    try {
      (async () => {
        const data = await fetchMovies('spider man');
        setMovies(data);
        setLoading(false);
      })();
    } catch ({ message }) {
      console.log('error', message);
      setLoading(false);
    }
  }, []);

  console.log('movies', movies);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 my-2">
          <form onSubmit={handleSubmit} className="my-2">
            <input
              autoFocus
              className="form-control"
              type="text"
              ref={inputRef}
              placeholder="Search a movie..."
            />
          </form>
        </div>

        {loading && (
          <div className="col-12 my-2">
            <p className="alert alert-info mb-0">Cargando...</p>
          </div>
        )}

        {movies?.map(movie => (
          <div className="col-md-4 my-2" key={movie?.imdbID}>
            <Card {...movie} />
          </div>
        ))}

        {!movies?.length && !loading && (
          <div className="col-12">
            <h4 className="text-center alert alert-danger mt-2">
              There are not results
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};
