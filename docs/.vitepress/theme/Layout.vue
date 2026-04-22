<template>
  <DefaultTheme.Layout>
    <template #doc-before>
      <PersonaFilter />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import PersonaFilter from './PersonaFilter.vue'
import { usePersona } from './usePersona.js'
import { watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vitepress'

const { selected } = usePersona()

// Phase persona mapping — mirrors frontmatter
const phasePersonas = {
  '01-netvaerk': ['arkitekt', 'driftsleder'],
  '02-hci': ['arkitekt', 'driftsleder'],
  '03-storage': ['arkitekt', 'driftsleder'],
  '04-mikrosegmentering': ['arkitekt', 'sikkerhed'],
  '05-iam': ['sikkerhed', 'leder'],
  '06-iac': ['arkitekt', 'driftsleder'],
  '07-standardisering': ['driftsleder', 'leder'],
  '08-governance': ['leder'],
  '09-dr-test': ['arkitekt', 'driftsleder', 'sikkerhed', 'leder'],
  '10-onboarding': ['arkitekt', 'driftsleder', 'sikkerhed', 'leder'],
}

function getPhaseKey(href) {
  if (!href) return null
  for (const key of Object.keys(phasePersonas)) {
    if (href.includes(key)) return key
  }
  return null
}

function filterSidebar() {
  if (typeof document === 'undefined') return

  // Find ALL links in the sidebar
  const sidebar = document.querySelector('.VPSidebar')
  if (!sidebar) return

  const allLinks = sidebar.querySelectorAll('a')

  allLinks.forEach(link => {
    const href = link.getAttribute('href')
    const phaseKey = getPhaseKey(href)
    if (!phaseKey) return // Not a phase link, leave visible

    const personas = phasePersonas[phaseKey]
    // Walk up to find the containing list item (.VPSidebarItem or li)
    const listItem = link.closest('.VPSidebarItem') || link.closest('li') || link.parentElement

    if (!selected.value.length) {
      // No filter active — show everything
      listItem.style.display = ''
      return
    }

    const matches = selected.value.some(s => personas.includes(s))
    listItem.style.display = matches ? '' : 'none'
  })
}

// Observe sidebar DOM changes (VitePress re-renders sidebar on navigation)
let observer = null

function setupObserver() {
  if (typeof document === 'undefined') return

  const sidebar = document.querySelector('.VPSidebar')
  if (!sidebar) {
    // Sidebar not yet in DOM, retry
    setTimeout(setupObserver, 200)
    return
  }

  // Disconnect old observer if exists
  if (observer) observer.disconnect()

  observer = new MutationObserver(() => {
    filterSidebar()
  })

  observer.observe(sidebar, { childList: true, subtree: true })
  filterSidebar()
}

// Re-filter on persona change
watch(selected, () => {
  nextTick(filterSidebar)
}, { deep: true })

// Re-filter on page navigation
const router = useRouter()
watch(() => router.route.path, () => {
  nextTick(() => {
    setTimeout(filterSidebar, 100)
  })
})

onMounted(() => {
  setTimeout(setupObserver, 300)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
