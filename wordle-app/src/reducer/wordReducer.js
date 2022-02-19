import { ADD_WORD, NOTIFICATION, ANIMATION_ENDS, GAME_ENDS, REMOVE_LETTER, CHANGE_STAGE  } from '../actions/actions';

const initialState = {
    words: [
        '', '', '', '', '', ''
    ],
    currentTry: 0,
    guessedWord: 'ТОПИК',
    notification: {
        isValid: true,
        message: ''
    },
    letters: {
        match: '',
        incorrectPos: '',
        absent: ''
    },
    userWord: '',
    isAnimationPassed: false,
    userMessage: '',
}

const wordReducer =  (state = initialState, action ) => {
     switch (action.type) {
        case ADD_WORD:
            return {
                ...state,
                words: state.words.map((item, i) => {
                    if (i === state.currentTry) {
                        return item.length === 5 ? item : `${item}${action.letter}`
                    }
                    return item;
                })
            }
        case NOTIFICATION:
            const { inValid, message } = action.statusMessage;
            return {
                ...state,
                notification: {
                    ...state.notification,
                    isValid: inValid,
                    message: message
                }
            }
         case ANIMATION_ENDS:
          return {
              ...state,
              isAnimationPassed: true,
              userMessage: action.message
          }
         case GAME_ENDS:
             return {
                 ...initialState,
                 guessedWord: action.randomWord
             }
        case REMOVE_LETTER:
            return {
                ...state,
                words: state.words.map((item, i) => {
                    if(i === state.currentTry) {
                        return item.slice(0, -1)
                    }
                    return item;
                })
            }
        case CHANGE_STAGE:
            let matchLetters = '';
            let incorrectPosLetters = '';
            let absentLetters = '';

            state.guessedWord.split('').forEach((item, i, word) => {
                    if(action.word[i] === item) {
                        matchLetters += action.word[i];
                    } else if(word.includes(action.word[i])){
                        incorrectPosLetters += action.word[i];
                    } else {
                        absentLetters += action.word[i];
                    }
                })
            return {
            ...state,
            letters: {
                ...state.letters,
                incorrectPos: `${state.letters.incorrectPos}${incorrectPosLetters}`,
                match: `${state.letters.match}${matchLetters}`,
                absent: `${state.letters.absent}${absentLetters}`,
            },
             userWord: action.word,
            currentTry: state.currentTry + 1
           }
    default: return state
 }
}

export default wordReducer;

// CurrenTry - back
// Current word - back
// Guessed Word - back
// React router
// Отдельный компонент формы Логина (логин пароль) отдельный роут
// Route create user (Sign up)
// Route sign In
// Игра - отдельный роут

// const middleware = (req, res, next) => {
//     if(req === someConditions) {
//         req.auth = 10;
//         next();
//     }
//     return res.status(400)
// }
//
//
//
//    router.get('/getAll', middleware(), ((req, res, next) => console.log(req.auth)))