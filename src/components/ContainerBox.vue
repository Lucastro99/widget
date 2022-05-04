<template>
  <div class="container-box">
    <div v-if="false" class="loader">
      <div class="loading"></div>
    </div>
    <div class="header">
      <div class="title-img">
        <div class="title">{{title}}</div>
        <div class="line"></div>
        <div class="ns-sport-extended"></div>
      </div>
      <div class="close" @click="$emit('close', false)"></div>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContainerBox',
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>
<style lang="scss" scoped>
.container-box {
  // padding: 29px 43px;
  position: fixed;
  top: 0;
  left: 0;
  width: 619px;
  height: 100vh;
  background-color: #000;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 13px;
  }
  &::-webkit-scrollbar-track {
    background-color: #000;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 20px;
    border: 3px solid #000;
  }

  .loader {
    position: absolute;
    content: '';
    backdrop-filter: blur(5px);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;

    .loading {
      animation: is-rotating .8s infinite;
      border: 4px solid #FFF;
      width: 60px;
      height: 60px;
      border-radius: 60px;
      border-top-color:#FFBD21;
    }
    @keyframes is-rotating {
      to {
        transform: rotate(1turn);
      }
    }
  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 603px;
    padding: 20px 43px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #000;
    .title-img {
      display: flex;
      align-items: center;
      .title {
        font-size: 40px;
        font-weight: bold;
      }
      .line {
        width: 1px;
        height: 33px;
        background-color: #fff;
        margin-left: 14px;
      }
      .ns-sport-extended {
        width: 146px;
        height: 29px;
        background-image: url('./../assets/Logo-Branco-extended.png');
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
      }
    }

    .close {
      cursor: pointer;
      width: 35px;
      height: 35px;
      border-radius: 35px;
      background-color: #fff;
      background-image: url('./../assets/close.png');
      background-size: 50%;
      background-position: center;
      background-repeat: no-repeat;
      opacity: .9;
      transition: .2s ease-in-out;

      &:hover {
        opacity: 1;
      }
    }
  }
}
.content {
  z-index: 999;
  padding: 100px 43px 60px 43px;
}
</style>
