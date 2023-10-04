<template>
	<view>
		<uni-nav-bar left-icon="arrowleft" color="white"
			background-color="#0a2e38" @clickLeft="back"/>
		<web-view :webview-styles="webviewStyles" src="https://vip.bljiex.com"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					},
					width: '100px',
					height: '100px'
				}
			}
		},
		methods: {
			backAction() {
				uni.navigateBack()
			}
		}
	}
</script>

<style>

</style>
