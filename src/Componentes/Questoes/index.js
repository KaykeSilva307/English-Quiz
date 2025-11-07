// CADA OPCAO TERA 6 QUESTOES, MISTURADAS COM SINGULAR/PLURAL E AFIRMATIVA/INTERROGATIVA/NEGATIVA


// --->TEMPO VERBAL<---
// SIMPLE PAST
export const SPT_Questions = [

  {
    id: 'SP-1',
    category: "Simple Past",
    type: "affirmative",
    number: "singular",
    question: "She _____ to the park yesterday.",
    options: ["go", "goes", "went", "gone"],
    correctAnswer: "went",
  },

  {
    id: 'SP-2',
    category: "Simple Past",
    type: "affirmative",
    number: "plural",
    question: "They _____ a new house last year.",
    options: ["buy", "buys", "bought", "buyed"],
    correctAnswer: "bought",
  },

  {
    id: 'SP-3',
    category: "Simple Past",
    type: "interrogative",
    number: "singular",
    question: "Did he _____ his homework?",
    options: ["do", "did", "done", "does"],
    correctAnswer: "do",
  },

  {
    id: 'SP-4',
    category: "Simple Past",
    type: "interrogative",
    number: "plural",
    question: "Did they _____ the movie last night?",
    options: ["watch", "watched", "watches", "watching"],
    correctAnswer: "watch",
  },

  {
    id: 'SP-5',
    category: "Simple Past",
    type: "negative",
    number: "singular",
    question: "He didn’t _____ breakfast today.",
    options: ["eat", "ate", "eaten", "eating"],
    correctAnswer: "eat",
  },

  {
    id: 'SP-6',
    category: "Simple Past",
    type: "negative",
    number: "plural",
    question: "We didn’t _____ to school last Monday.",
    options: ["go", "went", "gone", "going"],
    correctAnswer: "go",
  },
];

// PRESENT CONTINUOUS
export const PCT_Questions = [

  {
    id: "PC-1",
    category: "Present Continuous",
    type: "affirmative",
    number: "singular",
    question: "She _____ watching TV right now.",
    options: ["is", "are", "am", "be"],
    correctAnswer: "is",
  },

  {
    id: "PC-2",
    category: "Present Continuous",
    type: "affirmative",
    number: "plural",
    question: "They _____ playing football at the park.",
    options: ["is", "are", "am", "be"],
    correctAnswer: "are",
  },

  {
    id: "PC-3",
    category: "Present Continuous",
    type: "interrogative",
    number: "singular",
    question: "Is he _____ to music?",
    options: ["listen", "listening", "listened", "listens"],
    correctAnswer: "listening",
  },

  {
    id: "PC-4",
    category: "Present Continuous",
    type: "interrogative",
    number: "plural",
    question: "Are they _____ dinner together?",
    options: ["cook", "cooking", "cooked", "cooks"],
    correctAnswer: "cooking",
  },

  {
    id: "PC-5",
    category: "Present Continuous",
    type: "negative",
    number: "singular",
    question: "He isn’t _____ his homework right now.",
    options: ["do", "does", "doing", "did"],
    correctAnswer: "doing",
  },

  {
    id: "PC-6",
    category: "Present Continuous",
    type: "negative",
    number: "plural",
    question: "We aren’t _____ to the party today.",
    options: ["go", "going", "went", "gone"],
    correctAnswer: "going",
  },
];

// SIMPLE PRESENT
export const SPR_Questions = [

  {
    id: "SP-1",
    category: "Simple Present",
    type: "affirmative",
    number: "singular",
    question: "He _____ to school every day.",
    options: ["go", "goes", "going", "gone"],
    correctAnswer: "goes",
  },
  {
    id: "SP-2",
    category: "Simple Present",
    type: "affirmative",
    number: "plural",
    question: "They _____ in New York.",
    options: ["live", "lives", "living", "lived"],
    correctAnswer: "live",
  },
  {
    id: "SP-3",
    category: "Simple Present",
    type: "interrogative",
    number: "singular",
    question: "Does she _____ coffee in the morning?",
    options: ["drink", "drinks", "drinking", "drank"],
    correctAnswer: "drink",
  },
  {
    id: "SP-4",
    category: "Simple Present",
    type: "interrogative",
    number: "plural",
    question: "Do they _____ soccer on weekends?",
    options: ["play", "plays", "playing", "played"],
    correctAnswer: "play",
  },
  {
    id: "SP-5",
    category: "Simple Present",
    type: "negative",
    number: "singular",
    question: "He doesn’t _____ his homework at night.",
    options: ["do", "does", "doing", "did"],
    correctAnswer: "do",
  },
  {
    id: "SP-6",
    category: "Simple Present",
    type: "negative",
    number: "plural",
    question: "We don’t _____ early on Sundays.",
    options: ["wake", "wakes", "waking", "woke"],
    correctAnswer: "wake",
  }
];

