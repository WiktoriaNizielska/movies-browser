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
import poster from "../../images/poster.jpg"

export const MovieContainer = ({
    movieTitle,
    movieYear,
    tag,
    movieDescription,
    movieProduction,
    movieRelease
}) => (
    <>
        <MovieImage src={poster} alt="" />
        <MovieContent>
            <Header>
                {movieTitle}
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
            </Rate>
            <Description>
                {movieDescription}
            </Description>
        </MovieContent>
    </>
)