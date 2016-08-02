import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { createPost } from '../actions/index';

// example class based component (smart component)
class New extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      title: '',
      tags: '',
      content: '',
    };

    this.changeTitle = this.changeTitle.bind(this);
    this.changeTags = this.changeTags.bind(this);
    this.changeContent = this.changeContent.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.cancelSubmit = this.cancelSubmit.bind(this);
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

  submitForm() {
    this.props.createPost({ title: this.state.title, tags: this.state.tags, content: this.state.content });
  }

  cancelSubmit() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
        <h1>
          Create A New Post
        </h1>
        <div>
          Title: <input value={this.state.title} onChange={this.changeTitle} />
        </div>
        <div>
          Tags: <input value={this.state.tags} onChange={this.changeTags} />
        </div>
        <div>
          Content: <textarea value={this.state.content} onChange={this.changeContent} />
        </div>
        <button onClick={this.submitForm}>Submit</button>
        <button onClick={this.cancelSubmit}>Cancel</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    post: state.posts.post,
  }
);

export default connect(mapStateToProps, { createPost })(New);
