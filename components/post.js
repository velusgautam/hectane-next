import Author from './author';

const Post = ({ post, author, index }) => {
  const imgPath = index === 0 ? 'listing' : 'mobile';
  const size = index === 0 ? { width: 682, height: 341 } : {};
  return (
    <div className="post--container">
      <a href={`./blog/${post.route}`} rel="prefetch">
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
            className="post--title-image lazyload"
            {...size}
            data-src={`https://assets.hectane.com/${post.route}/${imgPath}.jpg`}
            alt={post.route}
            loading="lazy"
          />
        </picture>
      </a>
      <div>
        <a
          href={`./blog/${post.route}`}
          className="post--header"
          rel="prefetch"
        >
          <h3 className="post--title">{post.title}</h3>
          <p className="post--subTitle">{post.subTitle}</p>
        </a>

        <Author
          name={author.name}
          avathar={author.avathar}
          createdDate={post.createdDate}
        />
      </div>
    </div>
  );
};

export default Post;
