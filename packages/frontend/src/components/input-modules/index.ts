import BoolInputModule from './BoolInputModule.vue'
import TextInputModule from './TextInputModule.vue'
import MultilineTextInputModule from './MultilineTextInputModule.vue'
import NumberInputModule from './NumberInputModule.vue'

import type { InputModuleDefinition } from '@/types/InputModules'

export default {
  text: {
    data: {
      value: String,
    },
    component: TextInputModule,
  },
  'multiline-text': {
    data: {
      value: String,
    },
    component: MultilineTextInputModule,
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
