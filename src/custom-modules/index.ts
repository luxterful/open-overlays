import TwitchChatVue from './TwitchChat.vue'

export default {
  'twitch-chat': {
    data: {
      value: { message: String, user: String },
      backlog: Array<{ message: String; user: String }>,
    },
    component: TwitchChatVue,
  },
}
