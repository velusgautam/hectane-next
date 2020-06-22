import React from 'react';
// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
import Head from 'next/head';
// import marked from 'marked';
import fetch from 'node-fetch';

const Post = ({ post, data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <div className="content">
        <h1 className="post--title">{post.title}</h1>
        <h4 className="post--sub-title">{post.subTitle}</h4>
        <picture>
          <source
            srcset={`https://assets.hectane.com/${post.route}/mobile.webp`}
            media="(max-width: 420px)"
            type="image/webp"
          />
          <source
            srcset={`https://assets.hectane.com/${post.route}/mobile.jpg`}
            media="(max-width: 420px)"
            type="image/jpg"
          />
          <source
            srcset={`https://assets.hectane.com/${post.route}/listing.webp`}
            media="( max-width:799px)"
            type="image/webp"
          />
          <source
            srcset={`https://assets.hectane.com/${post.route}/listing.jpg`}
            media="(max-width:799px)"
            type="image/jpg"
          />
          <source
            srcset={`https://assets.hectane.com/${post.route}/title.webp`}
            media="(min-width: 800px)"
            type="image/webp"
          />
          <source
            srcset={`https://assets.hectane.com/${post.route}/title.jpg`}
            media="(min-width: 800px)"
            type="image/jpg"
          />
          <img
            className="post-title-image"
            src={`https://assets.hectane.com/${post.route}/title.jpg`}
            alt={post.title}
          />
        </picture>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  // const files = fs.readdirSync("posts");
  // console.log("files: ", files);
  // const paths = files.map(filename => ({
  //   params: {
  //     slug: filename.replace(".md", "")
  //   }
  // }));
  const paths = [{ params: { slug: 'dial-pad-problem-javascript-interview' } }];
  console.log('paths: ', paths);

  return {
    paths,
    fallback: false,
  };
};

const fetcher = async (url) => fetch(url).then((res) => res.json());

export const getStaticProps = async ({ params: { slug } }) => {
  console.log('slug');
  console.log(slug);
  // const markdownWithMetadata = fs
  //   .readFileSync(path.join("posts", slug + ".md"))
  //   .toString();
  const data = await fetcher(`https://backend.hectane.com/posts/route/${slug}`);
  // const parsedMarkdown = matter(markdownWithMetadata);

  // const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      post: data,
      data: data,
    },
  };
};

// function Blog(post) {
//   return (
//     <div>
//       <Head>
//         <title>{post.title}</title>
//         <meta name="keywords" content={post.tags.join(', ')} />
//         <meta name="description" content={post.subTitle} />

//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:site" content="@_hectane" />
//         <meta name="twitter:creator" content="@velusgautam" />
//         <meta name="twitter:title" content={post.title} />
//         <meta name="twitter:description" content={post.subTitle} />
//         <meta
//           name="twitter:image"
//           content={`https://assets.hectane.com/${post.route}/title.jpg`}
//         />

//         <meta
//           property="og:url"
//           content={`https://hectane.com/blog/${post.route}`}
//         />
//         <meta property="og:type" content="article" />
//         <meta property="og:title" content={post.title} />
//         <meta property="og:description" content={post.subTitle} />
//         <meta
//           property="og:image"
//           content={`https://assets.hectane.com/${post.route}/title.jpg`}
//         />
//       </Head>
//       <div className="content">
//         <h1 className="post--title">{post.title}</h1>
//         <h4 className="post--sub-title">{post.subTitle}</h4>
//         <picture>
//           <source
//             srcset={`https://assets.hectane.com/${post.route}/mobile.webp`}
//             media="(max-width: 420px)"
//             type="image/webp"
//           />
//           <source
//             srcset={`https://assets.hectane.com/${post.route}/mobile.jpg`}
//             media="(max-width: 420px)"
//             type="image/jpg"
//           />
//           <source
//             srcset={`https://assets.hectane.com/${post.route}/listing.webp`}
//             media="( max-width:799px)"
//             type="image/webp"
//           />
//           <source
//             srcset={`https://assets.hectane.com/${post.route}/listing.jpg`}
//             media="(max-width:799px)"
//             type="image/jpg"
//           />
//           <source
//             srcset={`https://assets.hectane.com/${post.route}/title.webp`}
//             media="(min-width: 800px)"
//             type="image/webp"
//           />
//           <source
//             srcset={`https://assets.hectane.com/${post.route}/title.jpg`}
//             media="(min-width: 800px)"
//             type="image/jpg"
//           />
//           <img
//             className="post-title-image"
//             src={`https://assets.hectane.com/${post.route}/title.jpg`}
//             alt={post.title}
//           />
//         </picture>
//       </div>
//     </div>
//   );
// }

export default Post;
