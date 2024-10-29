import { Votes } from "../../features/movies/movieList/styled"
import {
    Data,
    DateProduction,
    DateRelease, Header,
    Subtitle,
    Tag,
    Tags,
    MovieContent,
    MovieImage,
    Rate,
    Description,
    Star
} from "./styled"

export const MovieContainer = ({
    movieYear,
    tag,
    movieDescription,
    movieProduction,
    movieRelease,
    title,
    rate,
    voteCount
}) => {
    return (
        <>
            <MovieImage />
            <MovieContent>
                <Header>
                    {title}
                </Header>
                <Subtitle>
                    {movieYear}
                </Subtitle>
                <Data>
                    <DateProduction>
                        {movieProduction}
                    </DateProduction>
                    <DateRelease>
                        {movieRelease}
                    </DateRelease>
                </Data>
                <Tags>
                    <Tag>{tag}</Tag>
                    <Tag>{tag}</Tag>
                    <Tag>{tag}</Tag>
                </Tags>
                <Rate>
                    <Star />
                    {rate}{" "}
                    {voteCount}{" "}
                    votes
                </Rate>
                <Description>
                    {movieDescription}
                </Description>
            </MovieContent>
        </>
    )
}