import { defineAsyncComponent, type Component } from 'vue'
import pointsConfig from './points/config.json'
import factCheckConfig from './fact-check/config.json'
import socialRotatorConfig from './social-rotator/config.json'
import twitchChatConfig from './featured-chat-messages/config.json'

export default {
  points: {
    displayName: 'Points',
    operatorCompontent: pointsConfig,
    embedCompontent: defineAsyncComponent(() => import('./points/EmbedView.vue')),
  },
  'fact-check': {
    displayName: 'Fact Check',
    operatorCompontent: factCheckConfig,
    embedCompontent: defineAsyncComponent(() => import('./fact-check/EmbedView.vue')),
  },
  'social-rotator': {
    displayName: 'Social Rotator',
    operatorCompontent: socialRotatorConfig,
    embedCompontent: defineAsyncComponent(() => import('./social-rotator/EmbedView.vue')),
  },
  'featured-chat-messages': {
    displayName: 'Featured Chat Messages',
    operatorCompontent: twitchChatConfig,
    embedCompontent: defineAsyncComponent(() => import('./featured-chat-messages/EmbedView.vue')),
  },
} as OverlayDefinition

interface OverlayDefinition {
  [key: string]: { displayName: string; operatorCompontent: Component; embedCompontent: Component }
}
