import React, { useState } from 'react';

const HeaderComponent = () => {
    const [username, setUsername] = useState('');

    const handleClick = () => {
        if (!username){
        const userInput = prompt('Digite o seu nome:');
        if (userInput) {
            setUsername(userInput);
        }
    }else{
        setUsername('');
    }
    };

    return (
        <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
            <div class="container">
                <div>
                    {username && <span className="navbar-brand mb-0 h1">Bem-vindo, {username}!</span>}
                </div>
                <div>
                    {username == '' && <button className='btn btn-success' onClick={handleClick}>Insira seu nome</button>}
                    {username !== '' && <button className='btn btn-secondary' onClick={handleClick}>Remova seu nome</button>}
                </div>
            </div>
        </nav>
    );
};

export default HeaderComponent;