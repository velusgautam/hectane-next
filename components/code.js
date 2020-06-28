import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';
import scss from 'highlight.js/lib/languages/scss';
import json from 'highlight.js/lib/languages/json';
import css from 'highlight.js/lib/languages/css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('json', json);
hljs.registerLanguage('css', css);

const Code = ({ data: { code } }) => {
  if (code) {
    const result = hljs.highlightAuto(code).value;
    return (
      <pre className="hljs">
        <code dangerouslySetInnerHTML={{ __html: result }}></code>
      </pre>
    );
  }
  return null;
};

export default Code;
