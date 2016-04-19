import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

export default ({props}) => {

  return <SyntaxHighlighter language='javascript' stylesheet='docco'>{props}</SyntaxHighlighter>;
}
