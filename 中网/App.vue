<script>
	export default {
		onLaunch: function() {
			uni.getStorage({
				key: 'userInfo',
				success(res){
					console.log(res.data)
				},
				fail() {
					uni.redirectTo({
						url: 'pages/loginPage/loginPage'
					});
				}
			})
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
