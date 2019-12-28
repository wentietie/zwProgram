<template>
	<view class="holePage">
		<view class="code" @longpress="saveImg">
			<image :src="codeUrl" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				codeUrl:''
			}
		},
		methods: {
			saveImg(){
				// uni.saveImageToPhotosAlbum({
				// 	filePath:
				// })
			},
			getCode(){
				var that = this
				uni.request({
					url: that.baseUrl + 'index/Extension',
					data:{
						user_id: that.globalData.userInfo.user_id
					},
					method:'GET',
					success(res) {
						that.codeUrl = that.globalData.imgUrl + res.data.data
					}
					
				})
			}
		},
		onLoad() {
			this.getCode()
		},
		
		created() {
			
		}
	}
</script>

<style>
	.holePage{
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		background-color: #007AFF;
	}
	.code{
		width: 400upx;
		height: 400upx;
		margin: 0 auto;
		margin-top: 500upx;
		border-radius: 15upx;
		padding: 30upx;
		background-color: #FFFFFF;
	}
	.code image{
		width: 100%;
		height: 100%;
		display: block;
	}
</style>
