<template>
	<view class="holePage">
		<view class="eachInput">
			<view class="topLabel">
				<text>商品类型</text>
			</view>
			<view class="bottomLabel">
				<picker :range="typeList" :value="typeIndex" @change="changeType">
					<view>{{typeList[typeIndex]}}</view>
				</picker>
			</view>
			<image src="../../static/rightArrow.png" mode=""></image>
		</view>
		<view class="eachInput">
			<view class="topLabel">
				<text>商品名称</text>
			</view>
			<view class="bottomLabel">
				<!-- <picker :range="typeList" :value="typeIndex" @change="changeType">
					<view>{{typeList[typeIndex]}}</view>
				</picker> -->
				<input type="text" value="" placeholder="商品名称" />
			</view>
			<image src="../../static/rightArrow.png" mode=""></image>
		</view>
		<view class="eachInput">
			<view class="topLabel">
				<text>单位</text>
			</view>
			<view class="bottomLabel">
				<picker :range="eachList" :value="eachIndex" @change="changeEach">
					<view>{{eachList[eachIndex]}}</view>
				</picker>
			</view>
			<image src="../../static/rightArrow.png" mode=""></image>
		</view>
		<view class="eachInput">
			<view class="topLabel">
				<text>商品价格</text>
			</view>
			<view class="bottomLabel">
				<!-- <picker :range="typeList" :value="typeIndex" @change="changeType">
					<view>{{typeList[typeIndex]}}</view>
				</picker> -->
				<input type="text" value="" placeholder="商品价格" />
			</view>
			<image src="../../static/rightArrow.png" mode=""></image>
		</view>
		<view class="eachInput">
			<view class="topLabel">
				<text>商品简介</text>
			</view>
			<view class="bottomLabel">
				<!-- <picker :range="typeList" :value="typeIndex" @change="changeType">
					<view>{{typeList[typeIndex]}}</view>
				</picker> -->
				<input type="text" value="" placeholder="商品简介" />
			</view>
			<image src="../../static/rightArrow.png" mode=""></image>
		</view>
		<view class="imageBottom" style="border: none;">
			<view class="topLabel" style="font-size: 35upx;font-weight: 700;">
				<text>添加图片</text>
			</view>
			<view class="imageList">
				<view class="eachImg" style="margin-left: 0;" @click="chooseImg(0)">
					<image :src="img1" mode=""></image>
				</view>
				<view class="eachImg" @click="chooseImg(1)">
					<image :src="img2" mode=""></image>
				</view>
				<view class="eachImg" @click="chooseImg(2)">
					<image :src="img3" mode=""></image>
				</view>
				<view class="eachImg" style="margin-left: 0;" @click="chooseImg(3)">
					<image :src="img4" mode=""></image>
				</view>
				<view class="eachImg" @click="chooseImg(4)">
					<image :src="img5" mode=""></image>
				</view>
				<view class="eachImg" @click="chooseImg(5)">
					<image :src="img6" mode=""></image>
				</view>
			</view>
		</view>
		<view class="subBtn">
			<text>提交</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeIndex: 0,
				typeList: [
					'女装',
					'男装'
				],
				eachIndex: 0,
				eachList: [
					'件',
					'包'
				],
				img1: '../../static/addImg.png',
				img2: '../../static/addImg.png',
				img3: '../../static/addImg.png',
				img4: '../../static/addImg.png',
				img5: '../../static/addImg.png',
				img6: '../../static/addImg.png'
			}
		},
		methods: {
			changeType(e) {
				this.typeIndex = e.target.value
			},
			changeEach(e) {
				this.eachIndex = e.target.value
			},
			chooseImg(i) {
				var that = this
				uni.chooseImage({
					success: function(res) {
						switch (i){
							case 0:
								that.img1 = res.tempFilePaths[0]
								break;
							case 1:
								that.img2 = res.tempFilePaths[0]
								break;
							case 2:
								that.img3 = res.tempFilePaths[0]
								break;
							case 3:
								that.img4 = res.tempFilePaths[0]
								break;
							case 4:
								that.img5 = res.tempFilePaths[0]
								break;
							case 5:
								that.img6 = res.tempFilePaths[0]
								break;
							default:
								break;
						}
					}
				})
			}
		}
	}
</script>

<style>
	.subBtn {
		width: 90%;
		margin: 40upx auto;
		line-height: 100upx;
		/* margin-top: 40upx; */
		border-radius: 20upx;
		text-align: center;
		color: #FFFFFF;
		/* border-color: #edca8d; */
		background-color: #EDCA8D;
		font-size: 35upx;
	}

	.imageBottom {
		width: 90%;
		margin: 0 auto;
		margin-top: 30upx;
		padding-bottom: 40upx;
	}

	.imageList {
		width: 100%;
		overflow: hidden;
	}

	.eachImg {
		width: 30%;
		height: 200upx;
		float: left;
		margin-left: 5%;
		margin-top: 20upx;
	}

	.eachImg image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.eachInput image {
		width: 30upx;
		height: 30upx;
		position: absolute;
		top: 50upx;
		right: 0;
	}

	.bottomLabel {
		width: 100%;
		line-height: 50upx;
		font-size: 35upx;
		font-weight: 600;
		margin-top: 5upx;
	}

	.topLabel {
		width: 100%;
		font-size: 25upx;
		color: #8c8c8c;
	}

	.eachInput {
		width: 90%;
		margin: 0 auto;
		margin-top: 30upx;
		border-bottom: 1upx solid #e6e6e6;
		padding-bottom: 40upx;
		position: relative;
	}

	.holePage {
		width: 100%;
	}
</style>
