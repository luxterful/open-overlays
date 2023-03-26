import BoolInputModule from './BoolInputModule.vue'
import TextInputModule from './TextInputModule.vue'

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
    component: TextInputModule,
  },
  testList: {
    data: {
      value: Array<String>,
    },
    component: TextInputModule,
  },
}
