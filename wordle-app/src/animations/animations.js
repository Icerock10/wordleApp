export const warningAnimation = (wordIndex, index, currentTry, notification) => {
    if(wordIndex === currentTry && !notification.isValid) {
        return 'sm:w-16 sm:h-16 h-14 w-14 m-0.5 flex items-center justify-center shake'
    }
    return 'sm:w-16 sm:h-16 h-14 w-14 m-0.5 flex items-center justify-center'
}