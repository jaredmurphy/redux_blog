import React, { Component } from 'react';

class PostsIndex extends Component {
  componentWillMount() {
    console.log('this is the time to fetch data');
  }

  render() {
    return (
    <div>List of blog posts</div>
    );
  }
}

export default PostsIndex;
