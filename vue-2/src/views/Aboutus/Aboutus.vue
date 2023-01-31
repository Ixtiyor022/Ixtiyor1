<template>
    <div :class="styles.aboutus">
        <Container>
            <div :class="styles.aboutus_aboutus1">
                Aboutus Page
            </div>
        </Container>
    </div>
</template>

<script>

import styles from "./Aboutus.module.scss";
import Container from "@/components/UI/Container/Container.vue";

export default {
    name: "Aboutus",
    components: {Container},
    data() {
        return {
            styles
        }
    }    
}
</script>