<template>
	<view>
		<web-view :src="htmlUrl"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				htmlUrl:''
			}
		},
		methods: {
			
			getUrl(){
				var that = this
				uni.getStorage({
					key : 'htmlUrl',
					success(res) {
						that.htmlUrl = res.data
					}
				})
			}
		},
		onLoad() {
			this.getUrl()
		}
	}
</script>

<style>

</style>
