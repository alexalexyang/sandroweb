import {
  Col,
  IconWrapper,
  PhotosWrapper,
  Wrapper,
} from "../styles/shared-styled-comps";

import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
import SEO from "../components/seo";
import { randColor } from "../styles/util";

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
  "02-18",
  "02-19",
  "02-20",
  "02-21",
  "02-22",
  "02-23",
  "02-24",
  "02-25",
  "02-26",
];

const Photos: NextPage = () => {
  return (
    <>
      <SEO pageTitle="Photos" />
      <Wrapper>
        <Col>
          <IconWrapper bgColor={randColor()}>
            <Link href="/" aria-label="Home page">
              <a>🏠</a>
            </Link>
          </IconWrapper>

          <PhotosWrapper>
            {photoFilenames.map((name) => (
              <Image
                key={name}
                src={`/photos/${name}.jpg`}
                alt=""
                width={"694px"}
                height={"595px"}
                layout="responsive"
                tabIndex={0}
              />
            ))}
          </PhotosWrapper>
        </Col>
      </Wrapper>
    </>
  );
};

export default Photos;
