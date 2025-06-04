import { StrictMode, startTransition } from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document)

root.render(
  <StrictMode>
    <h1>Hello World</h1>
  </StrictMode>
)

const script = document.createElement('script')

script.style.display = 'block'
script.style.position = 'absolute'
script.setAttribute('data-nextjs-dev-overlay', 'true')

const container = document.createElement('nextjs-portal')
container.attachShadow({ mode: 'open' })
script.appendChild(container)

document.body.appendChild(script)

const devToolsRoot = createRoot(container, {
  identifierPrefix: 'ndt-',
})

devToolsRoot.render(<DevTools />)

function DevTools() {
  return <p>dev overlay</p>
}
