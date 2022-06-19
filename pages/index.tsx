import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { breakpoints } from "../styles/constants";
import { randColor } from "../styles/util";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  /* background-color: papayawhip; */
`;

const OuterContainer = styled.div`
  /* border: 1px solid green; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 410px;
  width: 360px;

  @media only screen and (min-width: ${breakpoints.sm}px) {
    height: 550px;
    width: 500px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 360px;
  width: 360px;
  /* background-color: gainsboro; */
  /* border: 1px solid lightgray; */

  @media only screen and (min-width: ${breakpoints.sm}px) {
    height: 500px;
    width: 500px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 50%;

  /* border: 1px solid red; */

  :hover {
    background-color: ${() => randColor()};
    border-radius: 50%;
  }
`;

const LinkArea = styled.div`
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;

  span {
    font-size: 0.8rem;
    color: lightgray;
    letter-spacing: 0.5px;
  }
`;

const ContactWrapper = styled.div`
  /* background-color: blueviolet; */
  position: absolute;
  height: 1rem;
  width: 1rem;
  bottom: 0;
  right: 0;
  font-size: 1rem;

  :hover {
    background-color: ${() => randColor()};
    border-radius: 50%;
  }
`;

const Home: NextPage = () => {
  return (
    <Wrapper>
      <OuterContainer>
        <Container>
          <IconWrapper>
            <Link href="/photos" aria-label="Photos">
              <LinkArea>
                📷
                <span>Photos</span>
              </LinkArea>
            </Link>
          </IconWrapper>

          <IconWrapper>
            <a
              href="https://drive.google.com/file/d/18Y6sRCaP1Ko85R_HX_CHBskTGEMK-FvZ/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <LinkArea>
                👁️
                <span>Portfolio (PDF)</span>
              </LinkArea>
            </a>
          </IconWrapper>

          <IconWrapper aria-label="Instagram">
            <a
              href="https://www.instagram.com/bu8ki"
              target="_blank"
              rel="noreferrer"
            >
              <LinkArea>
                🐷
                <span>Instagram</span>
              </LinkArea>
            </a>
          </IconWrapper>

          <IconWrapper aria-label="Instagram">
            <a
              href="https://www.instagram.com/tete_a_tet.e"
              target="_blank"
              rel="noreferrer"
            >
              <LinkArea>
                🐝
                <span>Instagram</span>
              </LinkArea>
            </a>
          </IconWrapper>
        </Container>

        <ContactWrapper>
          <a href="mailto:sandrosulab@gmail.com" aria-label="Sandro's email">
            @
          </a>
        </ContactWrapper>
      </OuterContainer>
    </Wrapper>
  );
};

export default Home;
