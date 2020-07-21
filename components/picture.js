const Picture = ({
  data: { caption, withBorder, withBackground, stretched, url },
}) => {
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
};

export default Picture;
