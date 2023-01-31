<template>
    <div :class="styles.shop">
        <div :class="styles.shop_shop1">
               
            </div>
        <Container>
           aa
        </Container>
    </div>
</template>

<script>
import styles from "./Shop.module.scss"
import Container from "@/components/UI/Container/Container.vue";

export default {
    name: "Shop",
    components: {Container},
    data() {
        return {
            styles
        }
    }
}
</script>