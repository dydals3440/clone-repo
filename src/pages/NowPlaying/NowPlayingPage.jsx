import { useNavigate } from 'react-router-dom';
import Movie from '../../components/Movie';
import { getMoviesData } from '../../hooks/getMoviesData';

const NowPlayingPage = () => {
  const { movies, loading, error } = getMoviesData('now_playing');
  const navigate = useNavigate();

  if (error) {
    return (
      <div>
        <h1>에러가 발생했습니다.</h1>
        <button onClick={() => navigate('/')}>홈 페이지로 이동</button>
      </div>
    );
  }

  if (loading) {
    // 로딩 스피너 구현
    return <div>Loading 중입니다...</div>;
  }

  return (
    <div className='app-container'>
      {movies.map((item, idx) => {
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

export default NowPlayingPage;
