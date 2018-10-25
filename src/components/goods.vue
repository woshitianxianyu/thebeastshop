<template>
    <div class="goods">

        <div class="sx_header">
            <mt-header title="THE BEAST">
        <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <i class="fa fa-camera-retro fa-lg"></i>
        </mt-header>
        </div>
        
        <mt-swipe :auto="4000">
			<mt-swipe-item v-for="(item,idx) in imgurl" :key="idx">
				<img :src="item"/>
			</mt-swipe-item>
		</mt-swipe>

        <div class="product-info" >
            <div class="sx_name">{{data.brand.name}}</div>
            <div class="sx_title">{{data.name}}</div>
            <div class="sx_summary">{{data.summary}}</div>
            <div class="sx_price">{{'￥'+data.price}} <span>.0</span></div>
            
        </div>
        <div class="product-badges">
            <div class="badges-item" v-for="(item,idx) in datas.badges" :key="idx">
                <img class="icon" :src="item.icon" >
                 {{item.text}}
                
            </div>
        </div>

        <div class="line"><img src="assets/img/line.png" alt=""></div>

    <div class="product-newbox">
        <div class="p-detail-tit">
           <div class="p-e-tit">{{list[0].titleEn}}</div>
           <div class="p-z-tit">{{list[0].title}}</div>
       </div>
       <div>
           <p>{{list[0].modules[0].text}}</p>
       </div>
       <div class="p-img">
           <img :src="list[0].modules[1].image.src" alt="">
       </div>
       <div>
           <p>
               {{list[0].modules[2].text}}
           </p>
       </div>

        <div class="p-img2">
            <img  :src="list[0].modules[3].image.src" >
        </div>


        <div class="p-detail-new">
            <div class="p-detail-tit">
               <div class="p-e-tit">{{list[1].titleEn}}</div>
                <div class="p-z-tit">{{list[1].title}}</div>
                <div>{{list[1].modules[0].title}}</div>
            </div>

         
            <div class="p-img">
                <img :src="list[1].modules[1].image.src" alt="">
            </div>
            
            <div>
                <p>
                    {{list[1].modules[1].desc}}
                </p>
            </div>

            <div class="p-img">
                <img :src="list[1].modules[2].image.src" alt="">
            </div>
            
            <div>
                <p>
                    {{list[1].modules[2].desc}}
                </p>
            </div>

            <div class="p-img">
                <img :src="list[1].modules[3].image.src" alt="">
            </div>
            
            <div>
                <p>
                    {{list[1].modules[3].desc}}
                </p>
            </div>

            <div class="p-img">
                <img :src="list[1].modules[4].image.src" alt="">
            </div>
            
            <div>
                <p>
                    {{list[1].modules[4].desc}}
                </p>
            </div>


          
        </div>

    </div>
      





        <div class="foot">
            <button>加入购物车</button>
            <button>立即购买</button>
        </div>
        
       
    </div>
</template>

<script>
import {Header,Button, Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import 'mint-ui/lib/style.css'
import '../assets/fonts/font-awesome/css/font-awesome.min.css'
import Vue from 'vue';
import axios from 'axios';

export default {
     data(){
        return{
            imgurl:[],
            data:{},
            datas:{},
            list:[],
            arr:[]
        }
    },
   //钩子函数
   created(){
       this.$axios.get('https://api.thebeastshop.com/app/product/PROD001026235').then(res=>{
        
            this.imgurl = res.data.data.images;
            this.data = res.data.data.raw;
            this.datas = res.data.data
            console.log(this.data)
       })

        this.$axios.get('https://api.thebeastshop.com/app/product/PROD001026235/details?legacy=false').then(res=>{
        
            
            this.list = res.data.data.details
           
        
            console.log(this.list)
       })


        //json字符串
    //     this.$axios({
    //         methods:'get',
    //         url:'static/data/simple.json',
    //         dataType:"json",

    //     }).then(res=>{
        
            
    //         console.log(444,res.data)
        
    //    })
    
      
       
    
   },
    methods:{
        
    },
    name: 'goods'
}

</script>
<style>

    html,body{
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        position: relative;
    }
    .goods{
        position: relative;
    }
    .mint-header{
        background-color:#fff;
        color:black;
        border-bottom:0.0625rem solid #ccc;
        left: 0;
        height: 50px;
        top:0;
        text-align: center;
    }
    .sx_header{
        position: fixed;
        top:0;
        left: 0;
        height: 80px;
        right: 0;
        z-index: 999;
    }
    .mint-swipe{
        margin-top:47px;
       height: 320px;
       width: 100%;
        
    }
    .mint-swipe img{
        width: 100%;
        
    }
    .product-info{
        text-align: center;
        margin-top:30px;
        margin-bottom:20px;
       
    }
    .sx_price{
        color:  #004C46;
        margin-top: 10px;
    }
   .sx_name{
       font-size: 10px;
       margin-top:10px;
       color:#222;
   }
   .sx_title{
       color:#282828;
       font-weight: bold;
       font-size: 16px;
   }
   .sx_summary{
       color:#969696;
       font-size: 12.8px;
   }
   
   .product-badges{
      
       padding: 10px 0 10px 16px;
        margin: 0 6.4px 18.7728px;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        zoom: 1;
        position:relative;
   }
   .product-badges .icon{
       position: absolute;
        width: 11.2px;
        height: 11.2px;
        top: 16px;
        left: 0;
   }

   .foot{
       position: fixed;
       bottom:0;
       height: 50px;
       width: 100%;
       overflow: hidden;
       background-color: #fff;

   }
   .foot button{
       float:right;
       width: 30%;
       font-size:12.5px;
       background-color:#004C46;
       color:#fff;
       margin-left: 2px;
       border:0 none;
       height: 50px;
   }
   .line{
       
        width: 100%;
        height: 1.7072px;
        background-size: cover;
   }
   .product-newbox{
       margin: 0 20px 0 30px;
       border-bottom:1px solid #ccc;
       
   }
   .product-newbox p{
       font-weight: bold;
       font-size: 12px;
   }
   .p-detail-tit .p-e-tit,{
       font-weight:700;
       font-size: 20px;
        text-align: center;
       color:black;
   }
   .p-detail-tit .p-t-tit{
       font-size: 14px;
       text-align: center;
   }
   .p-detail-tit{
      
       text-align: center;
   }
   .p-img img{
       width: 100%;
   }
   .p-img2 img{
       width: 100%;
   }
</style>


