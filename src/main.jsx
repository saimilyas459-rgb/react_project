import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

function Myapp(){
  return (
    <div>
      <h3>Custom App</h3>
    </div>
  )
}

const anotherElement = (
  <a href="http://google.com" target='_blank'>visit to google</a>
)


const reactElement = React.createElement(
  'a',
  {href: 'http://google.com',target:'_blank'},
  'click me to visit google'
)
createRoot(document.getElementById('root')).render(

    reactElement
  
)

