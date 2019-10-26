<template>
  <div id="shopcart">
      <h2>{{ title }}</h2>
      <table>
          <th>
              <td>猫咪品种</td>
              <td>单价</td>
              <td>选择数量</td>
          </th>
          <tr v-for="(cat,index) in catList" :key="index">
              <td>{{ cat.name }}</td>
              <td>{{ cat.price }}</td>
              <td>
                  <choose-num :num="cat.num" @listenToAdd='AddToTotal(cat.price)' @listenToCut='CutToTotal(cat.price)'></choose-num>
              </td>
          </tr>
      </table>
      <h2>Total: {{ total | newTotal }}</h2>
  </div>
</template>

<script>
import ChooseNum from './ChooseNum'

export default {
    name: 'Shopcart',
    data() {
        return {
            catList: [
                {
                    name: '橘猫',
                    price: 2000,
                    num: 0
                },
                {
                    name: '布偶猫',
                    price: 8000,
                    num: 0
                },
                {
                    name: '畅猫',
                    price: 10000,
                    num: 0
                }
            ],
            total: 0
        }
    },
    props: ['title'],
    methods: {
        AddToTotal(num) {
            this.total += num
        },
        CutToTotal(num) {
            this.total -= num
        }
    },
    mounted() {
        console.log(this.title)
    },
    components: {
        ChooseNum
    },
    filters: {
        newTotal(value) {
            return '$' + value
        }
    }
}
</script>

<style scoped>
#shopcart {
    width: 100%;
}

#shopcart>h2 {
    text-align: center;
}

#shopcart>table{
    width: 100%;
}

#shopcart>table th,tr {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    text-align: center;
    line-height: 200%;
}

#shopcart>table td {
    flex: 1;
}


</style>