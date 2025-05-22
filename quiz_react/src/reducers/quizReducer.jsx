export const initialState = {
  questions: [
    {
      id: 1,
      category: "Math",
      question: "Combien font 2+2 ?",
      answer: "4",
      validation: null,
    },
    {
      id: 2,
      category: "Science",
      question: "Quelle est la formule de l'eau ?",
      answer: "H2O",
      validation: null,
    },
    {
      id: 3,
      category: "Histoire",
      question: "Qui a découvert l'Amérique ?",
      answer: "Christophe Colomb",
      validation: null,
    },
  ],
};

export const quizzReducer = (state, action) => {
  switch (action.type) {
    case "VALIDATE_ANSWER":
      return {
        //copie tableau
        ...state,

        //trouvé la question dans initialstate avec le meme id que celle cliqué

        questions: state.questions.map((question) => {
          if ((question.id = action.payload.id)) {
            return {
              ...question,

              question: action.payload.validation,
            };
          } else {
            return {
              state,
            };
          }
        }),
        //passer sa valeur validation à true
      };
  }
};
