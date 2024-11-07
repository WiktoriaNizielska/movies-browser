import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom"
import { Input, Search, SearchContainer } from "./styled"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovieName } from "../../features/movies/movieSlice";

export const SearchInput = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const history = useHistory()
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get("szukaj")

    useEffect(() => {
        dispatch(setMovieName(query))
    }, [dispatch, query])

    const inputMovieName = ({ target }) => {
        if (target.value === "") {
            searchParams.delete("szukaj")
        }
        else {
            searchParams.set("szukaj", target.value)
        }
        history.push(`${location.pathname}?${searchParams.toString()}`)
    }

    const placeholder = location.pathname.startsWith("/movies")
        ? "Search for movies..."
        : "Search for people...";

    return (
        <SearchContainer>
            <Search />
            <Input
                placeholder={placeholder}
                value={query || ""}
                onChange={inputMovieName}
            />
        </SearchContainer>
    )
}