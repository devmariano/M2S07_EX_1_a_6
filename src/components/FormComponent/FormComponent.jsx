import React, { useState } from 'react';

const listUsers = [];

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
        nickname,
        idade,
        email,
        senha,
      };
      //console.log(newUser);
      //console.log(listUsers[1]);
      listUsers.push(newUser);
      listUsers.forEach(function(user) {
        console.log(user);
      })
      
      

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

  return (
    <div className="container">
      <div className="mb-3 mt-5">
      <span className='h3'>Cadastre um novo usuário</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nickname:</label>
          <input type="text" className="form-control" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Idade:</label>
          <input type="number" className="form-control" value={idade} onChange={(e) => setIdade(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Senha:</label>
          <input type="password" className="form-control" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default FormComponent;