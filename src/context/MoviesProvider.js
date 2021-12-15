import React, { useState, useEffect } from "react";
import MoviesContext from "./MoviesContext"

function MoviesProvider({children}) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState([]);

  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState({});

  useEffect(() => {
    api.get('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  function handleClickButton(id) {
    setSelectedGenreId(id);
  }

  const contextValue = {
    selectedGenreId,
    setSelectedGenreId,
    genres,
    setGenres,
    movies,
    setMovies,
    selectedGenre,
    setSelectedGenre,
  }

  return (
    <MoviesContext.Provider value ={ contextValue }>
      { children }
    </MoviesContext.Provider>
  )
}

export default MoviesProvider;
