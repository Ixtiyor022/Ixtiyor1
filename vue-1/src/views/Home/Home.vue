<template>
  <div :class="styles.home">
    <Container>
      <div :class="styles.home1">Home page</div>
    </Container>
  </div>
</template>

<script>
import styles from "./Home.module.scss";
import Container from "@/components/UI/Container/Container.vue";

export default {
  name: "Home",
  components: { Container },
  data() {
    return {
      styles,
    };
  },
};
</script>
