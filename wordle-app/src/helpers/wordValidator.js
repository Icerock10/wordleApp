import {wordsInList} from "./guess";
import {letterValidator} from "./keyboard";


const getWordValidated = (word, dispatch, currentTry) => {
    const filterWordByStage = word.filter((item, index) => {
        return index === currentTry
    })
    if(filterWordByStage.join('').split('').length < 5) {
        return dispatch({type: "NOTIFICATION", payload: {inValid: false, message: 'Недостаточно букв'}})
    }

    const wordFromWordList = wordsInList.filter((item) => item.includes(filterWordByStage[0]))

    if(!wordFromWordList.length) {
        return dispatch({type: "NOTIFICATION", payload: {inValid: false, message: 'Слова нет в списке'}})
    }
    return dispatch({type: "CHANGE_STAGE"})
}
export const getPressedButtonAndAddLetter = (key, dispatch, currentTry, word) => {
    if(key === 'Enter') {
       return getWordValidated(word, dispatch, currentTry)
    }
    if(key === 'Backspace'){
        return dispatch({type: "REMOVE_LETTER"})
    }
    if(!letterValidator(key).length) return;
    return dispatch({type: "ADD_WORD", payload: key.toUpperCase()})
}