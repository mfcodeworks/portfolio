<template>
    <Navbar :links="links" />
    <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue';
import { Link } from '@/types/links';

export default defineComponent({
    components: {
        Navbar
    },
    data: () => ({
        // TODO: Auto-generate links from router file
        links: [
            {
                name: 'Dashboard',
                path: '/'
            }
        ] as Link[]
    })
});
</script>
