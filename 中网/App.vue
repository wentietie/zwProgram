<script>
	export default {
		
		onLaunch: function() {
			
			uni.getStorage({
				key: 'userInfo',
				success(res){
					uni.switchTab({
						url: '../pages/index/index'
					});
				},
				fail() {
					uni.redirectTo({
						url: '../pages/loginPage/loginPage'
					});
					uni.showModal({
						content: '请登录',
						showCancel: false
					});
				}
			})
			
		},
		onShow: function() {
			// console.log('App Show')
			uni.getStorage({
				key: 'userInfo',
				success(res){
					uni.switchTab({
						url: '../pages/index/index'
					});
				},
				fail() {
					uni.redirectTo({
						url: '../pages/loginPage/loginPage'
					});
					uni.showModal({
						content: '请登录',
						showCancel: false
					});
				}
			})
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
