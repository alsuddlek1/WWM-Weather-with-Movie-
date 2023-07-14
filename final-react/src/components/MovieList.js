import React, { useEffect } from 'react';
import axios from 'axios';
import useMovieStore from '../store/movieStore';

function MovieList() {
    const movieData = useMovieStore((state) => state.movieData)
    const setMovieData = useMovieStore((state) => state.setMovieData)

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/movies/random/')
      .then((res) => {
        setMovieData(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  }, [setMovieData]); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행됨

  return (
    <div>
      {movieData}
    </div>
  );
}

export default MovieList;