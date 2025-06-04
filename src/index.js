import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document)

root.render(
  <StrictMode>
    <h1>Hello World</h1>
  </StrictMode>
)

const script = document.createElement('script')
document.body.appendChild(script)

const nextjsPortal = document.createElement('nextjs-portal')
const shadowRoot = nextjsPortal.attachShadow({ mode: 'open' })
script.appendChild(nextjsPortal)
