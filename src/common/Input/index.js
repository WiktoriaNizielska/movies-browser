import { useLocation } from "react-router-dom/cjs/react-router-dom"
import { Input, Search, SearchContainer } from "./styled"

export const SearchInput = () => {
    const location = useLocation();
    const placeholder = location.pathname.startsWith("/movies")
        ? "Search for movies..."
        : "Search for people...";

    return (
        <SearchContainer>
            <Search />
            <Input
                placeholder={placeholder}
            />
        </SearchContainer>
    )
}