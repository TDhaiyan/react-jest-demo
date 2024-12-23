import { MappingAlgorithm, theme } from 'antd'
import { uniq } from 'lodash-es'
import { create } from 'zustand'
import z, { string } from 'zod'


const themeConfig  = z.object({
    algorithm: z.array(string()),
    _algorithm: z.array(string()),
    primaryColor: string()
})
const themeOptionSchema = z.object({
  label: string(),
  value: string(),
});

const configStateSchema = z.object({
  themeConfig: themeConfig,
  themeOptions: z.array(themeOptionSchema),
})


const actionSchema = z.object({
    setTheme: z.function(z.tuple([z.string()]), z.void()),
    setCompactTheme: z.function(z.tuple([z.string()]), z.void()),
})

const algorithmMap: Record<string, MappingAlgorithm> = {
  default: theme.defaultAlgorithm,
  dark: theme.darkAlgorithm,
  compact: theme.compactAlgorithm
}

const useConfigStore = create<z.infer<typeof configStateSchema> & z.infer<typeof actionSchema> >()((set) => ({
  themeConfig: {
    _algorithm: ['default'],
    algorithm: [theme.defaultAlgorithm],
    primaryColor: '#03dac6'
  },
  themeOptions: [
    { label: 'Light', value: 'default' },
    { label: 'Dark', value: 'dark' },
    { label: 'Compact', value: 'compact' },
  ],
  setTheme: (v: string) => {
    set((state) => {
      const includesCompact = state.themeConfig._algorithm.includes('compact')
      const _algorithm = includesCompact ? [v, 'compact'] : [v]

      return {
        themeConfig: {
          _algorithm,
          algorithm: _algorithm.map((item) => algorithmMap[item]),
          primaryColor: state.themeConfig.primaryColor
        }
      }
    })
  },
  setCompactTheme: (v: string) => {
    set((state) => {
      const withoutCompact = state.themeConfig._algorithm.filter((item) => item !== 'compact')
      const _algorithm = uniq(v ? [...withoutCompact, 'compact'] : withoutCompact)

      return ({
        themeConfig: {
          _algorithm,
          algorithm: _algorithm.map((item) => algorithmMap[item]),
          primaryColor: state.themeConfig.primaryColor
        }
      })
    })
  }
}))

export default useConfigStore
