<template>
    <div>
        <el-container>
            <el-aside width="202px" style="overflow-x: hidden">
                <el-menu style="height: 100vh; width: 200px" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>菜单1</span>
                        </template>
                        <el-menu-item index="/main">子菜单11</el-menu-item>
                        <el-menu-item index="/main">子菜单12</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>菜单2</span>
                        </template>
                        <el-submenu index="2-1">
                            <template slot="title">子菜单21</template>
                            <el-menu-item index="/main">子菜单21</el-menu-item>
                        </el-submenu>
                    </el-submenu>

                    <el-menu-item index="4" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">菜单3</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>

            <el-main width="600px" style="margin: 0; padding: 0">
                <div id="title">
                    <el-button icon="el-icon-minus" @click="handleMin"></el-button>
                    <el-button icon="el-icon-close" @click="handleClose"></el-button>
                </div>
                <keep-alive>
                    <router-view style="margin: 10px 50px 10px"></router-view>
                </keep-alive>
            </el-main>
        </el-container>

        <el-badge id="log" :value="eventCount" :hidden="!eventCount" :max="99">
            <el-button id="log-button" icon="el-icon-message" @click="handleShowLog"></el-button>
        </el-badge>

        <el-dialog id="logDialog" title="日志" :visible.sync="isShowLog" width="80%">
            <el-input type="textarea" :clearable="false" :readonly="true" size="mini"
                      :autosize="{ minRows: 25, maxRows: 25}"
                      :value="logger">
            </el-input>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: '{{ name }}',
        data() {
            return {
                isShowLog: false
            }
        },
        computed: {
            eventCount() {
                return this.$store.state.log.eventCount;
            },
            logger() {
                return this.$store.state.log.logging;
            }
        },
        methods: {
            handleShowLog() {
                this.isShowLog = true;
                this.$store.commit('setEventCount', 0);
            },
            handleClose(){
              let currentWindows = this.$electron.remote.BrowserWindow.getFocusedWindow();
              currentWindows.close()
            },
            handleMin(){
                let currentWindows = this.$electron.remote.BrowserWindow.getFocusedWindow();
                currentWindows.minimize()
            }
        },
        watch:{
            eventCount(newValue, oldValue){
                if (newValue > oldValue){
                    this.isShowLog = true;
                }
            }
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        border-radius: 0 !important;
    }

    #title {
        width: 100%;
        height: 30px;
        /*background-color: #3a8ee6;*/
        text-align: right;

        position: relative;
        top: 0;
        left: 0;
        -webkit-app-region: drag
    }

    #title .el-button {
        line-height: 10px;
        padding: 10px;
        margin: 0;
        border: none;

        -webkit-app-region: no-drag;
    }

    #log {

        /*background-color: #3a8ee6;*/

        bottom: 0;
        left: 0;
        position: fixed;
        z-index: 1000;
        padding: 2px;
    }

    #log-button {
        border: 0 !important;
        padding: 5px !important;
        margin: 0 10px 10px !important;
    }

    #logDialog .el-dialog__header {
        display: none;
    }

    #logDialog .el-dialog__body {
        padding: 0;
    }

    #logDialog textarea {
        background-color: #000;
        opacity: 0.8;
        color: #fff;
        border-color: #409EFF;
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
