import { wordsInList } from "./guess";
import { letterValidator } from "./keyboard";
import { sendUserNotification, changeGameStage, addLetterInsideBox, removeLetterFromBox } from "../actions/actions";

const getWordValidated = (words, dispatch, currentTry) => {
	if (words[currentTry].length < 5) {
		return dispatch(sendUserNotification({ inValid: false, message: 'Недостаточно букв' }))
	}
	const hasWord = wordsInList.includes(words[currentTry]);
	if (!hasWord) {
		return dispatch(sendUserNotification({ inValid: false, message: 'Слова нет в списке' }))
	}
	return dispatch(changeGameStage(words[currentTry]))
}

export const getPressedButtonAndAddLetter = (key, dispatch, currentTry, words, guessedWord, userWord) => {
	if (currentTry === 6 || userWord === guessedWord) {
		return;
	}
	if (key === 'Enter') {
		return getWordValidated(words, dispatch, currentTry, guessedWord)
	}
	if (key === 'Backspace') {
		return dispatch(removeLetterFromBox())
	}
	if (!letterValidator(key).length) return;
	return dispatch(addLetterInsideBox(key.toUpperCase()))
}