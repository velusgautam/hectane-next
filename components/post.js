import Author from './author';

const Post = ({ post, author }) => {
  return (
    <div className="post--container">
      <a href={`./blog/${post.route}`} rel="prefetch">
        <img
          className="post--title-image"
          src={`https://assets.hectane.com/${post.route}/listing.jpg`}
          alt={post.route}
        />
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
