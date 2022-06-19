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

const portfolioFilenames = [
  "portf-01",
  "portf-02",
  "portf-03",
  "portf-04",
  "portf-05",
  "portf-06",
  "portf-07",
  "portf-08",
  "portf-09",
  "portf-10",
  "portf-11",
  "portf-12",
  "portf-13",
  "portf-15",
  "portf-16",
  "portf-17",
  "portf-18",
  "portf-19",
  "portf-20",
  "portf-21",
  "portf-22",
  "portf-23",
  "portf-24",
  "portf-25",
  "portf-26",
  "portf-27",
  "portf-28",
  "portf-29",
];

const Portfolio: NextPage = () => {
  return (
    <>
      <SEO pageTitle="Portfolio" />
      <Wrapper>
        <Col>
          <IconWrapper bgColor={randColor()}>
            <Link href="/" aria-label="Home page">
              🏠
            </Link>
          </IconWrapper>

          <PhotosWrapper>
            {portfolioFilenames.map((name) => (
              <Image
                key={name}
                src={`/portfolio/${name}.jpg`}
                alt="Picture of the author"
                width={"1920px"}
                height={"1080px"}
                layout="responsive"
              />
            ))}
          </PhotosWrapper>
        </Col>
      </Wrapper>
    </>
  );
};

export default Portfolio;
