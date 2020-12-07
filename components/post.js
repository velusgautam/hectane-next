import Author from './author'
import Link from 'next/link'
import syles from './post.module.css'

const Post = ({ post, author, index }) => {
  const imgPath = index === 0 ? 'listing' : 'mobile'
  // const size = index === 0 ? { width: 682, height: 341 } : {};
  return (
    <div className="post--container">
      <Link href="/blog/[slug]" as={`/blog/${post.route}`}>
        <picture>
          <source
            srcSet={`https://assets.hectane.com/${post.route}/${imgPath}.webp`}
            type="image/webp"
          />
          {index === 0 && (
            <source
              srcSet={`https://assets.hectane.com/${post.route}/mobile.webp`}
              type="image/webp"
            />
          )}
          <source
            srcSet={`https://assets.hectane.com/${post.route}/${imgPath}.jpg`}
            type="image/jpg"
          />
          <img
            className={`${syles['post--title-image']} lazyload`}
            data-src={`https://assets.hectane.com/${post.route}/${imgPath}.jpg`}
            alt={post.route}
            loading="lazy"
          />
        </picture>
      </Link>
      <div>
        <Link href="/blog/[slug]" as={`/blog/${post.route}`}>
          <a className="post--header">
            <h1 className="post--title">{post.title}</h1>
            <p className="post--subTitle">{post.subTitle}</p>
          </a>
        </Link>
        <Author
          name={author.name}
          avathar={author.avathar}
          createdDate={post.createdDate}
        />
      </div>
    </div>
  )
}

export default Post
