import styled from "@emotion/styled";
import useSimilarTv from "../useSimilarTv";

const Base = styled.section`
  padding: 11px 15px;
  border-bottom: 1px solid #ededed;
`;

const HeaderWrapper = styled.div``;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 15px;
  row-gap: 24px;
`;

const Link = styled.a`
  text-decoration: none;
`;

const CardContainer = styled.div`
  max-width: 140px;
`;

const PosterWrapper = styled.div`
  width: 140px;
  height: 204px;
  border: 1px solid rgb(234, 233, 232);
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  vertical-align: top;
  object-fit: cover;
`;

const Info = styled.div`
  margin: 5px 10px 0 0;
`;

const CardName = styled.div`
  color: rgb(41, 42, 50);
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const VoteAverage = styled.div`
  margin-top: 2px;
  color: rgb(120, 120, 120);
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface SimilarMovieProps {
  id: number;
  posterPath: string;
  name: string;
  voteAverage: number;
}

const SimilarTv: React.FC<SimilarMovieProps> = ({
  id,
  posterPath,
  name,
  voteAverage,
}) => {
  return (
    <Link href={`/tv/${id}`} target="_blank">
      <CardContainer>
        <PosterWrapper>
          <Poster src={`${process.env.REACT_APP_IMAGE_PREFIX}/${posterPath}`} />
        </PosterWrapper>
        <Info>
          <CardName>{name}</CardName>
          <VoteAverage>{voteAverage}</VoteAverage>
        </Info>
      </CardContainer>
    </Link>
  );
};

interface Props {
  id: string;
}

const Similar: React.FC<Props> = ({ id }) => {
  const { isLoading, data } = useSimilarTv(id);

  return (
    <Base>
      <HeaderWrapper>
        <Header>
          <CardName>비슷한 작품</CardName>
        </Header>
      </HeaderWrapper>
      <ContentsWrapper>
        {isLoading || !data ? (
          <div>Loading...</div>
        ) : (
          data.data.results.map((result) => (
            <SimilarTv
              id={result.id}
              posterPath={result.poster_path}
              name={result.name}
              voteAverage={result.vote_average}
            />
          ))
        )}
      </ContentsWrapper>
    </Base>
  );
};

export default Similar;
