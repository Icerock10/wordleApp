export const warningAnimation = (wordIndex, index, currentTry, notification, item) => {
    if(wordIndex === currentTry && !notification.isValid) {
        if (item[index]) {
            return 'w-16 h-16 border-solid m-0.5 border-2 border-neutral-400 flex items-center shake justify-center'
        }
        return 'w-16 h-16 border-solid m-0.5 border-2 border-neutral-200 flex items-center justify-center shake'
    }
    if (item[index]) {
        return 'w-16 h-16 border-solid m-0.5 border-2 border-neutral-400 flex items-center justify-center'
    }
    return 'w-16 h-16 border-solid m-0.5 border-2 border-slate-200 flex items-center justify-center'
}