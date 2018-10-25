<template>
    <div class="cart">
        <mt-header title="cart">
        <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    </div>
</template>

<script>
import {Header,Button, } from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
import 'mint-ui/lib/style.css'
import Vue from 'vue';

export default {
     data(){
        return{
            
        }
    },
   
    methods:{
        
    },
    name:'Search'

}

</script>
<style>
    .mint-header{
        background-color:#fff;
        color:black;
    }
</style>


