<template>
	<view class="loginLoading">
		<image src="../../../static/loading.gif"  class="loading-img" mode="aspectFit"></image>
	</view>
</template>

<script>
	export default {//152 × 19
		name:"CustomLoading",
		data() {
			return {};
		}
	}
</script>

<style lang="scss" scoped>
	 .loginLoading{
	   width:100%;
	   height:100%;
	   display: flex;
	   left: 0;
	   top: 0;
	   right: 0;
	   bottom: 0;
	   flex-direction: column;
	   position: fixed;
	   // justify-content: center;
	   margin-top: 50px;
	   align-items: center;
	   z-index: 999;
	   .loading-img{
		   width:300rpx;
		   height:40rpx;
	   }
	 }
</style>