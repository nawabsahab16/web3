import { allOtherPages } from 'contentlayer/generated';

import MdxPage from '../components/MDX';
import siteConfig from "../config/siteConfig"

export default function Page({ body, ...meta }) {
  const frontMatter = {
    ...meta,
    date: meta.date === "Invalid Date" ? null : meta.date,
    created: meta.created === "Invalid Date" ? null : meta.created
  }

  return (
    <MdxPage body={body} frontMatter={frontMatter} />
  );
}

export const getStaticProps = async ({ params }) => {
  // All pages ending with .md in the /data folder are made available in allOtherPages
  // Based on the specified slug, the correct page is selected
  const urlPath = params.slug.join("/");
  const page = allOtherPages.find((p) => p._raw.flattenedPath === urlPath);
  return { props: page };
};

export const getStaticPaths = async () => {
  const paths = allOtherPages.map((page) => {
    // demo => [demo]
    // abc/demo => [abc,demo]
    const parts = page._raw.flattenedPath.split("/");
    return { params: { slug: parts } };
  });

  return {
    paths,
    fallback: false,
  };
};
