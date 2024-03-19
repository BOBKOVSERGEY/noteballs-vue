<script setup>
  import {ref} from "vue";

  const showMobileNav = ref(false);
</script>

<template>
  <nav
      class="navbar is-success"
      role="navigation"
      aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <RouterLink class="navbar-item is-size-4 is-family-monospace"  :to="{name: 'Notes'}">
          NoteBalls
        </RouterLink>

        <a
            @click.prevent="showMobileNav = !showMobileNav"
            class="navbar-burger"
            :class="{ 'is-active' : showMobileNav }"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            role="button"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
          class="navbar-menu"
          :class="{ 'is-active' : showMobileNav }"
      >

        <div class="navbar-end">
          <RouterLink
              @click="showMobileNav = false"
              :to="{name: 'Notes'}"
              class="navbar-item"
              active-class="is-active"
          >
            Notes
          </RouterLink>
          <RouterLink
              @click="showMobileNav = false"
              :to="{name: 'Stats'}"
              class="navbar-item"
              active-class="is-active"
          >
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>

</template>