import styled from "styled-components"

export const Header = styled.header`
    font-weight: 600;
    padding-bottom: 24px;
    font-size: 36px;
`

export const Subtitle = styled.div`
    padding-bottom: 24px;
    font-size: 22px;
`

export const Data = styled.div`
    padding-bottom: 24px;
    font-weight: 400;
`

export const DataProduction = styled.div``

export const DataRelease = styled.div``

export const Tags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    list-style: none;
    margin: -8px;
`

export const Tag = styled.li`
    background: ${({ theme }) => theme.color.grey};
    padding: 8px 16px;
    font-size: 14px;
    margin: 8px;
    border-radius: 5px;
`