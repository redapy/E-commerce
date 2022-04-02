import styled from "styled-components";

export const Wrapper = styled.div`
  grid-column: 1 / span 8;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const MainImage = styled.div`
  width: 60%;
  img {
    width: 100%;
    height: 60vh;
    object-fit: contain;
  }
`;

export const Thumbnails = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 2rem;
  button {
    padding: 6px 0;
    border: none;
    background-color: inherit;
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 80px;
    object-fit: contain;
  }
`;
