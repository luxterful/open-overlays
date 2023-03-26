import type { Component } from 'vue'
import BoolInputModule from './BoolInputModule.vue'
import TextInputModule from './TextInputModule.vue'
import NumberInputModule from './NumberInputModule.vue'

export default {
  text: {
    data: {
      value: String,
    },
    component: TextInputModule,
  },
  bool: {
    data: {
      value: Boolean,
    },
    component: BoolInputModule,
  },
  number: {
    data: {
      value: Number,
    },
    component: NumberInputModule,
  },
} as InputModuleDefinition

interface InputModuleDefinition {
  [key: string]: { component: Component; data: any }
}
