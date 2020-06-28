import { sanitize } from '../utils/utils';

const Paragaraph = ({ data: { text } }) => {
  return <p dangerouslySetInnerHTML={{ __html: sanitize(text) }}></p>;
};

export default Paragaraph;
