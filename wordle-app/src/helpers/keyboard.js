export const keyboard = ['Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ь', 'Ф', 'Ы', 'В', 'А',
'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Я', 'Enter', 'Ч', 'С','М','И', 'Т', 'Б' ,'Ю', 'Backspace'
]
export const letterValidator = (key) => {
    return keyboard.filter(item => {
        return item.includes(key.toUpperCase())
    })
}