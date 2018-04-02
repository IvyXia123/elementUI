<template>
  <div id="dataManage">
    <el-container>
      <el-aside>
        <div class="leftNavWrapper">
          <el-row class="photo">
            <img src="./../assets/imgs/home_photo.png"/>
            <span class="name">小花</span>
          </el-row>
          <el-row class="tac asideNav">
            <el-col :span="24">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>导航三</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </div>
      </el-aside>
      <el-main>
        sggr
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "data-manage",
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="less">
  @import "./../less/common";

  #dataManage {
    .w(100%);
    .h(100%);
    .el-container{
      .w(100%);
      .h(100%);
      .el-aside{
        .w(240px)!important;
        padding-right:20px;
        .leftNavWrapper{
          .w(100%);
          .h(100%);
          .b(@whiteColor);
          border-radius:10px;
          .photo{
            .h(150px);
            .p(20px);
            .b(@contentBg);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            img{
              display:block;
              .w(80px);
              .h(80px);
              margin:0 auto;
            }
            .name{
              display:block;
              .w(100%);
              color:@whiteColor;
              text-align:center;
              margin-top:10px;
            }
          }
          .asideNav{
            .el-menu{
              border:0;
              .el-submenu__title,.el-menu-item{
                .b(@navBg)!important;
                .f-s(16px);
                span{
                  color:@blackColor;
                }
                .el-icon-location:before{
                  color:@blackColor;
                }
                &:hover{
                  span{
                    color:@whiteColor;
                  }
                  .el-icon-location:before{
                    color:@whiteColor;
                  }
                }
              }
              .el-menu-item-group{
                .el-menu-item-group__title{
                  .p(0);
                }
                ul{
                  li{
                    .b(@whiteColor)!important;
                    color:@blackColor!important;
                  }
                }
              }
            }
          }
        }
      }
      .el-main{
        .b(green);
      }
    }
  }
</style>
