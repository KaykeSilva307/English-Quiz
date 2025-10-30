import { Link } from "react-router-dom";
import './home.css';
import 'boxicons'

function Home() {
  return (
    <>
      <main>
        <section>
          <div className="coluna2">
            <div className='divBemvindo'>
              <h2 className='bemvindoText'>Seja bem-vindo</h2>
              <p>Desenvolvemos esse quiz para avaliar seu nível de conhecimento no inglês com diversas perguntar sobre Simple Present, Simple Past, Present Continuous e Simple Future.<br /></p>
            </div>
          </div>

          <div className="coluna2">
            <div className="divBotoes">
              <h2 className="comeceJa">Comece já</h2>
              <ul >
                <li><Link to='/quiz' ><button className="startquiz-btn"> <box-icon name='pencil' color='#2f3132' ></box-icon>Start Quiz</button></Link></li>
                <li><Link to='/gramatica' ><button className="gramatica-btn"><box-icon name='book-open' color='#2f3132' ></box-icon>Gramática</button></Link></li>
                <li><Link to='/criadores' ><button className="criadores-btn"><box-icon name='group' color='#2f3132' ></box-icon>Criadores</button></Link></li>

              </ul>

            </div>
          </div>

        </section>

      </main>

    </>
  )
}


export default Home;