import { z } from 'zod'

const dimension = z.number().nonnegative().finite().optional()

const configModule = z.object({
  displayText: z.string(),
  type: z.string(),
  dimensions: z.object({ rows: dimension, cols: dimension }).optional()
})

const file = z.object({
  modules: z.record(configModule)
})

export type ConfigFile = z.infer<typeof file>

export function parseConfig(fileContent: ConfigFile): ConfigFile {
  return file.parse(fileContent)
}
