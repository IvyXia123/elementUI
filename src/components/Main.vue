<template>
  <div id="mainPage">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="5">
            <img class="logoImg" src="./../assets/imgs/logo.png"/>
            <span class="comName">上海天正智能数据服务有限公司</span>
          </el-col>
          <el-col :span="11" class="headerNav">
            <router-link :to="{name:'dataManagement'}" @click.native="currentNav='dataManagement'">
              报送数据管理
              <div class="line" v-show="currentNav=='dataManagement'"></div>
            </router-link>
            <router-link :to="{name:'servicePlatform'}">
              一站式服务平台
              <div class="line" v-show="currentNav=='servicePlatform'" @click.native="currentNav='servicePlatform'"></div>
            </router-link>
          </el-col>
          <el-col :span="8" class="headerRight">
            <span class="searchBox">
              <i class="iconfont icon-search"></i>
              <input type="text" placeholder="请输入关键字"/>
            </span>
            <span class="date">
              2017-09-21 星期四 14:26:47
            </span>
            <el-dropdown>
              <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>修改信息</el-dropdown-item>
                <el-dropdown-item>关于软件</el-dropdown-item>
                <el-dropdown-item>管理我的工作台</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <section class="content">
          <router-view></router-view>
        </section>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "mainPage",
    data(){
      return{
        currentNav: 'dataManagement'
      }
    },
    methods:{

    },
    mounted(){

    }
  }
</script>

<style lang="less" scoped>
  @import "./../less/common";

  #mainPage {
    .w(100%);
    .h(100%);
    .el-container{
      .h(100%);
      .el-header {
        .p(10px 20px);
        .b(@headerBgColor);
        .el-col, .el-row {
          .h(100%);
        }
        .el-row{
          .headerNav{
            text-align:center;
            a{
              .d-i(inline-block);
              color:@whiteColor;
              .l-h(40px);
              margin-right:50px;
              text-align: center;
              .line{
                .w(50%);
                .h(2px);
                .b(@whiteColor);
                margin:0 auto;
              }
            }
          }
        }
        .logoImg {
          .w(40px);
          .h(40px);
          vertical-align: middle;
        }
        .comName {
          color: @whiteColor;
        }
        .headerRight {
          .p(5px 0);
          .searchBox {
            .d-i(inline-block);
            .h(30px);
            .w(160px);
            .l-h(30px);
            margin-right:14px;
            padding-left: 12px;
            border-radius: 20px;
            border: 1px solid @inputBorder;
            .icon-search {
              .f-s(24px);
              vertical-align: middle;
              color: @whiteColor;
              cursor: pointer;
            }
            input {
              .w(calc(~"100% - 50px"));
              .h(20px);
              outline: none;
              border: none;
              color: @whiteColor;
              .f-s(14px);
              .b(@headerBgColor);
              &::-webkit-input-placeholder {
                color: @whiteColor;
                .f-s(14px);
              }
            }
          }
          .date{
            color:@whiteColor;
            .f-s(14px);
            margin-right:8px;
          }
          .el-dropdown{
            .l-h(30px);
            color:@whiteColor;
          }
        }
      }
      .el-main{
        .w(100%);
        .h(100%);
        .b(@bodyBg);
        .content{
          padding-top:20px;
          .w(100%);
          .h(calc(~"100% - 20px"));
          box-sizing:border-box;
        }
      }
    }
  }
</style>
