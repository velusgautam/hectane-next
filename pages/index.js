import React from 'react';
import Head from 'next/head';
import { fetcher } from '../utils/api';
import Router from 'next/router';

import Layout from '../layouts/main.layout';
import Post from '../components/post';

//Binding events.
Router.events.on('routeChangeStart', () => {
  console.log('START'); //NProgress.start()
});
Router.events.on('routeChangeComplete', () => {
  console.log('END'); //NProgress.start()
});
Router.events.on('routeChangeError', () => {
  console.log('ERROR'); //NProgress.start()
});

function Home({ posts }) {
  return (
    <Layout>
      <div className="container margin-auto padding-left20 padding-right20">
        <Head>
          <title>Hectane | Home Page</title>
          <link rel="icon" href="/favicon.png" />
          <meta
            name="description"
            content="Hectane is a simple blog covering experiences from its authors. It
    now covers areas like Technology, Interviews, Travelogue and Learnings. I
    Velu S Gautam (Core Developer) of the blog invite contributions from others
    with similar experiences. The below topics are the top 10 in the page now. "
          />
        </Head>
        <main className="listing--container">
          {posts.map((post, index) => (
            <Post
              post={post}
              author={post.author}
              key={post.route}
              index={index}
            />
          ))}
        </main>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  let posts = await fetcher(`posts/limit/7`);
  if (posts && Array.isArray(posts)) {
    posts = await Promise.all(
      posts.map(async (post) => {
        const author = await fetcher(`users/${post.authorId}`);
        return { ...post, author };
      })
    );
  }

  return { props: { posts } };
};

export default Home;
