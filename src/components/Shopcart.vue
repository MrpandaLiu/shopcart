<template>
  <div id="shopcart">
      <h2>{{ title }}</h2>
      <table>
          <th>
              <td>猫咪品种</td>
              <td>单价</td>
              <td>选择数量</td>
          </th>
          <tr>
              <td>橘猫</td>
              <td>$2000</td>
              <td>
                <choose-num :num=0 @listenToAdd='AddToTotal(2000)' @listenToCut='CutToTotal(2000)'></choose-num>
              </td>
          </tr>
          <tr>
              <td>布偶猫</td>
              <td>$8000</td>
              <td>
                  <choose-num :num=0 @listenToAdd='AddToTotal(8000)' @listenToCut='CutToTotal(8000)'></choose-num>
              </td>
          </tr>
          <tr>
              <td>畅喵</td>
              <td>$10000</td>
              <td>
                  <choose-num :num=0 @listenToAdd='AddToTotal(10000)' @listenToCut='CutToTotal(10000)'></choose-num>
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