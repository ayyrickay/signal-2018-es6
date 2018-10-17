export class MessageList {
  constructor(list, targetNode) {
    this.list = list
    this.targetNode = targetNode
  }

  createParagraph (text, newClass = 'body') {
    const pNode = document.createElement('p')
    const textNode = document.createTextNode(text)
    pNode.appendChild(textNode)
    pNode.classList.add(newClass)
    return pNode
  }

  appendMessage ({ sid, date_sent, body }) {
    const newDiv = document.createElement('div')
    newDiv.classList.add('message-container')
    const messageDate = new Date(date_sent)

    newDiv.appendChild(this.createParagraph(sid, 'sid'))
    newDiv.appendChild(this.createParagraph(`Message sent on ${messageDate.getMonth() + 1}-${messageDate.getDate()}-${messageDate.getYear()}`, 'date'))
    newDiv.appendChild(this.createParagraph(body, 'body'))
    this.targetNode.append(newDiv)
  }

  appendMessages () {
    this.list.forEach(message => {
      this.appendMessage(message)
    })
  }
}
