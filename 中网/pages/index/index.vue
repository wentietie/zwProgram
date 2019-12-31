<template>
	<view class="content">
		<view class="topView">
			<view class="leftScanIcon" @click="scanCode">
				<image src="../../static/scanIcon.png" mode=""></image>
			</view>
			<view class="topMiddleInput">
				<view class="midLeftIcon">
					<image src="../../static/searchIcon.png" mode=""></image>
				</view>
				<view class="midRigthInput">
					<input type="text" value="" placeholder="搜索内容"/>
				</view>
			</view>
			<view class="midRightIcon">
				<image src="../../static/messageIcon.png" mode=""></image>
			</view>
		</view>
		<view class="swiperView">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
				<swiper-item v-for="(item, index) in topSwiper" v-bind:key="index">
					<image :src="item.ad_url" mode="" ></image>
				</swiper-item>
				<!-- globalData.imgUrl + -->
			</swiper>
		</view>
		<view class="littleTabList">
			<view class="eachLittleTab" v-for="(item, index) in littleTabList" v-bind:key="index">
				<view class="tabTopIcon">
					<image :src="item.images" mode=""></image>
				</view>
				<view class="tabBottomLabel">
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
		<view class="midNew">
			<view class="newLeftText">
				<text style="color: #F2C74A;">商城</text>
				<text>热点</text>
			</view>
			<view class="newRightText">
				<view class="rightTopnew">
					<text>新年新气象,厨卫清洁满199减100</text>
				</view>
				<view class="rightBottomnew">
					<text>满199减100全店税制折扣</text>
				</view>
			</view>
		</view>
		<view class="stuffView">

		</view>
		<view class="applyView" @click="applyCard">
			<view class="leftTextDis">
				<view class="topApply">
					<text>申请开通一卡通</text>
				</view>
				<view class="bottomTip">
					<text>卡通充值等便民服务，立即开通</text>
				</view>
			</view>
			<view class="rigthApplyImg">
				<image src="../../static/middleApplyImg.png" mode=""></image>
			</view>
		</view>
		<view class="stuffView">

		</view>
		<view class="selectShop">
			<view class="topTitleShop">
				<text>精选商家</text>
			</view>
			<view class="shopList">
				<view class="topList">
					<view class="eachTopShop" v-for="(item, index) in eachTopShop" v-bind:key="index">
						<image :src="item.ad_url" mode=""></image>
					</view>
				</view>
				<view class="topList" style="margin-top: 10upx;">
					<view class="eachbottomShop" v-for="(item, index) in eachbottomShop" v-bind:key="index">
						<image :src="item.ad_url" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="selectShop">
			<view class="topTitleShop">
				<text>猜你喜欢</text>
			</view>
			<view class="shopList">
				<view class="eachShopLike" v-for="(item, index) in eachShopLike" v-bind:key="index" @click="getGoodsInfo(item.goods_id)">
					<view class="topShopImg">
						<image :src="item.original_img" mode=""></image>
					</view>
					<view class="goodsTitle">
						<text>{{item.goods_name}}</text>
					</view>
					<view class="curGodsPrice">
						<text style="font-size: 20upx;">￥</text><text style="font-size: 30upx;">{{item.shop_price}}</text>
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
				topSwiper: [],
				littleTabList: [],
				eachTopShop: [
					'../../static/topShop.png',
					'../../static/topShop.png',
					'../../static/topShop.png',
					'../../static/topShop.png'
				],
				eachbottomShop: [
					'../../static/bottomShop.png',
					'../../static/bottomShop.png'
				],
				eachShopLike:[]
			}
		},
		onLoad() {
			
		},
		methods: {
			getGoodsInfo(id){
				uni.navigateTo({
					url:'../goodsInfo/goodsInfo?id='+id
				})
			},
			applyCard(){
				uni.navigateTo({
					url:'../cardRecharge/cardRecharge'
				})
			},
			scanCode(){
				uni.scanCode({
					success(res) {
						uni.setStorage({
							key:'htmlUrl',
							data:res.result,
							success() {
								uni.navigateTo({
									url:'../registerHtml/registerHtml'
								})
							}
						})
					}
				})
			},
			getLocation(){
				var that = this
				uni.getLocation({
				    type: 'wgs84',
				    success: function (res) {
						uni.setStorage({
							key : "location",
							data: res,
							success() {
								uni.getStorage({
									key : 'location',
									success(e) {
										that.globalData.location = e.data
									}
								})
							}
						})
				    }
				});
			},
			getTopSwiper(){
				var that = this
				uni.request({
					url:that.baseUrl + 'home/HomePage',
					method:'GET',
					header:{
						
					},
					data:{
						user_id:that.globalData.userInfo.user_id
					},
					success(resq) {
						that.topSwiper =  resq.data.data.swiper
						that.eachShopLike = resq.data.data.likeGoods
						that.littleTabList = resq.data.data.homeClass
						that.eachTopShop = resq.data.data.getStoreLike.top
						that.eachbottomShop = resq.data.data.getStoreLike.bottom
					}
				})
			},
			getImgUrl(){
				var that = this
				uni.request({
					url: this.baseUrl + 'home/getGlobal',
					method:"GET",
					data:{
						user_id: that.globalData.userInfo.user_id
					},
					success(res) {
						that.globalData.imgUrl=res.data.data.img
						that.getTopSwiper()
					}
				})
			},
		},
		onLoad() {
			var that = this
			uni.getStorage({
				key:'userInfo',
				success(res) {
					that.globalData.userInfo = res.data
				}
			}),
			this.getImgUrl()
			this.getLocation()
		}
	}
