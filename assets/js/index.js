// TODO: Use more semantic variable declarations
// TODO: Rewrite class declaration
// TODO: Use consistent function notation
// TODO: Add default parameters to functions
// TODO: destructure objects
// TODO: Use template literals to build strings
// TODO: Get rid of XMLHttpRequest
// TODO: Modularize logic

var messageContainer = document.getElementById('messages')

function MessageList (list, targetNode) {
  this.list = list
  this.targetNode = targetNode
}

MessageList.prototype.appendMessages = function() {
    for (var i = 0; i < this.list.length - 1; i++) {
      this.appendMessage(this.list[i])
    }
}

MessageList.prototype.createParagraph = function(text, newClass) {
  var pNode = document.createElement('p')
  var textNode = document.createTextNode(text)
  pNode.appendChild(textNode)
  pNode.classList.add(newClass)
  return pNode
}

MessageList.prototype.appendMessage = function(message) {
  var newDiv = document.createElement('div')
  newDiv.classList.add('message-container')
  var messageDate = new Date(message.date_sent)

  newDiv.appendChild(this.createParagraph(message.sid, 'sid'))
  newDiv.appendChild(this.createParagraph("Message sent on " + (messageDate.getMonth() + 1) + "-" + messageDate.getDate() + '-' + messageDate.getYear(), 'date'))
  newDiv.appendChild(this.createParagraph(message.body, 'body'))
  this.targetNode.append(newDiv)
}

function reqListener () {
  var currentMessages = new MessageList(JSON.parse(this.responseText).messages, messageContainer)
  currentMessages.appendMessages()
}

var oReq = new XMLHttpRequest()
oReq.addEventListener("load", reqListener)
oReq.open("GET", "https://finicky-lettuce-4404.twil.io/get-messages")
oReq.send()
