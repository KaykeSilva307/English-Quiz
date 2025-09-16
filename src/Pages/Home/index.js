import { Link } from "react-router-dom";
import './style.css'

function Home() {
  return (
    <>
      <div className='bemvindoSection'>
        <h2 className='bemvindoText'>Seja bem-vindo</h2>
        <p>Desenvolvemos esse quiz para avaliar seu nível de conhecimento no inglês <br/></p>
        <p>com diversas perguntar sobre Simple Present, Simple Past, Present Continuous e Simple Future.</p>
      </div>

      <div>
        <ul>
          <li><Link to='/quiz' className="startquiz-btn" ><button className="text-btn">Start Quiz</button></Link></li>
          <li><Link to='/gramatica' className="gramatica-btn"><button>Gramática</button></Link></li>
          <li><Link to='/tentativa' className="tentativa-btn"><button>Tentativa</button></Link></li>
          <li><Link to='/criadores' className="criadores-btn"><button>Criadores</button></Link></li>
          
        </ul>
      </div>
    </>
  )
}


export default Home;