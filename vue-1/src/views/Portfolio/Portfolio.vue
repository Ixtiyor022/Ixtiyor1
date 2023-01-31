><template>
    <div :class="styles.portfolio">
        <Container>
            <div :class="styles.portfolio1">Portfolio page</div>
        </Container>
    </div>
</template>

<script>
import styles from "./Portfolio.module.scss"
import Container from "@/components/UI/Container/Container.vue";

export default {
    name: "Portfolio",
    components: {Container},
    data() {
        return {
            styles
        }
    }    
}
</script>