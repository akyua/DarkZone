import { ref, onMounted, watchEffect } from 'vue'

type Theme = 'light' | 'dark'

export function useTheme() {
  const theme = ref<Theme>('light')

  const applyTheme = (newTheme: Theme) => {
    document.documentElement.classList.remove('light-theme', 'dark-theme')
    document.documentElement.classList.add(`${newTheme}-theme`)
    document.documentElement.dataset.theme = newTheme
  }

  const toggleTheme = () => {
    const newTheme = theme.value === 'light' ? 'dark' : 'light'
    theme.value = newTheme
    localStorage.setItem('theme', newTheme)
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    
    if (savedTheme) {
      theme.value = savedTheme
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      theme.value = prefersDark ? 'dark' : 'light'
    }
  })

  watchEffect(() => {
    applyTheme(theme.value)
  })

  return {
    theme,
    toggleTheme,
  }
}