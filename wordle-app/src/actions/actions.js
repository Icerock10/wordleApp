export const ADD_WORD = "ADD_WORD";
export const NOTIFICATION = "NOTIFICATION";
export const ANIMATION_ENDS = "ANIMATION_ENDS";
export const GAME_ENDS = "GAME_ENDS";
export const REMOVE_LETTER = "REMOVE_LETTER";
export const CHANGE_STAGE = "CHANGE_STAGE";

export const delayTillAnimationEnds = (message) => ({
    type: ANIMATION_ENDS,
    message
})
export const resetGameState = () => ({
    type: GAME_ENDS
})
export const sendUserNotification = (statusMessage) => ({
    type: NOTIFICATION,
    statusMessage
})
export const changeGameStage = (word) => ({
    type: CHANGE_STAGE,
    word
})
export const addLetterInsideBox = (letter) => ({
    type: ADD_WORD,
    letter
})
export const removeLetterFromBox = () => ({
    type: REMOVE_LETTER
})