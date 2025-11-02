import React, { useState } from "react";
import "./gramatica.css"; // caso você esteja usando CSS separado

function Gramatica() {
  // estado que guarda qual tempo verbal foi escolhido
  const [tempoSelecionado, setTempoSelecionado] = useState("presente");

  const [secaoAtiva, setSecaoAtiva] = useState(null);
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
            " We do not play chess",
            " Do they study English ?"
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
            "We did not play cards",
            "Did they study history ?"
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
            "We will not play basketball",
            "Will they study for the test ?"
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
            "We are not playing soccer",
            "Are they studying math ?"
          ]
        }
      ]
    }
  };


  return (
    <>
      <main>

        <p className="boasvindas">
          Bem-vindo à página de Gramática, aqui você poderá ver de forma mais dinâmica cada tempo verbal,
          como eles são estruturados, exemplos e suas formas negativas, positivas e interrogativas,
          além de pronomes e verbos...
        </p>

        <section className="firstDiv">
          <div>
            <p>Escolha uma das opções abaixo para saber mais...</p>
            <ul>
              <li><button className="tempoVerbal-btn" onClick={() => setSecaoAtiva("tempoVerbal")}>Tempo Verbal</button></li>
              <li><button className="pronomes-btn" onClick={() => setSecaoAtiva("pronomes")}>Pronomes</button></li>
              <li><button className="modalVerbs-btn" onClick={() => setSecaoAtiva("modalVerbs")}>Modal Verbs</button></li>
            </ul>
          </div>
        </section>

        {secaoAtiva === "tempoVerbal" &&
          <section className="container">
            <div>
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
                          ? coluna.explicacao.map((item, i) => <p style={{ marginBottom: "0.2em" }} key={i}>{item}</p>)
                          : <p>{coluna.explicacao}</p>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        }
        {secaoAtiva === "pronomes" &&
          <>
            <section className="container-pronomes">
              <h2 className="subjectH2">Subject Pronouns</h2>
              <h2 className="objectH2">Object Pronouns</h2>
              <div className="container-content">
                <div className="firstDivPronomes">
                  <h2>Singular</h2>
                  <h2>Plural</h2>
                </div>
                <div className="secondDivPronomes">
                  <h4>1st person</h4>
                  <h4>2nd person</h4>
                  <h4>3rd person (male)</h4>
                  <h4>3rd person (female)</h4>
                  <h4>3rd person (non-person)</h4>
                  <hr className="diviser"/>
                  <h4>1st person</h4>
                  <h4>2nd person</h4>
                  <h4>3rd person</h4>
                </div>
                <div className="thirdDivPronomes">
                  <h4>I</h4>
                  <h4>YOU</h4>
                  <h4>HE</h4>
                  <h4>SHE</h4>
                  <h4>IT</h4>
                  <hr className="diviser"/>
                  <h4>WE</h4>
                  <h4>YOU</h4>
                  <h4>THEY</h4>
                </div>
                <div className="fourthDivPronomes">
                  <h4><strong>I</strong> kicked the ball.</h4>
                  <h4><strong>You</strong> like to study.</h4>
                  <h4><strong>He</strong> eats green cheese.</h4>
                  <h4><strong>She</strong> likes ice cream.</h4>
                  <h4><strong>It</strong> bit jhon.</h4>
                  <hr className="diviser"/>
                  <h4><strong>We</strong> enjoy going to the movies.</h4>
                  <h4><strong>You</strong> are the best students.</h4>
                  <h4><strong>They</strong> are not happy.</h4>
                </div>
                <div className="fifthDivPronomes">
                  <h4>ME</h4>
                  <h4>YOU</h4>
                  <h4>HIM</h4>
                  <h4>HER</h4>
                  <h4>IT</h4>
                  <hr className="diviser"/>
                  <h4>US</h4>
                  <h4>YOU</h4>
                  <h4>THEM</h4>
                </div>
                <div className="sixthDivPronomes">
                  <h4>John kicked the ball to <strong>me</strong>.</h4>
                  <h4>John wants to talk to <strong>you</strong>.</h4>
                  <h4>Mary doesn't like <strong>him</strong>.</h4>
                  <h4>John kissed <strong>her</strong>.</h4>
                  <h4>John smashed <strong>it</strong>.</h4>
                  <hr className="diviser"/>
                  <h4>The politician lied to <strong>us</strong>.</h4>
                  <h4>I wouldn't lie to <strong>you</strong>.</h4>
                  <h4>Mary didn't invite <strong>them</strong>.</h4>
                </div>
              </div>

            </section>

          </>

        }
        {secaoAtiva === "modalVerbs" &&
          <section>
            <div className="container">

            </div>
          </section>
        }
      </main>


    </>
  );
}



export default Gramatica;
