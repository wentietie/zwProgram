<template>
	<view class="holePage">
		<view class="eachFund" v-for="(item, index) in fundList" v-bind:key="index">
			<image src="../../static/shopHeadImg.png" mode=""></image>
			<view class="rightInfo">
				<view class="title">
					<text>{{item.title}}</text>
				</view>
				<view class="price">
					<text>+</text><text>{{item.price}}</text>
				</view>
				<view class="date">
					<text>{{item.date}} &nbsp;{{item.time}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fundList:[
					{title:'士大夫啊手动阀手动阀',price:'16.8', date:'今天', time: '11：01'},
					{title:'士大夫啊手动阀手动阀',price:'16.8', date:'今天', time: '11：01'},
					{title:'阿斯顿噶发噶法国阿斯顿噶发噶法国',price:'16.8', date:'今天', time: '11：01'}
				]
			}
		},
		methods: {
			asd(){
				var i = 0
				while(1){
					i = i + 1
				}
			}
		},
		created() {
			// this.asd()
		}
	}
</script>

<style>
	.holePage{
		width: 100%;
		padding-top: 5upx;
	}
	.eachFund{
		width: 92%;
		margin: 0 auto;
		margin-top: 50upx;
		position: relative;
	}
	.eachFund image{
		width: 80upx;
		height: 80upx;
		position: absolute;
		top: 0upx;
		left: 0;
		border-radius: 50upx;
	}
	.rightInfo{
		margin-left: 100upx;
		overflow: hidden;
		padding-bottom: 30upx;
		border-bottom: 1upx solid #BFBFBF;
	}
	.title{
		width: 70%;
		float: left;
		font-size: 35upx;
		font-weight: 600;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.date{
		width: 70%;
		float: left;
		margin-top: 20upx;
		font-size: 25upx;
		color: #BFBFBF;
	}
	.price{
		width: 30%;
		float: right;
		text-align: right;
		font-size: 30upx;
		margin-top: 15upx;
	}
</style>
