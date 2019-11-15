<template>
  <div id="content">
      <div><span>猫咪品种</span><input type="text" v-model="name"></div>
      <div class="warning" v-show="wrongPrice">不能填负数哦</div>
      <div><span>设置单价</span><input type="text" v-model="price"></div>
      <div><span>初始数量</span><input type="text" v-model="num"></div>
      <div><button @click="handleToAddOne">提交</button></div>
  </div>
</template>

<script>
import { addOne } from '../network/api'

export default {
    name: 'AddNew',
    data() {
        return {
            name: '',
            price: 0,
            num: 0,
            wrongPrice: false
        }
    },
    watch: {
        price: function() {
            if(this.price < 0) {
                this.wrongPrice = true
                console.log(this.wrongPrice)
            } else {
                this.wrongPrice = false
            }
        }      
    },
    methods: {
        handleToAddOne() {
            if(this.name!=='' && this.price>=0 && this.num>=0) {
                addOne({
                    name: this.name,
                    price: Number(this.price),
                    num: Number(this.num)
                }).then((res) => {
                    alert(res.data)
                    this.$router.push('/shopcart')
                })
            } else {
                alert('您的信息填写有误')
            }
        }
    }
}
</script>

<style scoped>
div {
    text-align: center;
}

#content {
    display: flex;
    flex-direction: column;
    margin-top: 50px; 
    line-height: 400%;
}

#content span {
    padding-right: 20px;
}

.warning {
    font-size: 10px;
    color: red;
}
</style>