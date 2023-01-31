<template>
    <div :class="styles.contact">
        <Container>
            <div :class="styles.contact1">Contact page</div>
        </Container>
    </div>
</template>

<script>
import styles from "./Contact.module.scss"
import Container from "@/components/UI/Container/Container.vue";

export default {
    name: "Contact",
    components: {Container},
    data() {
        return {
            styles
        }
    }
}
</script>