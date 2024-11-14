import { useSelector } from "react-redux"
import { selectMoviesDetails, selectMoviesState, selectSearchedMovies } from "../../features/movies/movieSlice"
import { Container, Image, MainPageContainer, MainPageMovie, Rate, RateContainer, Star, TextWrapper, Title, Votes } from "./styled"
import { useEffect } from "react"
import { getMoviesDetails } from "../../features/movies/fetchData"

export const SearchingContainer = () => {
    const searchedMovies = useSelector(selectSearchedMovies)

    console.log(searchedMovies)


    return (
        <>
            <MainPageContainer>
                {searchedMovies.map(movie =>
                    <MainPageMovie
                        key={movie.id}
                    // to={`/movies/${movie.id}`}
                    >
                        <Image
                            key={movie.id}
                            src={`https://image.tmdb.org/t/p/h632/${movie.backdrop_path}`} alt="Poster"
                        />
                        <TextWrapper>
                            <Container>
                                <Title>
                                    {movie.original_title}
                                </Title>
                                {/* <Year>{formatYear(movie.release_date)}</Year>
                                <GenresContainer>
                                    {movie.genre_ids.map((id) =>
                                        <GenreTag key={id}>
                                            {movieGenres.find((genreId) =>
                                                genreId.id === id).name}
                                        </GenreTag>
                                    )}
                                </GenresContainer> */}
                            </Container>
                            <RateContainer>
                                <Star />
                                <Rate></Rate>
                                <Votes> votes</Votes>
                            </RateContainer>
                        </TextWrapper>
                    </MainPageMovie>
                )}
            </MainPageContainer>
        </>
    )

}

