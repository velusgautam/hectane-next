import Picture from './picture';
import Heading from './heading';
import Code from './code';
import Paragaraph from './paragraph';

const Blocks = ({ type, data, sanitize = true }) => {
  if (type === 'image') {
    return <Picture data={data} />;
  }
  if (type === 'header') {
    return <Heading data={data} />;
  }
  if (type === 'code') {
    return <Code data={data} />;
  }
  if (type === 'paragraph') {
    return <Paragaraph data={data} doSanitize={sanitize} />;
  }
  return null;
};

export default Blocks;
