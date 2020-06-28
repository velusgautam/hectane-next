const Picture = ({
  data: { caption, withBorder, withBackground, stretched, url },
}) => {
  return (
    <picture>
      <img
        alt={caption}
        className={`${withBorder ? 'border ' : ''}${
          withBackground ? 'background ' : ''
        }${stretched ? 'stretched' : 'center'}`}
        src={`${url.replace(/\.[^/.]+$/, '')}.jpg`}
      />
    </picture>
  );
};

export default Picture;
