// DONE: Use more semantic variable declarations
// DONE: Rewrite class declaration
// DONE: Use consistent function notation
// DONE: Add default parameters to functions
// DONE: destructure objects
// DONE: Use template literals to build strings
// DONE: Get rid of XMLHttpRequest
// DONE: Modularize logic

import { MessageList } from './Messages.js'

const messageContainer = document.getElementById('messages')

fetch('https://finicky-lettuce-4404.twil.io/get-messages')
.then(response => response.json())
.then(data => {
  const currentMessages = new MessageList(data.messages, messageContainer)
  currentMessages.appendMessages()
})
