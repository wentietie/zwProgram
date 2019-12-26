<template>
	<view class="holePage">
		<view class="topView">
			<view class="leftScanIcon" @click="goBack">
				<image src="../../static/goBack.png" mode=""></image>
			</view>
			<view class="topMiddleInput">
				<view class="midLeftIcon">
					<image src="../../static/searchIcon.png" mode=""></image>
				</view>
				<view class="midRigthInput">
					<input type="text" value="" placeholder="搜索内容" @focus="goClass" />
				</view>
			</view>
			<view class="midRightIcon">
				<!-- <image src="../../static/messageIcon.png" mode=""></image> -->
				<text>搜索</text>
			</view>
		</view>
		<view class="contentView">
			<view class="leftTab">
				<view v-for="(item, index) in tabList" v-bind:key="index" class="eachTab" v-bind:class="{selBig:curIndex == index}" @click="chooseThis(index)">
					<view class="textDis" v-bind:class="{selTCla:curIndex == index}">
						<text>{{item.title}}</text>
					</view>
				</view>
			</view>
			<view class="rightContent">
				<view class="eachContent" v-for="(item, index) in contentList" v-bind:key="index">
					<view class="conTop">
						<view class="leftLabel">
							<text>{{item.title}}</text>
						</view>
						<view class="rigthMore">
							<image src="../../static/rightArrow.png" mode=""></image>
							<text>更多</text>
						</view>
					</view>
					<view class="conInfo">
						<view class="eachGoods" v-for="(itemN, indexN) in item.littleList" v-bind:key="indexN">
							<view class="topInfoImg">
								<image :src="itemN.img" mode=""></image>
							</view>
							<text>{{itemN.label}}</text>
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
				curIndex: 0,
				tabList: [{
						title: '为您推荐',
						id: '0'
					},
					{
						title: '国际大牌',
						id: '1'
					},
					{
						title: '女装',
						id: '2'
					},
					{
						title: '国际大牌',
						id: '3'
					},
					{
						title: '国际大牌',
						id: '4'
					},
					{
						title: '国际大牌',
						id: '5'
					},
					{
						title: '国际大牌',
						id: '6'
					}
				],
				contentList: [{
						label: '女装',
						littleList: [{
								label: '羽绒服',
								img: '../../static/goodsImg.png'
							},
							{
								label: '羽绒服',
								img: '../../static/goodsImg.png'
							},
							{
								label: '羽绒服',
								img: '../../static/goodsImg.png'
							}
						]
					},
					{
						label: '女装',
						littleList: [{
								label: '羽绒服',
								img: '../../static/goodsImg.png'
							},
							{
								label: '羽绒服',
								img: '../../static/goodsImg.png'
							},
							{
								label: '羽绒服',
								img: '../../static/goodsImg.png'
							}
						]
					},
					{
						label: '女装',
						littleList: [{
								label: '羽绒服',
								img: '../../static/goodsImg.png'
							},
							{
								label: '羽绒服',
								img: '../../static/goodsImg.png'
							},
							{
								label: '羽绒服',
								img: '../../static/goodsImg.png'
							}
						]
					}
				]
			}
		},
		methods: {
			goBack() {
				uni.navigateBack(-1)
			},
			chooseThis(i) {
				this.curIndex = i
			}
		}
	}
</script>

<style>
	.eachGoods text {
		/* width: 100%; */
		font-size: 25upx;
		color: #C0C0C0;
	}

	.topInfoImg {
		width: 100upx;
		margin: 0 auto;
		height: 150upx;
	}

	.topInfoImg image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.eachGoods {
		width: 200upx;
		float: left;
		text-align: center;
		/* margin: 20upx 0; */
		margin-top: 40upx;
	}

	.conInfo {
		width: 100%;
		overflow: hidden;
	}

	.rigthMore text {
		float: right;
		margin-right: 10upx;
	}

	.rigthMore image {
		width: 25upx;
		height: 25upx;
		float: right;
		margin-top: 8upx;
	}

	.rigthMore {
		float: right;
		color: #e6e6e6;
		font-size: 25upx;
		overflow: hidden;
	}

	.leftLabel {
		float: left;
		font-size: 30upx;
		font-weight: 550;
	}

	.conTop {
		width: 90%;
		margin: 0 auto;
		border-bottom: 1upx solid #C8C7CC;
		overflow: hidden;
		padding-bottom: 10upx;
	}

	.rightContent {
		width: 600upx;
		float: right;
		/* background-color: #007AFF; */
	}

	.textDis {
		width: 145upx;
		float: right;
		color: #333333;
		text-align: center;
		margin-top: 25upx;
	}

	.selBig {
		background-color: white;
	}

	.selTCla {
		border-left: 10upx solid orange;
		color: orange;
	}

	.eachTab {
		width: 100%;
		height: 100upx;
		color: #e6e6e6;
	}

	.leftTab {
		width: 150upx;
		background-color: #e6e6e6;
		/* height: 100upx; */
		float: left;
		font-size: 30upx;
	}

	.contentView {
		width: 100%;
		margin-top: 40upx;
		overflow: hidden;

	}

	.topView {
		width: 95%;
		margin: 0 auto;
		overflow: hidden;
		margin-top: 80upx;
	}

	.leftScanIcon {
		width: 40upx;
		height: 40upx;
		float: left;
		margin-top: 8upx;
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
		width: 100upx;
		line-height: 50upx;
		float: left;
		/* margin-left: 40upx; */
		font-size: 25rpx;
		text-align: center;
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
		margin-top: 13upx;
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
