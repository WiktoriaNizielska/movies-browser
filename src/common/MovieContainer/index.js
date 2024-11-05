import {
    Data,
    DateProduction,
    DateRelease, Header,
    Subtitle,
    Tags,
    MovieContent,
    MovieImage,
    Rate,
    Description,
    Star
} from "./styled"

export const MovieContainer = ({
    movieYear,
    movieDescription,
    movieProduction,
    movieRelease,
    title,
    rate,
    voteCount,
    tags,
    src
}) => {
    return (
        <>
            <MovieImage src={src}/>
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
                    {tags}
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