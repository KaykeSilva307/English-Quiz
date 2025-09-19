import { useState } from "react";
import { questoes } from "../../Componentes/Questoes";
import './quiz.css'
import { Link } from "react-router-dom";

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if(option === questoes[current].answer) {
      setScore(score + 1);
    }

    if(current + 1 < questoes.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  }

  if(showResult) {

    return (
      <div className="quiz-container">
        <div className="pergunta">
          <h2>Você acertou {score} de {questoes.length}!</h2>
          <Link className='goBack' to='../'>Go Back</Link>
        </div>
        
      </div>
      
    );
  }


    return (
    <div className="quiz-container">
      <div className="pergunta">
        {/* Div da pergunta */}
        <div>
          <h2>{questoes[current].question}</h2>
        </div>

        {/* Div das respostas */}
        <div className="resposta">
            {questoes[current].options.map((opt, idx) => (
            <div key={idx} className="opcao-container">
              <button
                className="opcoes"
                onClick={() => handleAnswer(opt)}
                >
                {opt}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
);

}


export default Quiz;