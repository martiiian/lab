<template>
  <form @submit.prevent="submit">
    <div>
      <label>
        email:
        <input type="email" name="email">
      </label>
    </div>

    <div>
      <label>
        password:
        <input type="password" name="password">
      </label>
    </div>

    <div>
      <button>
        go
      </button>
    </div>
  </form>
</template>

<script setup>
import { useLogin } from '../composables/AuthQuery'
import { useNews } from '../composables/NewsQuery'

const { signIn } = useLogin()
useNews()

const submit = async ({ target }) => {
  try {
    const body = Object.fromEntries(new FormData(target))
    const { accessToken, refreshToken } = await signIn(body)
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('refreshToken', refreshToken)
  } catch (e) {
    throw new Error(e)
  }
}
</script>
