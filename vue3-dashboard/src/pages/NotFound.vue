<template>
    <a-result
        title="Page Not Found"
        sub-title="Sorry, the page you visited does not exist."
        class="min-h-screen"
    >
        <template #icon>
            <NotFoundOnSpaces
                class="mb-[-50px]"
                style="font-size: 450px;"
            />
        </template>
        <template #extra>
            <a-button
                type="primary"
                @click="$router.push('/')"
            >
                Back Home
            </a-button>
        </template>
    </a-result>
</template>

<script lang="ts" setup>
import NotFoundOnSpaces from '@/components/icons/NotFoundOnSpaces.vue';
</script>
