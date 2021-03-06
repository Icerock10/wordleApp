export const ADD_WORD = "ADD_WORD";
export const NOTIFICATION = "NOTIFICATION";
export const ANIMATION_ENDS = "ANIMATION_ENDS";
export const GAME_ENDS = "GAME_ENDS";
export const REMOVE_LETTER = "REMOVE_LETTER";
export const CHANGE_STAGE = "CHANGE_STAGE";
export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const CREATE_USER = "CREATE_USER";

export const delayTillAnimationEnds = (message) => ({
    type: ANIMATION_ENDS,
    message
})
export const resetGameState = (randomWord) => ({
    type: GAME_ENDS,
    randomWord
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
export const loginUser = () => ({
    type: USER_LOGGED_IN
})
export const createUser = (values) => ({
    type: CREATE_USER,
    values
})