</script>

<style>
	.curGodsPrice {
		width: 90%;
		margin: 0 auto;
		color: #F0AB3F;
		line-height: 30upx;
		margin-top: 20upx;
		margin-bottom: 20upx;
		
	}

	.goodsTitle {
		width: 90%;
		height: 60upx;
		margin: 0 auto;
		font-size: 27upx;
		font-weight: 550;
		margin-top: 20upx;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.eachShopLike {
		width: 48.6%;
		margin: 20upx 0.7%;
		border-radius: 10upx;
		box-shadow: 0 0 10upx #C0C0C0;
		overflow: hidden;
		float: left;
	}

	.topShopImg {
		width: 100%;
		height: 240upx;
	}

	.topShopImg image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.eachbottomShop {
		width: 50%;
		height: 230upx;
		float: left;
	}

	.eachbottomShop image {
		width: 98%;
		height: 100%;
		margin: 0 auto;
		display: block;
	}

	.eachTopShop {
		width: 25%;
		height: 230upx;
		float: left;
	}

	.eachTopShop image {
		width: 98%;
		height: 100%;
		margin: 0 auto;
		display: block;
	}

	.topList {
		width: 100%;
		overflow: hidden;
	}

	.shopList {
		width: 100%;
		overflow: hidden;
		margin-top: 25upx;
	}

	.topTitleShop {
		width: 100%;
		font-size: 35upx;
	}

	.selectShop {
		width: 95%;
		margin: 0 auto;
		margin-top: 30upx;
	}

	.bottomTip {
		font-size: 25upx;
		margin-top: 10upx;
	}

	.topApply {
		font-size: 40upx;
		font-weight: 550;
	}

	.rigthApplyImg {
		width: 180upx;
		height: 140upx;
		float: right;
		margin-right: 30upx;
	}

	.rigthApplyImg image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.leftTextDis {
		width: 60%;
		float: left;
		margin-top: 15upx;
	}

	.applyView {
		width: 95%;
		margin: 15upx auto;
		overflow: hidden;
	}

	.stuffView {
		background-color: #F7F6FA;
		width: 100%;
		height: 20upx;
	}

	.rightTopnew {
		width: 100%;
		font-size: 25upx;
	}

	.rightBottomnew {
		width: 100%;
		font-size: 20upx;
		margin-top: 15upx;
	}

	.newRightText {
		width: 600upx;
		float: left;
		margin-left: 20upx;
	}

	.newLeftText {
		width: 60upx;
		font-size: 30upx;
		font-weight: 800;
		float: left;
	}

	.midNew {
		width: 95%;
		margin: 0 auto;
		margin-top: 30upx;
		overflow: hidden;
		margin-bottom: 20upx;
	}

	.tabBottomLabel {
		width: 100%;
		text-align: center;
		font-size: 25upx;
	}

	.tabTopIcon {
		width: 45upx;
		height: 45upx;
		margin: 20upx auto;
	}

	.tabTopIcon image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.eachLittleTab {
		width: 20%;
		float: left;
		padding: 15upx 0;
	}

	.littleTabList {
		width: 100%;
		overflow: hidden;
		margin-top: 20upx;
	}

	.swiperView {
		width: 95%;
		margin: 0 auto;
		height: 300upx;
		margin-top: 20upx;
		border-radius: 15upx;
		overflow: hidden;
	}

	.swiperView swiper {
		width: 100%;
		height: 100%;
	}

	.swiperView swiper swiper-item {
		width: 100%;
		height: 100%;
	}

	.swiperView swiper swiper-item image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.content {
		width: 100%;
		padding-top: 40upx;
	}

	.topView {
		width: 95%;
		margin: 0 auto;
		overflow: hidden;
		margin-top: 20upx;
	}

	.leftScanIcon {
		width: 50upx;
		height: 50upx;
		float: left;
	}

	.leftScanIcon image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.topMiddleInput {
		width: 550upx;
		height: 50upx;
		float: left;
		margin-left: 20upx;
		overflow: hidden;
		border: 1upx solid #EEEEEE;
		border-radius: 50upx;
	}

	.midRightIcon {
		width: 50upx;
		height: 50upx;
		float: left;
		margin-left: 40upx;
	}

	.midRightIcon image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.midLeftIcon {
		width: 30upx;
		height: 30upx;
		float: left;
		margin-left: 20upx;
		margin-top: 10upx;
	}

	.midLeftIcon image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.midRigthInput {
		width: 490upx;
		float: left;
		margin-left: 10upx;
		height: 50upx;
		font-size: 25upx;
	}

	.midRigthInput input {
		font-size: 25upx;
		height: 100%;
	}
</style>
