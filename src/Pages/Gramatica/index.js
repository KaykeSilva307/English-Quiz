import React, { useState } from "react";
import "./gramatica.css"; // caso você esteja usando CSS separado

function Gramatica() {
  // estado que guarda qual tempo verbal foi escolhido
  const [tempoSelecionado, setTempoSelecionado] = useState("presente");
  const [tipoPronome, setTipoPronome] = useState('subjectPronouns')
  const [tipoModal, setTipoModal] = useState("afirmativa")
  const [tipoNumber, setTipoNumber] = useState('cardinal')

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


  const [animar, setAnimar] = useState(false)

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
              <li><button className="tempoVerbal-btn" onClick={() => { setSecaoAtiva("tempoVerbal"); setAnimar(true) }}>Tempo Verbal</button></li>
              <li><button className="pronomes-btn" onClick={() => { setSecaoAtiva("pronomes"); setAnimar(true) }}>Pronomes</button></li>
              <li><button className="modalVerbs-btn" onClick={() => { setSecaoAtiva("modalVerbs"); setAnimar(true) }}>Modal Verbs</button></li>
              <li><button className="numbers-btn" onClick={() => { setSecaoAtiva('numbers'); setAnimar(true) }}>Numbers</button></li>
            </ul>
          </div>
        </section>



        {secaoAtiva === "tempoVerbal" && (
          <>
            <section className="container">
              <div className="subContainer">
                {/* Div com os botões */}
                <div className={`botoes-container ${animar ? 'animate' : ''}`}>
                  <button className="simplePast-btn" onClick={() => setTempoSelecionado("passado")}>Simple Past</button>
                  <button className="presentContinuous-btn" onClick={() => setTempoSelecionado("continuo")}>Present Continuous</button>
                  <button className="simplePresent-btn" onClick={() => setTempoSelecionado("presente")}>Simple Present</button>
                  <button className="simpleFuture-btn" onClick={() => setTempoSelecionado("futuro")}>Simple Future</button>
                </div>

                {/* Div que muda o conteúdo */}
                <div className={`tempoVerbal ${animar ? 'animate' : ''}`}>
                  <strong>{temposVerbais[tempoSelecionado].tempoVerbal}</strong>
                </div>

                <div className="divPrincipal">
                  <div className={`subDivs ${animar ? 'animate' : ''}`}>
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
          </>
        )}

        {secaoAtiva === "pronomes" && (
          <>
            <section className={`button-pronomes ${animar ? 'animate' : ''}`}>
              <ul>
                <li><button className="subjectPronouns-btn" onClick={() => { setTipoPronome("subjectPronouns"); setAnimar(true) }}>Subject Pronouns</button></li>
                <li><button className="objectPronouns-btn" onClick={() => { setTipoPronome("objectPronouns"); setAnimar(true) }}>Object Pronouns</button></li>
                <li><button className="possessiveAdjectives-btn" onClick={() => { setTipoPronome("possessiveAdjectives"); setAnimar(true) }}>Possessive Adjectives</button></li>
                <li><button className="possessivePronouns-btn" onClick={() => { setTipoPronome("possessivePronouns"); setAnimar(true) }}>Possessive Pronouns </button></li>
                <li><button className="reflexivePronouns-btn" onClick={() => { setTipoPronome("reflexivePronouns"); setAnimar(true) }}>Reflexive Pronouns</button></li>
                <li><button className="demonstrativePronouns-btn" onClick={() => { setTipoPronome("demonstrativePronouns"); setAnimar(true) }}>Demonstrative Pronouns</button></li>
                <li><button className="interrogativePronouns-btn" onClick={() => { setTipoPronome("interrogativePronouns"); setAnimar(true) }}>Interrogative Pronouns</button></li>

              </ul>
            </section>

            {tipoPronome === 'subjectPronouns' && (
              <section className={`container-pronomes ${animar ? 'animate' : ''}`}>

                <h2 className="tipePronouns">Subject Pronouns</h2>
                <div className="container-content">
                  <div className="pronouns1">
                    <h2>Singular</h2>
                    <h2>Plural</h2>
                  </div>
                  <div className="pronouns2">
                    <h4>1st person</h4>
                    <h4>2nd person</h4>
                    <h4>3rd person (male)</h4>
                    <h4>3rd person (female)</h4>
                    <h4>3rd person (non-person)</h4>
                    <hr />
                    <h4>1st person</h4>
                    <h4>2nd person</h4>
                    <h4>3rd person</h4>
                  </div>
                  <div className="pronouns3">
                    <h4>I</h4>
                    <h4>YOU</h4>
                    <h4>HE</h4>
                    <h4>SHE</h4>
                    <h4>IT</h4>
                    <hr />
                    <h4>WE</h4>
                    <h4>YOU</h4>
                    <h4>THEY</h4>
                  </div>
                  <div className="pronouns4">
                    <h4><strong>I</strong> kicked the ball.</h4>
                    <h4><strong>You</strong> like to study.</h4>
                    <h4><strong>He</strong> eats green cheese.</h4>
                    <h4><strong>She</strong> likes ice cream.</h4>
                    <h4><strong>It</strong> bit jhon.</h4>
                    <hr />
                    <h4><strong>We</strong> enjoy going to the movies.</h4>
                    <h4><strong>You</strong> are the best students.</h4>
                    <h4><strong>They</strong> are not happy.</h4>
                  </div>
                </div>
              </section>
            )}

            {tipoPronome === 'objectPronouns' && (
              <section className={`container-pronomes ${animar ? 'animate' : ''}`}>

                <h2 className="tipePronouns">Object Pronouns</h2>
                <div className="container-content">
                  <div className="pronouns1">
                    <h2>Singular</h2>
                    <h2>Plural</h2>
                  </div>
                  <div className="pronouns2">
                    <h4>1st person</h4>
                    <h4>2nd person</h4>
                    <h4>3rd person (male)</h4>
                    <h4>3rd person (female)</h4>
                    <h4>3rd person (non-person)</h4>
                    <hr />
                    <h4>1st person</h4>
                    <h4>2nd person</h4>
                    <h4>3rd person</h4>
                  </div>
                  <div className="pronouns3">
                    <h4>ME</h4>
                    <h4>YOU</h4>
                    <h4>HIM</h4>
                    <h4>HER</h4>
                    <h4>IT</h4>
                    <hr />
                    <h4>US</h4>
                    <h4>YOU</h4>
                    <h4>THEM</h4>
                  </div>
                  <div className="pronouns4">
                    <h4>John kicked the ball to <strong>me</strong>.</h4>
                    <h4>John wants to talk to <strong>you</strong>.</h4>
                    <h4>Mary doesn't like <strong>him</strong>.</h4>
                    <h4>John kissed <strong>her</strong>.</h4>
                    <h4>John smashed <strong>it</strong>.</h4>
                    <hr />
                    <h4>The politician lied to <strong>us</strong>.</h4>
                    <h4>I wouldn't lie to <strong>you</strong>.</h4>
                    <h4>Mary didn't invite <strong>them</strong>.</h4>
                  </div>
                </div>

              </section>
            )}

            {tipoPronome === 'possessiveAdjectives' && (
              <section className={`container-pronomes ${animar ? 'animate' : ''}`}>

                <h2 className="tipePronouns">Possessive Adjectives</h2>
                <div className="container-content">
                  <div className="pronouns1">
                    <h2>Singular</h2>
                    <h2>Plural</h2>
                  </div>

                  <div className="pronouns2">
                    <h4>1st person</h4>
                    <h4>2nd person</h4>
                    <h4>3rd person (male)</h4>
                    <h4>3rd person (female)</h4>
                    <h4>3rd person (non-person)</h4>
                    <hr />
                    <h4>1st person</h4>
                    <h4>2nd person</h4>
                    <h4>3rd person</h4>
                  </div>

                  <div className="pronouns3">
                    <h4>MY</h4>
                    <h4>YOUR</h4>
                    <h4>HIS</h4>
                    <h4>HER</h4>
                    <h4>ITS</h4>
                    <hr />
                    <h4>OUR</h4>
                    <h4>YOUR</h4>
                    <h4>THEIR</h4>
                  </div>

                  <div className="pronouns4">
                    <h4>This is <strong>my</strong> book.</h4>
                    <h4>Where is <strong>your</strong> pen?</h4>
                    <h4>That’s <strong>his</strong> car.</h4>
                    <h4><strong>Her</strong> dog is very cute.</h4>
                    <h4>The cat cleaned <strong>its</strong> paws.</h4>
                    <hr />
                    <h4>This is <strong>our</strong> house.</h4>
                    <h4>Is that <strong>your</strong> laptop?</h4>
                    <h4><strong>Their</strong> children are playing outside.</h4>
                  </div>
                </div>


              </section>
            )}

            {tipoPronome === 'possessivePronouns' && (
              <section className={`container-pronomes ${animar ? 'animate' : ''}`}>

                <h2 className="tipePronouns">Possessive Pronouns</h2>
                <div className="container-content">
                  <div className="pronouns1">
                    <h2>Singular</h2>
                    <h2>Plural</h2>
                  </div>

                  <div className="pronouns2">
                    <h4>1st person</h4>
                    <h4>2nd person</h4>
                    <h4>3rd person (male)</h4>
                    <h4>3rd person (female)</h4>
                    <h4>3rd person (non-person)</h4>
                    <hr />
                    <h4>1st person</h4>
                    <h4>2nd person</h4>
                    <h4>3rd person</h4>
                  </div>

                  <div className="pronouns3">
                    <h4>MINE</h4>
                    <h4>YOURS</h4>
                    <h4>HIS</h4>
                    <h4>HERS</h4>
                    <h4>ITS*</h4>
                    <hr />
                    <h4>OURS</h4>
                    <h4>YOURS</h4>
                    <h4>THEIRS</h4>
                  </div>

                  <div className="pronouns4">
                    <h4>This book is <strong>mine</strong>.</h4>
                    <h4>That pencil is <strong>yours</strong>.</h4>
                    <h4>The red car is <strong>his</strong>.</h4>
                    <h4>The blue one is <strong>hers</strong>.</h4>
                    <h4>The cat ate <strong>its*</strong> food. <small>(raro)</small></h4>
                    <hr />
                    <h4>The big house is <strong>ours</strong>.</h4>
                    <h4>Those keys are <strong>yours</strong>.</h4>
                    <h4>The toys are <strong>theirs</strong>.</h4>
                  </div>
                </div>

              </section>
            )}

            {tipoPronome === 'reflexivePronouns' && (
              <section className={`container-pronomes ${animar ? 'animate' : ''}`}>

                <h2 className="tipePronouns">Reflexive Pronouns</h2>
                <div className="container-content">
                  <div className="pronouns1">
                    <h2>Singular</h2>
                    <h2>Plural</h2>
                  </div>

                  <div className="pronouns2">
                    <h4>1st person</h4>
                    <h4>2nd person</h4>
                    <h4>3rd person (male)</h4>
                    <h4>3rd person (female)</h4>
                    <h4>3rd person (non-person)</h4>
                    <hr />
                    <h4>1st person</h4>
                    <h4>2nd person</h4>
                    <h4>3rd person</h4>
                  </div>

                  <div className="pronouns3">
                    <h4>MYSELF</h4>
                    <h4>YOURSELF</h4>
                    <h4>HIMSELF</h4>
                    <h4>HERSELF</h4>
                    <h4>ITSELF</h4>
                    <hr />
                    <h4>OURSELVES</h4>
                    <h4>YOURSELVES</h4>
                    <h4>THEMSELVES</h4>
                  </div>

                  <div className="pronouns4">
                    <h4>I cut <strong>myself</strong> while cooking.</h4>
                    <h4>Be careful not to hurt <strong>yourself</strong>.</h4>
                    <h4>He blames <strong>himself</strong> for the mistake.</h4>
                    <h4>She taught <strong>herself</strong> to play guitar.</h4>
                    <h4>The dog cleaned <strong>itself</strong>.</h4>
                    <hr />
                    <h4>We enjoyed <strong>ourselves</strong> at the party.</h4>
                    <h4>You should be proud of <strong>yourselves</strong>.</h4>
                    <h4>They introduced <strong>themselves</strong> to the group.</h4>
                  </div>
                </div>

              </section>
            )}

            {tipoPronome === 'demonstrativePronouns' && (
              <section className={`container-pronomes ${animar ? 'animate' : ''}`}>

                <h2 className="tipePronouns">Demonstrative Pronouns</h2>
                <div className="container-content">
                  <div className="pronouns1Demonstrative">
                    <h2>Singular</h2>
                    <h2>Plural</h2>
                  </div>

                  <div className="pronouns2">
                    <h4>Near (perto)</h4>
                    <h4>Far (longe)</h4>
                    <hr />
                    <h4>Near (perto)</h4>
                    <h4>Far (longe)</h4>
                  </div>

                  <div className="pronouns3">
                    <h4>THIS</h4>
                    <h4>THAT</h4>
                    <hr />
                    <h4>THESE</h4>
                    <h4>THOSE</h4>
                  </div>

                  <div className="pronouns4">
                    <h4><strong>This</strong> is my phone. (Este é meu celular.)</h4>
                    <h4><strong>That</strong> is your car. (Aquele é seu carro.)</h4>
                    <hr />
                    <h4><strong>These</strong> are my friends. (Estes são meus amigos.)</h4>
                    <h4><strong>Those</strong> are my shoes. (Aqueles são meus sapatos.)</h4>
                  </div>
                </div>

              </section>
            )}

            {tipoPronome === 'interrogativePronouns' && (
              <section className={`container-pronomes ${animar ? 'animate' : ''}`}>

                <h2 className="tipePronouns">Interrogative Pronouns</h2>
                <div className="container-content">
                  <div className="pronouns1">
                    <h2>Singular / Plural</h2>
                  </div>

                  <div className="pronouns2">
                    <h4>WHO</h4>
                    <h4>WHOM</h4>
                    <h4>WHOSE</h4>
                    <h4>WHAT</h4>
                    <h4>WHICH</h4>
                  </div>

                  <div className="pronouns3">
                    <h4>Quem (sujeito)</h4>
                    <h4>Quem (objeto)</h4>
                    <h4>De quem</h4>
                    <h4>O que / Qual</h4>
                    <h4>Qual (entre opções)</h4>
                  </div>

                  <div className="pronouns4">
                    <h4><strong>Who</strong> is knocking at the door?</h4>
                    <h4>To <strong>whom</strong> did you speak?</h4>
                    <h4><strong>Whose</strong> book is this?</h4>
                    <h4><strong>What</strong> is your name?</h4>
                    <h4><strong>Which</strong> one do you prefer?</h4>
                  </div>
                </div>

              </section>
            )}
          </>
        )}

        {secaoAtiva === 'modalVerbs' && (
          <>
            <section className={`button-modal ${animar ? 'animate' : ''}`}>
              <ul>
                <li><button onClick={() => (setTipoModal('afirmativa'))}>Afirmativa</button></li>
                <li><button onClick={() => (setTipoModal('interrogativa'))}>Interrogativa</button></li>
                <li><button onClick={() => (setTipoModal('negativa'))}>Negativa</button></li>
              </ul>
            </section>

            {tipoModal === 'afirmativa' && (
              <section className={`container-modal ${animar ? 'animate' : ''}`}>
                <h2 className="tipeModal">Modal Verbs — Afirmative</h2>
                <div className="container-content-modal">
                  <div className="modal1">
                    <h4>CAN</h4>
                    <h4>COULD</h4>
                    <h4>MAY</h4>
                    <h4>MIGHT</h4>
                    <h4>MUST</h4>
                    <h4>SHALL</h4>
                    <h4>SHOULD</h4>
                    <h4>WILL</h4>
                    <h4>WOULD</h4>
                  </div>
                  <div className="modal2">
                    <h4>Habilidade, permissão, possibilidade</h4>
                    <h4>Habilidade no passado, possibilidade, pedidos educados</h4>
                    <h4>Permissão formal, possibilidade</h4>
                    <h4>Possibilidade menor que “may”</h4>
                    <h4>Obrigação, dedução lógica</h4>
                    <h4>Oferta, sugestão, futuro formal</h4>
                    <h4>Conselho, recomendação</h4>
                    <h4>Futuro, decisão no momento</h4>
                    <h4>Hipótese, pedido educado, hábito passado</h4>
                  </div>
                  <div className="modal3">
                    <h4>I <strong>can</strong> swim very well.</h4>
                    <h4>When I was young, I <strong>could</strong> run fast.</h4>
                    <h4>You <strong>may</strong> start your test now.</h4>
                    <h4>It <strong>might</strong> rain later today.</h4>
                    <h4>You <strong>must</strong> wear a helmet.</h4>
                    <h4>We <strong>shall</strong> meet again soon.</h4>
                    <h4>You <strong>should</strong> eat more vegetables.</h4>
                    <h4>I <strong>will</strong> help you with that.</h4>
                    <h4>I <strong>would</strong> travel more if I had money.</h4>
                  </div>
                </div>
              </section>
            )}

            {tipoModal === 'interrogativa' && (
              <section className={`container-modal ${animar ? 'animate' : ''}`}>
                <h2 className="tipeModal">Modal Verbs — Interrogative</h2>
                <div className="container-content-modal">
                  <div className="modal1">
                    <h4>CAN</h4>
                    <h4>COULD</h4>
                    <h4>MAY</h4>
                    <h4>MIGHT</h4>
                    <h4>MUST</h4>
                    <h4>SHALL</h4>
                    <h4>SHOULD</h4>
                    <h4>WILL</h4>
                    <h4>WOULD</h4>
                  </div>

                  <div className="modal2">
                    <h4>Pedido, habilidade, permissão</h4>
                    <h4>Pedido educado, sugestão, possibilidade</h4>
                    <h4>Permissão formal</h4>
                    <h4>Dúvida, possibilidade remota</h4>
                    <h4>Dedução, obrigação</h4>
                    <h4>Oferta, sugestão</h4>
                    <h4>Conselho, dúvida</h4>
                    <h4>Previsão, decisão</h4>
                    <h4>Hipótese, pedido educado</h4>
                  </div>

                  <div className="modal3">
                    <h4><strong>Can</strong> you help me?</h4>
                    <h4><strong>Could</strong> you open the window, please?</h4>
                    <h4><strong>May</strong> I sit here?</h4>
                    <h4><strong>Might</strong> I ask you a question?</h4>
                    <h4><strong>Must</strong> we finish this today?</h4>
                    <h4><strong>Shall</strong> we dance?</h4>
                    <h4><strong>Should</strong> I call her now?</h4>
                    <h4><strong>Will</strong> you come with me?</h4>
                    <h4><strong>Would</strong> you like some coffee?</h4>
                  </div>
                </div>
              </section>
            )}

            {tipoModal === 'negativa' && (
              <section className={`container-modal ${animar ? 'animate' : ''}`}>
                <h2 className="tipeModal">Modal Verbs — Negative</h2>
                <div className="container-content-modal">
                  <div className="modal1">
                    <h4>CAN'T</h4>
                    <h4>COULDN'T</h4>
                    <h4>MAY NOT</h4>
                    <h4>MIGHT NOT</h4>
                    <h4>MUSTN'T</h4>
                    <h4>SHAN'T</h4>
                    <h4>SHOULDN'T</h4>
                    <h4>WON'T</h4>
                    <h4>WOULDN'T</h4>
                  </div>

                  <div className="modal2">
                    <h4>Incapacidade, proibição</h4>
                    <h4>Incapacidade passada, impossibilidade</h4>
                    <h4>Negação de permissão ou possibilidade</h4>
                    <h4>Possibilidade remota negativa</h4>
                    <h4>Proibição forte, dedução negativa</h4>
                    <h4>Forma negativa de “shall” (pouco usada)</h4>
                    <h4>Conselho negativo, recomendação contrária</h4>
                    <h4>Negativa do futuro</h4>
                    <h4>Negativa de hipótese, recusa educada</h4>
                  </div>

                  <div className="modal3">
                    <h4>I <strong>can’t</strong> swim today.</h4>
                    <h4>When I was a kid, I <strong>couldn’t</strong> drive.</h4>
                    <h4>You <strong>may not</strong> enter this area.</h4>
                    <h4>It <strong>might not</strong> rain after all.</h4>
                    <h4>You <strong>mustn’t</strong> smoke here.</h4>
                    <h4>We <strong>shan’t</strong> be late again.</h4>
                    <h4>You <strong>shouldn’t</strong> eat too much sugar.</h4>
                    <h4>I <strong>won’t</strong> tell anyone your secret.</h4>
                    <h4>I <strong>wouldn’t</strong> do that if I were you.</h4>
                  </div>
                </div>
              </section>
            )}




          </>

        )}

        {secaoAtiva === 'numbers' && (
          <>
            <section className={`button-numbers ${animar ? 'animate' : ''}`}>
              <ul>
                <li><button onClick={() => setTipoNumber("cardinal")}>Cardinal Numbers</button></li>
                <li><button onClick={() => setTipoNumber("ordinal")}>Ordinal Numbers</button></li>
              </ul>
            </section>
            {tipoNumber === 'cardinal' && (
              <section className={`container-numbers ${animar ? 'animate' : ''}`}>
                <h2 className="tipeNumebers">Cardinal Numbers</h2>

                <div className="container-content-numbers">
                  <div className="cardinal1">
                    <h4>1 – One</h4>
                    <h4>2 – Two</h4>
                    <h4>3 – Three</h4>
                    <h4>4 – Four</h4>
                    <h4>5 – Five</h4>
                    <h4>6 – Six</h4>
                    <h4>7 – Seven</h4>
                    <h4>8 – Eight</h4>
                    <h4>9 – Nine</h4>
                    <h4>10 – Ten</h4>
                  </div>

                  {/* 11–19 */}
                  <div className="cardinal2">
                    <h4>11 – Eleven</h4>
                    <h4>12 – Twelve</h4>
                    <h4>13 – Thirteen</h4>
                    <h4>14 – Fourteen</h4>
                    <h4>15 – Fifteen</h4>
                    <h4>16 – Sixteen</h4>
                    <h4>17 – Seventeen</h4>
                    <h4>18 – Eighteen</h4>
                    <h4>19 – Nineteen</h4>
                    <h4>20 – Twenty</h4>
                  </div>

                  {/* 20–29 */}
                  <div className="cardinal3">
                    <h4>21 – Twenty-one</h4>
                    <h4>22 – Twenty-two</h4>
                    <h4>23 – Twenty-three</h4>
                    <h4>24 – Twenty-four</h4>
                    <h4>25 – Twenty-five</h4>
                    <h4>26 – Twenty-six</h4>
                    <h4>27 – Twenty-seven</h4>
                    <h4>28 – Twenty-eight</h4>
                    <h4>29 – Twenty-nine</h4>
                    <h4>30 – Thirty</h4>
                  </div>

                  {/* 30–100+ */}
                  <div className="cardinal4">

                    <h4>31 – Thirty-one</h4>
                    <h4>40 – Forty</h4>
                    <h4>50 – Fifty</h4>
                    <h4>60 – Sixty</h4>
                    <h4>70 – Seventy</h4>
                    <h4>80 – Eighty</h4>
                    <h4>90 – Ninety</h4>
                    <h4>100 – A/One Hundred</h4>
                    <h4>1,000 – A/One Thousand</h4>
                    <h4>1,000,000 – A/One Million</h4>
                  </div>
                </div>
              </section>
            )}

            {tipoNumber === 'ordinal' && (
              <section className={`container-numbers ${animar ? 'animate' : ''}`}>
                <h2 className="tipeNumebers">Ordinal Numbers</h2>

                <div className="container-content-numbers">
                  {/* 1st–10th */}
                  <div className="cardinal1">
                    <h4>1st – First</h4>
                    <h4>2nd – Second</h4>
                    <h4>3rd – Third</h4>
                    <h4>4th – Fourth</h4>
                    <h4>5th – Fifth</h4>
                    <h4>6th – Sixth</h4>
                    <h4>7th – Seventh</h4>
                    <h4>8th – Eighth</h4>
                    <h4>9th – Ninth</h4>
                    <h4>10th – Tenth</h4>
                  </div>

                  {/* 11th–19th */}
                  <div className="cardinal2">
                    <h4>11th – Eleventh</h4>
                    <h4>12th – Twelfth</h4>
                    <h4>13th – Thirteenth</h4>
                    <h4>14th – Fourteenth</h4>
                    <h4>15th – Fifteenth</h4>
                    <h4>16th – Sixteenth</h4>
                    <h4>17th – Seventeenth</h4>
                    <h4>18th – Eighteenth</h4>
                    <h4>19th – Nineteenth</h4>
                    <h4>20th – Twentieth</h4>
                  </div>

                  {/* 21st–29th */}
                  <div className="cardinal3">
                    <h4>21st – Twenty-first</h4>
                    <h4>22nd – Twenty-second</h4>
                    <h4>23rd – Twenty-third</h4>
                    <h4>24th – Twenty-fourth</h4>
                    <h4>25th – Twenty-fifth</h4>
                    <h4>26th – Twenty-sixth</h4>
                    <h4>27th – Twenty-seventh</h4>
                    <h4>28th – Twenty-eighth</h4>
                    <h4>29th – Twenty-ninth</h4>
                    <h4>30th – Thirtieth</h4>
                  </div>

                  {/* 31st–100th+ */}
                  <div className="cardinal4">
                    <h4>31st – Thirty-first</h4>
                    <h4>40th – Fortieth</h4>
                    <h4>50th – Fiftieth</h4>
                    <h4>60th – Sixtieth</h4>
                    <h4>70th – Seventieth</h4>
                    <h4>80th – Eightieth</h4>
                    <h4>90th – Ninetieth</h4>
                    <h4>100th – Hundredth</h4>
                    <h4>1,000th – Thousandth</h4>
                    <h4>1,000,000th – Millionth</h4>
                  </div>
                </div>
              </section>
            )}


          </>

        )}


      </main>



      <footer></footer>
    </>
  );
}



export default Gramatica;