// SIMPLE FUTURE
export const SFTR_Questions = [
  {
    id: "SF-1",
    category: "Simple Future",
    type: "affirmative",
    number: "singular",
    question: "She _____ travel to London next year.",
    options: ["will", "is going to", "was", "can"],
    correctAnswer: "will",
  },
  {
    id: "SF-2",
    category: "Simple Future",
    type: "affirmative",
    number: "plural",
    question: "They _____ start the project tomorrow.",
    options: ["will", "is going to", "are", "were"],
    correctAnswer: "will",
  },
  {
    id: "SF-3",
    category: "Simple Future",
    type: "interrogative",
    number: "singular",
    question: "Will he _____ the meeting on time?",
    options: ["attend", "attends", "attended", "attending"],
    correctAnswer: "attend",
  },
  {
    id: "SF-4",
    category: "Simple Future",
    type: "interrogative",
    number: "plural",
    question: "Will they _____ dinner with us tonight?",
    options: ["have", "has", "had", "having"],
    correctAnswer: "have",
  },
  {
    id: "SF-5",
    category: "Simple Future",
    type: "negative",
    number: "singular",
    question: "He won’t _____ the exam without studying.",
    options: ["pass", "passes", "passed", "passing"],
    correctAnswer: "pass",
  },
  {
    id: "SF-6",
    category: "Simple Future",
    type: "negative",
    number: "plural",
    question: "We won’t _____ late again.",
    options: ["arrive", "arrives", "arrived", "arriving"],
    correctAnswer: "arrive",
  }
];

// ---> PRONOMES <---
// SUBJECT PRONOUNS
export const SUB_P_Questions = [
  {
    id: "SPN-1",
    category: "Subject Pronouns",
    type: "identification",
    number: "singular",
    question: "_____ am your teacher.",
    options: ["I", "Me", "My", "Mine"],
    correctAnswer: "I",
  },
  {
    id: "SPN-2",
    category: "Subject Pronouns",
    type: "identification",
    number: "singular",
    question: "_____ is reading a book.",
    options: ["She", "Her", "Hers", "He"],
    correctAnswer: "She",
  },
  {
    id: "SPN-3",
    category: "Subject Pronouns",
    type: "identification",
    number: "singular",
    question: "_____ loves pizza.",
    options: ["He", "Him", "His", "They"],
    correctAnswer: "He",
  },
  {
    id: "SPN-4",
    category: "Subject Pronouns",
    type: "identification",
    number: "plural",
    question: "_____ are studying English now.",
    options: ["They", "Them", "Their", "We"],
    correctAnswer: "They",
  },
  {
    id: "SPN-5",
    category: "Subject Pronouns",
    type: "identification",
    number: "plural",
    question: "_____ are my best friends.",
    options: ["We", "Us", "Our", "They"],
    correctAnswer: "We",
  },
  {
    id: "SPN-6",
    category: "Subject Pronouns",
    type: "identification",
    number: "neutral",
    question: "_____ is raining outside.",
    options: ["It", "He", "She", "They"],
    correctAnswer: "It",
  }
];

// OBJECT PRONOUNS
export const OBJ_P_Questions = [
  {
    id: "OP-1",
    category: "Object Pronouns",
    type: "identification",
    number: "singular",
    question: "I love Anna. I really like _____.",
    options: ["her", "she", "hers", "him"],
    correctAnswer: "her",
  },
  {
    id: "OP-2",
    category: "Object Pronouns",
    type: "identification",
    number: "singular",
    question: "Do you know Michael? Yes, I know _____.",
    options: ["him", "he", "his", "they"],
    correctAnswer: "him",
  },
  {
    id: "OP-3",
    category: "Object Pronouns",
    type: "identification",
    number: "singular",
    question: "This book is for _____. (you)",
    options: ["you", "your", "yours", "yourself"],
    correctAnswer: "you",
  },
  {
    id: "OP-4",
    category: "Object Pronouns",
    type: "identification",
    number: "plural",
    question: "We invited John and Mary, but we didn’t see _____.",
    options: ["them", "they", "their", "theirs"],
    correctAnswer: "them",
  },
  {
    id: "OP-5",
    category: "Object Pronouns",
    type: "identification",
    number: "plural",
    question: "Can you help _____ with this project? (we)",
    options: ["us", "we", "our", "ours"],
    correctAnswer: "us",
  },
  {
    id: "OP-6",
    category: "Object Pronouns",
    type: "identification",
    number: "neutral",
    question: "I don’t like this movie. I never watch _____.",
    options: ["it", "he", "she", "they"],
    correctAnswer: "it",
  }
];

