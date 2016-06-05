import React, { Component } from 'react';

class PostsShow extends Component {
  render() {
    return (
      <div>{this.props.post.title}</div>

    );
  }
}

export default PostsShow;
