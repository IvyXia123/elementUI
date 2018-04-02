<template>
    <div id="table-com">
      <table lay-even class="layui-hide" lay-skin="nob" id="test"></table>
    </div>
</template>

<script>
    export default {
        name: "table-com",
        methods:{
          //表格和分页：
          tableFn(tableData) {
            var self = this;
            layui.use('table', function () {
              var table = layui.table;

              table.render({
                elem: '#test'
                , data: tableData
                , cols: [[
                  {type: 'checkbox'}
                  , {field: 'id', width: 80, title: 'ID', sort: true}
                  , {field: 'username', width: 80, title: '用户名'}
                  , {field: 'sex', width: 80, title: '性别', sort: true}
                  , {field: 'city', width: 80, title: '城市'}
                  , {field: 'sign', title: '签名', minWidth: 100}
                  , {field: 'experience', width: 80, title: '积分', sort: true}
                  , {field: 'score', width: 80, title: '评分', sort: true}
                  , {field: 'classify', width: 80, title: '职业'}
                  , {field: 'wealth', width: 135, title: '财富', sort: true}
                ]]
                , page: true
              });


            });
          }
        },
        mounted(){

          //表格数据请求：
          this.axios.get("./src/json/data.json").then((res) => {
            this.tableFn(res.data);
          }).catch((err) => {
            console.log(err);
          })
        }
    }
</script>

<style lang="less">

</style>
