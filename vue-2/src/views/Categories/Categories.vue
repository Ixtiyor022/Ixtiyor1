<template>
    <div :class="styles.categories">
        <Container>
            <div :class="styles.categories_categories1">
                Categories Page
            </div>
        </Container>
    </div>
</template>

<script>
import styles from "./Categories.module.scss"
import Container from "@/components/UI/Container/Container.vue";

export default {
    name: "Categories",
    components: {Container},
    data() {
        return {
            styles
        }
    }
}
</script>