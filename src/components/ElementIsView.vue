<template>
  <div class="container">
    <div class="box"></div>

    <div v-drag class="small-box" @v-drag-moving="(e) => moving(e)">拖拽可移动</div>
  </div>
</template>



<script setup>
import { onMounted } from 'vue';


onMounted(() => {

})


const moving = (e) => {
  const res = calc('.small-box', '.box')
  console.log(res ? '在视窗内' : '在视窗外')
}


/**
 * @description: 判断是否在目标视窗内
 * @param {String} curEle: 当前元素
 * @param {String} targetEle: 目标元素
 * @return {Boolean} true or false
 */
const calc = (curEle = null, targetEle = null) => {
  const _curEle = document.querySelector(curEle)
  if(!curEle || !_curEle)return
  const {top: curTop,bottom:curBottom,left:curLeft,right:curRight} = _curEle.getBoundingClientRect()
  let _targetEle = targetEle || document.documentElement
  _targetEle = document.querySelector(_targetEle)
  const {top: targetTop,bottom:targetBottom,left:targetLeft,right:targetRight} = _targetEle.getBoundingClientRect()

  let res = false
  if (curTop >= targetTop && curBottom <= targetBottom && curLeft >= targetLeft && curRight <= targetRight) {
    res = true
  }
  return res
}

</script>

<style lang="less" scoped>

*{
  touch-action: none
}
  
.container{
  width: 100%;
  height: 100vh;
  background-color: #dcdcdc;
  padding: 50px 20px;
}

.box{
  width: 500px;
  height: 600px;
  background: lightcoral;
  margin: 0 auto;
}


.small-box{
  width: 200px;
  height: 200px;
  background-color: lightseagreen;
  position: absolute;
  left: 100px;
  top: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>