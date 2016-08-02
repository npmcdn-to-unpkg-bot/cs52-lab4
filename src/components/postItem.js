import React from 'react';
import { Link } from 'react-router';

export default function PostItem(props) {
  return (
    <Link to={`posts/${props.postId}`}>
      <div >
        {props.title}
        {props.tags}
      </div>
    </Link>
  );
}
