<template>
  <div id="login">
    <div class="login-wrapper">
      <div class="header">
        <img class="logoImg" src="../assets/imgs/logo.png" alt="" title=""/>
        <span class="title">{{title}}</span>
      </div>
      <!--表单-->
      <div class="form">
        <!--用户名-->
        <div class="account-wrapper input-wrapper">
          <div class="text-wrapper left-wrapper">
            <img class="icons" src="../assets/imgs/icon1.png" alt="" title=""/>
            <span class="text">用户名</span>
          </div>
          <div class="right-wrapper">
            <input type="text" class="account input-box" placeholder="请输入用户名" v-model="accountVal"/>
          </div>
        </div>
        <div class="error-box">
        </div>
        <!--密码-->
        <div class="password-wrapper input-wrapper">
          <div class="text-wrapper left-wrapper">
            <img class="icons" src="../assets/imgs/icon2.png" alt="" title=""/>
            <span class="text">密&nbsp;&nbsp;&nbsp;码</span>
          </div>
          <div class="right-wrapper">
            <input type="password" class="password input-box" placeholder="请输入密码" v-model="passwordVal"/>
          </div>
        </div>
        <div class="error-box">
          <span>{{errorTxt}}</span>
        </div>
        <!--登录-->
        <div class="login input-wrapper" @click.prevent="login">登&nbsp;&nbsp;录</div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs';
  export default {
    name: "login",
    data(){
      return{
        title:'一站式服务平台',
        accountVal:'admin',
        passwordVal:'topcheer',
        errorTxt:'',
        responseData:[]
      }
    },
    watch:{
      responseData(newVal){
        if(!newVal.success){
          this.errorTxt=newVal.message;
        }else{
          this.$router.push({path:'/'});
        }
      }
    },
    methods:{
      login(){
        if(this.accountVal==''){
          this.errorTxt='用户名不能为空！';
          return;
        }else if(this.passwordVal==''){
          this.errorTxt='密码不能为空！';
          return;
        }else{
          this.errorTxt='';
          var self=this;
          let data={
            username: this.accountVal,
            password: this.passwordVal
          };
          console.log(this.oss);
          // this.oss.post(self, 'sys/user/login',data, 'responseData');
          this.oss.post(self, '/sys/user/login',data, 'responseData');
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "./../less/common";
  #login{
    position:relative;
    .w(100%);
    .h(100%);
    background:url("../assets/imgs/login.png");
    background-size:100% 100%;
    .login-wrapper{
      position:absolute;
      width:300px;
      height:260px;
      top:calc(~"50% - 130px");
      bottom:calc(~"50% - 130px");
      left:60%;
      right:14%;
      .p(25px 25px 0);
      border-radius:6px;
      box-sizing:border-box;
      background:#fff;
      box-shadow:3px 3px 3px rgba(0,0,0,0.5);
      .header{
        .w(100%);
        .h(62px);
        .l-h(42px);
        .t-c(center);
        padding-bottom:37px;
        box-sizing:border-box;
        .logoImg{
          .d-i(inline-block);
          .w(40px);
          .h(38px);
          vertical-align: middle;
        }
        .title{
          .d-i(inline-block);
          .h(42px);
          .l-h(24px);
          .p(9px 0);
          .f-s(18px);
          font-family:@fontFamilyYaHei;
          box-sizing:border-box;
          font-weight:bold;
        }
      }
    }
    .form{
      .w(100%);
      .h(calc(~"100% - 64px"));
      padding-bottom:25px;
      box-sizing:border-box;
      .input-wrapper{
        .w(100%);
        .h(22%);
        .p(3px 15px);
        box-sizing:border-box;
        border-radius:50px;
        border:1px solid @grayColor;
        overflow:hidden;
        .left-wrapper,.right-wrapper{
          .d-i(inline-block);
          .p(0 10px 0 0);
          .h(22px);
          line-height: 22px;
          font-size:18px;
          color:@blackColor;
          font-family:@fontFamily6;
          &.left-wrapper{
            border-right:1px solid @grayColor;
          }
          &.right-wrapper{
            .w(38%);
            .h(100%);
            .input-box{
              .f-s(14px);
            }
            .input-box::-webkit-input-placeholder {
              .f-s(14px);
              color:@blackColor;
              font-family:@fontFamily3;
            }
            .text{
              .w(100%);
              .h(100%);
              border:none;
            }
            input {
              width: 100%;
              height: 100%;
              border: none;
              outline: none;
            }
          }
          .icons{
            .w(18px);
            .h(18px);
            margin-right:3px;
            vertical-align: middle;
          }
          .text{
            .f-s(14px);
            color:@blackColor;
            font-family:@fontFamily3;
          }
        }
      }
      .error-box{
        .w(100%);
        .h(17%);
        .f-s(14px);
        .l-h(28px);
        box-sizing:border-box;
        color:@redColor;
        font-family:@fontFamily3;
      }
      .login{
        display:flex;
        background:@redColor;
        color:@whiteColor;
        cursor: pointer;
        text-align:center;
        align-items:center;
        justify-content:center;
      }
    }
    @media only screen and (min-width: 1400px) {
      .login-wrapper{
        width:380px;
        height:320px;
        top:calc(~"50% - 190px");
        bottom:calc(~"50% - 190px");
        left:calc(~"70% - 190px");
        right:calc(~"30% + 190px");
        .p(35px 35px 0);
        border-radius:10px;
        .header{
          .h(68px);
          .logoImg{
            .w(46px);
            .h(42px);
          }
          .title{
            .f-s(20px);
          }
        }
        .form{
          .h(calc(~"100% - 68px"));
          padding-bottom:35px;
          .right-wrapper{
            .w(55%);
          }
          .left-wrapper .text,.right-wrapper .input-box,.login{
            .f-s(18px);
            .input-box::-webkit-input-placeholder {
              .f-s(18px);
            }
          }
        }
      }
    }
  }
</style>
