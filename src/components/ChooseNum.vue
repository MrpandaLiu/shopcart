<template>
    <div><span @click="add">+</span><input type="text" v-model="realNum" readonly="readonly"><span @click="cut">-</span></div>
</template>

<script>
export default {
    name: 'ChooseNum',
    data() {
        return {
            realNum: this.num
        }
    },
    props: ['num'],
    methods: {
        add() {
            this.realNum++
            this.$emit('listenToAdd')
        },
        cut() {
            if(this.realNum > 0) {
                this.realNum--
                this.$emit('listenToCut')
            }
        }
    }
}
</script>

<style>
#shopcart>table tr input {
    width: 10%;
    text-align: center;
}

#shopcart>table tr span {
    cursor: pointer;
}
</style>