<template>
	<view class="holePage">
		<!-- 		<view class="eachInput">
			<view class="topLabel">
				<text>商品类型</text>
			</view>
			<view class="bottomLabel">
				<picker :range="typeList" :value="typeIndex" @change="changeType">
					<view>{{typeList[typeIndex]}}</view>
				</picker>
			</view>
			<image src="../../static/rightArrow.png" mode=""></image>
		</view> -->
		<view class="eachInput">
			<view class="topLabel">
				<text>商品名称</text>
			</view>
			<view class="bottomLabel">
				<!-- <picker :range="typeList" :value="typeIndex" @change="changeType">
					<view>{{typeList[typeIndex]}}</view>
				</picker> -->
				<input @blur="inputChange" data-value="goods_name" type="text" value="" placeholder="商品名称" />
			</view>
			<image src="../../static/rightArrow.png" mode=""></image>
		</view>

		<view class="eachInput">
			<view class="topLabel">
				<text>库存</text>
			</view>
			<view class="bottomLabel">
				<!-- <picker :range="typeList" :value="typeIndex" @change="changeType">
					<view>{{typeList[typeIndex]}}</view>
				</picker> -->
				<input @blur="inputChange" data-value="goods_num" type="number" value="" placeholder="库存" />
			</view>
			<image src="../../static/rightArrow.png" mode=""></image>
		</view>

		<view class="eachInput">
			<view class="topLabel">
				<text>是否包邮</text>
			</view>
			<view class="bottomLabel">
				<picker :range="postage" :value="postageIndex" @change="changePostage">
					<view>{{postage[postageIndex]}}</view>
				</picker>
			</view>
			<image src="../../static/rightArrow.png" mode=""></image>
		</view>



		<view class="eachInput">
			<view class="topLabel">
				<text>邮费</text>
			</view>
			<view class="bottomLabel">
				<!-- <picker :range="typeList" :value="typeIndex" @change="changeType">
					<view>{{typeList[typeIndex]}}</view>
				</picker> -->
				<input @blur="inputChange" data-value="postage_price" type="number" value="" placeholder="邮费" />
			</view>
			<image src="../../static/rightArrow.png" mode=""></image>
		</view>


		<!-- 		<view class="eachInput">
			<view class="topLabel">
				<text>单位</text>
			</view>
			<view class="bottomLabel">
				<picker :range="eachList" :value="eachIndex" @change="changeEach">
					<view>{{eachList[eachIndex]}}</view>
				</picker>
			</view>
			<image src="../../static/rightArrow.png" mode=""></image>
		</view> -->
		<view class="eachInput">
			<view class="topLabel">
				<text>商品价格</text>
			</view>
			<view class="bottomLabel">
				<!-- <picker :range="typeList" :value="typeIndex" @change="changeType">
					<view>{{typeList[typeIndex]}}</view>
				</picker> -->
				<input @blur="inputChange" data-value="goods_price" type="text" value="" placeholder="商品价格" />
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
				<input @blur="inputChange" data-value="goods_content" type="text" value="" placeholder="商品简介" />
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
		<view class="subBtn" @click="sendGoodsInfo">
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
				img6: '../../static/addImg.png',
				params: {
					images: [],
					is_free_shipping: 1
				}, //提交的参数
				postageIndex: 1,
				postage: [
					'不包邮',
					'包邮'
				]
			}
		},
		methods: {
			changeType(e) {
				this.typeIndex = e.target.value
			},
			changeEach(e) {
				this.eachIndex = e.target.value
			},

			changePostage(e) {
				this.postageIndex = e.target.value
				this.params.is_free_shipping = e.target.value
			},
			chooseImg(i) {
				var that = this

				uni.chooseImage({
					success: function(res) {
						uni.showLoading({
							title: '请稍后',
							mask: true
						});
						switch (i) {
							case 0:
								that.img1 = res.tempFilePaths[0]
								that.onloadImage(that.img1, 0)
								break;
							case 1:
								that.img2 = res.tempFilePaths[0]
								that.onloadImage(that.img2, 1)
								break;
							case 2:
								that.img3 = res.tempFilePaths[0]
								that.onloadImage(that.img3, 2)
								break;
							case 3:
								that.img4 = res.tempFilePaths[0]
								that.onloadImage(that.img4, 3)
								break;
							case 4:
								that.img5 = res.tempFilePaths[0]
								that.onloadImage(that.img5, 4)
								break;
							case 5:
								that.img6 = res.tempFilePaths[0]
								that.onloadImage(that.img6, 5)
								break;
							default:
								break;
						}



						console.log(that)
					}
				})
			},
			onloadImage: function(obj, type) {
				let that = this
				uni.uploadFile({
					url: this.baseUrl + 'login/UpImg',
					filePath: obj,
					name: 'file',
					success: (uploadFileRes) => {
						uni.hideLoading();
						let data = JSON.parse(uploadFileRes.data)
						if (data.code == 1) {
							uni.showToast({
								title: '上传成功',
								duration: 2000
							});
							let params = that.params;
							params['images'][type] = data.path
						} else {
							uni.showToast({
								title: '上传失败',
								duration: 2000
							});
						}
					}
				});
			},
			inputChange: function(e) { //input change
				let value = e.target.dataset.value;
				let params = this.params;
				params[value] = e.detail.value;
			},
			sendGoodsInfo: function() { //发送商品详情
				let params = this.params;
				let that = this
				if (!params['goods_name']) {
					uni.showToast({
						title: '商品名称必填',
						icon: 'none',
						duration: 2000
					});
					return;
				}
				if (!params['goods_price']) {
					uni.showToast({
						title: '商品价格必填',
						icon: 'none',
						duration: 2000
					});
					return;
				}
				if (!params['goods_content']) {
					uni.showToast({
						title: '商品内容必填',
						icon: 'none',
						duration: 2000
					});
					return;
				}
				if (!params['images'][0]) {
					uni.showToast({
						title: '商品图片必填',
						icon: 'none',
						duration: 2000
					});
					return;
				}


				if (!params['goods_num']) {
					uni.showToast({
						title: '库存必填',
						icon: 'none',
						duration: 2000
					});
					return;
				}

				uni.request({
					url: this.baseUrl + 'goods/SendGoodsInfo',
					data: {
						params,
						user_id:that.globalData.userInfo.user_id
					},
					success: function(res) {
						let data = JSON.stringify(res)
						if (data['code'] == 1) {
							uni.showToast({
								title: '上传成功',
								icon: 'success',
								duration: 2000
							});
							setTimeout(function() {
								uni.reLaunch({
									url: 'pages/minePage/minePage'
								})
							}, 1500);
						} else {
							uni.showToast({
								title: '上传失败,请重新尝试',
								icon: 'none',
								duration: 2000
							});
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
		padding-bottom: 15upx;
		position: relative;
	}

	.holePage {
		width: 100%;
	}
</style>
