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

export const MovieContainer = () => (
    <>
        <MovieImage src={poster} alt="" />
        <MovieContent>
            <Header>
                Mulan
            </Header>
            <Subtitle>
                2020
            </Subtitle>
            <Data>
                <DateProduction>
                    Production: China, United States of America
                </DateProduction>
                <DateRelease>
                    Realese date: 24.10.2020
                </DateRelease>
            </Data>
            <Tags>
                <Tag>Action</Tag>
                <Tag>Adventure</Tag>
                <Tag>Drama</Tag>
            </Tags>
            <Rate>
                <Star />
            </Rate>
            <Description>
                Movie description
            </Description>
        </MovieContent>
    </>
)