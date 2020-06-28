const Code = ({ data: { code } }) => {
  if (code) {
    return (
      <pre className="hljs">
        <code>{code}</code>
      </pre>
    );
  }
  return null;
};

export default Code;
