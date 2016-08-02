import React, { Component } from 'react';
import { connect } from 'react-redux';
import Marked from 'marked';

import { fetchPost, updatePost, deletePost } from '../actions/index';

// example class based component (smart component)
class Show extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      title: '',
      tags: '',
      content: '',
      isEditingTitle: false,
      isEditingTags: false,
      isEditingContent: false,
    };

    // bindings...
    this.changeTitle = this.changeTitle.bind(this);
    this.changeTags = this.changeTags.bind(this);
    this.changeContent = this.changeContent.bind(this);
    this.setEditing = this.setEditing.bind(this);
    this.unsetEditing = this.unsetEditing.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.post.title,
      tags: nextProps.post.tags,
      content: nextProps.post.content,
    });
  }

  setEditing(item) {
    console.log(item);
    this.setState({
      [item]: true,
    });
    console.log(this.state);
  }

  unsetEditing(item) {
    this.setState({
      [item]: false,
    });
    this.updatePost();
  }

  changeTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  changeTags(event) {
    this.setState({
      tags: event.target.value,
    });
  }

  changeContent(event) {
    this.setState({
      content: event.target.value,
    });
  }
  updatePost() {
    this.props.updatePost({ title: this.state.title, tags: this.state.tags, content: this.state.content, id: this.props.params.id });
  }

  deletePost() {
    this.props.deletePost(this.props.params.id);
  }

  markItUp() {
    return { __html: Marked(this.state.content) };
  }

  render() {
    let title, tags, content;

    if (this.state.isEditingTitle) {
      title = (
        <input onChange={this.changeTitle} value={this.state.title} onBlur={() => this.unsetEditing('isEditingTitle')} autoFocus />
      );
    } else {
      title = (
        <div onClick={() => this.setEditing('isEditingTitle')}>
          {this.state.title}
        </div>
      );
    }

    if (this.state.isEditingTags) {
      tags = (
        <input onChange={this.changeTags} value={this.state.tags} onBlur={() => this.unsetEditing('isEditingTags')} autoFocus />
      );
    } else {
      tags = (
        <div onClick={() => this.setEditing('isEditingTags')}>
          {this.state.tags}
        </div>
      );
    }

    if (this.state.isEditingContent) {
      content = (
        <textarea onChange={this.changeContent} value={this.state.content} onBlur={() => this.unsetEditing('isEditingContent')} autoFocus />
      );
    } else {
      content = (
        <div onClick={() => this.setEditing('isEditingContent')}>
          <div dangerouslySetInnerHTML={this.markItUp()} ></div>
        </div>
      );
    }

    return (
      <div>
        <div className="show-container">
          <div className="title-container">
            {title}
          </div>
        {tags}
          <div className="content-container">
            {content}
          </div>

          <button className="delete-button" onClick={this.deletePost}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    post: state.posts.post,
  }
);

export default connect(mapStateToProps, { fetchPost, updatePost, deletePost })(Show);
