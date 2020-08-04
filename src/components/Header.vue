<template>
    <div class="header">
        <a class="companyName">NTLeader</a>
        <div>
            <el-tabs v-model="activeName" @tab-click="tabsClick">
                <el-tab-pane v-for="item in tabs"  :label="item.name" :name="item.name" >
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
    export default {
        created() {
            this.activeName = this.tabs[0].name
        },
        data(){
            return {
                activeName: '',
                tabs: [
                    { name: '南通里德',path: 'home'},
                    { name: '关于里德',path: 'about'},
                    { name: '产品案例', path: 'product'},
                    { name: '联系我们', path: 'contact'}
                ]
            }
        },
        methods: {
            tabsClick(tab,event){
                let currentTab = this.tabs[tab.index]
                let path = currentTab.path //当前的路径
            }
        }
    }
</script>
<style lang="less" >
    .header {
        padding-top: 30px;
        width: 100%;
        height: 100px;
        background-color: transparent;
        display: flex;
        justify-content: space-between;

        //修改element样式
        .el-tabs__item:hover{
            color: @white;
        }
        .el-tabs__item.is-active{
            //color: rgba(255,255,255,0.7);
            color: @white;
            font-size: 16px;
        }
        .el-tabs__item{
            color: rgba(255,255,255,0.7);
            padding: 0 20px;
            line-height: 40px;
        }
        .el-tabs__nav-wrap::after{
            background-color: transparent !important;
        }
        /*tabs 去掉el-tab-pane切换时的蓝色下划线*/
        .el-tabs__active-bar {
            background-color: white;
        }
        .el-tabs{
            margin-right: 200px;
        }
        .el-tab-pane {
        }
    }
    .companyName {
        margin-top: 10px;
        margin-left: 100px;
        font-family: "Chaparral Pro";
        color: white;
        z-index: 1;
        cursor: pointer;
        font-size: 24px;
    }

</style>
