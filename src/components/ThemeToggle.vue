<template>
  <button 
    @click="toggleTheme" 
    class="theme-toggle-button" 
    :aria-label="`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`"
  >
    <Transition name="fade-rotate" mode="out-in">
      <Moon v-if="theme === 'light'" class="icon" />
      <Sun v-else class="icon" />
    </Transition>
  </button>
</template>

<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next';
import { useTheme } from '@/hooks/useTheme';

const { theme, toggleTheme } = useTheme();
</script>

<style lang="scss" scoped>
.theme-toggle-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  &:focus-visible {
    outline: 2px solid var(--link-hover-color);
    outline-offset: 2px;
  }
}

.icon {
  width: 24px;
  height: 24px;
  color: var(--text-color);
  stroke-width: 1.75; 
}

.fade-rotate-enter-active,
.fade-rotate-leave-active {
  transition: all 0.25s ease-in-out;
}

.fade-rotate-enter-from {
  opacity: 0;
  transform: rotate(-30deg);
}

.fade-rotate-leave-to {
  opacity: 0;
  transform: rotate(30deg);
}
</style>
