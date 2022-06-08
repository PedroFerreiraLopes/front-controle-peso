import './dashboard.css';
import scales from '../../../assets/scales.svg';
import pointer from '../../../assets/up_pointer.svg';
import {Link} from 'react-router-dom'

const blueColor = {
    backColor: 'background-color:yellow'
};

function Body() {
    return (
        <body className="mainBody">
            <div className="sectionDiv">
            <h1>Monitoramento</h1>
                <div className='dashContentDiv'>
                    <div className='circles'>
                        <div className='circle' style={{'background-color':'#F3ED5E'}}>
                            <h5>Peso Inicial</h5>
                            <h6>50.0kg</h6>
                            <h4>01/02/22</h4>
                        </div>
                        <div className='circle' style={{'background-color':'#6AE468'}}>
                            <h5>Peso Atual</h5>
                            <h6>50.0kg</h6>
                            <h4>01/02/22</h4>
                        </div>
                        <div className='circle' style={{'background-color':'#68C6E4'}}>
                            <h5>Peso a alcançar</h5>
                            <h6>50.0kg</h6>
                            <h4>01/02/22</h4>
                        </div>
                    </div>
                    <div className='balancaPretaDiv'>
                        <img src={scales} alt="balanca"></img>
                        <div className="weightContainer">
                            <h4>Atualizar Peso</h4>
                            <h5>Qual o seu peso hoje?</h5>
                            <div className='weightMeta'>
                                <input type="text"
                                        id="email"
                                        className='weightInput'
                                        placeholder="Seu Peso"/>
                                <button type="button">Atualizar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="sectionDiv">
                <h1>Evolução</h1>
                <div className='dashContentDiv'>
                    <span className='evolutionLabel'>Progresso</span>
                    <div className='progressBarBack'>
                        <div className='progressBar'>
                            <span className='progressPCT'>10%</span>
                        </div>
                    </div>
                    <span className='evolutionLabel'>Tempo</span>
                    <div className='progressBarBack'>
                        <div className='timeBar'>
                            <span className='timePCT'>75%</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="sectionDiv">
                <h1>IMC</h1>
                <div className='dashContentDiv'>
                    <div className='gridIMC'>
                        <span>Abaixo do Peso</span>
                        <span>Peso Ideal</span>
                        <span>Acima do Peso</span>
                        <div className='barIMC' style={{'background-color':'#F3ED5E'}}></div>
                        <div className='barIMC' style={{'background-color':'#6AE468'}}></div>
                        <div className='barIMC' style={{'background-color':'#E46868'}}></div>
                    </div>
                </div>
            </div>


            <div className="sectionDiv">
                <h1>Comparativo</h1>
            </div>


            <div className="sectionDiv">
                <h1>Histórico</h1>
            </div>


        </body>
    );
};

export default Body;