
const initialState = {
    word: [
        '', '', '', '', '', ''
    ],
    currentTry: 0,
    guessedWord: 'РОБОТ',
    notification: {
        isValid: true,
        message: ''
    },
    letters: {
        match: '',
        incorrectPos: '',
        absent: ''
    },
    userWord: ''
}

const wordReducer =  (state = initialState, action ) => {
    switch (action.type) {
        case "ADD_WORD":
            return {
                ...state,
                word: state.word.map((item, i) => {
                    if (i === state.currentTry) {
                        return item.length === 5 ? item : `${item}${action.payload}`
                    }
                    return item;
                })
            }
        case "NOTIFICATION":
            const { inValid, message } = action.payload;
            return {
                ...state,
                notification: {
                    ...state.notification,
                    isValid: inValid,
                    message: message
                }
            }
        case "REMOVE_LETTER":
            return {
                ...state,
                word: state.word.map((item, i) => {
                    if(i === state.currentTry) {
                        return item.slice(0, -1)
                    }
                    return item;
                })
            }
        case "CHANGE_STAGE":
            let matchLetters = '';
            let incorrectPosLetters = '';
            let absentLetters = '';

            state.guessedWord.split('').forEach((item, i, word) => {
                    if(action.payload[i] === item) {
                        matchLetters += action.payload[i];
                    } else if(word.includes(action.payload[i])){
                        incorrectPosLetters += action.payload[i];
                    } else {
                        absentLetters += action.payload[i];
                    }
                })
            const checkSameWord = () => {
                return state.userWord === action.payload
            }
            return {
            ...state,
            letters: {
                ...state.letters,
                incorrectPos: `${state.letters.incorrectPos}${incorrectPosLetters}`,
                match: `${state.letters.match}${matchLetters}`,
                absent: `${state.letters.absent}${absentLetters}`,
            },
                notification: {
                    ...state.notification,
                    isValid: checkSameWord() ? false : state.notification.isValid,
                    message: 'Не достаточно букв'
                },
             userWord: action.payload,
            currentTry: checkSameWord() ? state.currentTry : state.currentTry + 1
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