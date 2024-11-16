import {
  Container,
  GenresContainer,
  GenreTag,
  Header,
  Image,
  MainPageContainer,
  MainPageMovie,
  Rate,
  RateContainer,
  Star,
  TextWrapper,
  Title,
  Votes,
  Wrapper,
  Year
} from "./styled";
import { Pagination } from "../../../common/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { startFetch, selectMovies, selectMovieGenres, selectMoviesState } from "../../movies/movieSlice";
import { Loading } from "../../../common/Loading";
import { Error } from "../../../common/Error"
import { SearchingMovieContainer } from "../../../common/SearchingMovieContainer";
import { formatRate, formatYear } from "../../formatFunctions";
import { selectMovieQuery } from "../../../common/SearchingMovieContainer/searchingSlice";
import { selectPage, startPage } from "../../../common/Pagination/paginationSlice";
import { NoResultPage } from "../../../common/NoResultPage";

export const MovieList = () => {
  const dispatch = useDispatch()
  const page = useSelector(selectPage)
  const movies = useSelector(selectMovies)
  const movieGenres = useSelector(selectMovieGenres)
  const movieQuery = useSelector(selectMovieQuery)

  useEffect(() => {
		dispatch(startPage());
	}, [dispatch]);

  useEffect(() => {
    dispatch(startFetch(page))
  }, [dispatch, page])

  const { loading, error } = useSelector(selectMoviesState)

  return (
    <Wrapper>
      {loading ? <Loading /> :
        error ? <Error /> :
          movieQuery === null ?
            <>
              {movies.results ?
                <>
                  <Header>Popular movies</Header>
                  <MainPageContainer>
                    {movies.results.map(movie =>
                      <MainPageMovie
                        key={movie.id}
                        to={`/movies/${movie.id}`}
                      >
                        <Image
                          key={movie.id}
                          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt="Poster"
                        />
                        <TextWrapper>
                          <Container>
                            <Title>
                              {movie.original_title}
                            </Title>
                            <Year>{formatYear(movie.release_date)}</Year>
                            <GenresContainer>
                              {movie.genre_ids.map((id) =>
                                <GenreTag key={id}>
                                  {movieGenres.find((genreId) =>
                                    genreId.id === id).name}
                                </GenreTag>
                              )}
                            </GenresContainer>
                          </Container>
                          <RateContainer>
                            <Star />
                            <Rate>{formatRate(movie.vote_average)}</Rate>
                            <Votes>{movie.vote_count} votes</Votes>
                          </RateContainer>
                        </TextWrapper>
                      </MainPageMovie>
                    )}
                  </MainPageContainer>
                  <Pagination></Pagination>
                </>
                : <NoResultPage />
              }
            </>
            :
            <SearchingMovieContainer />
      }
    </Wrapper>
  );
};