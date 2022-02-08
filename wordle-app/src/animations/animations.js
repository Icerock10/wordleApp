export const warningAnimation = (wordIndex, index, currentTry, notification) => {
    if(wordIndex === currentTry && !notification.isValid) {
        return 'w-16 h-16 m-0.5 flex items-center justify-center shake'
    }
    return 'w-16 h-16 m-0.5 flex items-center justify-center'
}