<template>
	<view class="holePage">
		<view class="eachInput">
			<view class="leftLabel">
				<text>入住时间</text>
			</view>
			<view class="left">
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view>{{date}}</view>
				</picker>
			</view>
			<view class="rightIcon">
				<image src="../../static/rightArrow.png" mode=""></image>
			</view>
		</view>
		<view class="eachInput">
			<view class="leftLabel">
				<text>标准间</text>
			</view>
			<view class="left">
				<picker :range="typeList" :value="typeIndex" @change="changeType">
					<view>{{typeList[typeIndex]}}</view>
				</picker>
			</view>
			<view class="rightIcon">
				<image src="../../static/rightArrow.png" mode=""></image>
			</view>
		</view>
		<view class="eachInput">
			<view class="leftLabel">
				<text>人数</text>
			</view>
			<view class="left">
				<picker :range="numList" :value="numIndex" @change="changeNum">
					<view>{{numList[numIndex]}}</view>
				</picker>
			</view>
			<view class="rightIcon">
				<image src="../../static/rightArrow.png" mode=""></image>
			</view>
		</view>
		<view class="stuffView">
			
		</view>
		<view class="eachInput">
			<view class="leftLabel">
				<text>预定时间</text>
			</view>
			<view class="left">
				<!-- <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view>{{date}}</view>
				</picker> -->
				<text>11月23日</text>
			</view>
			<view class="rightIcon">
				<image src="../../static/rightArrow.png" mode=""></image>
			</view>
		</view>
		<view class="eachInput">
			<view class="leftLabel">
				<text>姓名</text>
			</view>
			<view class="left">
				<input type="text" value="" placeholder="请输入姓名"/>
			</view>
			<view class="rightIcon">
				<image src="../../static/rightArrow.png" mode=""></image>
			</view>
		</view>
		<view class="eachInput">
			<view class="leftLabel">
				<text>手机号</text>
			</view>
			<view class="left">
				<input type="number" value="" placeholder="请输入手机号"/>
			</view>
			<view class="rightIcon">
				<image src="../../static/rightArrow.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				date:'请选择日期',
				typeIndex: 0,
				typeList: [
					'线下付费',
					'到店付费'
				],
				numIndex: 0,
				numList: [
					'1人',
					'2人'
				],
			}
		},
		methods: {
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			changeType(e) {
				this.typeIndex = e.target.value
			},
			changeNum(e) {
				this.numIndex = e.target.value
			},
		},
		created() {
			var date = new Date()
			this.date = data.getTime()
		}
	}
</script>

<style>
	.stuffView{
		width: 100%;
		height: 20upx;
		background-color: #f4f5f8;
	}
	.holePage{
		width: 100%;
	}
	.eachInput{
		width: 90%;
		line-height: 90upx;
		font-size: 30upx;
		margin: 0 auto;
		overflow: hidden;
	}
	.leftLabel{
		float: left;
		color: #666666;
		width: 130upx;
	}
	.left{
		float: left;
		margin-left: 20upx;
		font-weight: 700;
		width: 500upx;
	}
	.left input{
		height: 90upx;
		font-size: 30upx;
	}
	.rightIcon{
		width: 30upx;
		height: 30upx;
		margin-right: 0rpx;
		float: right;
	}
	.rightIcon image{
		width: 100%;
		height: 100%;
		display: block;
		margin-top: 30upx;
	}
</style>
