import Layout from '../layouts/main.layout';
import { fetcher } from '../utils/api';
import Head from 'next/head';

const Interviews = () => {
  return (
    <Layout>
      <div className="container margin-auto padding-left20 padding-right20">
        <Head>
          <title>Interviews Page</title>
          <link rel="icon" href="/favicon.png" />
          <meta
            name="description"
            content="Interviews page of hectane covers technical interview problems and interview related solutions."
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
  let posts = await fetcher(`posts/interviews/7`);
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

export default Interviews;
