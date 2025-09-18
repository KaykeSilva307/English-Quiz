import React, { useState } from "react";
import "./gramatica.css"; // caso você esteja usando CSS separado

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
          explicacao: "O Simple present é usado para ações habituais e verdades universais."
        },
        {
          titulo: "Formação",
          explicacao: [
            "Afirmativa: sujeito + verbo (base) + complemento",
            "Negativa: sujeito + do/does + not + verbo (base) + complemento",
            "Interrogativa: do/does + sujeito + verbo (base) + complemento?"
          ]
        },
        {
          titulo: "Exemplos",
          explicacao: [
            " I drink water",
            " You watch TV",
            " He reads a book",
            " She cooks dinner",
            " It sleeps on the bed",
            " We play chess",
            " They study English"
          ]
        }
      ]
    },
    passado: {
      tempoVerbal: "Simple Past",
      colunas: [
        {
          titulo: "Uso",
          explicacao: "O Simple Past é usado para ações concluídas no passado."
        },
        {
          titulo: "Formação",
          explicacao: [
            "Afirmativa: sujeito + verbo (passado) + complemento",
            "Negativa: sujeito + did + not + verbo (base) + complemento",
            "Interrogativa: did + sujeito + verbo (base) + complemento?"
          ]
        },
        {
          titulo: "Exemplos",
          explicacao: [
            "I visited my friend",
            "You watched a movie",
            "He cleaned the room",
            "She cooked pasta",
            "It rained yesterday",
            "We played cards",
            "They studied history"
          ]
        }
      ]
    },
    futuro: {
      tempoVerbal: "Simple Future",
      colunas: [
        {
          titulo: "Uso",
          explicacao: "O Simple Future é usado para ações que irão acontecer."
        },
        {
          titulo: "Formação",
          explicacao: [
            "Afirmativa: sujeito + will + verbo (base) + complemento",
            "Negativa: sujeito + will + not + verbo (base) + complemento",
            "Interrogativa: will + sujeito + verbo (base) + complemento?"
          ]
        },
        {
          titulo: "Exemplos",
          explicacao: [
            "I will travel tomorrow",
            "You will call me later",
            "He will buy a new phone",
            "She will cook lunch",
            "It will be sunny",
            "We will play basketball",
            "They will study for the test"
          ]
        }
      ]
    },
    continuo: {
      tempoVerbal: "Present Continuous",
      colunas: [
        {
          titulo: "Uso",
          explicacao: "O Present Continuous é usado para ações que estão acontecendo agora."
        },
        {
          titulo: "Formação",
          explicacao: [
            "Afirmativa: sujeito + am/is/are + verbo(-ing) + complemento",
            "Negativa: sujeito + am/is/are + not + verbo(-ing) + complemento",
            "Interrogativa: am/is/are + sujeito + verbo(-ing) + complemento?"
          ]
        },
        {
          titulo: "Exemplos",
          explicacao: [
            "I am drinking tea",
            "You are watching a series",
            "He is reading a newspaper",
            "She is cooking soup",
            "It is sleeping now",
            "We are playing soccer",
            "They are studying math"
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
        <div className="botoes-container">
          <button
            className='simplePast-btn'
            onClick={() => setTempoSelecionado("passado")
            }
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
                    ? coluna.explicacao.map((item, i) => <p style={{marginBottom: "1em"}} key={i}>{item}</p>)
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
