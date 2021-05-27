import './style.css';
import $ from 'easy-dom-query';

// ---------- Query Selector Start ----------

// id 查询
console.log('class 查询', $('#app'));

// class 查询
console.log('id 查询', $('.header'));

// 选择器查询
console.log('选择器查询', $('a'));

// 属性查询
console.log('属性查询', $('a[target=_blank]'));

// ---------- Query Selector End----------


// ---------- Event Start ----------

// document ready
$(() => console.log('document ready'));

// click 事件
$('#app').click(() => console.log('click 事件'));

// on 绑定事件
$('#app').on('click', () => console.log('on 绑定事件'));

// off 解绑事件
const onceEvent = () => {
  console.log('off 解绑事件');
  $('#app').off('click', onceEvent);
};

$('#app').on('click', offEvent);
// ---------- Event End ----------



