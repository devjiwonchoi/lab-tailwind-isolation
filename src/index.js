import { StrictMode, startTransition } from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document)

root.render(
  <StrictMode>
    {/* This should'nt be red */}
    <h1 className="text-red-500">Hello World</h1>
  </StrictMode>
)

registerDevTools()

function registerDevTools() {
  const script = document.createElement('script')

  script.style.display = 'block'
  script.style.position = 'absolute'
  script.style.top = '50%'
  script.style.left = '50%'
  script.style.transform = 'translate(-50%, -50%)'
  script.setAttribute('data-nextjs-dev-overlay', 'true')

  const container = document.createElement('nextjs-portal')
  const shadowRoot = container.attachShadow({ mode: 'open' })
  script.appendChild(container)

  document.body.appendChild(script)

  const devToolsRoot = createRoot(shadowRoot, {
    identifierPrefix: 'ndt-',
  })

  appendTailwind(shadowRoot).then(() => {
    devToolsRoot.render(<DevTools />)
  })
}

function DevTools() {
  return <h1 className="text-red-500 text-4xl">dev overlay</h1>
}

async function appendTailwind(shadowRoot) {
  const response = await fetch('/output.css')
  const cssText = await response.text()

  const styleElement = document.createElement('style')
  styleElement.textContent = cssText
  shadowRoot.appendChild(styleElement)
}
