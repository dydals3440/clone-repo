import React from 'react';
import Movie from '../../components/Movie';
import { movies } from '../../../public/data/movies';
import useGetPosts from '../../hooks/useGetPosts';

const MainPage = () => {
	const { data, error, isPending } = useGetPosts('popular', 1);

	return (
		<div className='app-container'>
			{data?.results.map((item, idx) => {
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
