<template>
     <div>
    <van-nav-bar title="地址" left-text="返回" left-arrow @click-left="headBack"></van-nav-bar>
<van-address-list
  v-model="chosenAddressId"
  :list="list"
/>

    <van-sku
  stepper-title="我要买"
  :sku="{}"
  :goods="{}"
  :goods-id="11"
  :hide-stock="false"
  :show-add-cart-btn="true"
  :quota="1"
  :quota-used="1"
  :reset-stepper-on-hide="true"
  :initial-sku="{}"
>
  <!-- 隐藏 sku messages -->
  <template slot="sku-messages"></template>
  <!-- 自定义 sku actions -->
  <template slot="sku-actions" slot-scope="props">
    <div class="van-sku-actions">
      <van-button bottom-action @click="handlePointClicked">积分兑换</van-button>
      <!-- 直接触发 sku 内部事件，通过内部事件执行 handleBuyClicked 回调 -->
      <van-button type="primary" bottom-action @click="props.skuEventBus.$emit('sku:buy')">买买买</van-button>
    </div>
  </template>
</van-sku>


<van-submit-bar
  :price="3050"
  button-text="提交订单"
/>
    </div>
</template>

<script>
    export default {
        name:'AddressSet',
        data() {
             return {
            chosenAddressId: '1',
            list: [
                {
                id: '1',
                name: '张三',
                tel: '13000000000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                },
                {
                id: '2',
                name: '李四',
                tel: '1310000000',
                address: '浙江省杭州市拱墅区莫干山路 50 号'
                },{
                id: '3',
                name: '张三',
                tel: '13000000000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                },
                {
                id: '4',
                name: '李四',
                tel: '1310000000',
                address: '浙江省杭州市拱墅区莫干山路 50 号'
                },{
                id: '5',
                name: '张三',
                tel: '13000000000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                },
                {
                id: '6',
                name: '李四',
                tel: '1310000000',
                address: '浙江省杭州市拱墅区莫干山路 50 号'
                },
                {
                id: '7',
                name: '张三',
                tel: '13000000000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                },
                {
                id: '8',
                name: '李四',
                tel: '1310000000',
                address: '浙江省杭州市拱墅区莫干山路 50 号'
                },{
                id: '9',
                name: '张三',
                tel: '13000000000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                },
                {
                id: '23',
                name: '李四',
                tel: '1310000000',
                address: '浙江省杭州市拱墅区莫干山路 50 号'
                },{
                id: '41',
                name: '张三',
                tel: '13000000000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                },
                {
                id: '52',
                name: '李四',
                tel: '1310000000',
                address: '浙江省杭州市拱墅区莫干山路 50 号'
                },{
                id: '61',
                name: '张三',
                tel: '13000000000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                },
                {
                id: '72',
                name: '李四',
                tel: '1310000000',
                address: '浙江省杭州市拱墅区莫干山路 50 号'
                },{
                id: '81',
                name: '张三',
                tel: '13000000000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                },
                {
                id: '92',
                name: '李四',
                tel: '1310000000',
                address: '浙江省杭州市拱墅区莫干山路 50 号'
                }
            ],
            title:'实例'
            }
        },
        methods:{
            headBack(){
                this.$router.back(-1)
            }
        }
    }
</script>

<style scoped>

</style>