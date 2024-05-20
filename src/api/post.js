import axiosInstance from './axiosInstance';

const getMovies = async (category, pageParams) => {
	const { data } = await axiosInstance.get(
		`/movie/${category}?language=ko-KR&page=${pageParams}`
	);

	// promise <pending>

	return data;
};

export { getMovies };
