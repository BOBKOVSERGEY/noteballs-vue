<script setup>
  import {ref} from "vue";

  const showMobileNav = ref(false);
</script>

<template>
  <nav
      class="navbar is-success"
      role="navigation"
      aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <a class="navbar-item is-size-4 is-family-monospace"  href="/">
          NoteBalls
        </a>

        <a
            role="button"
            class="navbar-burger"
            :class="{ 'is-active' : showMobileNav }"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">

        <div class="navbar-end">
          <RouterLink
              :to="{name: 'Notes'}"
              class="navbar-item"
              active-class="is-active"
          >
            Notes
          </RouterLink>
          <RouterLink
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