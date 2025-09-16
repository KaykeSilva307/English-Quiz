// import { Link } from "react-router-dom";
import '../style.css'

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
          <li><button className="startquiz-btn">Start Quiz</button></li>
          <li><button className="gramatica-btn">Gramática</button></li>
          <li><button className="criadores-btn">Criadores</button></li>
          <li><button className="tentativa-btn">Tentativa</button></li>
        </ul>
      </div>
    </>
  )
}


export default Home;