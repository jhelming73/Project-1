const words = ['John', 'Jacob', 'Jingleheimersmith']

function chooseWord(array) {
  return array[Math.floor(Math.random() * array.length)].toUpperCase()
}

function fillInWordWithLetter(letter, word) {
  return word.toLowerCase().split('').map(l =>  {
    if (l === letter) {
      return l.toUpperCase()
    }
    return '_'
  }).join(' ')
}

fillInWordWithLetter('j', chooseWord(words))