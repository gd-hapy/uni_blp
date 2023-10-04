<template>
	<view class="customViewContain">
		<view class="preText" :style="{color: preTextColor}">{{preText}}</view>
		<view class="subText" :style="{color: subTextColor}" @click="clickHandle">{{subText}}</view>
		
	</view>
</template>

<script>
	/*  */
	export default {
		name: 'CustomView',
		emits: ['click'],
		props: {
			preText: {
				type: String,
				default: '解析支持'
			},
			preTextColor: {
				type: String,
				default: '$uni-text-color-lightGreen'
			},
			subText: {
				type: String,
				default: '优酷、爱奇艺、腾讯、芒果、乐视、搜狐、MP4、M3U8、FLV等等'
			},
			subTextColor: {
				type: String,
				default: '$uni-text-color-lightGreen'
			},
		},
		data() {
			return {
				
			};
		},
		methods: {
			clickHandle() {
				// debugger
				this.$emit('click', this.subText);
			}
		}
	}
</script>

<style lang="scss">
	.customViewContain {
		display: flex;
		// flex-wrap: nowrap;
		// flex-direction: row;
		// position: relative;
		margin: 20px 20px 0 20px;
	}
	.preText {
		font-size: 16px;
		white-space: nowrap;
		// margin-left: 20px;
	}
	.subText {
		text-align: center;
	}

</style>
