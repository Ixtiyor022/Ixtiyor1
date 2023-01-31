<template>
    <div :class="styles.what">
        <Container>
            <div :class="styles.what1">What page</div>
        </Container>
    </div>
</template>

<script>
import styles from "./What.module.scss";
import Container from "@/components/UI/Container/Container.vue";

export default {
    name: "What",
    components: {Container},
    data() {
        return {
            styles
        }
    }    
}
</script>