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
    movieRelease
}) => {

    return (
        <>
            <MovieImage />
            <MovieContent>
                <Header>
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
}