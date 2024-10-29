import { useLocation } from "react-router-dom/cjs/react-router-dom"
import { Input, Search, SearchContainer } from "./styled"

export const SearchInput = () => {
    const location = useLocation();
    let placeholder = ""

    if (location.pathname === "/movies")
        placeholder = "Search for movies..."
    else
        placeholder = "Search for people..."

    return (
        <SearchContainer>
            <Search />
            <Input
                placeholder={placeholder}
            />
        </SearchContainer>
    )
}