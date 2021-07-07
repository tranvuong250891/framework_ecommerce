import { createStore } from './createStore'
import reducer from './reducer'
import logger from './logger.js'

const { attach, connect, dispatch } = createStore(logger(reducer))

window.dispatch = dispatch

export { attach, connect }