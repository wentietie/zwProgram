<template>
	<view class="content">
		<view class="registerText" @click="goToRegister">
			<text>去登陆</text>
		</view>
		<view class="registerLogo">
			<!-- <image src="../../static/image/myAPPIcon.png" mode="widthFix"></image> -->
		</view>
		<view class="inputView">
			<view class="countName">
				<input type="text" placeholder="请输入手机号" v-model="countName" placeholder-style="font-size:20upx" />
			</view>
			<view class="countName">
				<input type="text" password placeholder="请输入密码" v-model="password" placeholder-style="font-size:20upx" />
			</view>
			<view class="countName">
				<input type="text" password placeholder="请确认密码" v-model="passwordConfirm" placeholder-style="font-size:20upx" />
			</view>
			<view class="countName">
				<input type="text"  placeholder="请填写推荐人手机号(选填)" v-model="suggestCode" placeholder-style="font-size:20upx" />
			</view>
			<view class="countName" style="position: relative;">
				<input type="text"  placeholder="请输入验证码" v-model="vCode" placeholder-style="font-size:20upx" />
				<text class="getCode" @click="getVCode">获取验证码</text>
			</view>
		</view>
		<view class="loginNow" @click="registerNow">
			<text>马上注册</text>
		</view>
		<view class="loginBottom">
		</view>
		<!-- <view class="wxIcon">
			<image src="../../static/image/weixinIcon.jpg" mode="widthFix"></image>
		</view> -->
		<view class="registerNow">
			<text>已有账号？</text><text style="color: #FABF6F;" @click="goToRegister">立即登陆</text>
		</view>
		<view class="registerNow" style="font-size: 20upx;margin-top: 20upx;">
			<text>登录代表你已同意<text style="color: #FABF6F;">愚公移山服务协议，隐私政策</text></text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				countName: '',
				password: '',
				passwordConfirm:'',
				vCode:'',
				suggestCode: ''
			}
		},
		methods: {
			getVCode(){
				var that = this
				uni.request({
					url:that.baseUrl + 'vcode',
					method:"POST",
					header: {
						'content-type': 'application/x-www-form-urlencoded', 
					},
					data:{
						mobile: that.countName
					},
					success(res) {
						uni.showModal({
							content: res.data.msg,
							showCancel: false
						});
					}
				})
			},
			goToRegister() {
				uni.redirectTo({
					url: "../loginPage/loginPage"
				})
			},
			registerNow(){
				var that = this
				if(this.suggestCode != '' && this.suggestCode.length != 11){
					uni.showModal({
						content: '请输入11位手机号',
						showCancel: false
					});
					return
				}
				if(this.suggestCode == ''){
					this.suggestCode = '0'
				}
				uni.request({
					url:that.baseUrl + 'login/register',
					method:"POST",
					header: {
						'content-type': 'application/x-www-form-urlencoded', 
					},
					data:{
						mobile:that.countName,
						password1:that.password,
						password2:that.passwordConfirm,
						code:that.vCode,
						suggest: that.suggestCode 
					},
					success(res) {
						if(res.data.code == 1){
							uni.showToast({
								title:res.data.msg,
								icon:'none',
								duration: 1000,
								success() {
									setTimeout(function() {
										//要延时执行的代码
										uni.redirectTo({
											url: '../loginPage/loginPage'
										});
									}, 1000)
								}
							})
							
						}else{
							uni.showToast({
								title:res.data.msg,
								icon:'none',
								duration: 2000
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
	.getCode{
		position: absolute;
		top: 40upx;
		font-size: 25upx;
		right: 30upx;
		color: #EFD0A1;
	}
	.registerText {
		position: fixed;
		top: 50upx;
		width: 730upx;
		font-size: 30upx;
		text-align: right;
		z-index: 100000000;
	}

	.registerNow {
		width: 100%;
		text-align: center;
		font-size: 25upx;
		margin-top: 150upx;
		color: #A5A5A5;
	}

	.wxIcon {
		width: 120upx;
		height: 120upx;
		margin: 0 auto;
	}

	.wxIcon image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.forgetPwd {
		float: right;
		color: #D2D2D2;
	}

	.phoneLogin {
		float: left;
		color: #FAC883;
	}

	.loginBottom {
		width: 95%;
		overflow: hidden;
		font-size: 25upx;
		margin: 20upx auto;
	}

	.loginNow {
		width: 95%;
		margin: 0 auto;
		margin-top: 100upx;
		font-size: 30upx;
		color: white;
		text-align: center;
		line-height: 100upx;
		background-color: #EFD0A1;
		border-radius: 8upx;
	}

	.countName {
		width: 100%;
		border-bottom: 1upx solid #F1F1F1;
		height: 100upx;
	}

	.countName input {
		height: 100upx;
		font-size: 30upx;
	}

	.inputView {
		width: 95%;
		margin: 40upx auto;
	}

	.content {
		width: 100%;
		padding-top: 1upx;
	}

	.registerLogo {
		width: 110upx;
		height: 110upx;
		margin: 0 auto;
		margin-top: 100upx;
		border-radius: 20upx;
		overflow: hidden;
	}

	.registerLogo image {
		width: 110upx;
		height: 110upx;
		display: block;
	}
</style>
