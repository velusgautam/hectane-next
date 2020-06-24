import React from 'react';
import Head from 'next/head';
import { fetcher } from '../../utils/api';

const Post = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <div className="content">
        <h1 className="post--title">{data.title}</h1>
        <h4 className="post--sub-title">{data.subTitle}</h4>
        <picture>
          <source
            srcSet={`https://assets.hectane.com/${data.route}/mobile.webp`}
            media="(max-width: 420px)"
            type="image/webp"
          />
          <source
            srcSet={`https://assets.hectane.com/${data.route}/mobile.jpg`}
            media="(max-width: 420px)"
            type="image/jpg"
          />
          <source
            srcSet={`https://assets.hectane.com/${data.route}/listing.webp`}
            media="( max-width:799px)"
            type="image/webp"
          />
          <source
            srcSet={`https://assets.hectane.com/${data.route}/listing.jpg`}
            media="(max-width:799px)"
            type="image/jpg"
          />
          <source
            srcSet={`https://assets.hectane.com/${data.route}/title.webp`}
            media="(min-width: 800px)"
            type="image/webp"
          />
          <source
            srcSet={`https://assets.hectane.com/${data.route}/title.jpg`}
            media="(min-width: 800px)"
            type="image/jpg"
          />
          <img
            className="post-title-image"
            src={`https://assets.hectane.com/${data.route}/title.jpg`}
            alt={data.title}
          />
        </picture>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ params: { slug } }) => {
  const data = await fetcher(`posts/route/${slug}`);
  return {
    props: {
      data: data,
    },
  };
};

export default Post;
