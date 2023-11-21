<template>
    <UnderConstruction />
</template>

<script lang="ts" setup>
import { useCommonStore } from "@/stores/common";

const commonStore = useCommonStore();
commonStore.setBreadcrum([
    {
        label: "Support Tickets",
    },
]);

import UnderConstruction from '@/components/UnderConstruction.vue';
</script>
