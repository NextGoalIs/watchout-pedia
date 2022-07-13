import styled from "@emotion/styled";
import Card from "../../../components/Card";
import Slider from "../../../components/Slider";
import useUpcomingMovie from "./useUpcomingMovie";

const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

const UpcomingSection: React.FC = () => {
  const { data: upcomingMovieResponse, isLoading } = useUpcomingMovie();

  const getYear = (date: string) => date.split("-")[0] || "";

  return (
    <Base>
      <Title>개봉 예정</Title>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Slider>
          {upcomingMovieResponse?.data?.results.map((movie) => (
            <Card
              key={movie.id}
              linkUrl={`/movie/${movie.id}`}
              title={movie.title}
              posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}${movie.poster_path}`}
              voteAverage={movie.vote_average}
              year={getYear(movie.release_date)}
            />
          ))}
        </Slider>
      )}
    </Base>
  );
};

export default UpcomingSection;
