import './header.css';
import image from '../../../assets/logo.svg';
import {Link} from 'react-router-dom'

/** Implementar rotas & telas de dashboard */

function Header() {
    return (
        <header>
            <div className="divHeader">
                <div className="imageContainer">
                    <Link to='/login'>
                        <img src={image} alt="bodyimage"/>
                    </Link>
                </div>
                <div className="containerLeft">
                    <Link to='/dashboard'>
                        <a className="aData">DashBoard      </a>
                    </Link>
                    <Link to='/config'>
                        <a className="aData">Atualizar Dados</a>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;