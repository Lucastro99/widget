<template>
  <div class="form">
    <div class="greetings">
      <h1>Estamos quase lá!</h1>
      <h2>Enviamos um código de validação para o seu email. Verifique sua caixa de entrada, caso não tenha recebido verifique outras caixas, como SPAM.</h2>
    </div>
    <form>
      <div class="label-input">
        <label for="email">Código de verificação</label>
        <input v-model="form.user" id="email" type="text" placeholder="- - - - - -" required maxlength="6" minlength="6">
      </div>
      <div class="buttons">
        <button class="send" @click.prevent="login">CONFIRMAR</button>
        <button class="resend" @click.prevent="login">REENVIAR CÓDIGO</button>
      </div>
    </form>
    <div class="links">
      <h1 @click="$emit('newControl', 1)">Não possui uma conta?</h1>
      <h2 @click="$emit('newControl', 2)">Esqueceu sua senha?</h2>
    </div>

  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup () {
    const form = reactive({
      user: ''
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
.form {
  .greetings {
    display: flex;
    flex-direction: column;
    margin: 45px 0 68px 0;
    font-size: 16px;
    h1 {
      font-weight: bold;
    }
    h2 {
      font-weight: normal;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    .label-input {
      display: flex;
      flex-direction: column;
      label, input {
        width: 100%;
      }
      label {
        font-size: 14px;
        margin-bottom: 8px;
      }
      input {
        border: 1px solid #202020;
        border-radius: 4px;
        height: 48px;
        padding-left: 19px;
        font-weight: bold;
        outline: none;
        color: #000;
        text-align: center;
      }
      .example-msg {
        font-size: 12px;
        margin: 8px 0 16px 0;
      }
    }
    button{
      cursor: pointer;
      margin: 35px 0 47px 0;
      background: #FFBD21;
      border-radius: 4px;
      height: 48px;
      color: #000;
      font-weight: bold;
      font-size: 16px;
      border: transparent;
      opacity: .9;
      transition: .2s ease-in-out;

      &:hover {
        opacity: 1;
      }
    }
  }
  .links {
    h1, h2 {
      user-select: none;
      cursor: pointer;
      font-size: 16px;
      text-align: center;
      font-weight: normal;
      color: #FFBD21!important;
      opacity: .9;
      transition: .2s ease-in-out;

      &:hover {
        opacity: 1;
      }
    }
    h1 {
      margin-bottom: 15px;
    }
  }
}
.buttons {
  display: flex;
  justify-content: space-between;
  .send {
    padding: 0 30px;
  }
  .resend {
    padding: 0 30px;
    background-color: #C4C4C4;
  }
}
</style>
