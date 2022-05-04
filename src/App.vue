<template>
  <div v-if="!openClose.state" class="open-close-widget" @click="openCloseWidget">
    <div>
      <div class="background-image">
      </div>
    </div>
    <div class="texts">
      <h2>Complete Missões</h2>
      <h3>Ganhe NC$</h3>
    </div>
  </div>
  <ContainerBox v-if="openClose.state" :title="titles[control]" @close="openClose.state=$event">
    <keep-alive>
      <transition name="change">
        <component :is='components[control]' @newControl="control=$event" @login="login" />
      </transition>
    </keep-alive>
    <!-- {{components}}
      {{control}} -->
  </ContainerBox>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import ContainerBox from '@/components/ContainerBox.vue'
import LoginForm from '@/components/LoginForm.vue'
import RegisterFormInitialStep from '@/components/RegisterFormInitialStep.vue'
import VerificationCode from '@/components/VerificationCode.vue'
import PasswordRescueForm from '@/components/PasswordRescueForm.vue'
import NewPasswordForm from '@/components/NewPasswordForm.vue'
import BiographyUser from '@/components/BiographyUser.vue'
import MissionsUser from '@/components/MissionsUser.vue'
import WalletUser from '@/components/WalletUser.vue'
import ProfileInfo from '@/components/ProfileInfo.vue'

export default defineComponent({
  name: 'App',
  components: {
    ContainerBox,
    LoginForm,
    RegisterFormInitialStep,
    VerificationCode,
    PasswordRescueForm,
    NewPasswordForm,
    BiographyUser,
    MissionsUser,
    WalletUser,
    ProfileInfo
  },
  setup () {
    const titles = reactive([
      'Login',
      'Registro',
      'Recuperar Senha',
      'Perfil',
      'Código de Verificação',
      'Biografia',
      'Carteira',
      'Missões',
      'Nova Senha'
    ])
    const components = reactive(
      [
        'LoginForm',
        'RegisterFormInitialStep',
        'PasswordRescueForm',
        'ProfileInfo',
        'VerificationCode',
        'BiographyUser',
        'WalletUser',
        'MissionsUser',
        'NewPasswordForm'
      ]
    )
    const control = ref(0)
    const openClose = reactive({ state: false })
    function openCloseWidget () {
      openClose.state = true
      console.log(openClose.state)
    }
    function login () {
      console.log('teste', control)
      control.value = 7
    }

    return {
      openClose,
      components,
      control,
      login,
      titles,
      openCloseWidget
    }
  }
})
</script>

<style lang="scss">
* {
  font-family: "TTFirsNeue3", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: #fff;
}

.open-close-widget {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  position: absolute;
  width: 294.13px;
  height: 123px;
  left: 55px;
  bottom: 55px;
  background: #FFBD21;
  border-radius: 150px;
  opacity: .9;
  transition: .2s ease-in-out;

  &:hover {
    opacity: 1;
  }
}

.background-image {
  border-radius: 111px;
  width: 111px;
  height: 111px;
  background-color: #000;
  background-image: url('./assets/Logo-Branco.png');
  background-position: center;
  background-repeat: no-repeat;
}

.texts {
  margin-left: 22px;
  color: #000!important;

  h2 {
    line-height: 24px;
    font-weight: bold;
  }

  h3 {
    font-size: 17px;
    font-weight: 500;
    margin-top: 15px;
  }

  h3, h2 {
    color: #000!important;
  }
}

/* Animações de entrada e saída podem utilizar diferentes  */
/* funções de duração e de tempo.                          */
.change-enter-active {
  transition: all .2s ease;
}
.change-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.change-enter, .change-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
