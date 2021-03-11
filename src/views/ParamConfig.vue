<template>
    <div>
        <el-form class="param-submit-container" label-position="left" label-width="50%">
        <h3 class="login_title">参数配置</h3>
        <el-form-item label= '参数1'>
            <el-input type="text" v-model="paramTable.p1" placeholder="例如1"></el-input>
        </el-form-item>
        <el-form-item label= '参数2'>
            <el-input type="text" v-model="paramTable.p2" placeholder="例如2"></el-input>
        </el-form-item>
        <el-form-item style="width: 100%">
            <el-button type="primary" style="width: 50%;background: #505458;border: none" v-on:click="submitParams">提交</el-button>
        </el-form-item>
        <h3>{{paramTable.p1}}</h3>
        <h3>{{paramTable.p2}}</h3>
        <h3>{{paramTable.ans}}</h3>
        </el-form>
    </div>
</template>


<script>
import {
    submitConfigParam
} from '@/tools/manage.js'


export default {
    data() {
        return {
            paramTable: {
                p1: '',
                p2: '',
                ans: 'default'
            }

        }
    } ,
    methods: {
        submitParams() {
            // let data = {
            //     p1: this.paramTable.p1,
            //     p2: this.paramTable.p2
            // }
            var data = new FormData();
            data.append("p1", this.paramTable.p1);
            data.append("p2", this.paramTable.p2);

            this.$axios
                .post('/api/param/submit', data)
                .then(res => {
                    if(res.data.code === 200){
                        console.log(res.data.data);
                        this.paramTable.ans = res.data.data.pid;
                    }
                })
                .catch(failRes => {
                    console.log(failRes.data);
                })

            
        }

    }
}
</script>

<style scoped>
.param-submit-container{
    text-align: left;
    position:fixed;
    margin: auto;
    top: 25%;
    left: 30%;
    right: 30%;
}
</style>