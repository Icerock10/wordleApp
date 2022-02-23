export const highLightLetter = (word, letterIndex, guessedWord, currentTry, wordIndex) => {
	if (!word) {
		return 'text-3xl font-medium highlight border-solid border-2 border-neutral-200';
	}
	if (wordIndex === currentTry) {
		if (word[letterIndex]) {
			return 'text-3xl font-medium highlight bounceIn border-solid border-2 border-neutral-400'
		}
		return 'text-3xl font-medium highlight border-solid border-2 border-neutral-200';
	}
	if (guessedWord === word) {
		return 'tada bg-lime-500 highlight text-3xl font-medium text-white'
	}
	let positions = {
		correctPos: [],
		incorrectPos: [],
	}
	const splitWord = [...word];
	splitWord.forEach((item, i) => {
		if (guessedWord[i] === item) {
			positions.correctPos.push(i)
		} else if (guessedWord.includes(item)) {
			positions.incorrectPos.push({
				letters: item,
				indexes: i
			});
		}
	})
	const getMatchedIndexes = positions.incorrectPos.filter((item, index, array) =>
		index === array.findIndex((element) => (
			element.letters === item.letters
		))
	).map((item) => item.indexes);

	if (getMatchedIndexes.includes(letterIndex)) {
		const findIndex = guessedWord.indexOf(word[letterIndex]);
		if (!positions.correctPos.includes(findIndex)) {
			return 'flipInX bg-orange-500 highlight text-3xl font-medium text-white'
		}
	}
	if (positions.correctPos.includes(letterIndex)) {
		return 'flipInX bg-lime-500 highlight text-3xl font-medium text-white'
	}
	return 'flipInX bg-gray-500 highlight text-3xl font-medium text-white'
}

export const highLightButton = (key, letters) => {
	if (letters.match.includes(key)) {
		return 'keyboard-btn w-10 h-14 bg-lime-500 text-white rounded m-1'
	}
	if (letters.incorrectPos.includes(key)) {
		return 'keyboard-btn w-10 h-14 bg-orange-500 text-white rounded m-1'
	}
	if (letters.absent.includes(key)) {
		return 'keyboard-btn w-10 h-14 bg-gray-500 text-white rounded m-1'
	}
	return 'keyboard-btn w-10 h-14 bg-slate-400 text-black rounded m-1'
}