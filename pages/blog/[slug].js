import { useRouter } from 'next/router';
import Head from 'next/head';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Blog() {
  const router = useRouter();
  const { data, error } = useSWR(
    `https://backend.hectane.com/posts/route/${router.query.slug}`,
    fetcher
  );
  if (error) return <div>Failed to load user</div>;
  if (!data) return <div>Loading...</div>;
  const post = data;
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta name="description" content={post.subTitle} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_hectane" />
        <meta name="twitter:creator" content="@velusgautam" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.subTitle} />
        <meta
          name="twitter:image"
          content={`https://assets.hectane.com/${post.route}/title.jpg`}
        />

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
    </div>
  );
}
