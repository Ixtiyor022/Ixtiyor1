<template>
  <div :class="styles.nav">
    <Container>
        <div :class="styles.nav_body">
            <RouterLink :class="styles.nav_logo" to="/">
                <img src="@/assets/img/CombinedShape.svg" alt="Logo">
            </RouterLink>
            <ul :class="styles.nav_menu">
                <li :class="styles.nav_menu_item" v-for="item in menu">
                    <RouterLink
                        v-if="item.type === 'link'"
                        :class="styles.nav_menu_link"
                        :to="item.url"
                    >
                        {{ item.name }}
                    </RouterLink>
                </li>
            </ul>       
            <div :class="styles.nav_btn2">Buy template</div>
            <div :class="styles.nav_button1">
                <img :class="styles.nav_btn3" src="@/assets/img/Vector.svg" alt="Cart">
                <span :class="styles.nav_span">Cart</span>
                <span :class="styles.nav_btn1">0</span>
            </div>
        </div>
    </Container>
  </div>
</template>

<script>
import styles from "./Navbar.module.scss";  
import Container from "../UI/Container/Container.vue";
import Button from "../UI/Button/Button.vue";
import store  from "@/store";

export default {
    name: "Navbar",
    components: {Container, Button},
    computed: {
        menu: () => store?.state?.nav?.menu
    },
    data() {
        return {
            styles
        }
    }
}
</script>
