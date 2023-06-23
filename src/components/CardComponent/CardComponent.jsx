import React from 'react';

const CardComponent = ({ user }) => {
  return (
<div className="card text-white bg-secondary mb-2" style={{ maxWidth: '18rem' }}>
      <div class="card-header"><h5 className="card-title">{user.nickname}</h5></div>
      <div className="card-body">
        <p className="card-text">Idade: {user.idade}</p>
        <p className="card-text">Email: {user.email}</p>
        <p className="card-text">Senha: {user.senha}</p>
      </div>
    </div>
  );
};

export default CardComponent;