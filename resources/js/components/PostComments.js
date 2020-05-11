import {createElement} from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import {Comments} from './Comments'

class PostComments extends HTMLElement {
  connectedCallback () {
    const props = Object.values(this.attributes).map(attribute => [attribute.name, attribute.value])

    render(createElement(Comments, Object.fromEntries(props)), this)
  }

  disconnectedCallback () {
    unmountComponentAtNode(Comments)
  }
}

customElements.define('post-comments', PostComments)

export default PostComments
