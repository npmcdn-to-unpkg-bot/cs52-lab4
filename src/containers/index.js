import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/index';
import PostItem from '../components/postItem';

// example class based component (smart component)
class Index extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    let posts = this.props.all.map((post) => {
      return (
        <PostItem title={post.title} postId={post.id} tags={post.tags} key={post.id} />
      );
    });
    return (
      <div>
        {posts}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    all: state.posts.all,
  }
);

export default connect(mapStateToProps, { fetchPosts })(Index);
