<template>
  <div class="form">
    <div class="greetings">
      <h1>Hey, bem-vindo novamente!</h1>
      <h5>Para acessar a sua conta entre com seu email e senha.</h5>
    </div>
    <form>
      <div class="label-input">
        <label for="email">Email</label>
        <input v-model="form.user" id="email" type="email" placeholder="email@email.com" required>
        <div class="example-msg">Ex: email@email.com</div>
      </div>
      <div class="label-input">
        <label for="senha">Senha</label>
        <input v-model="form.senha" id="senha" type="password" placeholder="Digite sua senha" required>
      </div>
      <button @click="login">ENTRAR</button>
    </form>
    <div class="links">
      <h1>Não possui uma conta?</h1>
      <h2>Esqueceu sua senha?</h2>
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
</style>
