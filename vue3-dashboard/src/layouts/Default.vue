<template>
    <a-layout>
        <a-layout-sider
            v-model:collapsed="collapsed"
            :style="{ background: '#fff' }"
            class="sidebar"
            :trigger="null"
            collapsible
        >
            <div class="logo">
                <router-link to="/">
                    <img
                        :src="grabLogoSVG"
                        alt="Grab"
                    >
                </router-link>
            </div>
            <a-menu
                :selected-keys="menuActiveRoutes"
                theme="light"
                mode="inline"
            >
                <a-menu-item
                    key="dashboard"
                >
                    <router-link to="/">
                        <pie-chart-outlined />
                        <span>Dashboard</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item
                    key="automations"
                >
                    <router-link to="/automations">
                        <cloud-upload-outlined />
                        <span>Automations</span>
                    </router-link>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout
            class="transition-all"
        >
            <a-layout-header :style="{ background: '#fff', padding: 0 }">
                <div class="flex justify-between">
                    <div>
                        <menu-unfold-outlined
                            v-if="collapsed"
                            class="menu-button"
                            @click="onToggleSidebar"
                        />
                        <menu-fold-outlined
                            v-else
                            class="menu-button"
                            @click="onToggleSidebar"
                        />
                    </div>
                    <div class="user-profile">
                        <span>Admin</span>
                        <a-button
                            shape="circle"
                            size="small"
                        >
                            <template #icon>
                                <logout-outlined />
                            </template>
                        </a-button>
                    </div>
                </div>
            </a-layout-header>
            <a-layout-content
                id="layout-content"
                class="pt-[16px] px-[16px] pb-[80px]"
            >
                <a-breadcrumb v-if="breadcrumItems && breadcrumItems.length">
                    <a-breadcrumb-item>
                        <router-link to="/">
                            <home-outlined />
                        </router-link>
                    </a-breadcrumb-item>
                    <a-breadcrumb-item
                        v-for="(item, index) in breadcrumItems"
                        :key="item.label + item.url + index"
                    >
                        <router-link
                            v-if="item.url"
                            :to="item.url"
                        >
                            {{ item.label }}
                        </router-link>
                        <template v-else>
                            {{ item.label }}
                        </template>
                    </a-breadcrumb-item>
                </a-breadcrumb>
                <div class="relative bg-[#fff] min-h-screen mt-[16px]">
                    <slot />
                </div>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>


<script lang="ts" setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import {
    PieChartOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    CloudUploadOutlined,
    HomeOutlined,
    LogoutOutlined,
} from '@ant-design/icons-vue';
import { useCommonStore } from '@/stores/common';
import grabLogoSVG from '@/assets/images/grab-logo.svg';

const commonStore = useCommonStore();
const commonStoreRef = storeToRefs(commonStore);
const breadcrumItems = commonStoreRef.breadcrumItems;

const collapsed = ref<boolean>(false);
const currentRoute = computed(() => useRoute());
const menuActiveRoutes = computed(() => [currentRoute.value.meta.menu]);

function onToggleSidebar() {
    collapsed.value = !collapsed.value;

    const rootElement = document.querySelector(':root') as HTMLElement;
    if (collapsed.value) {
        rootElement.style.setProperty('--sidebar-width', '80px');
    } else {
        rootElement.style.setProperty('--sidebar-width', '200px');
    }
}
</script>

<style lang="scss" scoped>
.menu-button {
    font-size: 18px;
    line-height: 64px;
    padding: 0 15px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
        color: #00b14f;
    }
}

.logo {
    margin: 15px 0;
    text-align: center;
    overflow: hidden;
    img {
        width: 120px;
        height: 47px;
        object-fit: cover;
        object-position: left;
        transition: all 0.15s ease-in-out;
        transition-delay: 0.05s;
    }
}

.user-profile {
    margin-left: auto;
    padding-right: 15px;
    > span {
        margin-right: 10px;
    }
    > button span {
        color: #000;
    }
}

.sidebar {
    &.ant-layout-sider-collapsed {
        .logo img {
            width: 34px;
        }
    }
}

.site-layout .site-layout-background {
    background: #fff;
}
</style>
