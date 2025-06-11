import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const MainDiv = styled.div`
    display: flex;
    width: 100vw;
    box-sizing: border-box;
`;

export const LeftMenu = styled.div`
    height: 100vh;
    display: flex;
    padding-left: 1.3rem;
    padding-top: 2rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    color: #F9FBFF;box-sizing: border-box;
    top: 0;
    left: 0;overflow-x: hidden;
    overflow-y: hidden;
`;

export const MenuItem = styled.button<{ active?: boolean }>`
    display: flex;
    height: 2.1875rem;
    align-items: center;
    border-radius: 0.3125rem;
    gap: 0.75rem;
    background: none;
    background-color: ${({ active }) => (active ? '#CC6237' : '#F9FBFF')};
    border: none;
    color: ${({ active }) => (active ? '#fff' : '#000')};
    padding: 0.75rem 0.8rem;
    text-align: left;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 0.9375rem;
    cursor: pointer;
    transition: color 0.3s;
    font-family: Roboto, sans-serif;

    &:hover {
        color: #fff;
        background-color: #CC6237;
    }
`;

export const IconWrapper = styled.span`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
`;

export const Label = styled.span`
    flex: 1;
`;

export const Line = styled.hr`
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 1rem 0;
`;

export const VerticalLine = styled.hr`
  border: none;
  height: 100vh;
  width: 1px;
  background-color: #ccc;
  margin-left: 1rem;
  margin-top: 0;
`;

export const ImageContainer = styled.div`
    height: 2.5rem;
    width: 2.5rem;
    margin-left: 0.3rem;
    margin-bottom: 0.2rem;
    border: 1px solid #CC6237;
    border-radius: 1rem;

    img {
        width: 38px;
        height: 38px;
        border-radius: 1rem;
    }
`;

export const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    color: #000;
    
    span {
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 0.9375rem;
    }

    a {
        font-size: 0.6875rem;
        font-weight: 400;
        line-height: 0.9375rem;
        color: gray;
    }
`;

export const RightMenu = styled.div`
    flex: 1;
    background-color: #F8F8F8;
    margin: 0;
    padding: 2rem;

    span {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.4375rem;
        color: #000;
    }

    h3 {
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 1.4375rem;
        color: #CC6237E5;
    }
`;

export const TableDiv = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #09428F2B;
    border-radius: 1rem;
    min-height: 10rem;
    background-color: #fff;
`;

export const PaginationDiv = styled.div`
    display: flex; 
    justify-content: end;
    align-items: end;
    padding: 1rem;
    gap: 0.5rem;
`;

export const ButtonPages = styled.button<{ active?: boolean; primary?: boolean }>`
    border-radius: 12.5rem;
    border: none;
    cursor: pointer;
    height: 2.1875rem;
    width: 2.1875rem;
    background-color: ${({ active, primary }) =>
    primary || active ? '#d76036' : '#f5f5f5'};
    color: ${({ active, primary }) =>
    primary || active ? '#fff' : '#000'};
    font-weight: 400;
    font-size: 0.75rem;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${({ active, primary }) =>
        primary || active ? '#c94f28' : '#e0e0e0'};
    }
`;

export const ButtonNext = styled.button<{ active?: boolean; primary?: boolean }>`
    padding: 8px 16px;
    border-radius: 10rem;
    border: none;
    cursor: pointer;
    height: 2.1875rem;
    width: 4.8125rem;
    background-color: ${({ active, primary }) =>
    primary || active ? '#d76036' : '#f5f5f5'};
    color: ${({ active, primary }) =>
    primary || active ? '#fff' : '#000'};
    font-size: 0.75rem;
    font-weight: 400;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${({ active, primary }) =>
        primary || active ? '#c94f28' : '#e0e0e0'};
    }
`;

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    gap: 0.5rem;
    padding-top: 1rem;
    padding-right: 1rem;
`;

export const SearchInput = styled.input`
    padding: 0.5rem 1rem 0.5rem 2rem;
    border-radius: 10rem;
    border: none;
    background-color: #f5f5f5;
    font-size: 0.75rem;
    color: #000;

    &::placeholder {
        color: #b0b0b0;
    }
`;

export const SearchIcon = styled(FiSearch)`
    position: absolute;
    margin-left: 0.75rem;
    margin-top: 0.4rem;
    color: #b0b0b0;
    pointer-events: none;
`;

export const InsertButton = styled(ButtonNext)`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    width: auto;
    font-weight: 500;
    margin-right: 1rem;
    svg {
        font-size: 1rem;
    }
`;