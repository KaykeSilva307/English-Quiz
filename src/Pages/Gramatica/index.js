import React, { useState } from "react";
import "./style.css"; // caso você esteja usando CSS separado

function Gramatica() {
  // estado que guarda qual tempo verbal foi escolhido
  const [tempoSelecionado, setTempoSelecionado] = useState("presente");

  // conteúdo dos tempos verbais
  const temposVerbais = {
    presente: {
      tempoVerbal: "Simple Present",
      colunas: [
        {
          titulo: "Uso",
          explicacao: "Usado para ações habituais e verdades universais."
        },
        {
          titulo: "Formação",
          explicacao: [
            "Afirmativo: She works every day.",
            "Negativo: She does not (doesn't) work every day.",
            "Interrogativo: Does she work every day?"
          ]
        },
        {
          titulo: "Exemplos",
          explicacao: [
            "Ex.: I go to school every day.",
            "Ex.: He drinks coffee in the morning."
          ]
        }
      ]
    },
    passado: {
      tempoVerbal: "Simple Past",
      colunas: [
        {
          titulo: "Uso",
          explicacao: "Usado para ações concluídas no passado."
        },
        {
          titulo: "Formação",
          explicacao: [
            "Afirmativo: They visited Paris in 2019.",
            "Negativo: They did not (didn't) visit Paris in 2019.",
            "Interrogativo: Did they visit Paris in 2019?"
          ]
        },
        {
          titulo: "Exemplos",
          explicacao: [
            "Ex.: She played tennis yesterday.",
            "Ex.: We watched a movie last night."
          ]
        }
      ]
    },
    futuro: {
      tempoVerbal: "Simple Future",
      colunas: [
        {
          titulo: "Uso",
          explicacao: "Usado para ações que irão acontecer."
        },
        {
          titulo: "Formação",
          explicacao: [
            "Afirmativo: I will call you tomorrow.",
            "Negativo: I will not (won't) call you tomorrow.",
            "Interrogativo: Will I call you tomorrow?"
          ]
        },
        {
          titulo: "Exemplos",
          explicacao: [
            "Ex.: They will travel next week.",
            "Ex.: She will start her new job soon."
          ]
        }
      ]
    },
    continuo: {
      tempoVerbal: "Present Continuous",
      colunas: [
        {
          titulo: "Uso",
          explicacao: "Usado para ações que estão acontecendo agora."
        },
        {
          titulo: "Formação",
          explicacao: [
            "Afirmativo: She is studying at the moment.",
            "Negativo: She is not (isn't) studying at the moment.",
            "Interrogativo: Is she studying at the moment?"
          ]
        },
        {
          titulo: "Exemplos",
          explicacao: [
            "Ex.: I am reading a book right now.",
            "Ex.: They are playing football in the park."
          ]
        }
      ]
    }
  };


  return (
    <>
      <p className="boasvindas">
        Bem-vindo à página de Gramática, aqui você poderá ver de forma mais dinâmica cada tempo verbal,
        como eles são estruturados, exemplos e suas formas negativas, positivas e interrogativas.
      </p>

      <div className="container">
        {/* Div com os botões */}
        <div className="tempoVerbal1">
          <button
            className='simplePast-btn'
            onClick={() => setTempoSelecionado("passado")}
          >
            Simple Past
          </button>
          <button
            className='presentContinuous-btn'
            onClick={() => setTempoSelecionado("continuo")}
          >
            Present Continuous
          </button>
          <button
            className='simplePresent-btn'
            onClick={() => setTempoSelecionado("presente")}
          >
            Simple Present
          </button>
          <button
            className='simpleFuture-btn'
            onClick={() => setTempoSelecionado("futuro")}
          >
            Simple Future
          </button>
        </div>

        {/* Div que muda o conteúdo */}
        <div className="tempoVerbal">
          <strong>{temposVerbais[tempoSelecionado].tempoVerbal}</strong>
        </div>

        <div className="divPrincipal">
          <div className="subDivs">
            {temposVerbais[tempoSelecionado].colunas.map((coluna, index) => (
              <div key={index} className="coluna">
                <div className="titulo">{coluna.titulo}</div>
                <div className="explicacao">
                  {Array.isArray(coluna.explicacao)
                    ? coluna.explicacao.map((item, i) => <p key={i}>{item}</p>)
                    : <p>{coluna.explicacao}</p>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gramatica;
