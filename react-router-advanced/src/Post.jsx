import React from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const { postId } = useParams();

  return (
    <div>
      <h2>Post ID: {postId}</h2>
      {/* Fetch and display post details based on postId */}
    </div>
  );
}

export default Post;
