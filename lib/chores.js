const defaultStrings = require('./strings.js')

/**
 * Generate random sentences describing chores
 * @class
 */
class Chores {
  /**
   * @constructor
   * @param {Object} [userStrings] - If not specified, strings will be loaded from strings.js
   * @param {string[]} userStrings.chores - A list of cleaning verbs in present tense, eg. "Do X"
   * @param {string[]} userStrings.pretext - A list of lead-up lines, eg. "You should"
   * @param {string[]} userStrings.punctuation - A list of punctuation to add to the end
   */
  constructor (userStrings) {
    this.strings = userStrings || defaultStrings
    this.sentences = []
    this.index = null
  }

  /**
   * Select a random item from an array.
   * @private
   * @param {Object[]} type - The type of string to randomize:  chorse, pretext, punctuation
   * @returns {string}
   */
  random (array) {
    if (!(array instanceof Array)) {
      throw TypeError('Not an array.')
    }

    let index = Math.floor(Math.random() * array.length)
    return array[index]
  }

  shuffle (array) {
    let currentIndex = array.length
    let temporaryValue
    let randomIndex
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
    return array
  }

  /**
   * Create a random sentence for each chore, then randomize the order
   * @private
   * @returns {string[]}
   */
  generate () {
    return this.shuffle(this.strings.chores.map((chore) => {
      return this.random(this.strings.pretext) + ' ' + chore + this.random(this.strings.punctuation)
    }))
  }

  /**
   * Get a sentence with a 'random' chore.  Each chore will be returned once
   * until all chores have been returned, then a new batch will be generated
   */
  get () {
    if (isNaN(this.index) || this.index >= this.sentences.length) {
      this.sentences = this.generate()
      this.index = 0
    }
    return this.sentences[this.index++]
  }
} // class

module.exports = Chores
