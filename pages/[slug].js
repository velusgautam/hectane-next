import React from 'react';
import Head from 'next/head';
import { fetcher } from '../utils/api';
import Blocks from '../components/blocks';
import Layout from '../layouts/main.layout';

const StaticPosts = ({ post }) => {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
        <meta title="description" content={post.description} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container margin-auto padding-left20 padding-right20">
        {/* <h1 className="post--title">{post.title}</h1> */}
        <h4 className="post--sub-title">{post.subTitle}</h4>
        <div className="post--body">
          {post.body.map(({ type, data }, index) => {
            return (
              <Blocks type={type} data={data} key={index} sanitize={false} />
            );
          })}
        </div>
      </div>
    </Layout>
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
  const post = await fetcher(`posts/route/${slug}`);

  return {
    props: {
      post,
    },
  };
};

export default StaticPosts;
