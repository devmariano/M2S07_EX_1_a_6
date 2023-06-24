import React, { useState } from 'react';

const SearchComponent = ({ users }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (event) => {
    event.preventDefault();

    const foundUser = users.find(
      (user) =>
        user.nickname.toLowerCase() === searchQuery.toLowerCase() ||
        user.email.toLowerCase() === searchQuery.toLowerCase()
    );

    setSearchResult(foundUser);
    setSearchQuery('');
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="mb-3">
          <h3>Pesquisar usuário pelo Nickname:</h3>
          <input
          placeholder='insira o nickname aqui'
            type="text"
            className="form-control"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Pesquisar
        </button>
      </form>
      {searchResult ? (
        <div className="mt-4">
          <h3>Resultado da pesquisa:</h3>
          <p>Nickname: {searchResult.nickname}</p>
          <p>Idade: {searchResult.idade}</p>
          <p>Email: {searchResult.email}</p>
          <p>Senha: {searchResult.senha}</p>
        </div>
      ) : (
        <p className="mt-4">Cadastro não encontrado.</p>
      )}
    </div>
  );
};

export default SearchComponent;