/* eslint-disable no-new */
/* eslint-disable no-unused-expressions */
/* eslint-env mocha */

const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
const Chores = require('../lib/chores.js')

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
      let chores = new Chores(strings)
      expect(chores).to.have.property('strings').and.to.equal(strings)
      expect(chores.strings).to.have.property('chores')
      expect(chores.strings).to.have.property('punctuation')
      expect(chores.strings).to.have.property('pretext')
    })
  })

  describe('Chores#get', () => {
    it('returns a sentence', () => {
      const strings = {
        chores: ['chore'],
        punctuation: ['!'],
        pretext: ['test']
      }
      let chores = new Chores(strings)
      expect(chores.get()).to.equal('test chore!')
    })

    it('is random', () => {
      let chores = new Chores()
      let sentences = [chores.get(), chores.get(), chores.get()]
      expect(sentences[0]).to.not.equal(sentences[1])
    })

    it('generates new sentences once all have been used', () => {
      const strings = {
        chores: ['one', 'two'],
        punctuation: ['!'],
        pretext: ['test']
      }
      let chores = new Chores(strings)
      let spy = sinon.spy(chores, 'generate')
      for (let i = 0; i < 5; i++) {
        chores.get()
      }
      // generate once at the start, then again for every 2 calls
      expect(spy.callCount).to.equal(3)
    })
  })
})
