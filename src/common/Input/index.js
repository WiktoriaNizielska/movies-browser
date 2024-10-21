import { Input, Search, SearchContainer } from "./styled"

export const SearchInput = () => {
    return (
        <SearchContainer>
            <Search />
            <Input
                placeholder="Search for movies..."
            />
        </SearchContainer>
    )
}