// POSSESSIVE ADJECTIVES
export const POS_A_Questions = [
  {
    id: "PA-1",
    category: "Possessive Adjectives",
    type: "identification",
    number: "singular",
    question: "This is _____ book. (I)",
    options: ["my", "mine", "me", "I"],
    correctAnswer: "my",
  },
  {
    id: "PA-2",
    category: "Possessive Adjectives",
    type: "identification",
    number: "singular",
    question: "Is that _____ car? (you)",
    options: ["your", "yours", "you", "you're"],
    correctAnswer: "your",
  },
  {
    id: "PA-3",
    category: "Possessive Adjectives",
    type: "identification",
    number: "singular",
    question: "He forgot _____ keys at home.",
    options: ["his", "him", "he", "he's"],
    correctAnswer: "his",
  },
  {
    id: "PA-4",
    category: "Possessive Adjectives",
    type: "identification",
    number: "singular",
    question: "She loves _____ new phone.",
    options: ["her", "hers", "she", "she's"],
    correctAnswer: "her",
  },
  {
    id: "PA-5",
    category: "Possessive Adjectives",
    type: "identification",
    number: "plural",
    question: "We are doing _____ homework together.",
    options: ["our", "ours", "us", "we"],
    correctAnswer: "our",
  },
  {
    id: "PA-6",
    category: "Possessive Adjectives",
    type: "identification",
    number: "plural",
    question: "They sold _____ house last year.",
    options: ["their", "theirs", "them", "they"],
    correctAnswer: "their",
  }
];

// POSSESSIVE PRONOUNS
export const POS_P_Questions = [
  {
    id: "PP-1",
    category: "Possessive Pronouns",
    type: "identification",
    number: "singular",
    question: "This book is mine, not _____.",
    options: ["yours", "your", "you", "hers"],
    correctAnswer: "yours",
  },
  {
    id: "PP-2",
    category: "Possessive Pronouns",
    type: "identification",
    number: "singular",
    question: "That car is _____. (he)",
    options: ["his", "him", "he", "he’s"],
    correctAnswer: "his",
  },
  {
    id: "PP-3",
    category: "Possessive Pronouns",
    type: "identification",
    number: "singular",
    question: "Is this pen _____? (she)",
    options: ["hers", "her", "she", "she’s"],
    correctAnswer: "hers",
  },
  {
    id: "PP-4",
    category: "Possessive Pronouns",
    type: "identification",
    number: "plural",
    question: "This house is ours, not _____.",
    options: ["theirs", "their", "they", "them"],
    correctAnswer: "theirs",
  },
  {
    id: "PP-5",
    category: "Possessive Pronouns",
    type: "identification",
    number: "plural",
    question: "The decision is _____. (we)",
    options: ["ours", "our", "us", "we"],
    correctAnswer: "ours",
  },
  {
    id: "PP-6",
    category: "Possessive Pronouns",
    type: "identification",
    number: "neutral",
    question: "The cat is eating its food, and the dog is eating _____.",
    options: ["its", "it", "his", "hers"],
    correctAnswer: "its",
  }
];

// REFLEXIVE PRONOUNS
export const REF_P_Questions = [
  {
    id: "RP-1",
    category: "Reflexive Pronouns",
    type: "identification",
    number: "singular",
    question: "I taught _____ how to play the guitar.",
    options: ["myself", "me", "mine", "I"],
    correctAnswer: "myself",
  },
  {
    id: "RP-2",
    category: "Reflexive Pronouns",
    type: "identification",
    number: "singular",
    question: "She looked at _____ in the mirror.",
    options: ["herself", "her", "hers", "she"],
    correctAnswer: "herself",
  },
  {
    id: "RP-3",
    category: "Reflexive Pronouns",
    type: "identification",
    number: "singular",
    question: "He cut _____ while cooking.",
    options: ["himself", "his", "him", "he"],
    correctAnswer: "himself",
  },
  {
    id: "RP-4",
    category: "Reflexive Pronouns",
    type: "identification",
    number: "plural",
    question: "We enjoyed _____ at the party.",
    options: ["ourselves", "us", "our", "we"],
    correctAnswer: "ourselves",
  },
  {
    id: "RP-5",
    category: "Reflexive Pronouns",
    type: "identification",
    number: "plural",
    question: "They introduced _____ to the new teacher.",
    options: ["themselves", "them", "their", "they"],
    correctAnswer: "themselves",
  },
  {
    id: "RP-6",
    category: "Reflexive Pronouns",
    type: "identification",
    number: "singular-neutral",
    question: "The cat cleaned _____.",
    options: ["itself", "it", "its", "himself"],
    correctAnswer: "itself",
  }
];

