import React from 'react';
import Head from 'next/head';
import { fetcher } from '../utils/api';

const StaticPosts = ({ post, data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <div className="content">
        <h1 className="post--title">{post.title}</h1>
        <h4 className="post--sub-title">{post.subTitle}</h4>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const slugs = await fetcher(`posts/static/routes`);
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const data = await fetcher(`posts/route/${slug}`);

  return {
    props: {
      post: data,
      data: data,
    },
  };
};

export default StaticPosts;
