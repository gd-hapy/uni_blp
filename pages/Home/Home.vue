<template>
	<view class="content">
		<CustomTime />
		<CustomSearchBar @confirm="searchClick" />
		<CustomHotSearch v-if="hotSearchWords.length > 0" @clickTitle="searchClick" :data="hotSearchWords"/>
		<CustomView :pre-text="preText" :pre-text-color="preColor" :sub-text="subText" :sub-text-color="subTextColor" />
		<CustomView :pre-text="preText1" :pre-text-color="preColor1" :sub-text="subText1"
			:sub-text-color="subTextColor1" @click="clickHandle" />

		<Loading v-show="this.$store.state.loading"></Loading>
		<!-- <button @click="getXiaoMi">点击测试</button> -->
	</view>
</template>

<script>
	import axios from 'axios'
	import CustomTime from '../../src/components/CustomTime/CustomTime.vue'
	import CustomSearchBar from '../../src/components/CustomSearchBar/CustomSearchBar.vue'
	import CustomHotSearch from '../../src/components/CustomHotSearch/CustomHotSearch.vue'
	import CustomView from '../../src/components/CustomView/CustomView.vue'

	
	import HttpRequest from '@/src/api/axios.js'
	import Loading from '@/src/components/CustomLoading/CustomLoading.vue'

	export default {
		components: {
			CustomTime,
			CustomSearchBar,
			CustomHotSearch,
			CustomView,
			Loading
		},
		data() {
			return {
				title: 'Hello',
				hotSearchWords: [],
				hotSearchWords_More: [],//更多热门搜索
				preText: '解析支持:',
				preColor: '#FFD700',
				subText: '优酷、爱奇艺、腾讯、芒果、乐视、搜狐、MP4、M3U8、FLV等等',
				subTextColor: '#FFD700',

				preText1: '调用方式:',
				preColor1: '#F0E68C',
				subText1: 'https://vip.bljiex.com/?v=视频名称或地址',
				subTextColor1: '#F0E68C',
			}
		},
		onLoad() {
			// debugger
			this.$store.state.loading = true
			this.requestHotSearch()
		},
		methods: {
			clickHandle(e) {
				// debugger
				console.log(e)
				// uni.navigateTo({
				// 	url: '/src/pages/searchResultsView/index?param=' + JSON.stringify(e),
				// 	fail(e) {
				// 		console.log(JSON.stringify(e))
				// 	},
				// })
				uni.navigateTo({
					url: 'src/components/CustomWebView/CustomWebView',
					// url: '../../src/components/CustomWebView/CustomWebView',
					fail(err) {
						debugger
						console.log(err)
					}
				})
			},
			searchClick(e) {
				// debugger
				if (e.value.length === 0) return
				console.log('searchClick:' + JSON.stringify(e))
				let param = e.value
				if (e.value.includes('更多')) {
					param = this.hotSearchWords_More
				}

				uni.navigateTo({
					url: '/pages/SearchResults/SearchResults?param=' + param,
					fail(err) {
						console.log("searchClick:navigateTo:fail:" + JSON.stringify(err))
					}
				})
			},
			requestHotSearch() {
				let that = this
				// https://vip.bljiex.com/so.php
				// https://jx.qqwtt.com/so.php
				HttpRequest.get('so.php').then(res => {
					// console.log(res)
					
					that.$store.state.loading = false
					// let {data} = res
					that.parseALabel(res)
					that.parseHotKeyWords(res)
				})
			},
			parseALabel(html) {
				// debugger
			    let arrayA = html.match(/<a[^>]*>([\s\S]*?)<\/a>/g);
			    let results = [];
			    if (arrayA && arrayA.length > 0) {
			        results = arrayA.map(item => {
			            let array = item.match(/<a[^>]*>([\s\S]*?)<\/a>/);
						return array[1]
			        });
			    }
				let index_ = results.indexOf('更多...')
				let index = results.indexOf('更多')
				let curIndex = 10
				if (index_ != -1) {
					curIndex = index_ + 1
				} 
				if (index != -1) {
					curIndex = index + 1
				}
				this.hotSearchWords = results.slice(0, curIndex)
			},
			
			parseHotKeyWords(html) {
				let arr = html.split('title=\"')
				// debugger
				let that = this
				let result = arr.map(item => {
					let subArr = item.split('\";')
					return subArr[0]
				})
				this.hotSearchWords_More = result.slice(1)
			},
			
			// 判断字符串是否包含中文
			hasChinese(str) {
			    return /[\u4E00-\u9FA5]+/g.test(str)
			},
			
			// 判断字符串是否全是中文
			isAllChinese(str) {
			    return /^[\u4E00-\u9FA5]+$/.test(str)
			}
		}
	}
</script>

<style lang="scss">
	// style="background: 'linear-gradient(to bottom, #4791db, #009688)"

	// .content {
	// width: 100vw;
	// height: 100vh;
	// display: flex;
	// flex-direction: column;
	// align-items: center;
	// justify-content: center;
	// background: radial-gradient(#0a2e38 0%, #000000 80%);
	// }
	.page {
		margin: 20px;
	}
</style>