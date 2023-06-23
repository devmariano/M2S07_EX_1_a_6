import React from 'react';
import { useState } from 'react';

const CardComponent = ({ user }) => {
const [likes, setLikes] = useState(0);

const handleLike = () => {
    setLikes(likes + 1);
};
  return (
<div className="card text-white bg-secondary mb-2" style={{ maxWidth: '18rem' }}>
      <div class="card-header"><h5 className="card-title">{user.nickname}</h5></div>
      <div className="card-body">
        <p className="card-text">Idade: {user.idade}</p>
        <p className="card-text">Email: {user.email}</p>
        <p className="card-text">Senha: {user.senha}</p>
        <button className="btn btn-success" onClick={handleLike}>Dar um like: {likes}</button>
      </div>
    </div>
  );
};

export default CardComponent;