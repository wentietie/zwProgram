<template>
	<view class="holePage">
		<view class="eachMember" v-for="(item, index) in teamList" v-bind:key="index">
			<image src="../../static/addImg.png" mode=""></image>
			<view class="rightInfo">
				<view class="title">
					<text>谈光耀</text>
				</view>
				<view class="date">
					<text>12月13日</text>
				</view>
				<view class="userInfo">
					<view class="eachInfo">
						<text>手机号：13113113131</text>
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
				teamList:[
					{title:'123'},
					{title:'123'},
					{title:'123'},
					{title:'123'}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.title{
		font-size: 30upx;
		color: #333333;
		float: left;
	}
	.date{
		float: right;
		font-size: 22upx;
		color: #878787;
	}
	.userInfo{
		width: 100%;
		float: left;
		margin-top: 50upx;
	}
	.eachInfo{
		width: 100%;
		font-size: 22upx;
		color: #8A8A8A;
	}
	.holePage{
		width: 100%;
		padding: 20upx;
	}
	.eachMember{
		width: 94%;
		padding: 20upx 3%;
		margin: 10upx;
		overflow: hidden;
	}
	.eachMember image{
		width: 120upx;
		height: 120upx;
		display: block;
		float: left;
		
	}
	.rightInfo{
		width: 500upx;
		float: left;
		margin-left: 20upx;
		border-bottom: 1upx solid #E6E6E6;
		overflow: hidden;
		padding-bottom: 15upx;
	}
</style>
