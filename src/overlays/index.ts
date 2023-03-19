import { defineAsyncComponent, type Component } from 'vue'

export default {
  points: {
    displayName: 'Points',
    operatorCompontent: defineAsyncComponent(() => import('./points/OperatorView.vue')),
    embedCompontent: defineAsyncComponent(() => import('./points/EmbedView.vue'))
  },
  'fact-check': {
    displayName: 'Fact Check',
    operatorCompontent: defineAsyncComponent(() => import('./fact-check/OperatorView.vue')),
    embedCompontent: defineAsyncComponent(() => import('./fact-check/EmbedView.vue'))
  },
  'social-rotator': {
    displayName: 'Social Rotator',
    operatorCompontent: defineAsyncComponent(() => import('./social-rotator/OperatorView.vue')),
    embedCompontent: defineAsyncComponent(() => import('./social-rotator/EmbedView.vue'))
  },
  'featured-chat-messages': {
    displayName: 'Featured Chat Messages',
    operatorCompontent: defineAsyncComponent(
      () => import('./featured-chat-messages/OperatorView.vue')
    ),
    embedCompontent: defineAsyncComponent(() => import('./featured-chat-messages/EmbedView.vue'))
  },
  test: {
    displayName: 'test',
    operatorCompontent: defineAsyncComponent(() => import('./test/OperatorView.vue')),
    embedCompontent: defineAsyncComponent(() => import('./test/EmbedView.vue'))
  }
} as {
  [key: string]: { displayName: string; operatorCompontent: Component; embedCompontent: Component }
}
