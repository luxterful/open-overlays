export interface Message {
  sender: string
  content: string
  id: string
  color: string
}

export interface ComponentData {
  featuredMessage: null | Message
  backlog: Array<Message>
}
