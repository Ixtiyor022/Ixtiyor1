<template>
  <div :class="styles.buyersguides">
    <Container>
        <div :class="styles.buyersguides_buyersguides1">
            Buyersguides Page
        </div>
    </Container>
  </div>
</template>

<script>
import styles from "./Buyersguides.module.scss"
import Container from "@/components/UI/Container/Container.vue";

export default {
    name: "Buyersguides",
    components: {Container},
    data() {
        return {
            styles
        }
    }
}
</script>