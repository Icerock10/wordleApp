
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
    }
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
            const matchLetters = [];
            const incorrectPosLetters = [];
            const absentLetters = [];

            state.guessedWord.split('').forEach((item, i, array) => {
                    const split = action.payload.join('').split('')
                    if(split[i] === item) {
                        matchLetters.push(split[i])
                    } else if(array.includes(split[i])){
                        incorrectPosLetters.push(split[i])
                    } else {
                        absentLetters.push(split[i])
                    }
                }
           )
            return {
            ...state,
            letters: {
                ...state.letters,
                incorrectPos: `${state.letters.incorrectPos}${incorrectPosLetters.join('')}`,
                match: `${state.letters.match}${matchLetters.join('')}`,
                absent: `${state.letters.absent}${absentLetters.join('')}`,
            },
            currentTry: state.currentTry + 1,
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