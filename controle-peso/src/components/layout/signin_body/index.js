import './signin.css';
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
                    <h1>Insira Seus Dados!</h1>
                    <h2>Dados Pessoais</h2>
                        <input type="text"
                                id="nome"
                                className="largeInput"
                                placeholder="Seu Nome"/>
                        <p></p>
                        <input type="text"
                                id="email"
                                className="largeInput"
                                placeholder="E-mail Para Contato"/>
                        <p></p>
                        <div className="divInput">
                            <input type="text"
                                    id="altura"
                                    className="smallInput"
                                    placeholder="Altura (cm)"/>
                            <select className="selection" name="generos" id="generos">
                                <option value="masculino">Masculino</option>
                                <option value="feminino" >Feminino </option>
                                <option value="outro"    >Outro    </option>
                            </select>
                        </div>
                    <h2>Metas</h2>
                        <h3>Peso inicial/atual</h3>
                        <input type="text"
                                id="pesoinicial"
                                className="smallInput"
                                placeholder="Peso em gramas"/>
                        <div className="divLabel">
                            <h3>Peso desejado</h3>
                            <h3>Data para alcançar</h3>
                        </div>
                        <div className="divInput">
                            <input type="text"
                                    id="pesofinal"
                                    className="smallInput"
                                    placeholder="Peso em gramas"/>
                            <input type="date"
                                    id="datafinal"
                                    className="inputDate"/>
                        </div>
                        <div className="divButton">
                            <Link to='/login'>
                                <button type="button">Finalizar</button>
                            </Link>
                            <Link to='/login'>
                                <a>Já inseriu seus dados? Clique aqui!</a>
                            </Link>
                        </div>
                </div>
            </div>
        </body>
    );
};

export default Body;