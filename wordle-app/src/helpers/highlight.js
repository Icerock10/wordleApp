export const highLightLetter = (word, letterIndex, guessedWord, currentTry, wordIndex) => {
    if(!word) {
        return 'text-3xl font-medium highlight border-solid border-2 border-neutral-200';
    }
   if(wordIndex === currentTry) {
        if (word[letterIndex]) {
            return 'text-3xl font-medium highlight bounceIn border-solid border-2 border-neutral-400'
        }
        return 'text-3xl font-medium highlight border-solid border-2 border-neutral-200';
    }
    if(guessedWord === word) {
        return 'tada bg-lime-500 highlight text-3xl font-medium text-white'
    }
     if(guessedWord[letterIndex] === word[letterIndex]) {
        return 'flipInX bg-lime-500 highlight text-3xl font-medium text-white'
    } else if (guessedWord.includes(word[letterIndex])) {
        return 'flipInX bg-orange-500 highlight text-3xl font-medium text-white'
    }
    return 'flipInX bg-gray-500 highlight text-3xl font-medium text-white'
}

export const highLightButton = (key, letters) => {
    if (letters.match.includes(key)) {
        return 'w-10 h-14 bg-lime-500 text-white rounded m-1'
    }
    if (letters.incorrectPos.includes(key)){
        return 'w-10 h-14 bg-orange-500 text-white rounded m-1'
    }
    if (letters.absent.includes(key)){
        return 'w-10 h-14 bg-gray-500 text-white rounded m-1'
    }
    return 'w-10 h-14 bg-slate-400 text-black rounded m-1'
}