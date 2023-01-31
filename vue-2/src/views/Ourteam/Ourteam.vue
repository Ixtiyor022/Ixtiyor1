<template>
    <div :class="styles.ourteam">
        <Container>
            <div :class="styles.ourteam_ourteam1">
                Ourteam Page
            </div>
        </Container>
    </div>
</template>

<script>
import styles from "./Ourteam.module.scss"
import Container from "@/components/UI/Container/Container.vue";

export default {
    name: "Ourteam",
    components: {Container},
    data() {
        return {
            styles
        }
    }
}
</script>