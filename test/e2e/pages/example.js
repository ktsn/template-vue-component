export default class ExamplePage {
  constructor (browser) {
    this.browser = browser
  }

  get counterText () {
    return this.browser.getElement('.counter-value').get('text')
  }

  increment () {
    this.browser.click('.counter-controls > button:first-child')
    return this
  }

  decrement () {
    this.browser.click('.counter-controls > button:last-child')
    return this
  }
}
