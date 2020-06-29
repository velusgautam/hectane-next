import Layout from '../layouts/main.layout';
import { fetcher } from '../utils/api';
import Head from 'next/head';

function Technology({ posts }) {
  return (
    <Layout>
      <div className="container margin-auto padding-left20 padding-right20">
        <Head>
          <title>Technology Page</title>
          <link rel="icon" href="/favicon.png" />
          <meta
            name="description"
            content="Technology page of hectane covers techical projects and small ideas related to technology"
          />
        </Head>
        <main className="listing--container">
          {posts.map((post) => (
            <Post post={post} author={post.author} key={post.route} />
          ))}
        </main>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  let posts = await fetcher(`posts/technology/7`);
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

export default Technology;
