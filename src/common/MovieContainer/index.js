import { useParams } from "react-router-dom/cjs/react-router-dom"
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
    movieTitle,
    movieYear,
    tag,
    movieDescription,
    movieProduction,
    movieRelease
}) => {

    const params = useParams()

    console.log(params)

    return (
        <>
            <MovieImage />
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
}