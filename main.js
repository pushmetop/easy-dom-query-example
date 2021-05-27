import './style.css';
import $ from 'easy-dom-query';

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

// 测试选择函数
const app = $('#app');
console.log('测试选择函数', app);

// 测试DOM函数
console.log('测试DOM函数', $(app));

// 测试 ready 函数
$(() => console.log('测试 ready 函数', 'ready'));

// 测试事件函数
$('#app').click(() => console.log('测试事件函数', 'click'));

// 测试事件函数
$('#app').on('click', () => console.log('测试事件函数', 'on'));
