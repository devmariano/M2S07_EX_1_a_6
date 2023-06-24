import React, { useState } from 'react';
import CardComponent from '../CardComponent/CardComponent';
import SearchComponent from '../SearchComponent/SearchComponent';

const FormComponent = () => {
  const [nickname, setNickname] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nickname && idade && email && senha) {
      const newUser = {
        id: Date.now(), // Gerar um identificador único para cada usuário
        nickname,
        idade,
        email,
        senha,
      };

      setUsers([...users, newUser]);
      // Limpar os campos após a submissão bem-sucedida
      setNickname('');
      setIdade('');
      setEmail('');
      setSenha('');
      setErrorMessage('');
    } else {
      setErrorMessage('Por favor, preencha todos os campos.');
    }
  };

  const handleSave = (editedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === editedUser.id ? editedUser : user))
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3 mt-5">
            <h3>Cadastre um novo usuário</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nickname:</label>
              <input
                type="text"
                className="form-control"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Idade:</label>
              <input
                type="number"
                className="form-control"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Senha:</label>
              <input
                type="password"
                className="form-control"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Cadastrar
            </button>
          </form>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        
        <div className="col-md-6">
          <div className="row">
            <div className="mb-3 mt-5">
              <h3>Cards dos usuários</h3>
            </div>
            {users.map((user) => (
              <div className="col-md-6 mb-4" key={user.id}>
                <CardComponent user={user} onSave={handleSave} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 ">
          <SearchComponent users={users} />
        </div>
      </div>
    </div>
  );
};

export default FormComponent;