import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
    console.log('this is the time to fetch data');
  }

  render() {
    return (
    <div>List of blog posts</div>
    <button>New Post</button>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
