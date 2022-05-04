<template>
  <div class="center-flex">
    <div class="perfil"></div>
  </div>
  <div class="center">
    <p class="name">Nome Usuario</p>
    <p class="ranking">Ranking #503</p>
  </div>
  <div class="center-flex">
    <div class="grid-dados">
      <div class="dados">
        <p>XP ATUAL</p>
        <h1>32</h1>
      </div>
      <div class="dados">
        <p>missões</p>
        <h1>4</h1>
      </div>
      <div class="dados">
        <p>resgates</p>
        <h1>1</h1>
      </div>
      <div class="dados">
        <p>posts</p>
        <h1>3</h1>
      </div>
      <div class="dados">
        <p>curtidas</p>
        <h1>15</h1>
      </div>
      <div class="dados">
        <p>comentários</p>
        <h1>2</h1>
      </div>
    </div>
  </div>
  <div class="back" @click="$emit('newControl', 7)">
    <div class="text-back">
      <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.8941 2.24242C12.5139 1.87492 11.901 1.87492 11.5208 2.24242L5.07339 8.47491C4.7708 8.76741 4.7708 9.23991 5.07339 9.53241L11.5208 15.7649C11.901 16.1324 12.5139 16.1324 12.8941 15.7649C13.2742 15.3974 13.2742 14.8049 12.8941 14.4374L7.27683 8.99991L12.9018 3.56242C13.2742 3.20242 13.2742 2.60242 12.8941 2.24242Z" fill="white"/>
      </svg>
      Voltar para Missões
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup () {
    const form = reactive({
      user: '',
      senha: ''
    })
    function login () {
      console.log(form)
    }
    return {
      form,
      login
    }
  }
})
</script>

<style lang="scss" scoped>
.back{
  border-top: 1px solid #222222;
  width: 90%;
  padding-top: 30px;
  position: absolute;
  bottom: 30px;
  cursor: pointer;
}

.text-back{
  font-weight: 700;
  font-size: 20px;
  color: #FFFFFF;
  display: flex;
}

.text-back svg{
  margin-left: 10px;
  margin-right: 20px;
  position: relative;
  top: 2px;
}

.center{
  width: 100%;
  margin: 0 auto;
}

.center-flex{
  width: 100%;
  display: flex;
  justify-content: center;
}

.perfil{
  width: 166px;
  height: 166px;
  border-radius: 100%;
  background: #C4C4C4;
}
.name{
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: #FFFFFF;
  margin-top: 20px;
}
.ranking{
  font-size: 16px;
  text-align: center;
  color: #FFFFFF;
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
  text-transform: uppercase;
  text-align: center;
}

.dados h1{
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: center;
}
</style>
