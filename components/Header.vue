<script lang="ts" setup>
import { getUser, logout } from '~~/api/user';

const user = await getUser()
</script>

<template>
    <td bgcolor="#ff6600">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding: 2px;">
            <tbody>
                <tr>
                    <td style="width: 18px;padding-right: 4px">
                        <a href="/">
                            <img src="/logo.png" width="18" height="18" style="border: 1px white solid;">
                        </a>
                    </td>
                    <td style="line-height:12pt; height:10px;">
                        <span class="pagetop">
                            <b class="hnname"><a href="/">黑客新闻</a></b>
                            <a href="/newest">new</a> | 
                            <a href="/threads?id=zccm">threads</a> | 
                            <a href="/front">past</a> | 
                            <a href="/newcomments">comments</a> | 
                            <a href="/ask">ask</a> | 
                            <a href="/show">show</a> | 
                            <a href="/jobs">jobs</a> | 
                            <a href="/submit">submit</a>            
                        </span>
                    </td>
                    <td style="text-align:right;padding-right:4px;">
                        <span class="pagetop" v-if="user">
                            <a id="me" href="/user">{{user.title}}</a> (<span id="karma">{{user.karma}}</span>) | 
                            <a id="logout" @click="logout()" href="#">登出</a>
                        </span>
                        <span class="pagetop" v-else>
                            <a href="/login">登陆或注册</a>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</template>

<style>

</style>