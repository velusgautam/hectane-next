import { useRouter } from 'next/router';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Blog() {
  const router = useRouter();
  const { data, error } = useSWR(
    `http://localhost:3200/posts/route/${router.query.slug}`,
    fetcher
  );
  if (error) return <div>Failed to load user</div>;
  if (!data) return <div>Loading...</div>;
  const post = data;
  return (
    <div>
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
