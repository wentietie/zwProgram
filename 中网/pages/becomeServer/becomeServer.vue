<template>
	<view class="holePage">
		<view class="topInput">
			<view class="nameInput">
				<input type="text" value="" v-model="userName" placeholder="请输入姓名" />
				<image src="../../static/clearIcon.png" mode="" @click="clearName()"></image>
			</view>
			<view class="nameInput">
				<input type="number" value="" v-model="phoneNum" placeholder="请输入手机号" />
				<image src="../../static/clearIcon.png" mode="" @click="clearPhone()"></image>
			</view>
			<view class="nameInput">
				<input type="number" value="" v-model="machineNum" placeholder="请输入购买数量(不得小于100台)" />
				<image src="../../static/clearIcon.png" mode="" @click="clearPhone()"></image>
			</view>
		</view>
		<view class="upIdCard">
			<view class="topTitle">
				<text>上传身份证正反面</text>
			</view>
			<view class="topUp">
				<view class="leftText">
					<view class="bigTitle">
						<text>头像面</text>
					</view>
					<view class="littleText">
						<text>上传您身份证头像面</text>
					</view>
				</view>
				<view class="rigthImgDis">
					<image :src="idCardF" mode=""></image>
					<view class="bottomText" @click="upIDcardF">
						<text>拍摄正面</text>
					</view>
				</view>
			</view>
			<view class="topUp">
				<view class="leftText">
					<view class="bigTitle">
						<text>国徽面</text>
					</view>
					<view class="littleText">
						<text>上传您身份证国徽面</text>
					</view>
				</view>
				<view class="rigthImgDis">
					<image :src="idCardB" mode=""></image>
					<view class="bottomText" @click="upIDcardB">
						<text>拍摄反面</text>
					</view>
				</view>
			</view>
		</view>
		<view class="upIdCard" style="margin-top: 40upx;">
			<view class="topTitle">
				<text>上传银行卡正反面</text>
			</view>
			<view class="topUp">
				<view class="leftText">
					<view class="bigTitle">
						<text>号码面</text>
					</view>
					<view class="littleText">
						<text>上传银行卡号码面</text>
					</view>
				</view>
				<view class="rigthImgDis">
					<image :src="payCardF" mode=""></image>
					<view class="bottomText" @click="upPayCardF">
						<text>拍摄正面</text>
					</view>
				</view>
			</view>
			<view class="topUp">
				<view class="leftText">
					<view class="bigTitle">
						<text>详情面</text>
					</view>
					<view class="littleText">
						<text>上传银行卡详情面</text>
					</view>
				</view>
				<view class="rigthImgDis">
					<image :src="payCardB" mode=""></image>
					<view class="bottomText" @click="upPayCardB">
						<text>拍摄反面</text>
					</view>
				</view>
			</view>
		</view>
		<view class="subBtn" @click="submitInfo">
			<text>提交</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName: '',
				phoneNum: '',
				idCardF: '../../static/idcardF.png',
				idCardB: '../../static/idcardB.png',
				payCardF: '../../static/payCardF.png',
				payCardB: '../../static/payCardB.png',
				idCardFX: '',
				idCardBX: '',
				payCardFX: '',
				payCardBX: '',
				machineNum:''
			}
		},
		methods: {
			submitInfo(){
				var that = this
				uni.request({
					url: this.baseUrl + 'index/uploadInfoImg',
					method:"POST",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					data:{
						type:'3',
						zcard:that.idCardFX,
						fcard:that.idCardBX,
						zBankcard:that.payCardFX,
						fBankcard: that.payCardBX,
						mobile:that.phoneNum,
						name:that.userName,
						user_id:that.userInfo.user_id,
						machineNum: that.machineNum
					},
					success(res) {
						uni.showModal({
							content: res.data.msg,
							showCancel: false
						})
					}
				})
			},
			clearName() {
				this.userName = ''
			},
			clearPhone() {
				this.phoneNum = ''
			},
			clearNum() {
				this.machineNum = ''
			},
			upIDcardF() {
				var that = this
				uni.chooseImage({
					success(res) {
						that.idCardF = res.tempFilePaths[0]
						uni.uploadFile({
							url: that.baseUrl  + 'login/UpImg', //仅为示例，非真实的接口地址
							filePath: res.tempFilePaths[0],
							name: 'file',
							success: (uploadFileRes) => {
								var res = JSON.parse(uploadFileRes.data)
								if (res.code == 1) {
									that.idCardFX = res.path
									uni.showToast({
										title: '上传成功',
										duration: 2000
									});
								} else {
									uni.showToast({
										title: '网络错误,刷新试试',
										duration: 2000
									});
								}
							}
						});
					}
				})
			},
			upIDcardB() {
				var that = this
				uni.chooseImage({
					success(res) {
						that.idCardB = res.tempFilePaths[0]
						uni.uploadFile({
							url: that.baseUrl  + 'login/UpImg', //仅为示例，非真实的接口地址
							filePath: res.tempFilePaths[0],
							name: 'file',
							success: (uploadFileRes) => {
								var res = JSON.parse(uploadFileRes.data)
								if (res.code == 1) {
									that.idCardBX = res.path
									uni.showToast({
										title: '上传成功',
										duration: 2000
									});
								} else {
									uni.showToast({
										title: '网络错误,刷新试试',
										duration: 2000
									});
								}
							}
						});
					}
				})
			},
			upPayCardF() {
				var that = this
				uni.chooseImage({
					success(res) {
						that.payCardF = res.tempFilePaths[0]
						uni.uploadFile({
							url: that.baseUrl  + 'login/UpImg', //仅为示例，非真实的接口地址
							filePath: res.tempFilePaths[0],
							name: 'file',
							success: (uploadFileRes) => {
								var res = JSON.parse(uploadFileRes.data)
								if (res.code == 1) {
									that.payCardFX = res.path
									uni.showToast({
										title: '上传成功',
										duration: 2000
									});
								} else {
									uni.showToast({
										title: '网络错误,刷新试试',
										duration: 2000
									});
								}
							}
						});
					}
				})
			},
			upPayCardB() {
				var that = this
				uni.chooseImage({
					success(res) {
						that.payCardB = res.tempFilePaths[0]
						uni.uploadFile({
							url: that.baseUrl  + 'login/UpImg', //仅为示例，非真实的接口地址
							filePath: res.tempFilePaths[0],
							name: 'file',
							success: (uploadFileRes) => {
								var res = JSON.parse(uploadFileRes.data)
								if (res.code == 1) {
									that.payCardBX = res.path
									uni.showToast({
										title: '上传成功',
										duration: 2000
									});
								} else {
									uni.showToast({
										title: '网络错误,刷新试试',
										duration: 2000
									});
								}
							}
						});
					}
				})
			}
		}
	}
