import './login.css';
import image from '../../../assets/body_image.svg';
import {Link} from 'react-router-dom'

function Body() {
    return (
        <body className="mainBody">
            <div className="contentDiv">
                <div className="imageContainer">
                    <img src={image} alt="bodyimage"/>
                </div>
                <div className="inputsContainer">
                    <h1>Acessar meus dados</h1>
                    <h2>Qual o seu E-mail?</h2>
                        <input type="text"
                                id="email"
                                className="largeInput"
                                placeholder="Seu E-mail"/>
                        <div className="divButtonLogin">
                            <Link to='/dashboard'>
                                <button type="button">Acessar</button>
                            </Link>
                            <Link to='/'>
                                <a>Ainda não é cadastrado? Clique aqui!</a>
                            </Link>
                        </div>
                </div>
            </div>
        </body>
    );
};

export default Body;