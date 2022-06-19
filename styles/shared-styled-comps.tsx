import { breakpoints } from "./constants";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 1rem;

  @media only screen and (min-width: ${breakpoints.sm}px) {
    width: ${breakpoints.sm}px;
  }

  @media only screen and (min-width: ${breakpoints.md}px) {
    width: ${breakpoints.md}px;
  }
`;

export const PhotosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const IconWrapper = styled.div<{ bgColor: string }>`
  height: 1rem;
  width: 1rem;
  bottom: 0;
  right: 0;
  font-size: 1rem;

  :hover {
    background-color: ${({ bgColor }) => (bgColor ? bgColor : "lightcyan")};
    border-radius: 50%;
  }
`;
