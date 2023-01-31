<template>
  <nav :class="styles.nav">
    <Container>
      <div :class="styles.nav_body">
        <RouterLink :class="styles.nav_logo" to="/">
          <img src="@/assets/img/george..svg" alt="Error"/>
        </RouterLink>
        <ul :class="styles.nav_menu">
          <li :class="styles.nav_menu_item" v-for="item in menu" :key="item.id">
            <RouterLink
              v-if="item.type === 'link'"
              :active-class="styles.active" 
              :class="styles.nav_menu_link"
              :to="item.url"
            > 
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </Container>
  </nav>
</template>

<script>
import styles from "./Navbar.module.scss";
import Container from "@/components/UI/Container/Container.vue";
import {store} from "@/store"

export default {
  name: "Navbar",
  components: { Container },

  data() {
    return {
      styles,
    };
  },

};
</script>
