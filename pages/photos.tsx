import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
import SEO from "../components/seo";
import { breakpoints } from "../styles/constants";
import { randColor } from "../styles/util";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Col = styled.div`
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

const PhotosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const IconWrapper = styled.div`
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

const photoFilenames = [
  "01-02",
  "01-03",
  "01-04",
  "01-05",
  "01-06",
  "01-07",
  "01-08",
  "01-09",
  "01-10",
  "01-11",
  "01-12",
  "01-13",
  "01-14",
  "01-15",
  "01-16",
];

const Photos: NextPage = () => {
  return (
    <>
      <SEO pageTitle="Photos" />
      <Wrapper>
        <Col>
          <IconWrapper>
            <Link href="/" aria-label="Home page">
              🏠
            </Link>
          </IconWrapper>

          <PhotosWrapper>
            {photoFilenames.map((name) => (
              <Image
                key={name}
                src={`/photos/${name}.jpg`}
                alt="Picture of the author"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            ))}
          </PhotosWrapper>
        </Col>
      </Wrapper>
    </>
  );
};

export default Photos;
