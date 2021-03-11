<template>
    <div>
        <div>
            <!-- <el-row :gutter="20">
                <el-col :span="12">
                    <el-card class="select-box" shadow="always" >
                        <el-select v-model="queryType" placeholder="请选择检索方式" class="queryelect">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card shadow="always"> 
                        <el-input v-model="queryID"  placeholder="输入检索ID" v-if="queryType === 'id'" ></el-input>
                        <el-input v-model="queryPeriod" placeholder="输入时间段" v-if="queryType === 'peroid'"></el-input>
                        
                    </el-card>
                </el-col>
            </el-row>
            <el-button type="primary" icon="el-icon-search" >搜索</el-button> -->

            <el-card class="select-box" shadow="hover" style="margin:10px ">
                <el-row>
                    <el-col span="8" style="text-align:right">
                        
                        <el-select v-model="queryType" placeholder="请选择检索方式" class="queryelect" >
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col span="8">
                        <el-input v-model="queryID" placeholder="输入检索ID" v-if="queryType === 'id'" style="width:80%"></el-input>
                        <el-input v-model="queryPeriod" placeholder="输入时间段" v-if="queryType === 'peroid'" style="width:80%"></el-input>
                    </el-col>
                    <el-col span="8" style="text-align:left">
                        <el-button type="primary" icon="el-icon-search" >搜索</el-button>
                    </el-col>
                </el-row>
                
                
            </el-card>
            
            
        </div>
        
        <div>
            <el-table
                :data="tableData"
                style="width: 80%"
                class="result-table"
                :row-class-name="tableRowClassName">
                <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>


<script>

export default {
    data() {
        return {
            options: [{
                value: 'id',
                label: 'ID'
                }, {
                value: 'peroid',
                label: '时间段'
                }],

            queryType: '',
            queryID: null,
            queryPeriod: null,

            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                }, {
                date: '2016-05-04',
                name: '王虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-01',
                name: '王小',
                address: '上海市普陀区金沙江路 1518 弄',
                }, {
                date: '2016-05-03',
                name: '小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }]
        
        }
    },
    methods: {

        tableRowClassName({row, rowIndex}) {
            if (rowIndex === 0) {
                return 'warning-row';
            }  else if (row.name == '王小') {
                return 'warning-row'
            }
                return '';
        }
    
    }
}
</script>

<style scoped>
.select-box{
    
}
.result-table{
    margin: 0 auto;
}

</style>

<style >
/* row-class-name、row-style、cell-class-name等属性要想生效必须使用全局class才能生效。 */
.el-table .warning-row {
    background: oldlace;
}
.el-table .success-row {
    background: #f0f9eb;
}

</style>