<template>
  <div class="form">
    <div class="greetings">
      <h1>Vamos começar!</h1>
      <h2>Para dar o primeiro passo, preencha o seu endereço de email mais usado para ser sua identificação.</h2>
    </div>
    <form>
      <div class="label-input">
        <label for="email">Email</label>
        <input v-model="form.user" id="email" type="email" placeholder="email@email.com" required>
        <div class="example-msg">Ex: email@email.com</div>
      </div>
      <div class="captcha">
        <component :is="VueRecaptcha" />
        <!-- <VueRecaptcha
          ref="recaptcha"
          @verify="onCaptchaVerified"
          @expired="onCaptchaExpired"
          sitekey="6LfJA0gUAAAAAA4YDXBubWMll55x5xLpyzu6n60G">
        </VueRecaptcha> -->
      </div>
      <button @click="login">CONTINUE</button>
      <div class="info-msg">
        * Ao clicar no botão CONTINUE acima, você aceita nossos Termos e Condições e reconhece que seus dados serão utilizados conforme descrito em nossa Política de Privacidade.
      </div>
    </form>
    <div class="links">
      <span>Já possui uma conta? &nbsp;</span>
      <h1 @click="$emit('newControl', 0)">Entre aqui</h1>
    </div>

  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import VueRecaptcha from 'vue-recaptcha'

export default defineComponent({
  components: {
    VueRecaptcha
  },
  setup () {
    const form = reactive({
      user: '',
      senha: ''
    })
    function onCaptchaVerified (token:string) {
      console.log(token)
    }
    function onCaptchaExpired (token:string) {
      console.log(token)
    }
    function login () {
      console.log(form)
    }
    return {
      form,
      onCaptchaVerified,
      onCaptchaExpired,
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
    }
    button{
      cursor: pointer;
      margin: 35px 0 19px 0;
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
    .info-msg {
        font-style: italic;
        font-size: 14px;
        margin: 8px 0 16px 0;
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
</style>
