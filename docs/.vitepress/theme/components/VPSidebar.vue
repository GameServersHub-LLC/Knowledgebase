<script lang="ts" setup>
import { useScrollLock } from "@vueuse/core";
import { inBrowser } from "vitepress";
import { ref, watch } from "vue";
import { useSidebar } from "../composables/sidebar";
import VPSidebarItem from "./VPSidebarItem.vue";

const { sidebarGroups, hasSidebar } = useSidebar();

const props = defineProps<{
  open: boolean;
}>();

// a11y: focus Nav element when menu has opened
const navEl = ref<HTMLElement | null>(null);
const isLocked = useScrollLock(inBrowser ? document.body : null);

watch(
  [props, navEl],
  () => {
    if (props.open) {
      isLocked.value = true;
      navEl.value?.focus();
    } else isLocked.value = false;
  },
  { immediate: true, flush: "post" }
);
</script>

<template>
  <aside
    v-if="hasSidebar"
    class="VPSidebar"
    :class="{ open }"
    ref="navEl"
    @click.stop
  >
    <div class="curtain" />

    <nav
      class="nav"
      id="VPSidebarNav"
      aria-labelledby="sidebar-aria-label"
      tabindex="-1"
    >
      <span class="visually-hidden" id="sidebar-aria-label">
        Sidebar Navigation
      </span>

      <slot name="sidebar-nav-before" />

      <div v-for="item in sidebarGroups" :key="item.text" class="group">
        <VPSidebarItem :item="item" :depth="0" />
      </div>

      <slot name="sidebar-nav-after" />
    </nav>
  </aside>
</template>

<style scoped>
.VPSidebar {
  position: fixed;
  top: var(--vp-layout-top-height, 0px);
  bottom: 0;
  left: 0;
  z-index: var(--vp-z-index-sidebar);
  padding: 32px 32px 96px;
  width: calc(100vw - 64px);
  max-width: 320px;
  background-color: var(--vp-sidebar-bg-color);
  opacity: 0;
  box-shadow: var(--vp-c-shadow-3);
  overflow-x: hidden;
  overflow-y: auto;
  transform: translateX(-100%);
  transition: opacity 0.5s, transform 0.25s ease;
  overscroll-behavior: contain;
}

.VPSidebar.open {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
  transition: opacity 0.25s, transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.dark .VPSidebar {
  box-shadow: var(--vp-shadow-1);
}

@media (min-width: 960px) {
  .VPSidebar {
    padding-top: var(--vp-nav-height);
    width: var(--vp-sidebar-width);
    max-width: 100%;
    background-color: var(--vp-sidebar-bg-color);
    opacity: 1;
    visibility: visible;
    box-shadow: none;
    transform: translateX(0);
  }
}

@media (min-width: 1440px) {
  .VPSidebar {
    padding-left: max(
      32px,
      calc((100% - (var(--vp-layout-max-width) - 64px)) / 2)
    );
    width: calc(
      (100% - (var(--vp-layout-max-width) - 64px)) / 2 + var(--vp-sidebar-width) -
        32px
    );
  }
}

@media (min-width: 960px) {
  .curtain {
    position: sticky;
    top: -64px;
    left: 0;
    z-index: 1;
    margin-top: calc(var(--vp-nav-height) * -1);
    margin-right: -32px;
    margin-left: -32px;
    height: var(--vp-nav-height);
    background-color: var(--vp-sidebar-bg-color);
  }
}

.nav {
  outline: 0;
}

.group + .group {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 10px;
}

@media (min-width: 960px) {
  .group {
    padding-top: 10px;
    width: calc(var(--vp-sidebar-width) - 64px);
  }
}

.VPSidebar::-webkit-scrollbar {
  width: 8px; /* Narrow scrollbar for a minimalistic look */
}

.VPSidebar::-webkit-scrollbar-track {
  background: transparent; /* Keeps the track clean and unobtrusive */
}

.VPSidebar::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0); /* Initial state is fully transparent */
  border-radius: 4px; /* Rounded corners for the thumb */
  transition: background-color 0.8s cubic-bezier(0.33, 1, 0.68, 1); /* Smooth transition for background color changes */
}

.VPSidebar:hover::-webkit-scrollbar-thumb {
  background-color: rgba(
    0,
    0,
    0,
    0.2
  ); /* Appears only on hover with semi-transparency */
}

.VPSidebar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(
    0,
    0,
    0,
    0.4
  ); /* Darker on thumb hover for better visibility */
}

/* Scrollbar styling for Firefox */
.VPSidebar {
  scrollbar-width: thin; /* 'auto' or 'thin' for minimal visual impact */
  scrollbar-color: rgba(0, 0, 0, 0) transparent; /* Initially transparent, invisible scrollbar */
}

.VPSidebar:hover {
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent; /* Thumb appears on hover */
}
</style>
