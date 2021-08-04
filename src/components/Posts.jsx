import React from 'react';
import likeLuna from '../img/likeLuna.png';
import editPost from '../img/editPost.png';
import deletePost from '../img/deletePost.png';

const Posts = () => {
  const [post, setPost] = React.useState('');
  const [listPost, setListPost] = React.useState([]);

  const savePost = (e) => {
    e.preventDefault();

    if (!post.trim()) {
      return;
    }

    setListPost([
      ...listPost,
      { post }
    ]);

    e.target.reset();
    setPost('');
  };

  return (
    <div className="allPost">
      <hr />
      <div className="newPost">
        <form onSubmit={savePost}>
          <input
            type="text"
            placeholder="Comparte la Sailor Scout que llevas dentro."
            className="form-control mb-3"
            onChange={(e) => setPost(e.target.value)}
            value={post}
          />
          <button className="btn btn-primary">Publicar</button>
        </form>
      </div>
      <hr />
      <div className="list-group">
        <ul className="list-inline">
          {
            listPost.map((item, index) => (
              <li className="list-group-item" key={index}>
                {item.post}
              </li>
            ))
          }
        </ul>
        <img className="like" src={likeLuna} alt="like" />
        <img className="edit" src={editPost} alt="edit" />
        <img className="delete" src={deletePost} alt="delete" />
      </div>
    </div>
  );
};

export default Posts;
