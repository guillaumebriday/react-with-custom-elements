import React, {Component} from 'react'
import {render} from 'react-dom'

class Comments extends Component {
  render () {
    return <p>
      Loading comments from post {this.props.post}...
      Load nested comments ? => {this.props.nested}
    </p>
  }
}

export default Comments
export { Comments }

const component = document.querySelector('#post-comments')
if (component) {
  const props = {...component.dataset}
  render(<Comments {...props} />, component)
}
