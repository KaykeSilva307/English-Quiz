import { Link } from "react-router-dom";
import './home.css'

function Home() {
  return (
    <>
      <div className='bemvindoSection'>
        <h2 className='bemvindoText'>Seja bem-vindo</h2>
        <p>Desenvolvemos esse quiz para avaliar seu nível de conhecimento no inglês com diversas perguntar sobre Simple Present, Simple Past, Present Continuous e Simple Future.<br/></p>
      </div>

      <div>
        <ul className="divBotoes">
          <li><Link to='/quiz' className="startquiz-btn" ><button className="text-btn">Start Quiz</button></Link></li>
          <li><Link to='/gramatica' className="gramatica-btn"><button className="sectext-btn">Gramática</button></Link></li>
          <li><Link to='/criadores' className="criadores-btn"><button className="sectext-btn">Criadores</button></Link></li>

          
        </ul>
      </div>
    </>
  )
}


export default Home;