// DEMONSTRATIVE PRONOUNS
export const DEM_P_Questions = [
  {
    id: "DP-1",
    category: "Demonstrative Pronouns",
    type: "identification",
    number: "singular-near",
    question: "_____ is my favorite book. (perto)",
    options: ["This", "That", "These", "Those"],
    correctAnswer: "This",
  },
  {
    id: "DP-2",
    category: "Demonstrative Pronouns",
    type: "identification",
    number: "singular-far",
    question: "_____ is my car over there. (longe)",
    options: ["That", "This", "These", "Those"],
    correctAnswer: "That",
  },
  {
    id: "DP-3",
    category: "Demonstrative Pronouns",
    type: "identification",
    number: "plural-near",
    question: "_____ are my friends. (perto)",
    options: ["These", "Those", "This", "That"],
    correctAnswer: "These",
  },
  {
    id: "DP-4",
    category: "Demonstrative Pronouns",
    type: "identification",
    number: "plural-far",
    question: "_____ are the mountains we want to climb. (longe)",
    options: ["Those", "These", "That", "This"],
    correctAnswer: "Those",
  },
  {
    id: "DP-5",
    category: "Demonstrative Pronouns",
    type: "identification",
    number: "singular",
    question: "Who owns _____ umbrella?",
    options: ["this", "that", "these", "those"],
    correctAnswer: "that",
  },
  {
    id: "DP-6",
    category: "Demonstrative Pronouns",
    type: "identification",
    number: "plural",
    question: "Are _____ your shoes?",
    options: ["these", "those", "that", "this"],
    correctAnswer: "these",
  }
];

// INTERROGATIVE PRONOUNS
export const INT_P_Questions = [
  {
    id: "IP-1",
    category: "Interrogative Pronouns",
    type: "identification",
    number: "singular",
    question: "_____ is your best friend?",
    options: ["Who", "What", "Which", "Whose"],
    correctAnswer: "Who",
  },
  {
    id: "IP-2",
    category: "Interrogative Pronouns",
    type: "identification",
    number: "singular",
    question: "_____ are you doing?",
    options: ["What", "Who", "Whose", "Which"],
    correctAnswer: "What",
  },
  {
    id: "IP-3",
    category: "Interrogative Pronouns",
    type: "identification",
    number: "singular",
    question: "_____ is your favorite color?",
    options: ["Which", "Who", "What", "Whose"],
    correctAnswer: "Which",
  },
  {
    id: "IP-4",
    category: "Interrogative Pronouns",
    type: "identification",
    number: "singular",
    question: "_____ is that bag on the table?",
    options: ["Whose", "Who", "What", "Which"],
    correctAnswer: "Whose",
  },
  {
    id: "IP-5",
    category: "Interrogative Pronouns",
    type: "identification",
    number: "plural",
    question: "_____ of these books are yours?",
    options: ["Which", "What", "Who", "Whose"],
    correctAnswer: "Which",
  },
  {
    id: "IP-6",
    category: "Interrogative Pronouns",
    type: "identification",
    number: "neutral",
    question: "_____ is making that noise?",
    options: ["What", "Who", "Which", "Whose"],
    correctAnswer: "What",
  }
];

