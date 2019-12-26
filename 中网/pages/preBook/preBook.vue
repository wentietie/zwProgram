<template>
	<view class="holePage">
		<view class="topView">
			<view class="goBack">
				<image src="../../static/goBack.png" mode=""></image>
			</view>
			<view class="moreIcon">
				<image src="../../static/moreIcon.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="perShopInfo">
			<view class="logo">
				<image src="../../static/addImg.png" mode=""></image>
			</view>
			<view class="rightInfo">
				<view class="top">
					<view class="litBtn">
						<text>推荐</text>
					</view>
					<view class="shopName">
						<text>速8酒店经济型</text>
					</view>
				</view>
				<view class="shopInfo">
					<text>评分：4.2&nbsp;&nbsp;&nbsp;&nbsp;月售1212单</text>
				</view>
				<view class="shopInfo">
					<text>距离您233米</text>
				</view>
			</view>
		</view>
		<view class="actInfo">
			<view class="actOne">
				<view class="leftActView">
					<text>减</text>
				</view>
				<view class="rightActInfo">
					<text>满20减10</text>
				</view>
			</view>
			<view class="actOne">
				<view class="leftActView">
					<text>惠</text>
				</view>
				<view class="rightActInfo">
					<text>特惠5折抢</text>
				</view>
			</view>
			<view class="addView">
				<image src="../../static/locationSel.png" mode=""></image>
				<text>济南市区历下区爱太湖文化中心</text>
			</view>
		</view>
		<!-- <view class="comNum">
			<text>221</text>
		</view> -->
		<view class="MidTab">
			<view class="tabview">
				<view class="eachTab" v-for="(item, index) in tabList" v-bind:key="index" @click="chooseTab(index)">
					<text>{{item}}</text>
					<view class="bordrView" v-if="curTab == index"></view>
				</view>
			</view>
		</view>
		<view class="bottomContent">
			<view class="eachContent" v-if="curTab == 0">
				<text style="line-height: 60upx;font-size: 30upx;font-weight: 700;">精品专享</text>
				<view class="eachGoods">
					<image src="../../static/addImg.png" mode=""></image>
					<view class="rightBook">
						<view class="title">
							<text>大床房</text>
						</view>
						<view class="type">
							<text>床型 圆床直径1.8米</text>
						</view>
						<view class="bookBtn" @click="bookThis">
							<text>预定</text>
						</view>
						<view class="saleNum">
							<text>半年销量2132</text>
						</view>
					</view>
				</view>
				<view class="more">
					<text>更多优惠</text>
				</view>
			</view>
			<view class="eachContent" v-if="curTab == 1">
				<view class="eachComment" v-for="(item, index) in commentList" v-bind:key="index">
					<view class="headImg">
						<image src="../../static/addImg.png" mode=""></image>
					</view>
					<view class="rightCom">
						<view class="nickName">
							<text>{{item.title}}</text>
						</view>
						<view class="assDis">
							<text>评价</text>
							<image v-for="itemNum in item.starNum" v-bind:key="item" src="../../static/starIcon.png" mode=""></image>
						</view>
						<view class="desCom">
							<text>住的很舒适，啊手动阀手动阀按时发撒地方住的很舒适，啊手动阀手动阀按时发撒地方</text>
						</view>
						<view class="imgDis" >
							<image v-for="itemImg in item.imgList" v-bind:key="item" :src="itemImg" mode="" ></image>
						</view>
					</view>
				</view>
				<view class="more">
					<text>更多评价</text>
				</view>
			</view>
			<view class="eachContent" style="width: 100%;" v-if="curTab == 2">
				<view class="eachView">
					<text>营业时间</text>
					<image src="../../static/rightArrow.png" mode=""></image>
					<view style="float: left;width: 100%;font-size: 25upx;color: #b8b8b8;position: relative;margin-top: -30upx;">
						<text>周一至周日 09：00-22：00</text>
					</view>
					<view class="stuffView">
						
					</view>
				</view>
				<view class="eachView">
					<text>共三家分店</text>
					<image src="../../static/rightArrow.png" mode=""></image>
					<view class="stuffView">
						
					</view>
				</view>
				<view class="eachView">
					<text>营业许可证</text>
					<image src="../../static/rightArrow.png" mode=""></image>
					<view class="stuffView">
						
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
					'优惠信息',
					'用户评价',
					'商家信息'
				],
				curTab:0,
				commentList:[
					{title: '暗室逢灯', starNum: 5, imgList:[
						'../../static/assImg.png',
						'../../static/assImg.png',
						'../../static/assImg.png'
					]}
				]
			}
		},
		methods: {
			chooseTab(i){
				this.curTab = i
			},
			bookThis(){
				uni.navigateTo({
					url:'../bookPage/bookPage'
				})
			}
		}
	}
</script>

