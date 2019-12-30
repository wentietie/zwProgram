<template>
	<view class="holePage">
		<!-- <view class="topTab">
			<view class="eachTab" v-for="(item, index) in tabList" v-bind:key="index" v-bind:class="{chooseCurTab:curTab == index}" @click="clickTab(index)">
				<text>{{item}}</text>
			</view>
		</view> -->
		<view class="bottom">
			<!-- <view class="saling" v-if="curTab == 0">
				
			</view> -->
			<view class="notSaling">
				<view class="eachGoods" v-for="(item, index) in goodsListNo" v-bind:key="index">
					<!-- <view class="topRight">
						<text style="margin-left: 20upx;">已下架</text>
					</view> -->
					<view class="topInfo">
						<image src="../../static/goodsMagImg.png" mode=""></image>
						<view class="rightInfo">
							<view class="title">
								<text>东方羊羔绒运动卫衣nv加绒，宽松外套保暖上衣绒衫</text>
							</view>
							<view class="midInfo">
								<text>库存 2213</text>
							</view>
							<view class="midInfo" style="margin-top: 10upx;">
								<text>已售 2213</text>
							</view>
							<view class="price">
								<text style="color: red;">￥</text><text style="font-size: 35upx;color: red;">16.1</text><text style="margin-left: 30upx;">￥35.6</text>
							</view>
						</view>
					</view>
					<view class="bottomBtn">
						<view class="eachBtn">
							<text>重新编辑</text>
						</view>
						<view class="eachBtn">
							<text>删除商品</text>
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
				curTab:0,
				tabList:[
					'在售中',
					'已下架'
				],
				goodsListNo:[
					{ima: '1', title: '123'},
					{ima: '1', title: '123'}
				]
			}
		},
		methods: {
			clickTab(i){
				this.curTab = i
			},
			reEdit(){
				uni.navigateTo({
					url:'../addGoods/addGoods'
				})
			}
		}
	}
</script>

<style>
	.eachBtn{
		width: auto;
		padding: 10upx 30upx;
		color: #BFBFBF;
		font-size: 30upx;
		border-radius: 50upx;
		border: 3upx solid #BFBFBF;
		float: right;
		margin-right: 30upx;
	}
	.bottomBtn{
		width: 100%;
		overflow: hidden;
		margin-top: 240upx;
	}
	.topInfo{
		width: 100%;
		position: relative;
	}
	.topInfo image{
		width: 200upx;
		height: 200upx;
		border-radius: 15upx;
		position: absolute;
		top: 10upx;
		left: 20upx;
	}
	.rightInfo{
		width: 430upx;
		position: absolute;
		top: 10upx;
		left: 240upx;
	}
	.title{
		width: 100%;
		font-size: 30upx;
		line-height: 40upx;
		height: 80upx;
		font-weight: 700;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.price{
		font-size: 25upx;
		margin-top: 10upx;
		color: #BFBFBF;
	}
	.midInfo{
		width: 100%;
		font-size: 25upx;
		color: #bfbfbf;
	}
	.bottom{
		width: 100%;
	}
	.notSaling{
		width: 100%;
	}
	.eachGoods{
		width: 100%;
		margin-top: 30upx;
		position: relative;
		padding: 20upx 0;
	}
	.topRight{
		width: 100upx;
		height: 100upx;
		position: absolute;
		top: 0;
		right: 0;
		background-color: #fbb600;
		font-size: 20upx;
		/* text-align: center; */
		color: white;
		clip-path: polygon(0 0, 100upx 100upx, 100upx 100upx, 100upx 0);
	}
	.holePage{
		width: 100%;
		
	}
	.topTab{
		width: 60%;
		overflow: hidden;
		margin: 0 auto;
	}
	.eachTab{
		width: 50%;
		float: left;
		border-radius: 40upx;
		line-height: 70upx;
		text-align: center;
		color: #EDCA8D;
		font-size: 30upx;
	}
	.chooseCurTab{
		background-color: #EDCA8D;
		color: white;
	}
</style>
