<script lang="ts" setup>
import { directus } from '~~/api/directus';

const username = ref('')
const password = ref('')
const email = ref('')

const register = async () => {
    const info = {
        username: username.value,
        password: password.value,
        email: email.value
    }

    const result = await $fetch('/api/register', {
        method: 'post',
        body: info
    })

    if (!result.error) {
        await login()
    }
}

const login = async () => {
    const result = await directus.auth.login({
        email: email.value,
        password: password.value,
    })

    // window.location.href = '/'
}
</script>

<template>
    <table border="0">
        <tbody>
            <tr>
                <td>Email:</td>
                <td>
                    <input v-model="email" type="email" size="20">
                </td>
            </tr>
            <tr>
                <td>密码:</td>
                <td><input v-model="password" type="password" size="20"></td>
            </tr>
        </tbody>
    </table>
    <br />

    <button @click="login()">登陆</button>
    <br />
    <br />
    <br />

    <table border="0">
        <tbody>
            <tr>
                <td>用户名:</td>
                <td>
                    <input v-model="username" type="text" size="20" autocorrect="off" spellcheck="false" autocapitalize="off">
                </td>
            </tr>
            <tr>
                <td>Email:</td>
                <td>
                    <input v-model="email" type="email" size="20">
                </td>
            </tr>
            <tr>
                <td>密码:</td>
                <td><input v-model="password" type="password" size="20"></td>
            </tr>
        </tbody>
    </table>
    <br />

    <button @click="register()">注册</button>
</template>