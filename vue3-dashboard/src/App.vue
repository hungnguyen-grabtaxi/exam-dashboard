<template>
    <a-config-provider
        :theme="{
            token: {
                colorPrimary: '#00b14f',
                colorInfo: '#00a5cf',
            },
        }"
    >
        <component :is="Layout">
            <router-view
                v-slot="{ Component }"
            >
                <suspense :key="currentRoute.path">
                    <!-- Start: Component loading state via #fallback slot -->
                    <template #fallback>
                        <ContentLoader />
                    </template>
                    <!-- End: Component loading state via #fallback slot -->

                    <div>
                        <component :is="Component" />
                    </div>
                </suspense>
            </router-view>
        </component>
    </a-config-provider>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ContentLoader from '@/components/ContentLoader.vue';

const currentRoute = computed(() => useRoute());
const Layout = computed(() => {
    const layout = currentRoute.value.meta?.layout;
    if (layout) {
        return layout;
    }
    return 'Empty';
});
</script>

<style lang="scss">
@import 'nprogress/nprogress.css';
</style>

