import request from '../request'

const https = require('https');
const http = require('http');
const qs = require('querystring');
const {URL} = require('url');

// 获取当前时间的字符串
function nowTimeString() {
    let d = new Date();
    return (d.getFullYear()) + "-" +
           (d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1) + "-" +
           (d.getDate() < 10 ? '0' + d.getDate() : d.getDate()) + " " +
           (d.getHours() < 10 ? '0' + d.getHours() : d.getHours()) + ":" +
           (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()) + ":" +
           (d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds());
}

const state = {
    // dnsdun 账号类型
    logging: '',
    eventCount: 0,          // 事件数量，用于显示通知
};


// 修改属性
const mutations = {
    // 添加日志
    log(state, line){
        state.logging += `[+] ${nowTimeString()} | ${line}\r\n`
    },

    // 添加数组中的元素作为每行的输出
    logs(state, list){
        state.logging += list.map(value=>{return '[+] ' +  nowTimeString() + ' | ' + String(value)}).join('\r\n') + '\r\n'
    },

    // 同log
    logLine(state, line) {
        state.logging += `[+] ${nowTimeString()} | ${line}\r\n`
    },

    // 清空日志
    logClear(state){
        state.logging = ''
    },

    // 清空日志重新开始记录
    logNew(state, line){
        state.logging = `[+] ${nowTimeString()} | ${line}\r\n`
    },

    // 关键事件日志，会增加事件数量
    event(state, line){
       state.logging += `[+] ${nowTimeString()} | ${line}\r\n`;
        state.eventCount += 1;
    },

    // 清空事件计数
    setEventCount(state, count){
        state.eventCount = count;
    },

    // 事件加1
    addOneEvent(state){
      state.eventCount += 1;
    }
};


// 计算属性
const getters = {

};


// 方法：支持异步
const actions = {

};

export default {
    state,
    getters,
    mutations,
    actions
}


