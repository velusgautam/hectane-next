const keywords = {
  '<script>': '&lt;&#115;&#99;&#114;&#105;&#112;&#116;&gt;',
  '</script>': '&lt;&sol;&#115;&#99;&#114;&#105;&#112;&#116;&gt;',
  fuck: '***',
  porn: '***',
  motherfucker: '***',
};

export const sanitize = (text) => {
  Object.keys(keywords).forEach((key) => {
    const re = new RegExp(key, 'ig');
    text = text.replace(re, keywords[key]);
  });
  return text;
};
