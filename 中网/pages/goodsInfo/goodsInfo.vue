<template>
	<view class="holePage">
		<view class="topSwiper">
			<swiper class="swiperDis">
				<block v-for="(item, index) in goodsInfo.original_img" v-bind:key="index">
					<swiper-item>
						<image :src="item"></image>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<view class="priceDis">
			<view class="thisPrice">
				<text>¥{{goodsInfo.shop_price}}</text>
			</view>
			<!-- <view class="peopleNum">
				<text>人团</text>
				<text>VIP</text>
			</view> -->
			<view class="originPrice">
				<text>月销:{{goodsInfo.sales_sum}} </text>
			</view>
		</view>
		<view class="topLabel">
			<view class="leftView">
				<text>{{goodsInfo.goods_name}}</text>
			</view>
			<view class="goInStore">
				<text>进入店铺</text>
			</view>
			<view class="rightShare" >
				<view class="shareIcon">
					<image src="../../images/shareImage.png"></image>
				</view>
				<view class="shareText">
					<text>分享</text>
				</view>
			</view>
		</view>
		<!-- <view class="tuanView" style="display: none;">
			<view class="topTitle">
				<view class="speedJoin">
					<text>快速参团</text>
				</view>
				<view class="rightTip">
					<text>参加别人团，可更快成功</text>
				</view>
			</view>
			<view class="invList">
				<view class="eachInv">
					<view class="addInvImg" style="margin-left: 20upx;">
						<image :src="item.head_pic"></image>
					</view>
					<view class="joinBtn" @click="joinInv">
						<text>去参团</text>
					</view>
					<view class="addInvName">
						<text></text>
					</view>
					<view class="countDown">
						<view class="shortNum">
							<text>还差人</text>
						</view>
						<view class="shortTime">
							<text>仅剩 {{endTime[index].hour}}:{{endTime[index].minu}}:{{endTime[index].second}}</text>
						</view>
					</view>
				</view>
			</view>
		</view> -->
		<!-- <view class="invTip" style="display: none;">
			<view class="topInvTip">
				<text style="color:#E2BE84">拼团玩法：</text>
				<text> 组团失败，自动退款</text>
			</view>
			<view class="invPre">
				<view class="eachInvPre" style="margin-left:4.5%;">
					<view class="innerText">
						<text>开团参加</text>
					</view>
				</view>
				<view class="eachInvPre">
					<view class="innerAngle">

					</view>
				</view>
				<view class="eachInvPre">
					<view class="innerText">
						<text>邀请好友</text>
					</view>
				</view>
				<view class="eachInvPre">
					<view class="innerAngle">

					</view>
				</view>
				<view class="eachInvPre">
					<view class="innerText">
						<text>组团成功</text>
					</view>
				</view>
				<view class="eachInvPre">
					<view class="innerAngle">

					</view>
				</view>
				<view class="eachInvPre">
					<view class="innerText" style="margin-top:15upx;">
						<text>发货</text>
					</view>
				</view>
			</view>
		</view> -->
		<view class="goodsTrans">
			<view class="getCoupon">
				<view class="leftCou">
					<image src="../../static/leftBg.png" mode=""></image>
					<view class="leftText">
						<text>购物券</text>
					</view>
					<view class="rightBtn">
						<text>领取</text>
					</view>
				</view>
				<view class="leftCou" style="float: right;margin-right: 10%;margin-left: 0;">
					<image src="../../static/rigthBg.png" mode=""></image>
					<view class="leftText">
						<text>购物券</text>
					</view>
					<view class="rightBtn">
						<text>领取</text>
					</view>
				</view>
			</view>
			<view class="topTrans">
				<view class="leftDis">
					<text>每人限购10件</text>
				</view>
				<view class="rightIcon">
					<image src="../../static/rightArrow.png" mode="widthFix"></image>
				</view>
				<view class="leftDis" style="margin-top:20upx;">
					<text>满200包邮</text>
				</view>
				<!-- <view class="leftDis" style="margin-top:20upx;">
					<text>邮费:元</text>
				</view> -->
			</view>
			<view class="cusView">
				<view class="leftSel">
					<!-- <image src="../../images/infoRight.png"></image> -->
					<!-- <image src="right" mode=""></image> -->
				</view>
				<view class="rightCusText">
					<text>7天无忧退货</text>
				</view>
			</view>

			<!-- <view class="cusAss" style="margin:0 0 20upx 20upx">
				<view class="topText">
					<text>商品详情</text>
				</view>
			</view> -->
			<view class="hr"></view>

			<view class="cusAss">
				<view class="topText">
					<text>用户评价</text>
				</view>
				<view class="totalNum">
					<text>共条评论</text>
				</view>
				<view class="sendAssMine">
					<view class="addInvImg" style="border-radius:0;width:45upx;height:45upx;float:right;margin-top: 20upx;" @click="sendComment">
						<image src="../../images/sendIcon.png"></image>
					</view>
					<view class="borderView">
						<view class="assInput">
							<input placeholder="说点什么..." value=""></input>
						</view>
					</view>
				</view>
				<view class="eachAss">
					<view class="addInvImg" style="margin-top:0;">
						<!-- <image :src="item.head_pic"></image> -->
					</view>
					<view class="rightAssInfo">
						<view class="assInfoTop">
							<view class="assName">
								<text></text>
							</view>
							<view class="assTime">
								<text></text>
							</view>
						</view>
						<view class="bottomAss">
							<text></text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- <view style="display: none;">

			<view class="launchInv" @click="startTeamToOrder" v-if="ismineteam == 0">
				<text>发起拼团</text>
			</view>
			<view class="launchInv" @click="showTeam" v-if="ismineteam == 1">
				<text>已发起拼团</text>
			</view>
		</view> -->
		<view class="shopBtn">
			<view class="shopTab shopLeft" @click="addShopBuy">
				<text>加入购物车</text>
			</view>
			<view class="shopTab  shopRight" @click="nowShop">
				<text>立即购买</text>
			</view>
		</view>
		<view class="showTeam" style="display: none;">
			<!-- <view class="contentView">
				<view>当前参团:完成52人</view>
				<view>拼团完成时间剩余:</view>
				<view>{{endTime[0].hour}}:{{endTime[0].minu}}:{{endTime[0].second}}</view>
				<view class="contentList">
					<view class="eachInv" v-for="(item, index) in invList" v-bind:key="index">
						<view class="addInvImg" style="margin-left: 20upx;">
							<image src="{{item.head_pic}}"></image>
						</view>
						<view class="addInvName">
							<text>{{item.nick_name}}</text>
						</view>
						<view class="countDown" style="width:250upx;">
							<view class="shortTime">
								<text>仅剩 {{endTime[index].hour}}:{{endTime[index].minu}}:{{endTime[index].second}}</text>
							</view>
						</view>
					</view>
				</view>
			</view> -->

			<!-- <view class="closrImage">
				<image src="../../images/vipClose.png"></image>
			</view> -->

		</view>
	</view>



