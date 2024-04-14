import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherUsername = "Mayank";

const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'Click me to visit Google',
  anotherUsername
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
