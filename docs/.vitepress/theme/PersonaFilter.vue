<template>
  <div class="persona-filter">
    <div class="pf-header">
      <span class="pf-label">Vis indhold for:</span>
      <div class="pf-buttons">
        <button
          v-for="p in personas"
          :key="p.id"
          :class="['pf-btn', { active: selected.includes(p.id) }]"
          @click="toggle(p.id)"
        >
          <span class="pf-icon">{{ p.icon }}</span>
          {{ p.label }}
        </button>
        <button class="pf-btn pf-reset" @click="reset" v-if="isFiltering">
          ✕ Nulstil
        </button>
      </div>
    </div>
    <p class="pf-hint" v-if="isFiltering">
      Viser indhold relevant for: <strong>{{ selectedLabels }}</strong>
    </p>
  </div>
</template>

<script setup>
import { usePersona } from './usePersona.js'

const { personas, selected, selectedLabels, isFiltering, toggle, reset } = usePersona()
</script>

<style scoped>
.persona-filter {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 16px 20px;
  margin: 16px 0 24px;
}
.pf-header {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.pf-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  white-space: nowrap;
}
.pf-buttons { display: flex; gap: 8px; flex-wrap: wrap; }
.pf-btn {
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
  gap: 4px;
}
.pf-btn:hover { border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1); }
.pf-btn.active {
  background: var(--vp-c-brand-1);
  color: #fff;
  border-color: var(--vp-c-brand-1);
}
.pf-reset {
  background: transparent;
  color: var(--vp-c-text-3);
  border-style: dashed;
}
.pf-icon { font-size: 14px; }
.pf-hint {
  font-size: 12px;
  color: var(--vp-c-text-3);
  margin-top: 10px;
}
</style>