</template>

<script>
	export default {
		data() {
			return {
				goodsId:'',
				goodsInfo:{}
			}
		},
		methods: {
			getGoodsInfo(){
				var that = this
				uni.request({
					url: that.baseUrl + 'goods/getGoodsInfo',
					method:'GET',
					data:{
						user_id: that.globalData.userInfo.user_id,
						goods_id:that.goodsId
						
					},
					success(res) {
						console.log(res)
						if(res.data.code == 1){
							that.goodsInfo = res.data.data.goodsInfo
						}else{
							uni.showModal({
								content: res.data.msg,
								showCancel: false
							});
						}
					}
				})
			}
		},
		onLoad(e) {
			this.goodsId = e.id
			this.getGoodsInfo()
		}
	}
</script>

<style>
	/* pages/goodsInfo/goodsInfo.wxss */
	.getCoupon{
		width: 100%;
		margin: 30upx auto;
		overflow: hidden;
		border-bottom: 1upx solid #F4F4F4;
		padding-bottom: 40upx;
	}
	.leftCou{
		width: 36%;
		height: 50upx;
		position: relative;
		float: left;
		margin-left: 10%;
	}
	.leftCou image{
		width: 100%;
		height: 100%;
		display: block;
	}
	.leftText{
		position: absolute;
		line-height: 50upx;
		text-align: center;
		color: white;
		font-size: 28upx;
		left: 0;
		top: 0;
		width: 74%;
	}
	.rightBtn{
		position: absolute;
		line-height: 50upx;
		text-align: center;
		color: white;
		font-size: 28upx;
		left: 74%;
		top: 0;
		width: 26%;
	}
	.holePage {
		width: 100%;
		background-color: #f1f1f1;
		padding-bottom: 80upx;
	}

	.topSwiper {
		width: 100%;
		height: 700upx;
	}

	.swiperDis {
		width: 100%;
		height: 100%;
	}

	.swiperDis swiper-item {
		width: 100%;
		height: 100%;
	}

	.swiperDis swiper-item image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.priceDis {
		width: 100%;
		height: 90upx;
		background-color: black;
		color: white;
		overflow: hidden;
	}

	.thisPrice {
		width: 120upx;
		line-height: 90upx;
		font-size: 45upx;
		float: left;
		margin-left: 20upx;
	}

	.peopleNum {
		width: 80upx;
		float: left;
		height: 25upx;
		background-color: #c2a573;
		clip-path: polygon(5upx 0, 0 25upx, 75upx 25upx, 80upx 0);
		margin-top: 40upx;
		font-size: 20upx;
		line-height: 25upx;
		text-align: center;
		margin-left: 100upx;
	}

	.originPrice {
		width: 220upx;
		line-height: 30upx;
		text-align: center;
		font-size: 22upx;
		color: #FFDB99;
		margin-left: 20upx;
		/* text-decoration: line-through; */
		float: right;
		margin-top: 35upx;
	}

	.completeNum {
		float: right;
		font-size: 20upx;
		color: #c2a573;
		margin-right: 20upx;
		margin-top: 30upx;
	}

	.topLabel {
		width: 100%;
		height: 110upx;
		overflow: hidden;
		background-color: white;
	}

	.leftView {
		width: 70%;
		height: 50upx;
		line-height: 50upx;
		float: left;
		margin-left: 30upx;
		font-size: 30upx;
		font-weight: 550;
		border-right: 1upx solid #afafaf;
		margin-top: 30upx;
	}

	.rightShare {
		width: 100upx;
		float: right;
		margin-top: 30upx;
	}

	.shareIcon {
		width: 30upx;
		height: 30upx;
		margin: 0 auto;
	}

	.shareIcon image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.shareText {
		width: 100%;
		text-align: center;
		font-size: 20upx;
		color: #e2be84;
		line-height: 30upx;
	}

	.tuanView {
		width: 100%;
		margin-top: 20upx;
		background-color: white;
	}

	.topTitle {
		width: 100%;
		overflow: hidden;
		line-height: 80upx;
		border-bottom: 1upx solid #afafaf;
	}

	.speedJoin {
		width: 200upx;
		float: left;
		font-size: 30upx;
		margin-left: 20upx;
	}

	.rightTip {
		width: 300upx;
		font-size: 25upx;
		color: #afafaf;
		float: right;
		/* margin-right: 20upx; */
	}

	.invList {
		width: 100%;
		padding-bottom: 10upx;
	}

	.eachInv {
		width: 100%;
		overflow: hidden;
		margin: 10upx 0;
	}

	.addInvImg {
		width: 60upx;
		height: 60upx;
		border-radius: 30upx;
		overflow: hidden;
		/* float: right; */
		float: left;
		margin-top: 10upx;
	}

	.addInvImg image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.addInvName {
		line-height: 80upx;
		font-size: 30upx;
		color: #afafaf;
		float: left;
		margin-left: 10upx;
	}

	.joinBtn {
		width: 130upx;
		float: right;
		margin-right: 20upx;
		line-height: 55upx;
		border: 2upx solid #e2be84;
		border-radius: 8upx;
		text-align: center;
		color: #e2be84;
		font-size: 28upx;
		margin-top: 20upx;
	}

	.countDown {
		width: 340upx;
		float: right;
		text-align: right;
		font-size: 25upx;
		margin-top: 20upx;
		margin-right: 20upx;
	}

	.invTip {
		width: 100%;
		margin-top: 20upx;
		background-color: white;
		padding-top: 10upx;
	}

	.topInvTip {
		margin-left: 20upx;
		line-height: 50upx;
		font-size: 30upx;
	}

	.invPre {
		width: 100%;
		overflow: hidden;
	}

	.eachInvPre {
		width: 13%;
		float: left;
		padding: 20upx 0;
	}

	.innerText {
		width: 50upx;
		margin: 0 auto;
		font-size: 20upx;
		color: #6c6c6c;
	}

	.innerAngle {
		width: 15upx;
		height: 20upx;
		margin: 0 auto;
		clip-path: polygon(0 0, 0 20upx, 15upx 10upx, 15upx 10upx);
		background-color: #e2be84;
		margin-top: 18upx;
	}

	.goodsTrans {
		width: 100%;
		margin-top: 20upx;
		padding: 10upx 0;
		background-color: white;
	}

	.topTrans {
		width: 90%;
		margin: 0 auto;
		overflow: hidden;
	}

	.leftDis {
		width: 90%;
		float: left;
		font-size: 30upx;
	}

	.rightIcon {
		width: 30upx;
		height: 30upx;
		float: right;
		margin-top: 40upx;
	}

	.rightIcon image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.cusView {
		width: 100%;
		overflow: hidden;
		background-color: #fcfcf0;
		line-height: 70upx;
		margin-top: 15upx;
	}

	.leftSel {
		width: 20upx;
		height: 20upx;
		/* border-radius: 10upx;
	  border: 1upx solid #DACA9E; */
		float: left;
		margin-top: 25upx;
		margin-left: 20upx;
	}

	.leftSel image {
		/* width: 80%;
	  height: 80%;
	  margin: 10%; */
		width: 100%;
		height: 100%;
		display: block;
	}

	.rightCusText {
		font-size: 20upx;
		color: #daca9e;
		margin-left: 20upx;
		float: left;
	}

	.cusAss {
		width: 90%;
		margin: 0 auto;
		margin-top: 20upx;
		padding-top: 10upx;
	}

	.cusAss .topText {
		width: 50%;
		font-size: 30upx;
		font-weight: 550;
	}

	.totalNum {
		width: 50%;
		margin-top: 10upx;
		font-size: 20upx;
		color: #afafaf;
	}

	.sendAssMine {
		width: 100%;
		overflow: hidden;
		margin-top: 10upx;
	}

	.borderView {
		width: 85%;
		padding: 10upx 0;
		float: left;
		border-bottom: 1upx solid #efefef;
	}

	.assInput {
		width: 96%;
		height: 60upx;
		background-color: #e6e6e6;
		border-radius: 30upx;
		padding: 0 10upx;
		margin-bottom: 10upx;
	}

	.assInput input {
		width: 97%;
		height: 100%;
		margin-left: 3%;
		font-size: 25upx;
		/* color:  */
	}

	.eachAss {
		width: 100%;
		overflow: hidden;
		padding: 20upx 0;
	}

	.rightAssInfo {
		width: 83%;
		float: right;
		padding-bottom: 20upx;
		border-bottom: 1upx solid #efefef;
	}

	.assInfoTop {
		width: 100%;
		overflow: hidden;
	}

	.assName {
		width: 50%;
		float: left;
		font-size: 25upx;
		font-weight: 550;
	}

	.assTime {
		width: 35%;
		font-size: 20upx;
		float: right;
		text-align: right;
	}

	.bottomAss {
		width: 90%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertica;
		font-size: 25upx;
		margin-top: 10upx;
	}

	.content {
		width: 90%;
		margin: 0 auto;
		margin-top: 20upx;
		margin-bottom: 20upx;
	}

	.hr {
		width: 100%;
		height: 10upx;
		background-color: #efefef;
	}

	.launchInv {
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: red;
		color: white;
		text-align: center;
		line-height: 80upx;
		z-index: 1000;
	}

	.showTeam {
		width: 100%;
		height: 10000px;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 9999;
	}

	.contentView {
		width: 70%;
		margin: 200upx auto 10upx auto;
		height: 754upx;
		background-color: #fff;
		border-radius: 20upx;
		font-size: 25upx;
		text-align: center;
		padding-top: 20upx;
	}

	.contentList {
		width: 100%;
		height: 600upx;
		overflow: hidden;
		overflow-x: hidden;
		overflow-y: auto;
	}

	.closrImage {
		width: 60upx;
		height: 60upx;
		margin: 0 auto;
	}

	.closrImage image {
		width: 100%;
		height: 100%;
	}

	.shopTab {
		width: 50%;
		height: 90upx;
		position: fixed;
		bottom: 0;
		text-align: center;
		line-height: 90upx;
		color: #fff;
	}

	.shopBtn {
		z-index: 1000;
		background-color: rgba(255, 255, 255, 1)
	}

	.shopRight {
		z-index: 1000;
		background-color: #ff1717;
		left: 0upx;

	}

	.shopLeft {
		z-index: 1000;
		background-color: #ff9b3d;
		left: 376upx;
	}

	.goInStore {
		width: 150upx;
		text-align: center;
		line-height: 40upx;
		float: left;
		border-radius: 5upx;
		background-color: black;
		color: white;
		margin-top: 35upx;
		margin-left: 20upx;
		font-size: 25upx;
	}
</style>