// --->MODAL VERBS<---
export const MV_Questions = [
  {
    id: "MV-1",
    category: "Modal Verbs",
    type: "affirmative",
    number: "singular",
    question: "She _____ speak three languages fluently.",
    options: ["can", "could", "should", "must"],
    correctAnswer: "can",
  },
  {
    id: "MV-2",
    category: "Modal Verbs",
    type: "affirmative",
    number: "plural",
    question: "They _____ go to the concert if they finish early.",
    options: ["might", "must", "could", "should"],
    correctAnswer: "might",
  },
  {
    id: "MV-3",
    category: "Modal Verbs",
    type: "interrogative",
    number: "singular",
    question: "Can he _____ the guitar?",
    options: ["play", "plays", "played", "playing"],
    correctAnswer: "play",
  },
  {
    id: "MV-4",
    category: "Modal Verbs",
    type: "interrogative",
    number: "plural",
    question: "Should we _____ early tomorrow?",
    options: ["leave", "leaves", "left", "leaving"],
    correctAnswer: "leave",
  },
  {
    id: "MV-5",
    category: "Modal Verbs",
    type: "negative",
    number: "singular",
    question: "He mustn’t _____ in the restricted area.",
    options: ["enter", "enters", "entered", "entering"],
    correctAnswer: "enter",
  },
  {
    id: "MV-6",
    category: "Modal Verbs",
    type: "negative",
    number: "plural",
    question: "We can’t _____ this problem alone.",
    options: ["solve", "solves", "solved", "solving"],
    correctAnswer: "solve",
  }
];

// --->NUMBERS<---
// CARDINAL
export const CAR_N_Questions = [
  {
    id: "CN-1",
    category: "Cardinal Numbers",
    type: "identification",
    number: "basic",
    question: "What number is 'five'?",
    options: ["4", "5", "6", "7"],
    correctAnswer: "5",
  },
  {
    id: "CN-2",
    category: "Cardinal Numbers",
    type: "identification",
    number: "basic",
    question: "What number is 'twelve'?",
    options: ["10", "11", "12", "13"],
    correctAnswer: "12",
  },
  {
    id: "CN-3",
    category: "Cardinal Numbers",
    type: "identification",
    number: "basic",
    question: "How do you write the number 9 in English?",
    options: ["Nine", "Ten", "Eight", "Eleven"],
    correctAnswer: "Nine",
  },
  {
    id: "CN-4",
    category: "Cardinal Numbers",
    type: "identification",
    number: "intermediate",
    question: "How do you write the number 30 in English?",
    options: ["Thirteen", "Thirty", "Three", "Thirteenth"],
    correctAnswer: "Thirty",
  },
  {
    id: "CN-5",
    category: "Cardinal Numbers",
    type: "identification",
    number: "intermediate",
    question: "What number is 'forty-two'?",
    options: ["24", "42", "52", "32"],
    correctAnswer: "42",
  },
  {
    id: "CN-6",
    category: "Cardinal Numbers",
    type: "identification",
    number: "advanced",
    question: "How do you write the number 100 in English?",
    options: ["Hundred", "One hundred", "A hundred", "Hundreds"],
    correctAnswer: "One hundred",
  }
];

// ORDINAL
export const ORD_N_Questions = [
  {
    id: "ON-1",
    category: "Ordinal Numbers",
    type: "identification",
    number: "basic",
    question: "What is the ordinal form of 'one'?",
    options: ["First", "Once", "One", "Oneth"],
    correctAnswer: "First",
  },
  {
    id: "ON-2",
    category: "Ordinal Numbers",
    type: "identification",
    number: "basic",
    question: "What is the ordinal form of 'three'?",
    options: ["Third", "Threeth", "Three", "Trith"],
    correctAnswer: "Third",
  },
  {
    id: "ON-3",
    category: "Ordinal Numbers",
    type: "identification",
    number: "intermediate",
    question: "What is the ordinal form of 'ten'?",
    options: ["Tenth", "Ten", "Tenthly", "Teneth"],
    correctAnswer: "Tenth",
  },
  {
    id: "ON-4",
    category: "Ordinal Numbers",
    type: "identification",
    number: "intermediate",
    question: "What is the ordinal form of 'twelve'?",
    options: ["Twelfth", "Twelveth", "Twelve", "Twoth"],
    correctAnswer: "Twelfth",
  },
  {
    id: "ON-5",
    category: "Ordinal Numbers",
    type: "identification",
    number: "advanced",
    question: "What is the ordinal form of 'twenty-one'?",
    options: ["Twenty-one", "Twenty-oneth", "Twenty-first", "Twenty-second"],
    correctAnswer: "Twenty-first",
  },
  {
    id: "ON-6",
    category: "Ordinal Numbers",
    type: "identification",
    number: "advanced",
    question: "What is the ordinal form of 'one hundred'?",
    options: ["Hundredth", "One hundred", "Hundred", "One hundreds"],
    correctAnswer: "Hundredth",
  }
];
