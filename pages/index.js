import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { fetcher } from '../utils/api';
import Router from 'next/router';
import NavLink from '../components/link';

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

export default function Home({ slugs, blogRoutes }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav>
          <NavLink href="/technology">Technology</NavLink>
          {blogRoutes.map((slug) => {
            return (
              <>
                <Link href="/blog/[slug]" as={`/blog/${slug}`}>
                  <a>{`${slug}`}</a>
                </Link>{' '}
                |
              </>
            );
          })}
        </nav>
        <h1 className="title">Welcome to Next.js!</h1>
      </main>
      <footer>
        {slugs.map((slug) => {
          return (
            <li key={slug}>
              <Link href="/[slug]" as={`/${slug}`}>
                <a>{slug}</a>
              </Link>
            </li>
          );
        })}
      </footer>
    </div>
  );
}

export const getStaticProps = async () => {
  let slugs = await fetcher(`posts/static/routes`);
  const blogRoutes = await fetcher(`posts/blog/routes`);

  return {
    props: {
      slugs,
      blogRoutes,
    },
  };
};
