<template>
<Navbar/>
  <router-view v-slot="{Component}">
    <Transition name="router">
      <component :is="Component"/>
    </Transition>
  </router-view>
</template>
  
<script>
import Navbar from "@/components/Sections/Navbar/Navbar";


export default {
  components: { Navbar },
    
};
</script>
