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