<template>
	<text class="Custom-tag" v-if="text" @click="onClick">{{text}}</text>
</template>

<script>
	/**
	 * Tag 标签
	 * @property {String} text 标签内容
	 * @event {Function} click 点击 Tag 触发事件
	 */

	export default {
		name: "CustomTag",
		emits: ['click'],
		props: {
			// 标签内容
			text: {
				type: String,
				default: ""
			},
		},
		computed: {
		},
		methods: {
			onClick() {
				this.$emit("click", this.text);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.Custom-tag {
		line-height: 14px;
		font-size: 16px;
		font-weight: 100;
		color: $uni-text-color-lightGreen;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}
</style>
