<template style="background-color: #EEEEEE;">
	<view class="holePage">
		<view class="pageTop">
			<view class="topImg">
				<image src="../../static/shopHeadImg.png" mode=""></image>
			</view>
			<view class="inputView">
				<view class="location" @click="changeType">
					<text>定位</text>
					<image src="../../static/downArrow.png" mode=""></image>
				</view>
				<view class="rigthInput">
					<input type="text" value="" placeholder="巧克力慕斯" />
				</view>
			</view>
		</view>
		<view class="topSwiper">
			<swiper style="width: 100%; height: 100%;" circular="true" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" previous-margin="80upx" next-margin="80upx">
				<swiper-item style="width: 100%; height: 100%;" v-for="(item, index) in imgList" v-bind:key="index">
					<image :src="item.ad_url" mode=""></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="MidTab">
			<view class="eachTabLeft">
				<text>距离</text>
				<image src="../../static/downArrowLit.png" mode=""></image>
			</view>
			<view class="eachTabMid">
				<!-- <text>智能排序</text> -->
				<!-- <image src="../../static/downArrowLit.png" mode=""></image> -->
			</view>
			<view class="eachTabRight">
				<!-- <text>筛选</text> -->
				<!-- <image src="../../static/downArrowLit.png" mode=""></image> -->
			</view>
		</view>
		<view class="noList" v-if="storeList.length == 0">
			<text>———— 暂无数据 ————</text>
		</view>
		<view class="bottom">
			<view class="eachShop" v-for="(item, index) in storeList" v-bind:key="index"  @click="getShopHome">
				<image src="../../static/shopHeadImg.png" mode=""></image>
				<view class="midInfo">
					<view class="shopName">
						<text>{{item.store_name}}</text>
					</view>
					<view class="shopType" style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;overflow: hidden;width: 80%;">
						<text>{{item.store_address}}</text>
					</view>
					<view class="shopType" style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">
						<text>{{item.introduce}}</text>
					</view>
				</view>
				<view class="distance">
					<text>{{item.juli}}km</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList:[],
				storeList:[],
				distanceType:'1'
				
			}
		},
		methods: {
			changeType(){
				if(this.distanceType == 1){
					this.distanceType = 0
					this.getShopList()
				}else{
					this.distanceType = 1
					this.getShopList()
				}
			},
			getShopHome(){
				uni.navigateTo({
					url:'../shopHome/shopHome'
				})
			},
			getShopList(){
				var that = this
				uni.request({
					url: that.baseUrl + 'index/sjlist',
					data:{
						type: that.distanceType,
						lng:that.globalData.location.latitude,
						lat:that.globalData.location.longitude,
						user_id: that.globalData.userInfo.user_id
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					method:"POST",
					success(res) {
						// console.log(JSON.stringify(res.data))
						// console.log(res)
						that.storeList = res.data.data
						that.imgList = res.data.swiper
					}
				})
			},
			getTopImg(){
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
					}
				})
			}
		},
		created() {
			// this.getTopImg()
		},
		onShow(){
			this.getShopList()
		}
	}
</script>

<style>
	.noList{
		width: 100%;
		line-height: 100upx;
		font-size: 22upx;
		text-align: center;
		color: #A5A5A5;
	}
	.rigthInput{
		width: 380upx;
		margin-left: 0;
		float: left;
		height: 100%;
		
	}
	.rigthInput input{
		width: 100%;
		height: 100%;
		font-size: 35upx;
	}
	.location{
		width: 150upx;
		float: left;
		margin-left: 0;
		font-size: 30upx;
		color: #c1c0be;
	}
	.location text{
		float: left;
		margin-left: 20upx;
	}
	.location image{
		width: 30upx;
		height: 30upx;
		float: left;
		margin-left: 10upx;
		margin-top: 30upx;
	}
	.inputView{
		width: 80%;
		height: 80upx;
		margin-top: 50upx;
		background-color: #f4f4f4;
		margin-left: 20upx;
		border-radius: 10upx;
		float: left;
		line-height: 80upx;
	}
	.pageTop{
		width: 100%;
		height: 150upx;
		background-color: #FFFFFF;
		position: fixed;
		left: 0;
		top: 0upx;
		z-index: 1000;
		padding-top: 30upx;
	}
	.topImg{
		width: 70upx;
		height: 70upx;
		float: left;
		border-radius: 100upx;
		margin-left: 30upx;
		overflow: hidden;
		margin-top: 55upx;
	}
	.topImg image{
		width: 100%;
		height: 100%;
		display: block;
	}
	.shopName{
		font-size: 35upx;
		font-weight: 700;
	}
	.shopType{
		font-size: 25upx;
		color: #BFBFBF;
		margin-top: 20upx;
	}
	.eachShop{
		width: 90%;
		border-radius: 20upx;
		margin: 20upx auto;
		overflow: hidden;
		padding: 20upx 0;
		position: relative;
		background-color: #FFFFFF;
	}
	.distance{
		position: absolute;
		font-size: 25upx;
		right: 20upx;
		top: 80upx;
		color: #EDCA8D;
	}
	.eachShop image{
		width: 150upx;
		height: 150upx;
		float: left;
		display: block;
		margin-left: 20upx;
	}
	.midInfo{
		width: 450upx;
		float: left;
		margin-left: 20upx;
	}
	.bottom{
		width: 100%;
		padding-top: 10upx;
	}
	.eachTabLeft{
		width: 33.33%;
		float: left;
		position: relative;
	}
	.eachTabLeft image{
		width: 25upx;
		height: 25upx;
		position: absolute;
		left: 60upx;
		top: 10upx;
	}
	.eachTabMid{
		width: 33.33%;
		float: left;
		position: relative;
		text-align: center;
	}
	.eachTabMid image{
		width: 25upx;
		height: 25upx;
		position: absolute;
		left: 145upx;
		top: 10upx;
	}
	.eachTabRight{
		width: 33.33%;
		float: left;
		position: relative;
		text-align: right;
	}
	.eachTabRight image{
		width: 25upx;
		height: 25upx;
		position: absolute;
		right: 0upx;
		top: 10upx;
	}
	.MidTab{
		width: 90%;
		margin: 0 auto;
		margin-top: 40upx;
		overflow: hidden;
		font-size: 30upx;
	}
	.holePage{
		width: 100%;
		padding-top: 50upx;
		background-color: #EEEEEE;
		padding-bottom: 40upx;
	}
	.topSwiper{
		width: 100%;
		height: 300upx;
		margin-top: 140upx;
	}
	.topSwiper image{
		width: 90%;
		height: 100%;
		display: block;
		margin: 0 auto;
	}
</style>
