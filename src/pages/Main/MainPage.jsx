import React from 'react';
import Movie from '../../components/Movie';
import { movies } from '../../../public/data/movies';

const MainPage = () => {
  return (
    <div className='app-container'>
      {movies.results.map((item, idx) => {
        return (
          <Movie
            key={idx}
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview={item.overview}
          />
        );
      })}
    </div>
  );
};

export default MainPage;
