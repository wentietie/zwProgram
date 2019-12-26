<template>
	<view class="holePage">
		<view class="pageTop">
			<view class="leftInfo">
				<view class="name">
					<text>牛木叶</text>
				</view>
				
				<view class="sexAndage">
					<view class="sex">
						<text>性别：男</text>
					</view>
					<view class="age">
						<text>年龄：23</text>
					</view>
				</view>
				<view class="address">
					<text>所在地区：济南历下区旅游路220</text>
				</view>
			</view>
			<image src="../../static/shopHeadImg.png" mode=""></image>
		</view>
		<view class="bottomView">
			<view class="msgPush">
				<view class="title">
					<text>消息推送</text>
				</view>
				<view class="bottom">
					<text>ATBLAB日系多口袋休闲冲高峰连帽夹克男</text>
				</view>
			</view>
		</view>
		<view class="bottomContent">
			<view class="selectGoods">
				<view class="title">
					<text>消费习惯</text>
				</view>
				<view class="goodsList">
					<view class="eachGoods" v-for="(item, index) in goodsList" v-bind:key="index" >
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
				goodsList:[
					'1',
					'1',
					'1',
					'1'
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
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
	.curGodsPrice {
		width: 90%;
		margin: 0 auto;
		color: #F0AB3F;
		line-height: 30upx;
		margin-top: 10upx;
		margin-bottom: 20upx;
	}
	.goodsTitle{
		width: 100%;
		font-size: 30upx;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		height: 90upx;
	}
	.bottomText{
		width: 90%;
		margin: 0 auto;
		margin-top: 20upx;
		
	}
	.bottomContent{
		width: 100%;
		margin-top: 10upx;
	}
	.msgPush{
		width: 90%;
		margin: 0 auto;
		
	}
	.msgPush .title{
		font-size: 35upx;
		font-weight: 700;
	}
	.msgPush .bottom{
		font-size: 25upx;
	}
	.bottomView{
		width: 100%;
		padding: 40upx 0;
		border-radius: 25upx;
		position: relative;
		margin-top: -25upx;
		background-color: white;
	}
	.address{
		width: auto;
		margin-top: 30upx;
		font-size: 30upx;
	}
	.sexAndage{
		width: auto;
		margin-top: 0upx;
		overflow: hidden;
	}
	.sex{
		width: 150upx;
		font-size: 30upx;
		line-height: 30upx;
		border-right: 1upx solid #FFFFFF;
		float: left;
	}
	.age{
		font-size: 30upx;
		line-height: 30upx;
		float: left;
		margin-left: 30upx;
	}
	.name{
		font-size: 40upx;
		font-weight: 700;
	}
	.pageTop{
		width: 100%;
		background-color: #000000;
		padding: 40upx 0;
	}
	.pageTop image{
		width: 130upx;
		height: 130upx;
		position: absolute;
		top: 100upx;
		right: 30upx;
	}
	.holePage{
		width: 100%;
	}
	.leftInfo{
		margin-left: 30upx;
		color: white;
		margin-top: 30upx;
		margin-bottom: 80upx;
	}
</style>
