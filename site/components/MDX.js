import Head from 'next/head'
import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'
import siteConfig from "../config/siteConfig"
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import { YOUTUBE_REGEX } from "../lib/constants"

const Anchor = dynamic(() => import('./Anchor').then(module => module.Anchor), {
  ssr: false
})

const Paragraph = dynamic(() => import("./Paragraph").then(mod => mod.Paragraph))

const components = {
  Head,
  p: Paragraph,
  a: Anchor
}

export default function MdxPage({ children }) {
  const { Component, frontmatter: {
    title, description, date, keywords, youtube, podcast, image, _raw
  }} = children

  let youtubeThumnbnail

  const youtubeId =
    youtube && YOUTUBE_REGEX.test(youtube) && youtube.split(/^|=|\//).pop();

  if (youtubeId && !image) {
    //  get the youtube thumbnail image from https://img.youtube.com/vi/<youtube-video-id>/maxresdefault.jpg
    youtubeThumnbnail = youtube.replace(
      YOUTUBE_REGEX,
      `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
    );
  }

  const PodcastIcon = siteConfig.social.find((s) => s.name === "Podcast").icon;

  const titleFromUrl = _raw.flattenedPath
    .split("/")
    .pop()
    .replace(/-/g, " ")
    // capitalize first char of each word
    .replace(/(^\w{1})|(\s{1}\w{1})/g, (str) => str.toUpperCase());

  const SeoTitle = title ?? titleFromUrl;
  const imageUrl = image
    ? siteConfig.url + image
    : youtubeThumnbnail ? youtubeThumnbnail : null
  
  // enable editing content only for claims, concepts, and guide for now
  const editUrl = ['claims', 'concepts', 'guide'].includes(_raw.sourceFileDir)
        ? siteConfig.repoRoot + siteConfig.repoEditPath + _raw.sourceFilePath
        : null

  return (
    <>
      <NextSeo
        title={SeoTitle}
        description={description}
        canonical={`${siteConfig.url}/${_raw.flattenedPath}`}
        openGraph={{
          title: SeoTitle,
          description: description,
          url: `${siteConfig.url}/${_raw.flattenedPath}`,
          type: "article",
          article: {
            tags: keywords ? keywords.split(",") : []
          },
          images: imageUrl
            ? ([
                {
                  url: imageUrl,
                  width: 1200,
                  height: 627,
                  alt: title,
                  type: "image/png"
                },
              ])
            : siteConfig.nextSeo.openGraph.images,
        }}
        additionalMetaTags={[
          { name: "keywords", content: keywords ? keywords : "" }
        ]}
      />
      <article className="prose max-w-none dark:prose-invert prose-a:break-all mx-auto p-6 xl:mr-50 xl:pr-10 border-2 border-yellow-500">
        <header>
          <div className="mb-6">
            {title && <h1 className="mb-0">{title}</h1>}
            {date && (
              <p className="text-gray-900 dark:text-gray-500 text-sm pl-2">
                on {date}
              </p>
            )}
            {description && (
              <p className="">{description}</p>
            )}
            {youtubeId && (
              <LiteYouTubeEmbed id={youtubeId} />
            )}
            {podcast && (
              <div className="pt-4">
                <ul className="list-disc">
                  <li>
                    <a className="flex items-center" target="_blank" rel="noopener" href={podcast}>
                      <div className="w-4 mr-2">
                        <PodcastIcon />
                      </div>
                      <p className="m-0">Listen to this podcast</p>
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
          <div className="my-6">
<<<<<<< HEAD
          <Component components={components} />
        </div>
        {editUrl && (
          <div className='mt-12 mb-6'>
            <a className="flex no-underline font-semibold text-yellow-li" href={editUrl} target="_blank">
              Edit this page
              <span className="mx-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
          </div>)}
=======
            <Component components={components} />
          </div>
          {editUrl && (
            <div className='mt-12 mb-6'>
              <a className="flex no-underline font-semibold text-yellow-li" href={editUrl} target="_blank">
                Edit this page
                <span className="mx-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>
            </div>)}
>>>>>>> 34c9b77 ([components/sidebar][f]: layout ajd for sidebar)
        </main>
        {/* <div className="hidden xl:block w-50 fixed inset-0 right-auto overflow-y-auto"> */}
        {/*   <nav> */}
        {/*     <ul> */}
        {/*       <li>Heading 1</li> */}
        {/*       <li>Heading 2</li> */}
        {/*       <li>Heading 3</li> */}
        {/*       <li>Heading 4</li> */}
        {/*       <li>Heading 5</li> */}
        {/*     </ul> */}
        {/*   </nav> */}
        {/* </div> */}
      </article>
    </>
  );
}
