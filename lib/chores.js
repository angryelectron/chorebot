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
  }

  /**
   * Select a random string.
   * @private
   * @param {string} type - The type of string to randomize:  chorse, pretext, punctuation
   * @returns {string}
   */
  random (type) {
    if (type !== 'chores' && type !== 'pretext' && type !== 'punctuation') {
      throw TypeError('Invalid type.')
    }
    let items = this.strings[type]
    let index = Math.floor(Math.random() * items.length)
    return items[index]
  }

  /**
   * Get a random chore sentences
   * @returns {string}
   */
  get () {
    return this.random('pretext') + ' ' + this.random('chores') + this.random('punctuation')
  }

}

module.exports = Chores
