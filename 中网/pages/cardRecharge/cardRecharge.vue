<template>
	<view class="holePage">
		<view class="goBack" @click="goBack">
			<image src="../../static/goBackWhite.png" mode=""></image>
		</view>
		<view class="topImg">
			<text>一卡通\n</text>
			<image src="../../static/cardImg.png" mode=""></image>
		</view>
		<view class="vipCardInfo">
			<view class="left">
				<text>会员卡详情</text>
			</view>
			<view class="right">
				<image src="../../static/rightArrow.png" mode=""></image>
				<text>查看更多</text>
			</view>
		</view>
		<view class="stuffView">
			
		</view>
		<view class="payType">
			<view class="topView">
				<text>选择支付方式</text>
			</view>
			<view class="eachType" v-for="(item, index) in payList" v-bind:key="index" @click="chooseThis(index)">
				<view class="leftIcon">
					<image :src="item.img" mode=""></image>
				</view>
				<text>支付宝{{index}}</text>
				<view class="tickView" v-bind:class="{bgChange:curIndex == index}">
					<image v-if="curIndex == index" src="../../static/tickIcon.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="payNow">
			<text>立即充值</text>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				curIndex: 0,
				payList:[
					{img:'../../static/aliPay.png', label: '支付宝'},
					{img:'../../static/unionPay.png', label: '银联支付'},
					{img:'../../static/wxPay.png', label: '微信支付'}
				]
			}
		},
		methods: {
			goBack() {
				uni.navigateBack(-1)
			},
			chooseThis(i){
				this.curIndex = i
			},
		}
	}
</script>

<style>
	.payNow{
		width: 95%;
		line-height: 100upx;
		margin: 50upx auto;
		/* margin-top: ; */
		color: #ffffff;
		text-align: center;
		background-color: #edca8d;
		border-radius: 15upx;
	}
	.eachType{
		width: 100%;
		position: relative;
		padding: 20upx 0;
		/* border-top: 1upx solid #000000; */
		border-top: 1upx solid #fbfbfb;
		margin-top: 10upx;
		height: 100upx;
	}
	.tickView{
		width: 40upx;
		height: 40upx;
		position: absolute;
		right: 30upx;
		top: 45upx;
		background-color: #f0f0f0;
		border-radius: 30upx;
	}
	.tickView image{
		width: 100%;
		height: 100%;
		display: block;
	}
	.bgChange{
		background-color: #00c800;
	}
	.eachType .leftIcon{
		width: 80upx;
		height: 80upx;
		position: absolute;
		top: 30upx;
		left: 20upx;
	}
	.eachType .leftIcon image{
		width: 100%;
		height: 100%;
		display: block;
	}
	.eachType text{
		font-size: 30upx;
		font-weight: 600;
		position: absolute;
		left: 120upx;
		top: 45upx;
	}
	.topView{
		width: 100%;
		font-size: 35upx;
		font-weight: 700;
		line-height: 80upx;
	}
	.payType{
		width: 95%;
		margin: 0 auto;
		margin-top: 20upx;
	}
	.stuffView{
		width: 100%;
		height: 15upx;
		background-color: #efefef;
	}
	.vipCardInfo{
		width: 100%;
		overflow: hidden;
	}
	.vipCardInfo .left{
		/* width: ; */
		float: left;
		margin-left: 20upx;
		font-size: 30rpx;
		font-weight: 700;
		line-height: 100upx;
	}
	.vipCardInfo .right {
		float: right;
		margin-right: 20upx;
		position: relative;
	}
	.vipCardInfo .right image{
		width: 30upx;
		height: 30upx;
		position: absolute;
		right: 0;
		top: 40upx;
	}
	.vipCardInfo .right text{
		line-height: 100upx;
		font-size: 25upx;
		color: #a7a7a7;
		margin-right: 30upx;
	}
	.holePage{
		width: 100%;
	}
	.topImg{
		width: 100%;
		height: 500upx;;
		padding-top: 50upx;
		background-color: #2a2c34;
		text-align: center;
		color: white;
		font-size: 35upx;
	}
	.topImg image{
		width: 650upx;
		height: 330upx;
		margin: 0 auto;
		margin-top: 60upx;
	}
	.goBack {
		position: fixed;
		width: 40upx;
		height: 40upx;
		/*float: left; 
		margin-top: 8upx; */
		left: 30upx;
		top: 60upx;
	}
	
	.goBack image {
		width: 100%;
		height: 100%;
		display: block;
	}
</style>
