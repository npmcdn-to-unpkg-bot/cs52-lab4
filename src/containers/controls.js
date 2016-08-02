import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

const Controls = (props) => {
  return (
    <div>
      <button onClick={props.decrement} className="btn btn-warning">-</button>
      <button onClick={props.deletePost} className="btn btn-info">Delete Post</button>
    </div>
  );
};


// react-redux glue -- outputs Container that knows how to call actions
export default connect(null, actions)(Controls);
