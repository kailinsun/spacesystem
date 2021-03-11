<template>
    <div class="result-container" @click="enter">
        
    </div>
</template>

<script>
export default {
    name: 'ResultBoard',
    props: {
        
    },
    methods: {
        enter(){
            this.$message({
                    message: "suc!!",
                    type: 'success',
                });
        }
    }
}
</script>

<style scoped>
.result-container{
    float: left;
    width: 330px;
    margin: 20px;
    cursor: pointer;
}
.result-container:hover{
    box-shadow: 0px 3px 5px 3px rgba(216, 216, 216, 0.3);
}

</style>