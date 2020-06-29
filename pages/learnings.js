import Layout from '../layouts/main.layout';
import { fetcher } from '../utils/api';
import Head from 'next/head';
import Post from '../components/post';

const Learnings = ({ posts }) => {
  return (
    <Layout>
      <div className="container margin-auto padding-left20 padding-right20">
        <Head>
          <title>Learnings Page</title>
          <link rel="icon" href="/favicon.png" />
          <meta
            name="description"
            content="Learnings page of hectane covers learnings projects, proof of concepts and small ideas"
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
};

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
export default Learnings;
