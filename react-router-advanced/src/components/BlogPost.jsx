import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Blog Post ID: {id}</h1>
      {/* You can fetch and display post data here based on the ID */}
      <p>This is where the blog post content would go.</p>
    </div>
  );
};

export default BlogPost;
