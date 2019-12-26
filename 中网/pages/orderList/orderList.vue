<template>
	<view class="holePage">
		<view class="eachOrder" v-for="(item, index) in orderList" v-bind:key="index">
			<view class="leftView">
				<view class="goodsTitle">
					<text>{{item.title}}</text>
				</view>
				<view class="date">
					<text>{{item.date}}</text>
				</view>
				<view class="orderNum">
					<text>订单编号：</text><text>SH201911081022821987322312</text>
				</view>
			</view>
			<view class="rightView">
				<view class="top">
					<text>牛木叶</text>
				</view>
				<view class="payStatus">
					<text>已支付</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderList:[
					{title: '高级轻型羽绒美心高级轻型羽绒美心高级轻型羽绒美心高级轻型羽绒美心高级轻型羽绒美心', date: '2019-9-9'},
					{title: '高级轻型羽绒美心高级轻型羽绒美心高级轻型羽绒美心高级轻型羽绒美心高级轻型羽绒美心', date: '2019-9-9'},
					{title: '高级轻型羽绒美心高级轻型羽绒美心高级轻型羽绒美心高级轻型羽绒美心高级轻型羽绒美心', date: '2019-9-9'}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.holePage{
		width: 100%;
	}
	.eachOrder{
		width: 92%;
		margin: 0 auto;
		margin-top: 60upx;
		overflow: hidden;
	}
	.leftView{
		width: 75%;
		float: left;
		border-right: 1upx solid #e8e8e8;
	}
	.goodsTitle{
		width: 80%;
		font-size: 35upx;
		line-height: 40upx;
		height: 80upx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	.date{
		width: 100%;
		font-size: 25upx;
		color: #b2b2b2;
		margin-top: 10upx;
	}
	.orderNum{
		font-size: 25upx;
		color: #EDCA8D;
	}
	.rightView{
		width: 24.5%;
		position: relative;
		text-align: center;
		float: right;
		height: 100%;
	}
	.top{
		font-size: 30upx;
	}
	.payStatus{
		width: 60%;
		position: absolute;
		left: 20%;
		/* bottom: 5upx; */
		top: 100upx;
		color: #EDCA8D;
		border-radius: 30upx;
		font-size: 25upx;
		line-height: 50upx;
		border: 2upx solid #EDCA8D;
	}
</style>
