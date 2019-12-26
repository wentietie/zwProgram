<template>
	<view class="holePage">
		<!-- <view class="topHeadImg">
			<image src="../../static/shopHeadImg.png" mode=""></image>
		</view> -->
		<view class="pageTop">
			<view class="topBg">
				<!-- <image src="../../static/shopHomeTop.png" mode="widthFix"></image> -->
				<view class="goBack" @click="goBack">
					<image src="../../static/goBack.png" mode=""></image>
				</view>
				<view class="moreIcon">
					<image src="../../static/moreIcon.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="shopInfo">
				<view class="shopName">
					<text>小保加的零售店</text>
				</view>
				<view class="shopDetail">
					<text>评分：4.9 &nbsp;&nbsp;&nbsp;月售1312&nbsp;&nbsp;&nbsp;距离你233米</text>
				</view>
				<view class="couponView">
					<view class="leftCou">
						<image src="../../static/leftBg.png" mode=""></image>
						<view class="left">
							<text>满40减6</text>
						</view>
						<view class="right">
							<text>购买</text>
						</view>
					</view>
					<view class="leftCou" style="margin-left: 20upx;">
						<image src="../../static/rigthBg.png" mode=""></image>
						<view class="left">
							<text>满40减6</text>
						</view>
						<view class="right">
							<text>购买</text>
						</view>
					</view>
				</view>
			</view>
			<view class="addView">
				<view class="left">
					<image src="../../static/locationSel.png" mode=""></image>
					<text>济南市历下区爱太湖大道222号文化中心商业街</text>
				</view>
				<view class="right">
					<image src="../../static/downArrow.png" mode=""></image>
					<text>4个活动</text>
				</view>
			</view>
		</view>
		<view class="vipList">
			<view class="topTitle">
				<text>会员列表</text>
			</view>
			<view class="eachVip" v-for="(item, index) in vipList" v-bind:key="index">
				<view class="leftImg">
					<image src="../../static/shopHeadImg.png" mode=""></image>
				</view>
				<view class="midInfo">
					<view class="title">
						<text>牛木叶</text>
					</view>
					<view class="phone">
						<text>电话：</text><text>13113113131</text>
					</view>
					<view class="vipLevel">
						<text>会员等级：</text><text>钻</text>
					</view>
				</view>
				<view class="rigthInfo">
					<view class="payCount" style="margin-top: 0upx;">
						<text>消费次数：</text><text>1212</text>
					</view>
					<view class="payCount" style="margin-top: 5upx;">
						<text>消费金额：</text><text>1212</text>
					</view>
					<view class="payCount" style="margin-top: 30upx;color: #007AFF;" @click="getCurInfo">
						<text>详情</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				vipList:[
					'1',
					'1',
					'1',
					'1',
					'1'
				]
			}
		},
		methods: {
			goBack(){
				uni.navigateBack(-1)
			},
			getCurInfo(){
				uni.navigateTo({
					url:'../vipDetail/vipDetail'
				})
			}
		}
	}
</script>

<style>
	.rigthInfo{
		float: right;
		font-size: 25upx;
		text-align: right;
	}
	.payCount{
		margin-top: 15upx;
	}
	.midInfo{
		float: left;
		margin-left: 20upx;
		
	}
	.phone{
		font-size: 25upx;
		margin-top: 15upx;
	}
	.vipLevel{
		font-size: 25upx;
		margin-top: 15upx;
	}
	.title{
		font-size: 35upx;
		font-weight: 700;
	}
	.eachVip{
		width: 100%;
		height: 150upx;
		overflow: hidden;
		margin-top: 30upx;
		position: relative;
	}
	.leftImg{
		width: 150upx;
		height: 150upx;
		float: left;
		/* top: 0;
		left: 0;
		position: absolute; */
		border-radius: 15upx;
		overflow: hidden;
	}
	.eachVip image{
		width: 100%;
		height: 100%;
		display: block;
	}
	.topTitle{
		font-size: 35upx;
		font-weight: 700;
	}
	.vipList{
		width: 92%;
		margin: 0 auto;
		margin-top: 40upx;
	}
	.holePage{
		width: 100%;
		
	}
	.holePage image{
		width: 100%;
		display: block;
	}
	.topBg{
		width: 100%;
		height: 150upx;
	}
	.goBack{
		width: 40upx;
		height: 40upx;
		position: fixed;
		top: 80upx;
		left: 20upx;
	}
	.goBack image{
		width: 100%;
		height: 100%;
		display: block;
	}
	.moreIcon{
		width: 40upx;
		/* height: 40upx; */
		position: fixed;
		top: 85upx;
		right: 30upx;
	}
	.moreIcon image{
		width: 100%;
		height: 100%;
		display: block;
	}
	.topHeadImg{
		width: 150upx;
		height: 150upx;
		position: absolute;
		left: 300upx;
		top: 130upx;
		border-radius: 15upx;
	}
	.topHeadImg image{
		width: 100%;
		height: 100%;
		display: block;
	}
	.shopInfo{
		width: 100%;
		padding-top: 80upx;
	}
	.shopName{
		width: 100%;
		text-align: center;
		font-size: 40upx;
		font-weight: 700;
	}
	.shopDetail{
		width: 100%;
		text-align: center;
		font-size: 20upx;
		color: #717171;
		margin-top: 10upx;
	}
	.couponView{
		width: 100%;
		overflow: hidden;
		margin-top: 20upx;
	}
	.leftCou{
		width: 300upx;
		height: 60upx;
		margin-left: 70upx;
		float: left;
		position: relative;
	}
	.leftCou image{
		width: 100%;
		height: 100%;
		display: block;
	}
	.leftCou .left{
		width: 220upx;
		line-height: 60upx;
		color: #FFFFFF;
		font-size: 25upx;
		left: 0upx;
		top: 0upx;
		position: absolute;
		/* background-color: #000000; */
		text-align: center;
	}
	.leftCou .right{
		width: 80upx;
		line-height: 60upx;
		color: #FFFFFF;
		font-size: 25upx;
		right: 0upx;
		top: 0upx;
		position: absolute;
		/* background-color: #000000; */
		text-align: center;
	}
	.addView{
		width: 85%;
		overflow: hidden;
		margin: 0 auto;
		height: 40upx;
		margin-top: 15upx;
		color: #8A8A8A;
		font-size: 22upx;
	}
	.addView .left{
		float: left;
		position: relative;
		width: 80%;
		height: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.addView .left image{
		width: 20upx;
		height: 20upx;
		display: block;
		position: absolute;
		left: 0;
		top: 10upx;
	}
	.addView .left text{
		/* font-size: 20upx; */
		line-height: 40upx;
		position: absolute;
		left: 30upx;
	}
	.addView .right{
		width: 20%;
		float: left;
		height: 100%;
		position: relative;
	}
	.addView .right image{
		width: 20upx;
		height: 20upx;
		display: block;
		position: absolute;
		right: 0upx;
		top: 10upx;
	}
	.addView .right text{
		position: absolute;
		right: 30upx;
		/* font-size: 20upx; */
		line-height: 40upx;
	}
</style>
