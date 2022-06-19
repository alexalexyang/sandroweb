import { NextPage } from "next";
import { NextSeo } from "next-seo";

const appDescription = "The photography and art of Sandro Sulaberidze";
const appName = "Sandro Sulaberidze";
const appUrl = "https://sandrosulaberidze.vercel.app/";

interface Props {
  pageTitle?: string;
  description?: string;
  image?: {
    url: string;
    alt: string;
  };
  imageUrl?: string;
}

const SEO: NextPage<Props> = ({ pageTitle, description, image }) => {
  const title = pageTitle ? `${pageTitle} | ${appName}` : appName;

  const pageDescription = description ?? appDescription;

  let pageUrl;
  if (typeof window !== "undefined") {
    pageUrl = window.location.href ?? appUrl;
  }

  const pageImage = image ?? {
    url: `${appUrl}/photos/01-02.jpg`,
    width: 400,
    height: 400,
    alt: `${appName} logo`,
  };

  return (
    <NextSeo
      title={title}
      description={pageDescription}
      canonical={pageUrl}
      openGraph={{
        url: pageUrl,
        title: title,
        description: pageDescription,
        images: [pageImage],
        site_name: appName,
      }}
      twitter={{
        cardType: "summary",
      }}
      noindex={false}
      nofollow={false}
    />
  );
};

export default SEO;
