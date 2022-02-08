import {wordsInList} from "./guess";
import {letterValidator} from "./keyboard";
import { sendUserNotification, changeGameStage, addLetterInsideBox, removeLetterFromBox } from "../actions/actions";

const getWordValidated = (word, dispatch, currentTry) => {
    const filterWordByStage = word.filter((item, index) => {
        return index === currentTry
    })
    if(filterWordByStage.join('').split('').length < 5) {
        return dispatch(sendUserNotification({inValid: false, message: 'Недостаточно букв'}))
    }
    const wordFromWordList = wordsInList.filter((item) => item.includes(filterWordByStage[0]))

    if(!wordFromWordList.length) {
        return dispatch(sendUserNotification({inValid: false, message: 'Слова нет в списке'}))
    }
    return dispatch(changeGameStage(wordFromWordList.join('')))
}

export const getPressedButtonAndAddLetter = (key, dispatch, currentTry, word, guessedWord, userWord) => {
    if(currentTry === 6 || userWord === guessedWord) {
        return;
    }
    if(key === 'Enter') {
       return getWordValidated(word, dispatch, currentTry, guessedWord)
    }
    if(key === 'Backspace'){
        return dispatch(removeLetterFromBox())
    }
    if(!letterValidator(key).length) return;
    return dispatch(addLetterInsideBox(key.toUpperCase()))
}