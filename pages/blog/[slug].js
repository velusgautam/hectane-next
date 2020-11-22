import React from 'react'
import Head from 'next/head'

import { fetcher } from '@/utils/api'
import Blocks from '@/components/blocks'

import Author from '@/components/author'
import PageViews from '@/components/page-views'
import styles from './[slug].module.css'
import Layout from '@/layouts/main.layout'

const Post = ({ post, authorData }) => {
  return (
    <Layout>
      <div className="container margin-auto padding-left20 padding-right20">
        <Head>
          {/* Title */}
          <title>{post.title}</title>
          <meta name="og:title" content={post.title} />

          {/* Description */}
          <meta name="description" content={post.subTitle} />
          <meta name="og:description" content={post.subTitle} />

          {/* Keywords */}
          <meta name="keywords" content={post.tags.join(', ')} />

          {/* General */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="Content-Language" content="en" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@hectane_blog" />
          <meta name="apple-mobile-web-app-title" content="hectane.com" />
          <meta name="twitter:title" content={post.title} />
          <meta name="twitter:description" content={post.subTitle} />
          <meta
            name="twitter:image"
            content={`https://assets.hectane.com/${post.route}/title.jpg`}
          />

          {/* Facebook */}
          <meta
            property="og:url"
            content={`https://hectane.com/blog/${post.route}`}
          />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.subTitle} />
          <meta
            property="og:image"
            content={`https://assets.hectane.com/${post.route}/title.jpg`}
          />

          {/* RSS feed */}
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS Feed for hectane.com"
            href="/feed.xml"
          />

          <link rel="icon" href="/favicon.png" />
        </Head>
        <div className="content">
          <h1 className={styles['post--title']}>{post.title}</h1>
          <h2 className={styles['post--sub-title']}>{post.subTitle}</h2>
          <picture>
            <source
              srcSet={`https://assets.hectane.com/${post.route}/mobile.webp`}
              media="(max-width: 420px)"
              type="image/webp"
            />
            <source
              srcSet={`https://assets.hectane.com/${post.route}/mobile.jpg`}
              media="(max-width: 420px)"
              type="image/jpg"
            />
            <source
              srcSet={`https://assets.hectane.com/${post.route}/listing.webp`}
              media="( max-width:799px)"
              type="image/webp"
            />
            <source
              srcSet={`https://assets.hectane.com/${post.route}/listing.jpg`}
              media="(max-width:799px)"
              type="image/jpg"
            />
            <source
              srcSet={`https://assets.hectane.com/${post.route}/title.webp`}
              media="(min-width: 800px)"
              type="image/webp"
            />
            <source
              srcSet={`https://assets.hectane.com/${post.route}/title.jpg`}
              media="(min-width: 800px)"
              type="image/jpg"
            />
            <img
              className={styles['post--title__image']}
              src={`https://assets.hectane.com/${post.route}/title.jpg`}
              alt={post.title}
              width="1024"
              height="512"
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
          </picture>
          <div className={styles['post--metadata']}>
            <Author
              name={authorData.name}
              avathar={authorData.avathar}
              createdDate={post.createdDate}
            />
            <div className={styles['post__tags']}>
              {post.tags.map(tag => (
                <span className={styles['post__tag']} key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <PageViews id={post._id} />
          </div>

          <div className="post--body">
            {post.body.map(({ type, data }, index) => {
              return <Blocks type={type} data={data} key={index} />
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const slugs = await fetcher(`posts/blog/routes`)
  const paths = slugs.map(slug => ({ params: { slug } }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const post = await fetcher(`posts/route/${slug}`)
  const authorData = await fetcher(`users/${post.authorId}`)

  return {
    props: {
      post,
      authorData
    }
  }
}

export default Post