<style>
	.eachView{
		width: 100%;
		overflow: hidden;
	}
	.eachView text{
		float: left;
		margin-left: 20upx;
		font-size: 30upx;
		font-weight: 700;
		line-height: 90upx;
	}
	.eachView image{
		width: 25upx;
		height: 25upx;
		float: right;
		margin-right: 25upx;
		margin-top: 30upx;
	}
	.stuffView{
		width: 100%;
		height: 10upx;
		background-color: #f7f7f7;
		float: left;
	}
	.more{
		width: 100%;
		line-height: 100upx;
		text-align: center;
		color: #EDCA8D;
		font-size: 30upx;
		border-top: #C8C7CC solid 1upx;
		margin-top: 50upx;
	}
	.imgDis{
		width: 100%;
		overflow: hidden;
	}
	.imgDis image{
		width: 160upx;
		height: 160upx;
		display: block;
		margin-right: 23upx;
		border-radius: 15upx;
		margin-top: 25upx;
		float: left;
	}
	.desCom{
		width: 100%;
		font-size: 30upx;
		color: #333333;
		margin-top: 15upx;
	}
	.eachComment{
		width: 100%;
		margin-top: 30upx;
		overflow: hidden;
	}
	.assDis{
		width: 100%;
		font-size: 25upx;
		color: #878787;
		margin-top: 15upx;
		overflow: hidden;
	}
	.assDis text{
		float: left;
		margin-right: 10upx;
	}
	.assDis image{
		width: 20upx;
		height: 20upx;
		margin: 5upx;
		display: block;
		float: left;
		margin-top: 10upx;
	}
	.nickName{
		width: 70%;
		font-size: 30upx;
		font-weight: 700;
	}
	.rightCom{
		width: 580upx;
		float: left;
		margin-left: 20upx;
		position: relative;
	}
	.headImg{
		width: 100upx;
		height: 100upx;
		border-radius: 60upx;
		overflow: hidden;
		float: left;
	}
	.headImg image{
		width: 100%;
		height: 100%;
		display: block;
	}
	.comNum{
		font-size: 25upx;
		color: #EDCA8D;
		position: absolute;
		top: 300upx;
		left: 440upx;
	}
	.bottomContent{
		width: 100%;
		margin-top: 20upx;
	}
	.eachContent{
		width: 700upx;
		margin: 0upx auto;
	}
	.eachGoods{
		width: 700upx;
		margin: 20upx auto;
		height: 120upx;
		overflow: hidden;
	}
	.eachGoods image{
		width: 120upx;
		height: 120upx;
		float: left;
		display: block;
	}
	.rightBook{
		width: 560upx;
		height: 100%;
		margin-left: 20upx;
		float: left;
		position: relative;
	}
	.bookBtn{
		width: 100upx;
		font-size: 30upx;
		line-height: 50upx;
		text-align: center;
		color: #FFFFFF;
		background-color: #EDCA8D;
		border-radius: 30upx;
		position: absolute;
		top: 10upx;
		right: 0;
	}
	.saleNum{
		font-size: 25upx;
		bottom: 10upx;
		position: absolute;
		right: 0;
	}
	.rightBook .title{
		font-size: 30upx;
		font-weight: 700;
	}
	.rightBook .type{
		font-size: 25upx;
		position: absolute;
		left: 0;
		bottom: 3upx;
		color: #333333;
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
	.addView{
		width: 100%;
		/* position: relative; */
		overflow: hidden;
	}
	.addView image{
		width: 25upx;
		height: 25upx;
		display: block;
		float: left;
		margin-top: 5upx;
	}
	.addView text{
		font-size: 25upx;
		float: left;
		margin-left: 20upx;
		color: #888888;
	}
	.actInfo{
		width: 700upx;
		margin: 0 auto;
		margin-top: 20upx;
	}
	.actOne{
		width: 100%;
		overflow: hidden;
		margin: 10upx 0;
	}
	.leftActView{
		width: 35upx;
		line-height: 35upx;
		text-align: center;
		background-color: #EDCA8D;
		color: #FFFFFF;
		font-size: 25upx;
		border-radius: 5upx;
		float: left;
	}
	.rightActInfo{
		float: left;
		margin-left: 10upx;
		font-size: 25upx;
		color: #888888;
		line-height: 35upx;
	}
	.shopInfo{
		width: 100%;
		font-size: 25upx;
		color: #888888;
		margin-top: 10upx;
	}
	.perShopInfo{
		width: 700upx;
		margin: 0 auto;
		margin-top: 150upx;
		overflow: hidden;
	}
	.logo{
		width: 100upx;
		height: 100upx;
		border-radius: 10upx;
		float: left;
	}
	.logo image{
		width: 100%;
		height: 100%;
		display: block;
	}
	.rightInfo{
		width: 580upx;
		float: right;
	}
	.rightInfo .top{
		width: 100%;
		overflow: hidden;
		
	}
	.litBtn{
		width: 70upx;
		line-height: 35upx;
		text-align: center;
		color: white;
		background-color: #EDCA8D;
		float: left;
		font-size: 20upx;
		border-radius: 30upx;
		margin-top: 10upx;
	}
	.shopName{
		width: 480upx;
		float: left;
		margin-left: 20upx;
		font-size: 35upx;
		font-weight: 700;
		line-height: 60upx;
		margin-top: -5upx;
	}
	.holePage{
		width: 100%;
	}
	.topView{
		width: 100%;
		height: 130upx;
		position: fixed;
		left: 0;
		top: 0;
		background-color: #FFFFFF;
		z-index: 1000;
	}
	.goBack{
		width: 40upx;
		height: 40upx;
		float: left;
		margin-top: 80upx;
		margin-left: 20upx;
	}
	.goBack image{
		width: 100%;
		height: 100%;
		display: block;
	}
	.moreIcon{
		width: 40upx;
		height: 40upx;
		float: right;
		margin-top: 80upx;
		margin-right: 20upx;
	}
	.moreIcon image{
		width: 100%;
		height: 100%;
		display: block;
	}
</style>
