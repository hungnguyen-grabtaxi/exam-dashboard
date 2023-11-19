<template>
    <UnderConstruction />
</template>

<script lang="ts" setup>
import UnderConstruction from '@/components/UnderConstruction.vue';
import { useCommonStore } from "@/stores/common";

const commonStore = useCommonStore();
commonStore.setBreadcrum([
    {
        label: "Dashboard",
    },
]);
</script>
