<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: '{{ name }}'
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    .push-main {
        padding: 0;
    }

    .push-header {
        padding: 0;
    }

    .status-bar {
        width: 100vw;
        height: 20px;
        position: fixed;
        bottom: 0;
        padding: 0 20px;

        background: white;

        color: white;
        font-size: 12px;
    }

    .el-menu-demo {
        text-align: center;

    }

    .status-bar a {
        color: white;
    }
</style>
