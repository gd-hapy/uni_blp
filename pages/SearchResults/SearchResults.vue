<template>
	<view class="searchResult-contain">
		<Loading v-if="is_loading"></Loading>
		<block v-if="searchResult_Rank">
			<block v-if="searchResult != undefined">
				<view class="searchResult_title">
					搜索排行榜-TOP100
				</view>
			</block>
			<view class="searchResult-list" v-for="(item, index) in searchResult" :key="index">
				<CustomTag style="background-color: transparent; line-height: 20px;" :text="item"
					@click="itemHandleClick(item)"></CustomTag>
			</view>
		</block>
		<block v-else>
			<block v-if="searchResult.info != undefined">
				<view class="searchResult_title">
					搜索到相关视频{{searchResult.info.length}}个，请点击访问
				</view>
			</block>
			<view class="searchResult-list" v-for="(item, index) in searchResult.info" :key="item.id+index">
				<CustomTag style="background-color: transparent; line-height: 20px;"
					:text="item.title + ' ' +'(' + item.from + ')'" @click="()=>itemHandleClick(item)"></CustomTag>
			</view>
		</block>
	</view>
</template>

<script>
	import CustomTag from '@/src/components/CustomHotSearch/CustomTag.vue'
	import HttpRequest from '@/src/api/axios.js'
	import Loading from '@/src/components/CustomLoading/CustomLoading.vue'
	import {
		request
	} from '@/src/api/uniRequest.js'
	import {
		url_searchResults_url
	} from '@/src/config/url'

	export default {
		components: {
			CustomTag,
			Loading
		},
		data() {
			return {
				searchResult: {},
				searchKeyWord: '', // 搜索词
				searchResult_Rank: false, // 搜索排行榜
				is_loading: false,
			};
		},
		onLoad(e) {
			// debugger
			// 搜索词搜索
			// this.$store.state.loading = true
			
			if (e.param !== undefined && e.param.includes(',')) {
				let hotSearchArr = e.param.split(',')
				if (hotSearchArr.length > 1) { // 搜索词搜索
					this.searchResult_Rank = true
					this.searchResult = hotSearchArr
				}
			} else { //热搜排行榜
				this.searchResult_Rank = false
				// console.log(JSON.stringify(this.__page__) + e)
				this.searchKeyWord = e.param || '龙珠'
				// this.searchKeyWord = '龙珠'
				// debugger
				// this.$store.state.loading = true
				this.is_loading = true
				// this.handleResults(this.searchResults)
				this.requestList()
			}
		},
		created() {
			// this.requestList()
			// this.$store.state.loading = true
		},
		methods: {
			requestList() {
				// HttpRequest.post('api.php?out=jsonp&wd='+ this.searchKeyWord).then(res => {
				// 	// console.log(res)
				// 	// debugger
				// 	this.handleResults(res)
				// })

				request(url_searchResults_url(this.searchKeyWord), 'POST').then(res => {
					this.handleResults(res)
				})
			},
			backAction() {
				uni.navigateBack()
			},
			handleResults(data) {
				// debugger
				// this.$store.state.loading = false
				if (data == undefined) return
				let dataStr = "{" + data.split('({')[1].split('})')[0] + "}"
				let result = JSON.parse(dataStr)
				console.log('searchResults:' + result)
				this.searchResult = result
				this.is_loading = false
			},
			itemHandleClick(e) {
				// debugger
				// console.log('itemHandleClick' + JSON.stringify(e))
				if (this.searchResult_Rank) {
					uni.navigateTo({
						url: '/pages/SearchResults/SearchResults?param=' + e,
						fail(err) {
							console.log("itemHandleClick:navigateTo:fail:" + JSON.stringify(err))
						}
					})
				} else {
					uni.navigateTo({
						url: '/pages/VideoPlayer/VideoPlayer?value=' + JSON.stringify(e),
						fail(err) {
							console.log("itemHandleClick:navigateTo:fail:" + JSON.stringify(err))
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.searchResult-contain {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-end;
		flex-wrap: wrap;
	}

	.searchResult_title {
		color: #A7E9C3;
		text-align: center;
		width: 100%;
		font-weight: bold;
		margin-top: 20px;
	}

	.searchResult-list {
		color: #90EE90;
		margin: 20px 30px 0px;
		border: 1px solid #90EE90;
		align-items: center;
		display: flex;
	}
</style>