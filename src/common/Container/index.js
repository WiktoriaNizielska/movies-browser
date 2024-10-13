import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    max-width: 1368px;
    margin: auto;
    padding: 40px 40px 40px ;
    background-color: ${({ theme }) => theme.color.white};
`