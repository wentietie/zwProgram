<template>
	<view class="holePage">
		<view class="topIcon">
			<view class="leftIcon">
				<image src="../../static/mineMsg.png" mode=""></image>
			</view>
			<view class="rightIcon">
				<image src="../../static/settingIcon.png" mode=""></image>
			</view>
		</view>
		<view class="mineInfo" v-if="userType == 0">
			<view class="editText">
				<text>编辑</text>
			</view>
			<view class="topInfo">
				<image :src="userInfo.head_pic" mode=""></image>
				<view class="infoDetail">
					<view class="name">
						<text>{{userInfo.nick_name}}</text>
					</view>
					<view class="bottomIntro">
						<text>个人简介</text>
					</view>
				</view>
			</view>
			<view class="bottomInfo">
				<view class="eachInfo" @click="lookAllOrder">
					<view class="top">
						<text>10个</text>
					</view>
					<view class="bottom">
						<text>全部订单</text>
					</view>
				</view>
				<view class="eachInfo">
					<view class="top">
						<text>4个</text>
					</view>
					<view class="bottom">
						<text>优惠</text>
					</view>
				</view>
				<view class="eachInfo">
					<view class="top">
						<text>5261元</text>
					</view>
					<view class="bottom">
						<text>消费金额</text>
					</view>
				</view>
			</view>
		</view>
		<view class="mineInfo" v-if="userType == 1">
			<view class="userTypeView">
				<text>商家</text>
			</view>
			<view class="editText">
				<text>编辑</text>
			</view>
			<view class="topInfo">
				<image :src="userInfo.head_pic" mode=""></image>
				<view class="infoDetail">
					<view class="name">
						<text>{{userInfo.nick_name}}</text>
					</view>
					<view class="bottomIntro">
						<text>个人简介</text>
					</view>
				</view>
			</view>
			<view class="bottomInfo">
				<view class="eachInfo" @click="goToPages('../addGoods/addGoods',2)"  >
					<view class="top">
						<text>10个</text>
					</view>
					<view class="bottom">
						<text>产品(点击添加)</text>
					</view>
				</view>
				<view class="eachInfo">
					<view class="top">
						<text>4个</text>
					</view>
					<view class="bottom">
						<text>全部订单</text>
					</view>
				</view>
				<view class="eachInfo">
					<view class="top">
						<text>5261元</text>
					</view>
					<view class="bottom">
						<text>收入金额</text>
					</view>
				</view>
			</view>
		</view>
		<view class="stuffTop">
			
		</view>
		<view style="width: 100%" v-if="userType == 0">
			
			<view class="myOrder">
				<view class="top">
					<view class="left">
						<text>我的订单</text>
					</view>
					<view class="right">
						<text>查看全部</text>
						<image src="../../static/rightArrow.png" mode=""></image>
					</view>
				</view>
				<view class="bottom">
					<view class="eachOrderBtn" v-for="(item, index) in orderBtnList" v-bind:key="index" @click="getType()">
						<image :src="item.img" mode=""></image>
						<text>{{item.label}}</text>
					</view>
				</view>
			</view>
			<view class="stuffView">
				
			</view>
			<view class="bottomChoose">
				<view class="eachChoose" v-for="(item, index) in midChoose" v-bind:key="index" @click="goPageOrder(index)">
					<text>{{item}}</text>
					<image src="../../static/rightArrow.png" mode=""></image>
				</view>
			</view>
			<view class="stuffView">
				
			</view>
			<view class="bottomChoose">
				<view class="eachChoose" v-for="(item, index) in bottomChoose" v-bind:key="index" @click="goPage(item.url)">
					<text>{{item.title}}</text>
					<image src="../../static/rightArrow.png" mode=""></image>
				</view>
			</view>
		</view>
		<view style="wdith: 100%" v-if="userType == 1">
			<view class="bottomChoose">
				<view class="eachChoose" v-for="(item, index) in shopChoose" v-bind:key="index" @click="goPageShop(item.url)">
					<text>{{item.title}}</text>
					<image src="../../static/rightArrow.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="logOut" @click="logout">
			<text>退出登陆</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userType:1,
				orderBtnList:[
					{img: '../../static/orderBtn4.png', label: '待付款'},
					{img: '../../static/orderBtn2.png', label: '待收货'},
					{img: '../../static/orderBtn1.png', label: '待确认'},
					{img: '../../static/orderBtn3.png', label: '退换修'}
				],
				midChoose:[
					'收货地址',
					'我的收藏',
					'我的订单'
				],
				bottomChoose:[
					{title:'客服',},
					{title:'关于我们'},
					{title:'我的足迹'},
					// {'流水管理',url:'../fundWater/fundWater'},
					// {'店铺管理',url:'../becomeStore/becomeStore'},
					// {'产品管理',url:'../productMag/productMag'},
					{title:'成为经纪人',url:'../becomeJJR/becomeJJR'},
					{title:'成为服务商',url:'../becomeServer/becomeServer'},
					{title:'成为商户',url:'../becomeStore/becomeStore'},
					{title:'我要推广',url:'../extend/extend'}
				],
				shopChoose:[
					{title:'流水管理',url:'../fundWater/fundWater'},
					{title:'店铺管理',url:'../becomeStore/becomeStore'},
					{title:'产品管理',url:'../productMag/productMag'},
					{title:'成为经纪人',url:'../becomeJJR/becomeJJR'},
					{title:'成为服务商',url:'../becomeServer/becomeServer'},
					{title:'成为商户',url:'../becomeStore/becomeStore'},
					{title:'我要推广',url:'../extend/extend'},
					{title:'我的团队',url:'../myTeam/myTeam'},
					{title:'我的推荐',url:'../mySuggest/mySuggest'}
				],
				userInfo: {},
			}
		},
		methods: {
			lookAllOrder(){
				uni.navigateTo({
					url:'../myOrderList/myOrderList'
				})
			},
			getType(){
				uni.navigateTo({
					url:'../myOrderList/myOrderList'
				})
			},
			goToPages : function (url,type = 0) {
				if(type == 2) {
					let level = this.userInfo.level
					if(level != 2) {
						uni.showToast({
							title : '权限不足请先成为商户',
							duration: 2000,
							icon: 'none'
						})
						return;
					}
				}
				uni.navigateTo({
					url
				})
			},
			getUserInfo: function() {
				let user_id = this.globalData.userInfo.user_id;
				let nick_name = this.globalData.userInfo.user_name;
				let head_pic = this.globalData.userInfo.head_pic;
				let level = this.globalData.userInfo.level;
				if(user_id == null || user_id == undefined || user_id == '' || user_id == 0) {
					uni.showModal({
						content: '请登录',
						showCancel: false,
						success() {
							setTimeout(()=>{
								uni.redirectTo({
									url: '../loginPage/loginPage'
								});
							},1500)
						}
					});
					
					return;
				}
				this.userInfo.level = level
				this.userInfo.user_id = user_id
				this.userInfo.nick_name = nick_name ? nick_name : '待完善'
				this.userInfo.head_pic = head_pic ? (this.baseUrl + head_pic) : '../../static/goodsImg.png'
			},
			//根据index进行页面跳转
			goPage(i){
				uni.navigateTo({
					url:url
				})
			},
			goPageOrder(i){
				switch (i){
					case 0:
						break;
					case 1:
						break;
					case 2:
						uni.navigateTo({
							url:'../orderList/orderList'
						})
						break;
					default:
						break;
				}
			},
			//
			goPageShop(url){
				uni.navigateTo({
					url:url
				})
			},
			logout(){
				uni.clearStorage();
				uni.redirectTo({
					url: '../loginPage/loginPage'
				});
			},
			getUserType(){
				 // 等级: 1用户  2商家 3服务商 4经纪人 5经纪人和服务商
				var that = this
				uni.request({
					url:that.baseUrl + 'goods/getUserLv',
					method:'GET',
					data:{
						user_id: that.globalData.userInfo.user_id
					},
					success(e) {
						// console.log(that.globalData.userInfo)
						if(e.data.code == 1){
							that.globalData.userInfo.level = e.data.res.level
							// uni.showToast({
							// 	title:'刷新成功',
							// 	icon:'none'
							// })
							uni.stopPullDownRefresh();
						}else{
							uni.showToast({
								title:'网络错误',
								icon:'none'
							})
							// uni.hiddenToast()
							uni.stopPullDownRefresh();
						}
					}
				})
			}
		},
		created : function () {
			this.getUserInfo()
		},
		onShow() {
			this.getUserType()
		},
		onPullDownRefresh() {
			//监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
			this.getUserType()
		}
		
		
	}
