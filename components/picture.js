const Picture = ({
  data: { caption, withBorder, withBackground, stretched, url },
}) => {
  if (url && url.includes('.gif')) {
    return (
      <img
        data-src={`${url.replace(/\.[^/.]+$/, '')}.gif`}
        className={`lazyload ${withBorder ? 'border ' : ''}${
          withBackground ? 'background ' : ''
        }${stretched ? 'stretched' : 'center'}`}
        alt={caption}
        type="image/gif"
      />
    );
  } else {
    return (
      <picture>
        <source
          srcSet={`${url.replace(/\.[^/.]+$/, '')}.webp`}
          type="image/webp"
        />
        <img
          alt={caption}
          className={`lazyload ${withBorder ? 'border ' : ''}${
            withBackground ? 'background ' : ''
          }${stretched ? 'stretched' : 'center'}`}
          data-src={`${url.replace(/\.[^/.]+$/, '')}.jpg`}
        />
      </picture>
    );
  }
};

export default Picture;
