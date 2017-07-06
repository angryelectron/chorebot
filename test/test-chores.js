/* eslint-disable no-new */
/* eslint-disable no-unused-expressions */
/* eslint-env mocha */

const chai = require('chai')
const expect = chai.expect
const Chores = require('./chores.js')

describe('Chores', () => {
  describe('Chores#constructor', () => {
    it('uses the default strings', () => {
      let chores = new Chores()
      expect(chores).to.have.property('strings')
      expect(chores.strings).to.have.property('chores')
      expect(chores.strings).to.have.property('punctuation')
      expect(chores.strings).to.have.property('pretext')
    })

    it('allows strings to be injected', () => {
      const strings = {
        chores: ['a', 'b', 'c'],
        punctuation: ['.', '!'],
        pretext: ['is', 'and', 'of', 'the']
      }
      let chores = new Chores()
      expect(chores).to.have.property('strings')
      expect(chores.strings).to.have.property('chores')
      expect(chores.strings).to.have.property('punctuation')
      expect(chores.strings).to.have.property('pretext')
    })
  })
})
