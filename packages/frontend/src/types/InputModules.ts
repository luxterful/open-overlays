import type { Component } from 'vue'

export interface InputModuleDefinition {
  [key: string]: { component: Component; data: any }
}