</script>

<style>
	.subBtn {
		width: 92%;
		margin: 0 auto;
		line-height: 100upx;
		margin-top: 40upx;
		border-radius: 20upx;
		text-align: center;
		color: #FFFFFF;
		/* border-color: #edca8d; */
		background-color: #EDCA8D;
		font-size: 35upx;
	}

	.rigthImgDis {
		width: 280upx;
		position: absolute;
		left: 340upx;
		top: 50upx;
		border-radius: 15upx;
		color: white;
		overflow: hidden;
	}

	.rigthImgDis image {
		width: 100%;
		height: 200upx;
		display: block;
	}

	.bottomText {
		width: 100%;
		line-height: 60upx;
		font-size: 25upx;
		background-color: #edca8d;
		text-align: center;
	}

	.littleText {
		/* width: 100%; */
		font-size: 25upx;
		font-weight: 600;
		color: #edca8d;
	}

	.bigTitle {
		/* width: ; */
		font-size: 40upx;
		font-weight: 700;
	}

	.topUp {
		width: 100%;
		margin-top: 30upx;
		/* background-color: #555555; */
		background-color: #f8f8f8;
		border-radius: 10upx;
		position: relative;
		height: 350upx;
	}

	.leftText {
		/* width: ; */
		position: absolute;
		top: 100upx;
		left: 30upx;
	}

	.topTitle {
		width: 100%;
		font-size: 35upx;
		font-weight: 600;
	}

	.upIdCard {
		width: 92%;
		margin: 0 auto;
		margin-top: 20upx;
	}

	.nameInput {
		width: 100%;
		height: 80upx;
		border-bottom: 1upx solid #e6e6e6;
		margin-top: 20upx;
		/* padding: ; */
		position: relative;
	}

	.nameInput input {
		font-size: 30upx;
		height: 100%;
	}

	.nameInput image {
		width: 30upx;
		height: 30upx;
		position: absolute;
		right: 10upx;
		top: 30upx;
		z-index: 10000;
	}

	.topInput {
		width: 92%;
		margin: 0 auto;
		margin-top: 30upx;
	}

	.holePage {
		width: 100%;
		padding-bottom: 20upx;
	}
</style>
