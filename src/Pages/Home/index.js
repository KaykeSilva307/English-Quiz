import { Link } from "react-router-dom";
import './home.css';
import imgPlay from '../../Assets/play-button.png'

function Home() {
  return (
    <>
      <main>
        <section>
          <div className="linha"></div>
          <div className='divBemvindo'> 
            <h2 className='bemvindoText'>Seja bem-vindo</h2>
            <p>Desenvolvemos esse quiz para avaliar seu nível de conhecimento no inglês com diversas perguntar sobre Simple Present, Simple Past, Present Continuous e Simple Future.<br /></p>
          </div>
          <div className="divBotoes">
            
            <h2 className="comeceJa">Comece já</h2>
            <ul >
              <li><Link to='/quiz' ><button className="startquiz-btn"> 
                <svg className="startIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-icon lucide-play"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg>
                 Start Quiz</button></Link></li>
              <li><Link to='/gramatica' ><button className="gramatica-btn">
                <svg className="gramaticaIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notebook-icon lucide-notebook"><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M16 2v20"/></svg>
                Gramática</button></Link></li>
              <li><Link to='/criadores' ><button className="criadores-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-icon lucide-circle-user"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>
                Criadores</button></Link></li>
            </ul>
            
          </div>
        </section>
        
      </main>

    </>
  )
}


export default Home;