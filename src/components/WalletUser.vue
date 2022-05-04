<template>
  <div>
    <div>
      <div class="tabs">
        <p @click="tab = false" :class="{ active: !tab }">Extrato</p>
        <p @click="tab = true" :class="{ active: tab }">Transferir coins</p>
      </div>
      <div>
        <div class="center-flex">
          <div class="grid-dados">
            <div class="dados">
              <p>Saldo atual</p>
              <h1>95 <span>NC$</span></h1>
            </div>
            <div class="dados">
              <p>Missões</p>
              <h1>150</h1>
            </div>
            <div class="dados">
              <p>Resgates</p>
              <h1>10</h1>
            </div>
          </div>
        </div>
        <div>
          <div class="grid-missions">
            <p class="name">Compra do pacote da Superliga</p>
            <p class="value" :style="setColor(-150)">-150 NC$</p>
            <p class="data">10 de outubro, 21:48</p>
          </div>
          <div class="grid-missions">
            <p class="name">Aquisição do pacote NCoins</p>
            <p class="value" :style="setColor(200)">+200 NC$</p>
            <p class="data">05 de outubro, 16:30</p>
          </div>
        </div>
      </div>
    </div>
    <div class="back">
      <div class="text-back" @click="$emit('newControl', 7)">
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8941 2.24242C12.5139 1.87492 11.901 1.87492 11.5208 2.24242L5.07339 8.47491C4.7708 8.76741 4.7708 9.23991 5.07339 9.53241L11.5208 15.7649C11.901 16.1324 12.5139 16.1324 12.8941 15.7649C13.2742 15.3974 13.2742 14.8049 12.8941 14.4374L7.27683 8.99991L12.9018 3.56242C13.2742 3.20242 13.2742 2.60242 12.8941 2.24242Z"
            fill="white"
          />
        </svg>
        Voltar para Missões
      </div>
      <div class="text-back" @click="$emit('newControl', 3)">
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.5 18.5C21.907 18.5 24.6666 15.7404 24.6666 12.3333C24.6666 8.92625 21.907 6.16667 18.5 6.16667C15.0929 6.16667 12.3333 8.92625 12.3333 12.3333C12.3333 15.7404 15.0929 18.5 18.5 18.5ZM18.5 21.5833C14.3837 21.5833 6.16663 23.6492 6.16663 27.75V30.8333H30.8333V27.75C30.8333 23.6492 22.6162 21.5833 18.5 21.5833Z"
            fill="white"
          />
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
    function setColor (params:number) {
      if (params > 0) {
        return 'color: #78CC48'
      } else {
        return 'color: #F15E5E;'
      }
    }
    function login () {
      console.log(form)
    }
    return {
      form,
      tab,
      setColor,
      login
    }
  }
})
</script>

<style lang="scss" scoped>
.grid-missions{
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  border-bottom: 2px solid #242424;
  padding-bottom: 20px;
  margin-bottom: 15px;
}

.grid-missions .name{
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
}

.grid-missions .value{
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #c0c0c0;
}

.grid-missions .data{
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
}

.action {
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.mission {
  width: 100%;
  background: #ffbd21;
  border-radius: 140px;
  height: 120px;
  padding: 5px;
  display: grid;
  grid-template-columns: 120px 1fr 50px;
}

.cicle {
  border: 5px solid #ffffff;
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

.texts {
  display: flex;
  align-items: center;
}
.text h1 {
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 7px;
  color: black;
}

.text p {
  font-weight: 500;
  font-size: 17px;
  color: black;
}

.back {
  border-top: 1px solid #222222;
  width: 90%;
  padding-top: 30px;
  position: absolute;
  bottom: 30px;
  display: flex;
  justify-content: space-between;
}

.text-back {
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  display: flex;
  cursor: pointer;
}

.text-back svg {
  margin-left: 10px;
  margin-right: 20px;
  position: relative;
  top: 3px;
  cursor: pointer;
}

.tabs {
  width: 100%;
  border-bottom: 2px solid #242424;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  gap: 60px;
}

.tabs p {
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  padding-bottom: 5px;
  cursor: pointer;
}

.active {
  border-bottom: 5px solid #ffffff;
}

.center-flex{
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #242424;
  margin-top: -55px;
  padding-bottom: 20px;
  margin-bottom: 20px;
}
.grid-dados{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.dados{
  margin-top: 30px;
}

.dados p{
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: center;
}

.dados span{
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: center;
}

.dados h1{
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: center;
}
</style>
