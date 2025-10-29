import './criadores.css'
import imgKayke from '../../Componentes/Pictures/Kayke.jpg';
import imgAnna from '../../Componentes/Pictures/AnnaClara.jpg';
import imgGabriel from '../../Componentes/Pictures/Gabriel.jpg';

function Criadores() {
    return (
        <>
            <main>
                <div className='criadores-container'>
                    <div className='texto'>Bem vindo a área destinada a dar os créditos para os criadores do projeto English Quiz. </div>
                    <div className='criadores'>

                        <div className='kayke'>
                            <img src={imgKayke} alt="Foto de criador Kayke" />
                            <p className='nome'>Kayke Silva</p>
                            <p className='matricula'>Matricula:</p>
                            <p className='matricula-nmr'>06013747</p>
                        </div>
                        <div className='anna'>
                            <img src={imgAnna} alt="Foto de criador Anna Clara" />
                            <p className='nome'>Anna Clara</p>
                            <p className='matricula'>Matricula:</p>
                            <p className='matricula-nmr'>06015283</p>
                        </div>
                        <div className='gabriel'>
                            <img src={imgGabriel} alt="Foto de criador Gabriel" />
                            <p className='nome'>Gabriel Teixeira</p>
                            <p className='matricula'>Matricula:</p>
                            <p className='matricula-nmr'>06013765</p>
                        </div>

                    </div>
                    <div className='agradecimento'> Um agradecimento especial de toda a equipe para todos aqueles que testaram nosso primeiro site, um abraço e nos vemos em breve em outro projeto!!!</div>
                </div>
            </main>


        </>

    )
}

export default Criadores;