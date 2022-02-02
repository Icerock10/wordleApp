export const highLightLetter = (item, i, guessedWord, currentTry, index) => {
    if(!item) {
        return;
    }
    if(index === currentTry) {
        return 'text-3xl font-medium'
    }
     if(guessedWord[i] === item[i]) {
        return 'bg-lime-500 highlight text-3xl font-medium text-white'
    } else if (guessedWord.includes(item[i])) {
        return 'bg-orange-500 highlight text-3xl font-medium text-white'
    }
    return 'bg-gray-500 highlight text-3xl font-medium text-white'
}

export const highLightButton = (key, letters) => {
    if (letters.match.includes(key)) {
        return 'w-10 h-14 bg-green-500 text-black rounded m-1'
    }
    if (letters.incorrectPos.includes(key)){
        return 'w-10 h-14 bg-orange-500 text-black rounded m-1'
    }
    if (letters.absent.includes(key)){
        return 'w-10 h-14 bg-gray-500 text-black rounded m-1'
    }
    return 'w-10 h-14 bg-slate-400 text-black rounded m-1'
}