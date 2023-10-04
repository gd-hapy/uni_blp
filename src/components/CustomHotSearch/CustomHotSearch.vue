<template>
	<view class="CustomHotSearch">
		<view class="Custom-preText">热门搜索：</view>
		<block v-for="(item, index) in data" :key="index">
			<view class="tag-view">
				<CustomTag :text="item"  @click="handleClick"></CustomTag>
			</view>
		</block>

	</view>

</template>

<script>
	import CustomTag from '@/src/components/CustomHotSearch/CustomTag.vue'
	export default {
		components: {CustomTag},
		name: 'CustomHotSearch',
		emits: ['clickTitle'],
		props: {
			data: {
				value: [String],
				default: () => ['八角笼中', '消失的她', '莲花楼', '长相思', '曾少年', '我的人间烟火', '长风渡', '平凡之路', '当我飞奔向你', '斗罗大陆', '凡人修仙传']
			}
		},
		data() {
			return {
			};
		},
		methods: {
			handleClick(e) {
				console.log('点击标签：' + e)
				this.$emit('clickTitle', {value: e})
			}
		}
	};
</script>

<style lang="scss">
	.CustomHotSearch {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-end;
		flex-wrap: wrap;
		margin: 30px;
	}
	.Custom-preText {
		color: $uni-text-color-lightGreen;
	}

	.tag-view {
		margin-right: 10px;
		margin-top: 5px;
	}
</style>