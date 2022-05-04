<template>
  <div class="form">
    <div class="greetings">
      <h1>Mantenha segredo.</h1>
      <h2>Crie uma senha segura (pelo menos 6 caracteres) para sua conta, então você poderá acessar usando email e esta senha.</h2>
    </div>
    <form>
      <div class="label-input space-inputs">
        <label for="email">Senha</label>
        <input v-model="form.user" id="email" type="password" placeholder="Digite sua senha" required>
      </div>
      <div class="label-input">
        <label for="email">Confirmação de senha</label>
        <input v-model="form.user" id="email" type="password" placeholder="Confirme sua nova senha" required>
      </div>
      <button @click="login">CONFIRMAR</button>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup () {
    const form = reactive({
      user: '',
      confirmation: ''
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
    display: flex;
    justify-content: center;
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
.space-inputs {
  margin-bottom: 28px;
}
</style>
