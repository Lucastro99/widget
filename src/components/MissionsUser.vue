<template>
<div>
  <div>
    <div class="tabs">
      <p @click="tab = false" :class="{ 'active': !tab }">Pendentes</p>
      <p @click="tab = true" :class="{ 'active': tab }">Completadas</p>
    </div>
    <div>
      <div class="mission" v-if="!tab">
        <div class="cicle">0%</div>
        <div class="texts">
          <div class="text">
            <h1>Ganhe 10 NC$</h1>
            <p>Ao se cadastrar</p>
          </div>
        </div>
        <div class="action">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.88 4.12L13.76 12L5.88 19.88L8 22L18 12L8 2L5.88 4.12Z" fill="black"/>
          </svg>
        </div>
      </div>
      <div class="mission" v-if="tab">
        <div class="cicle">100%</div>
        <div class="texts">
          <div class="text">
            <h1>Ganho 10 NC$</h1>
            <p>Votando em uma enquete</p>
          </div>
        </div>
        <div class="action">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.88 4.12L13.76 12L5.88 19.88L8 22L18 12L8 2L5.88 4.12Z" fill="black"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
  <div class="back">
    <div class="text-back" @click="$emit('newControl', 6)">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.5 27V28.5C31.5 30.15 30.15 31.5 28.5 31.5H7.5C5.835 31.5 4.5 30.15 4.5 28.5V7.5C4.5 5.85 5.835 4.5 7.5 4.5H28.5C30.15 4.5 31.5 5.85 31.5 7.5V9H18C16.335 9 15 10.35 15 12V24C15 25.65 16.335 27 18 27H31.5ZM18 24H33V12H18V24ZM24 20.25C22.755 20.25 21.75 19.245 21.75 18C21.75 16.755 22.755 15.75 24 15.75C25.245 15.75 26.25 16.755 26.25 18C26.25 19.245 25.245 20.25 24 20.25Z" fill="white"/>
      </svg>
      Minha carteira
    </div>
    <div class="text-back" @click="$emit('newControl', 3)">
      <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.5 18.5C21.907 18.5 24.6666 15.7404 24.6666 12.3333C24.6666 8.92625 21.907 6.16667 18.5 6.16667C15.0929 6.16667 12.3333 8.92625 12.3333 12.3333C12.3333 15.7404 15.0929 18.5 18.5 18.5ZM18.5 21.5833C14.3837 21.5833 6.16663 23.6492 6.16663 27.75V30.8333H30.8333V27.75C30.8333 23.6492 22.6162 21.5833 18.5 21.5833Z" fill="white"/>
      </svg>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  setup () {
    const tab = ref(false)
    const form = reactive({
      user: '',
      senha: ''
    })
    function login () {
      console.log(form)
    }
    return {
      form,
      tab,
      login
    }
  }
})
</script>

<style lang="scss" scoped>
.action{
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.mission{
  width: 100%;
  background: #FFBD21;
  border-radius: 140px;
  height: 120px;
  padding: 5px;
  display: grid;
  grid-template-columns: 120px 1fr 50px;
}

.cicle{
  border: 5px solid #FFFFFF;
  box-sizing: border-box;
  height: 111px;
  width: 111px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: 700;
  font-size: 20px;
}

.texts{
  display: flex;
  align-items: center;
}
.text h1{
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 7px;
  color: black;
}

.text p{
  font-weight: 500;
  font-size: 17px;
  color: black;
}

.back{
  border-top: 1px solid #222222;
  width: 90%;
  padding-top: 30px;
  position: absolute;
  bottom: 30px;
  display: flex;
  justify-content: space-between;
}

.text-back{
  font-weight: 700;
  font-size: 20px;
  color: #FFFFFF;
  display: flex;
  cursor: pointer;
}

.text-back svg{
  margin-left: 10px;
  margin-right: 20px;
  position: relative;
  top: -5px;
  cursor: pointer;
}

.tabs{
  width: 100%;
  border-bottom: 2px solid #242424;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  gap: 40px;
}

.tabs p{
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  color: #FFFFFF;
  padding-bottom: 5px;
  cursor: pointer;
}

.active {
  border-bottom: 5px solid #FFFFFF;
}

</style>
