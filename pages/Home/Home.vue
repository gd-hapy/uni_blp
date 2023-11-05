<template>
	<view>
		<CustomTime />
		<CustomSearchBar @confirm="searchClick" />
		<CustomHotSearch v-if="hotSearchWords.length > 0" @clickTitle="searchClick" :data="hotSearchWords" />
		<!-- <CustomView :pre-text="preText" :pre-text-color="preColor" :sub-text="subText" :sub-text-color="subTextColor" />
		<CustomView :pre-text="preText1" :pre-text-color="preColor1" :sub-text="subText1"
			:sub-text-color="subTextColor1" @click="clickHandle" /> -->
		<CustomView sub-text="换源" sub-text-color="green" @click="clickHandle"></CustomView>

		<Loading v-if="is_loading"></Loading>
	</view>
</template>

<script>
	import CustomTime from '@/src/components/CustomTime/CustomTime.vue'
	import CustomSearchBar from '@/src/components/CustomSearchBar/CustomSearchBar.vue'
	import CustomHotSearch from '@/src/components/CustomHotSearch/CustomHotSearch.vue'
	import CustomView from '@/src/components/CustomView/CustomView.vue'
	import store from '@/src/store/index.js'

	import HttpRequest from '@/src/api/axios.js'
	import {
		request
	} from '@/src/api/uniRequest.js'
	import Loading from '@/src/components/CustomLoading/CustomLoading.vue'
	import {
		url_change_baseUrl,
		url_home_url
	} from '@/src/config/url.js'
	import {
		utils_parseHtml_to_hotSearch,
		utils_parseHtml_to_rankList100
	} from '@/src/utils/utils.js'
import { storage_get_hotSearch, storage_get_hotSearch_rank100, storage_get_html, storage_save_hotSearch, storage_save_hotSearch_rank100, storage_save_html } from '../../src/utils/storage'

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
				hotSearchWords: [],
				hotSearchWords_More: [], //更多热门搜索
				preText: '解析支持:',
				preColor: '#FFD700',
				subText: '优酷、爱奇艺、腾讯、芒果、乐视、搜狐、MP4、M3U8、FLV等等',
				subTextColor: '#FFD700',

				preText1: '调用方式:',
				preColor1: '#F0E68C',
				subText1: 'https://vip.bljiex.com/?v=视频名称或地址',
				subTextColor1: '#F0E68C',
				is_loading: false
			}
		},
		onLoad() {
			// debugger
			this.is_loading = true
			
			this.requestHotSearch()
		},
		methods: {
			clickHandle(e) {
				// debugger
				// console.log(e)
				// uni.navigateTo({
				// 	url: '/src/pages/searchResultsView/index?param=' + JSON.stringify(e),
				// 	fail(e) {
				// 		console.log(JSON.stringify(e))
				// 	},
				// })
				// uni.navigateTo({
				// 	// url: 'src/components/CustomWebView/CustomWebView',
				// 	// url: '@/src/components/CustomWebView/CustomWebView',
				// 	// url: '@src/components/CustomWebView/CustomWebView',
				// 	url: './../../src/components/CustomWebView/CustomWebView',
				// 	fail(err) {
				// 		// debugger
				// 		console.log(err)
				// 	}
				// })
				// debugger
				// let param = '平凡的世界'
				// uni.navigateTo({
				// 	url: '/pages/SearchResults/SearchResults?param=' + param,
				// 	fail(err) {
				// 		console.log("searchClick:navigateTo:fail:" + JSON.stringify(err))
				// 	}
				// })
				uni.showToast({
					title:'已切换搜索引擎到'+this.$store.state.base_url,
					icon:'success'
				})
				url_change_baseUrl()
			},
			searchClick(e) {
				// debugger
				if (e.value.length === 0) return
				// console.log('searchClick:' + JSON.stringify(e))
				let param = e.value
				if (e.value.includes('更多')) {
					param = this.hotSearchWords_More
				}
				// debugger
				uni.navigateTo({
					url: '/pages/SearchResults/SearchResults?param=' + param,
					fail(err) {
						console.log("searchClick:navigateTo:fail:" + JSON.stringify(err))
					}
				})
			},
			requestHotSearch() {
				// debugger
				this.hotSearchWords = storage_get_hotSearch()
				this.hotSearchWords_More = storage_get_hotSearch_rank100()
				
				
				var date = new Date();
				const day = date.getDate();
				
				if (day % 10 != 0) {
					if (this.hotSearchWords.length > 0 && this.hotSearchWords_More.length > 0) {
						this.is_loading = false
						return;
					}
				}
				
				// https://vip.bljiex.com/so.php
				// https://jx.qqwtt.com/so.php
				let that = this
				request(url_home_url()).then(res => {
					// debugger
					// that.$store.state.loading = false
					storage_save_html(res)
					that.parseALabel(res)
					that.parseHotKeyWords(res)
				})
			},
			parseALabel(html) {
				this.is_loading = false
				// 缓存热门搜索数据
				let data = utils_parseHtml_to_hotSearch(html)
				if (data.length > 2) {
					storage_save_hotSearch(data)
					this.hotSearchWords = data	
				}
			},
			parseHotKeyWords(html) {
				// 缓存热门搜索排行榜数据
				// debugger
				let data = utils_parseHtml_to_rankList100(html)
				if (data.length > 2) {
					storage_save_hotSearch_rank100(data)
					this.hotSearchWords_More = data
				}
			}
		}
	}
</script>

<style lang="scss">
	.page {
		margin: 20px;
	}
</style>