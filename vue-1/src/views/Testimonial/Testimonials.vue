<template>
    <div :class="styles.testimonials">
        <Container>
            <div :class="styles.testimonials1">Testimonials page</div>
        </Container>
    </div>
</template>

<script>
import styles from "./Testimonials.module.scss";
import Container from "@/components/UI/Container/Container.vue";

export default {
    name: "Testimonials",
    components: {Container},
    data () {
        return {
            styles
        }
    }   
}
</script>