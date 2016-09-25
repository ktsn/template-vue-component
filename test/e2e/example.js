import assert from 'power-assert'
import { browser } from 'testium-mocha'
import ExamplePage from './pages/example'

describe('Example', () => {
  let page

  before(browser.beforeHook())

  beforeEach('load example page', () => {
    browser.navigateTo('/')
    browser.assert.httpStatus(200)
    page = new ExamplePage(browser)
  })

  it('renders initial value as 0', () => {
    assert(page.counterText === '0')
  })

  it('increments', () => {
    assert(page.increment().counterText === '1')
  })

  it('decrements', () => {
    assert(page.decrement().counterText === '-1')
  })
})
