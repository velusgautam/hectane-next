import { sanitize } from '../utils/utils';

const Paragaraph = ({ data: { text }, doSanitize }) => {
  if (doSanitize === true) {
    text = sanitize(text);
  }
  return <p dangerouslySetInnerHTML={{ __html: text }}></p>;
};

export default Paragaraph;
