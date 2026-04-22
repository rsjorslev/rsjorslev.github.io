import { ref, computed, watch } from 'vue'

const STORAGE_KEY = 'konsolidering-personas'

const personas = [
  { id: 'arkitekt', label: 'Arkitekt', icon: '🏗️' },
  { id: 'driftsleder', label: 'Driftsleder', icon: '⚙️' },
  { id: 'sikkerhed', label: 'Sikkerhedsansvarlig', icon: '🛡️' },
  { id: 'leder', label: 'IT-leder', icon: '📊' },
]

// Shared reactive state — singleton across all components
const selected = ref([])

// Load from localStorage on first import
if (typeof window !== 'undefined') {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) selected.value = JSON.parse(stored)
  } catch {}
}

// Persist to localStorage on change
if (typeof window !== 'undefined') {
  watch(selected, (val) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    } catch {}
  }, { deep: true })
}

export function usePersona() {
  function toggle(id) {
    const idx = selected.value.indexOf(id)
    if (idx >= 0) selected.value.splice(idx, 1)
    else selected.value.push(id)
  }

  function reset() {
    selected.value = []
  }

  function matchesPersona(pagePersonas) {
    if (!selected.value.length) return true
    if (!pagePersonas || !pagePersonas.length) return true
    return selected.value.some(s => pagePersonas.includes(s))
  }

  const selectedLabels = computed(() =>
    selected.value.map(id => personas.find(p => p.id === id)?.label).filter(Boolean).join(', ')
  )

  const isFiltering = computed(() => selected.value.length > 0)

  return {
    personas,
    selected,
    selectedLabels,
    isFiltering,
    toggle,
    reset,
    matchesPersona,
  }
}
