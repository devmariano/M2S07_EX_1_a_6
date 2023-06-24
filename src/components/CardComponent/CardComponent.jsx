import React, { useState } from 'react';

const CardComponent = ({ user, onSave }) => {
  const [likes, setLikes] = useState(0);
  const [editing, setEditing] = useState(false);
  const [editedNickname, setEditedNickname] = useState(user.nickname);
  const [editedIdade, setEditedIdade] = useState(user.idade);
  const [editedEmail, setEditedEmail] = useState(user.email);
  const [editedSenha, setEditedSenha] = useState(user.senha);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    const editedUser = {
      ...user,
      nickname: editedNickname,
      idade: editedIdade,
      email: editedEmail,
      senha: editedSenha,
    };

    onSave(editedUser); // Chamar a função onSave passando o usuário editado

    setEditing(false);
  };

  return (
    <div className="card text-white bg-secondary mb-2" style={{ maxWidth: '18rem' }}>
      <div className="card-header">
        <h5 className="card-title">
          {editing ? (
            <input
              type="text"
              value={editedNickname}
              onChange={(e) => setEditedNickname(e.target.value)}
            />
          ) : (
            user.nickname
          )}
        </h5>
      </div>
      <div className="card-body">
        <p className="card-text">
          {editing ? (
            <input
              type="number"
              value={editedIdade}
              onChange={(e) => setEditedIdade(e.target.value)}
            />
          ) : (
            `Idade: ${user.idade}`
          )}
        </p>
        <p className="card-text">
          {editing ? (
            <input
              type="email"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
            />
          ) : (
            `Email: ${user.email}`
          )}
        </p>
        <p className="card-text">
          {editing ? (
            <input
              type="password"
              value={editedSenha}
              onChange={(e) => setEditedSenha(e.target.value)}
            />
          ) : (
            `Senha: ${user.senha}`
          )}
        </p>
        <button className="btn btn-success" onClick={handleLike}>
          Dar um like: {likes}
        </button>
        <button className="btn btn-outline-warning m-2" onClick={editing ? handleSave : handleEdit}>
          {editing ? 'Salvar' : 'Editar'}
        </button>
      </div>
    </div>
  );
};

export default CardComponent;