</script>

<style>
	.logOut{
		width: 90%;
		margin: 0 auto;
		margin-top: 100upx;
		line-height: 80upx;
		text-align: center;
		font-size: 25upx;
		background-color: red;
		color: #FFFFFF;
		margin-bottom: 100upx;
		border-radius: 10upx;
	}
	.bottomChoose{
		width: 100%;
	}
	.eachChoose{
		width: 100%;
		border-top: #efefef solid 1upx;
		overflow: hidden;
	}
	.eachChoose text{
		line-height: 100upx;
		float: left;
		margin-left: 30upx;
		font-size: 30upx;
		font-weight: 600;
	}
	.eachChoose image{
		width: 30upx;
		height: 30upx;
		display: block;
		float: right;
		margin-right: 30upx;
		margin-top: 35upx;
	}
	.stuffView{
		width: 100%;
		height: 25upx;
		background-color: #efefef;
	}
	.myOrder{
		width: 100%;
	}
	.myOrder .top{
		width: 90%;
		margin: 0 auto;
		height: 100upx;
		border-bottom: 1upx solid #efefef;
	}
	.myOrder .top .left{
		float: left;
		line-height: 100upx;
		font-size: 35upx;
		font-weight: 700;
	}
	.myOrder .top .right{
		float: right;
		line-height: 100upx;
		font-size: 25upx;
		/* font-weight: 700; */
		color: #8a8a8a;
		position: relative;
	}
	.myOrder .top .right image{
		width: 30upx;
		height: 30upx;
		display: block;
		position: absolute;
		right: 0upx;
		top: 35upx;
	}
	.myOrder .bottom {
		width: 100%;
		overflow: hidden;
		padding: 30upx 0;
	}
	.eachOrderBtn{
		width: 25%;
		float: left;
		text-align: center;
	}
	.eachOrderBtn image{
		width: 50upx;
		height: 50upx;
		margin: 0 auto;
		display: block;
	}
	.eachOrderBtn text{
		margin-top: 5upx;
		font-size: 25upx;
	}
	.myOrder .top .right text{
		width: 100upx;
		position: absolute;
		right: 40upx;
		/* top: 20upx; */
	}
	.stuffTop{
		width: 100%;
		height: 150upx;
		background-image: linear-gradient(to bottom, #f4f4f4, #f4f4f4);
	}
	.bottomInfo{
		width: 630upx;
		overflow: hidden;
		margin: 0 auto;
		/* margin-top: 20upx; */
	}
	.eachInfo{
		width: 210upx;
		padding: 30upx 0;
		float: left;
		text-align: center;
	}
	.eachInfo .top{
		font-size: 35upx;
		font-weight: 600;
		
	}
	.eachInfo .bottom{
		font-size: 30upx;
		/* font-weight: 600; */
		color: #b3b3b3;
		margin-top: 15upx;
	}
	.topInfo{
		width: 90%;
		height: 130upx;
		margin: 0 auto;
		margin-top: 30upx;
		position: relative;
	}
	.topInfo image{
		position: absolute;
		width: 100upx;
		height: 100upx;
		top: 10upx;
		border-radius: 50upx;
	}
	.infoDetail{
		/* width: ; */
		position: absolute;
		top: 10upx;
		left: 130upx;
	}
	.editText{
		position: absolute;
		top: 80upx;
		font-size: 25upx;
		color: #EDCA8D;
		right: 30upx;
	}
	.infoDetail .name{
		font-size: 35upx;
		font-weight: 700;
	}
	.infoDetail .bottomIntro{
		font-size: 22upx;
		margin-top: 15upx;
		font-weight: 500;
	}
	.mineInfo{
		width: 690upx;
		/* margin: 0 auto; */
		position: absolute;
		background-color: white;
		border-radius: 15upx;
		top: 180upx;
		left: 30upx;
	}
	.userTypeView{
		position: absolute;
		padding: 0upx 20upx;
		width: auto;
		border-radius: 50rpx;
		border: #EDCA8D solid 2upx;
		font-size: 20upx;
		top: 45upx;
		left: 280upx;
		color: #EDCA8D;
	}
	.mineInfo image{
		width: 100upx;
		height: 100upx;
		display: block;
	}
	.topIcon{
		width: 100%;
		padding-top: 80upx;
		height: 300upx;
		background-color: #000000;
		position: relative;
	}
	.leftIcon{
		width: 50upx;
		height: 50upx;
		position: absolute;
		left: 30upx;
		/* height: 50; */
	}
	.leftIcon image{
		width: 100%;
		height: 100%;
		display: block;
	}
	.rightIcon{
		width: 45upx;
		height: 45upx;
		position: absolute;
		right: 30upx;
	}
	.rightIcon image{
		width: 100%;
		height: 100%;
		display: block;
	}
	.holePage{
		width: 100%;
		
	}
</style>
