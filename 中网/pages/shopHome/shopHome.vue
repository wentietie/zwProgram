<template>
	<view class="holePage">
		<view class="topHeadImg">
			<image src="../../static/shopHeadImg.png" mode=""></image>
		</view>
		<view class="pageTop">
			<view class="topBg">
				<image src="../../static/shopHomeTop.png" mode="widthFix"></image>
				<view class="goBack" @click="goBack">
					<image src="../../static/goBack.png" mode=""></image>
				</view>
				<view class="moreIcon" @click="goToVip">
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
		<view class="MidTab">
			<view class="tabview">
				<view class="eachTab" v-for="(item, index) in tabList" v-bind:key="index" @click="chooseTab(index)">
					<text>{{item}}</text>
					<view class="bordrView" v-if="curTab == index"></view>
				</view>
			</view>
		</view>
		<view class="bottomContent">
			<view class="selectGoods" v-if="curTab == 0">
				<view class="title">
					<text>精选好物</text>
				</view>
				<view class="goodsList">
					<view class="eachGoods">
						<image src="../../static/goodsImg.png" mode=""></image>
						<view class="bottomText">
							<view class="goodsTitle">
								<text>孕妇零食混合小包装孕妇零食混合小包装孕妇零食混合小包装孕妇零食混合小包装孕妇零食混合小包装</text>
							</view>
							<view class="curGodsPrice">
								<text style="font-size: 25upx;">￥</text><text>59</text>
							</view>
						</view>
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
				tabList:[
					'商家优品',
					'用户评价',
					'商家信息'
				],
				curTab:0,
				
			}
		},
		methods: {
			chooseTab(i){
				this.curTab = i
			},
			goBack(){
				uni.navigateBack(-1)
			},
			goToVip(){
				uni.navigateTo({
					url:'../vipList/vipList'
				})
			},
			postData(){
				uni.request({
					url:'',
					method:'GET',
					data:{
						// store_logo:
						// store_name:
						// store_address:
						// longitude:
						// latitude:
					},
					success(res){
						console.log(res)
					}
				})
			}
		},
		onShow() {
			
		}
	}
</script>

<style>
	.curGodsPrice {
		width: 90%;
		margin: 0 auto;
		color: #F0AB3F;
		line-height: 30upx;
		margin-top: 30upx;
		margin-bottom: 20upx;
	}
	.goodsTitle{
		width: 100%;
		font-size: 30upx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		/* height: 90upx; */
	}
	.bottomText{
		width: 90%;
		margin: 0 auto;
		margin-top: 20upx;
		
	}
	.bottomContent{
		width: 100%;
		margin-top: 20upx;
	}
	.selectGoods{
		width: 92%;
		margin: 0 auto;
		margin-top: 30upx;
		/* overflow: hidden; */
	}
	.goodsList{
		width: 100%;
		overflow: hidden;
		margin-top: 20upx;
	}
	.eachGoods{
		width: 48.5%;
		margin: 10upx 0.75%;
		border-radius: 15upx;
		overflow: hidden;
		box-shadow: 0 0 10upx #C0C0C0;
		float: left;
	}
	.eachGoods image{
		width: 100%;
		height: 250upx;
		display: block;
	}
	.title{
		font-size: 35upx;
		font-weight: 700;
	}
	.MidTab{
		width: 100%;
		border-bottom: 1upx solid #eeeeee;
		margin-top: 20upx;
	}
	.tabview{
		width: 690upx;
		overflow: hidden;
		margin: 0 auto;
	}
	.eachTab{
		width: 230upx;
		float: left;
		text-align: center;
		font-size: 30upx;
		font-weight: 700;
		line-height: 60upx;
	}
	.bordrView{
		width: 60upx;
		height: 6upx;
		background-color: #000000;
		margin: 0 auto;
	}
	.holePage{
		width: 100%;
		
	}
	.holePage image{
		width: 100%;
		display: block;
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
		height: 40upx;
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
