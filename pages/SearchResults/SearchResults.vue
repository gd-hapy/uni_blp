<template>
	<view class="searchResult-contain">
		<Loading v-if="this.$store.state.loading"></Loading>
		<block v-if="searchResult_Rank">
			<block v-if="searchResult != undefined">
				<view class="searchResult_title">
					搜索排行榜-TOP100
				</view>
			</block>
			<view class="searchResult-list" v-for="(item, index) in searchResult" :key="index">
				<CustomTag style="background-color: transparent; line-height: 20px;"
					:text="item" @click="itemHandleClick(item)"></CustomTag>
			</view>
		</block>
		<block v-else>
		<block v-if="searchResult.info != undefined">
			<view class="searchResult_title">
				搜索到相关视频{{searchResult.info.length}}个，请点击访问
			</view>
		</block>
		<view class="searchResult-list" v-for="(item, index) in searchResult.info" :key="item.id">
			<CustomTag style="background-color: transparent; line-height: 20px;"
				:text="item.title + ' ' +'(' + item.from + ')'" @click="itemHandleClick(item)"></CustomTag>
		</view>
		</block>
	</view>
</template>

<script>
	import CustomTag from '../../src/components/CustomHotSearch/CustomTag.vue'
	import HttpRequest from '@/src/api/axios.js'
	import Loading from '../../src/components/CustomLoading/CustomLoading.vue'


	export default {
		components: {
			CustomTag,
			Loading
		},
		data() {
			return {
				searchResult_mock: '({"success":1,"code":0,"title":"龙珠","info":[{"flag":0,"flag_name":"kuaikan","from":"BL高清D","type":"日本动漫","id":"64161","title":"龙珠超：布罗利","img:":"null"},{"flag":0,"flag_name":"kuaikan","from":"BL高清D","type":"日本动漫","id":"64094","title":"七龙珠(日)","img:":"null"},{"flag":0,"flag_name":"kuaikan","from":"BL高清D","type":"日本动漫","id":"63884","title":"超龙珠英雄","img:":"null"},{"flag":0,"flag_name":"kuaikan","from":"BL高清D","type":"日本动漫","id":"63542","title":"龙珠Z：神与神","img:":"null"},{"flag":0,"flag_name":"kuaikan","from":"BL高清D","type":"日本动漫","id":"63541","title":"龙珠Z：复活的弗利萨","img:":"null"},{"flag":0,"flag_name":"kuaikan","from":"BL高清D","type":"日本动漫","id":"63010","title":"龙珠·改","img:":"null"},{"flag":0,"flag_name":"kuaikan","from":"BL高清D","type":"日本动漫","id":"63011","title":"龙珠剧场版：神龙传说","img:":"null"},{"flag":0,"flag_name":"kuaikan","from":"BL高清D","type":"日本动漫","id":"62931","title":"超龙珠英雄UGM","img:":"null"},{"flag":0,"flag_name":"kuaikan","from":"BL高清D","type":"日本动漫","id":"62631","title":"七龙珠(国)","img:":"null"},{"flag":0,"flag_name":"kuaikan","from":"BL高清D","type":"日本动漫","id":"62600","title":"龙珠Z（国语）","img:":"null"},{"flag":0,"flag_name":"kuaikan","from":"BL高清D","type":"日本动漫","id":"62601","title":"龙珠GT","img:":"null"},{"flag":0,"flag_name":"kuaikan","from":"BL高清D","type":"日本动漫","id":"62510","title":"龙珠改 魔人布欧篇","img:":"null"},{"flag":0,"flag_name":"kuaikan","from":"BL高清D","type":"日本动漫","id":"61260","title":"龙珠超","img:":"null"},{"flag":0,"flag_name":"kuaikan","from":"BL高清D","type":"剧情片","id":"55525","title":"异能机友之东京龙珠","img:":"null"},{"flag":0,"flag_name":"kuaikan","from":"BL高清D","type":"动作片","id":"34000","title":"新七龙珠","img:":"null"},{"flag":0,"flag_name":"kuaikan","from":"BL高清D","type":"国产剧","id":"27774","title":"魔界之龙珠","img:":"null"},{"flag":0,"flag_name":"kuaikan","from":"BL高清D","type":"动作片","id":"24548","title":"龙珠超：布罗利","img:":"null"},{"flag":0,"flag_name":"kuaikan","from":"BL高清D","type":"国产剧","id":"33","title":"龙珠传奇之无间道","img:":"null"},{"flag":1,"flag_name":"bfzym3u8","from":"BL高清B","type":"动漫","id":"10352","title":"龙珠Z：神与神","img:":"null"},{"flag":1,"flag_name":"bfzym3u8","from":"BL高清B","type":"动作片","id":"10329","title":"龙珠超：布罗利","img:":"null"},{"flag":1,"flag_name":"bfzym3u8","from":"BL高清B","type":"动漫","id":"8954","title":"超龙珠英雄","img:":"null"},{"flag":1,"flag_name":"bfzym3u8","from":"BL高清B","type":"动漫","id":"7565","title":"龙珠：巴达克之章","img:":"null"},{"flag":1,"flag_name":"bfzym3u8","from":"BL高清B","type":"动漫","id":"7561","title":"龙珠Z：复活的弗利萨","img:":"null"},{"flag":1,"flag_name":"bfzym3u8","from":"BL高清B","type":"动漫","id":"7381","title":"超龙珠英雄BM","img:":"null"},{"flag":1,"flag_name":"bfzym3u8","from":"BL高清B","type":"动漫","id":"4755","title":"龙珠超：超级人造人","img:":"null"},{"flag":1,"flag_name":"bfzym3u8","from":"BL高清B","type":"剧情片","id":"3822","title":"异能机友之东京龙珠","img:":"null"},{"flag":1,"flag_name":"bfzym3u8","from":"BL高清B","type":"动漫","id":"2842","title":"龙珠Z剧场版17：龙拳爆发","img:":"null"},{"flag":1,"flag_name":"bfzym3u8","from":"BL高清B","type":"动漫","id":"2662","title":"龙珠Z剧场版08：超级塞亚人","img:":"null"},{"flag":1,"flag_name":"bfzym3u8","from":"BL高清B","type":"动漫","id":"2658","title":"龙珠剧场版：神龙传说","img:":"null"},{"flag":1,"flag_name":"bfzym3u8","from":"BL高清B","type":"动漫","id":"2532","title":"龙珠Z剧场版15：生化战士","img:":"null"},{"flag":1,"flag_name":"bfzym3u8","from":"BL高清B","type":"动漫","id":"2377","title":"龙珠Z剧场版16：冥界超激战","img:":"null"},{"flag":1,"flag_name":"bfzym3u8","from":"BL高清B","type":"动漫","id":"2300","title":"龙珠Z剧场版5：最强对最强","img:":"null"},{"flag":1,"flag_name":"bfzym3u8","from":"BL高清B","type":"动漫","id":"2283","title":"龙珠剧场版：摩诃不可思议大冒险","img:":"null"},{"flag":1,"flag_name":"bfzym3u8","from":"BL高清B","type":"动漫","id":"2198","title":"超龙珠英雄：宇宙争乱篇","img:":"null"},{"flag":1,"flag_name":"bfzym3u8","from":"BL高清B","type":"动漫","id":"2179","title":"龙珠Z剧场版3：地球超级大决战","img:":"null"},{"flag":1,"flag_name":"bfzym3u8","from":"BL高清B","type":"动漫","id":"2163","title":"龙珠剧场版：迈向最强之道","img:":"null"},{"flag":1,"flag_name":"bfzym3u8","from":"BL高清B","type":"动漫","id":"2115","title":"龙珠Z剧场版13：银河最强战士","img:":"null"},{"flag":1,"flag_name":"bfzym3u8","from":"BL高清B","type":"动漫","id":"2044","title":"龙珠Z剧场版11：超激决战人造人","img:":"null"},{"flag":2,"flag_name":"ffm3u8","from":"BL高清F","type":"科幻片","id":"55976","title":"七龙珠：进化","img:":"null"},{"flag":2,"flag_name":"ffm3u8","from":"BL高清F","type":"动漫","id":"55888","title":"龙珠Z：悟空与贝吉塔的合体","img:":"null"},{"flag":2,"flag_name":"ffm3u8","from":"BL高清F","type":"动漫","id":"37879","title":"超龙珠英雄UGM","img:":"null"},{"flag":2,"flag_name":"ffm3u8","from":"BL高清F","type":"动漫","id":"53452","title":"龙珠Z特别篇：一个人的最终决战 挑战弗利萨的Z战士 孙悟空之父","img:":"null"},{"flag":2,"flag_name":"ffm3u8","from":"BL高清F","type":"动漫","id":"52326","title":"龙珠Z剧场版：把我的悟饭还来","img:":"null"},{"flag":2,"flag_name":"ffm3u8","from":"BL高清F","type":"动漫","id":"52325","title":"龙珠Z剧场版2：世界最强的高手","img:":"null"},{"flag":2,"flag_name":"ffm3u8","from":"BL高清F","type":"动漫","id":"31490","title":"龙珠Z特别篇：绝望的反抗!! 仅存的超战士悟饭和特兰克斯","img:":"null"},{"flag":2,"flag_name":"ffm3u8","from":"BL高清F","type":"动漫","id":"27408","title":"龙珠改 魔人布欧篇","img:":"null"},{"flag":2,"flag_name":"ffm3u8","from":"BL高清F","type":"动漫","id":"27112","title":"龙珠Z剧场版08：超级塞亚人","img:":"null"},{"flag":2,"flag_name":"ffm3u8","from":"BL高清F","type":"动漫","id":"27111","title":"龙珠超：超级人造人","img:":"null"},{"flag":2,"flag_name":"ffm3u8","from":"BL高清F","type":"动漫","id":"27110","title":"龙珠超","img:":"null"},{"flag":2,"flag_name":"ffm3u8","from":"BL高清F","type":"动漫","id":"27109","title":"七龙珠","img:":"null"},{"flag":2,"flag_name":"ffm3u8","from":"BL高清F","type":"动漫","id":"27108","title":"龙珠·改","img:":"null"},{"flag":2,"flag_name":"ffm3u8","from":"BL高清F","type":"动漫","id":"27082","title":"龙珠Z","img:":"null"},{"flag":2,"flag_name":"ffm3u8","from":"BL高清F","type":"动漫","id":"27081","title":"龙珠GT","img:":"null"},{"flag":2,"flag_name":"ffm3u8","from":"BL高清F","type":"动漫","id":"27080","title":"龙珠剧场版：神龙传说","img:":"null"},{"flag":2,"flag_name":"ffm3u8","from":"BL高清F","type":"动漫","id":"27079","title":"龙珠剧场版：魔神城内的睡美人","img:":"null"},{"flag":2,"flag_name":"ffm3u8","from":"BL高清F","type":"动漫","id":"27078","title":"龙珠剧场版：摩诃不可思议大冒险","img:":"null"},{"flag":2,"flag_name":"ffm3u8","from":"BL高清F","type":"动漫","id":"27077","title":"龙珠剧场版：迈向最强之道","img:":"null"},{"flag":2,"flag_name":"ffm3u8","from":"BL高清F","type":"动漫","id":"27076","title":"龙珠Z剧场版5：最强对最强","img:":"null"},{"flag":3,"flag_name":"xlm3u8","from":"BL高清X","type":"动画片","id":"14292","title":"龙珠Z：神与神","img:":"null"},{"flag":3,"flag_name":"xlm3u8","from":"BL高清X","type":"动画片","id":"14139","title":"龙珠超 超级英雄","img:":"null"},{"flag":3,"flag_name":"xlm3u8","from":"BL高清X","type":"动漫","id":"13521","title":"七龙珠","img:":"null"},{"flag":3,"flag_name":"xlm3u8","from":"BL高清X","type":"动画片","id":"13062","title":"龙珠Z：复活的弗利萨","img:":"null"},{"flag":3,"flag_name":"xlm3u8","from":"BL高清X","type":"国产剧","id":"8589","title":"龙珠传奇之无间道","img:":"null"},{"flag":3,"flag_name":"xlm3u8","from":"BL高清X","type":"动画片","id":"7574","title":"龙珠超：布罗利","img:":"null"},{"flag":3,"flag_name":"xlm3u8","from":"BL高清X","type":"动画片","id":"7573","title":"龙珠超：布罗利（国语版）","img:":"null"},{"flag":3,"flag_name":"xlm3u8","from":"BL高清X","type":"动漫","id":"6988","title":"龙珠GT","img:":"null"},{"flag":3,"flag_name":"xlm3u8","from":"BL高清X","type":"动漫","id":"6987","title":"超龙珠英雄","img:":"null"},{"flag":3,"flag_name":"xlm3u8","from":"BL高清X","type":"动漫","id":"6986","title":"龙珠·改","img:":"null"},{"flag":3,"flag_name":"xlm3u8","from":"BL高清X","type":"动漫","id":"6964","title":"龙珠改 魔人布欧篇","img:":"null"},{"flag":3,"flag_name":"xlm3u8","from":"BL高清X","type":"动画片","id":"6657","title":"龙珠超：超级英雄","img:":"null"},{"flag":3,"flag_name":"xlm3u8","from":"BL高清X","type":"动作片","id":"1832","title":"龙珠超：超级人造人","img:":"null"},{"flag":3,"flag_name":"xlm3u8","from":"BL高清X","type":"动漫","id":"1765","title":"龙珠超","img:":"null"},{"flag":3,"flag_name":"xlm3u8","from":"BL高清X","type":"国产剧","id":"518","title":"魔界之龙珠","img:":"null"},{"flag":4,"flag_name":"lzm3u8","from":"BL高清L","type":"动漫","id":"10922","title":"超龙珠英雄UGM","img:":"null"},{"flag":4,"flag_name":"lzm3u8","from":"BL高清L","type":"动漫","id":"55852","title":"七龙珠","img:":"null"},{"flag":4,"flag_name":"lzm3u8","from":"BL高清L","type":"动漫","id":"10052","title":"龙珠超 超级英雄","img:":"null"},{"flag":4,"flag_name":"lzm3u8","from":"BL高清L","type":"动作片","id":"40840","title":"新七龙珠","img:":"null"},{"flag":4,"flag_name":"lzm3u8","from":"BL高清L","type":"喜剧片","id":"39247","title":"异能机友之东京龙珠","img:":"null"},{"flag":4,"flag_name":"lzm3u8","from":"BL高清L","type":"动漫","id":"23329","title":"超龙珠英雄BM","img:":"null"},{"flag":4,"flag_name":"lzm3u8","from":"BL高清L","type":"动漫","id":"23328","title":"超龙珠英雄UM","img:":"null"},{"flag":4,"flag_name":"lzm3u8","from":"BL高清L","type":"国产剧","id":"20997","title":"龙珠传奇之无间道","img:":"null"},{"flag":4,"flag_name":"lzm3u8","from":"BL高清L","type":"动漫","id":"14108","title":"龙珠超","img:":"null"},{"flag":4,"flag_name":"lzm3u8","from":"BL高清L","type":"动漫","id":"14107","title":"龙珠改","img:":"null"},{"flag":4,"flag_name":"lzm3u8","from":"BL高清L","type":"动漫","id":"14106","title":"龙珠改魔人布欧篇","img:":"null"},{"flag":4,"flag_name":"lzm3u8","from":"BL高清L","type":"动漫","id":"5473","title":"龙珠超：布罗利","img:":"null"},{"flag":4,"flag_name":"lzm3u8","from":"BL高清L","type":"动漫","id":"2067","title":"龙珠GT","img:":"null"},{"flag":4,"flag_name":"lzm3u8","from":"BL高清L","type":"动漫","id":"2064","title":"龙珠Z","img:":"null"},{"flag":4,"flag_name":"lzm3u8","from":"BL高清L","type":"动漫","id":"2061","title":"龙珠TV版","img:":"null"},{"flag":6,"flag_name":"hnm3u8","from":"Hn高清","type":"国产剧","id":"76974","title":"魔界之龙珠","img:":"null"},{"flag":6,"flag_name":"hnm3u8","from":"Hn高清","type":"动漫","id":"75757","title":"龙珠超","img:":"null"},{"flag":6,"flag_name":"hnm3u8","from":"Hn高清","type":"动作片","id":"75687","title":"龙珠超：超级人造人","img:":"null"},{"flag":6,"flag_name":"hnm3u8","from":"Hn高清","type":"动漫电影","id":"69978","title":"龙珠超：超级英雄","img:":"null"},{"flag":6,"flag_name":"hnm3u8","from":"Hn高清","type":"动漫","id":"69463","title":"龙珠改 魔人布欧篇","img:":"null"},{"flag":6,"flag_name":"hnm3u8","from":"Hn高清","type":"动漫","id":"69440","title":"龙珠GT","img:":"null"},{"flag":6,"flag_name":"hnm3u8","from":"Hn高清","type":"动漫","id":"69439","title":"龙珠·改","img:":"null"},{"flag":6,"flag_name":"hnm3u8","from":"Hn高清","type":"动漫","id":"67559","title":"超龙珠英雄","img:":"null"},{"flag":6,"flag_name":"hnm3u8","from":"Hn高清","type":"动漫电影","id":"51989","title":"龙珠超：布罗利","img:":"null"},{"flag":6,"flag_name":"hnm3u8","from":"Hn高清","type":"动漫电影","id":"68594","title":"龙珠超：布罗利（国语版）","img:":"null"},{"flag":6,"flag_name":"hnm3u8","from":"Hn高清","type":"国产剧","id":"67256","title":"龙珠传奇之无间道","img:":"null"},{"flag":6,"flag_name":"hnm3u8","from":"Hn高清","type":"动漫","id":"41911","title":"七龙珠","img:":"null"},{"flag":6,"flag_name":"hnm3u8","from":"Hn高清","type":"动漫电影","id":"45271","title":"龙珠超 超级英雄","img:":"null"},{"flag":6,"flag_name":"hnm3u8","from":"Hn高清","type":"动漫电影","id":"43939","title":"龙珠Z：神与神","img:":"null"},{"flag":6,"flag_name":"hnm3u8","from":"Hn高清","type":"动漫电影","id":"51561","title":"龙珠Z：复活的弗利萨","img:":"null"}]})',
				searchResult: {},
				searchKeyWord: '', // 搜索词
				searchResult_Rank: false, // 搜索排行榜
				// 	searchResults: 'jQuery18206599268283237982_1695378993989({"success":1,"code":0,"title":"我的人间烟火","info":[{"flag":0,"flag_name":"BL高清D","from":"BL高清D","type":"国产剧","id":"41871","title":"我的人间烟火","img:":"null"},{"flag":1,"flag_name":"BL高清B","from":"BL高清B","type":"国产剧","id":"730","title":"我的人间烟火","img:":"null"},{"flag":2,"flag_name":"BL高清F","from":"BL高清F","type":"国产剧","id":"56306","title":"我的人间烟火","img:":"null"},{"flag":3,"flag_name":"BL高清X","from":"BL高清X","type":"国产剧","id":"575","title":"我的人间烟火","img:":"null"},{"flag":4,"flag_name":"BL高清L","from":"BL高清L","type":"国产剧","id":"64072","title":"我的人间烟火","img:":"null"},{"flag":6,"flag_name":"Hn高清","from":"Hn高清","type":"国产剧","id":"76412","title":"我的人间烟火","img:":"null"}]});'
			};
		},
		onLoad(e) {
			// debugger
			if (e.param !== undefined && e.param.includes(',')) {
				let hotSearchArr = e.param.split(',')
				if(hotSearchArr.length > 1) {// 搜索词搜索
					this.searchResult_Rank = true
					this.searchResult = hotSearchArr
				}
			} else {//搜索排行榜
				this.searchResult_Rank = false
				// console.log(JSON.stringify(this.__page__) + e)
				this.searchKeyWord = e.param || '龙珠'
				// this.searchKeyWord = '龙珠'
				// debugger
				this.$store.state.loading = true
				
				// this.handleResults(this.searchResults)
				this.requestList()
			}
		},
		created() {
			// this.requestList()
		},
		methods: {
			requestList() {
				HttpRequest.post('api.php?out=jsonp&wd='+ this.searchKeyWord).then(res => {
					// console.log(res)
					// debugger
					this.handleResults(res)
				})
				// this.handleResults(this.searchResult_mock)
			},
			backAction() {
				uni.navigateBack()
			},
			handleResults(data) {
				// debugger
				this.$store.state.loading = false
				if (data == undefined) return
				let dataStr = "{" + data.split('({')[1].split('})')[0] + "}"
				let result = JSON.parse(dataStr)
				this.searchResult = result
			},
			itemHandleClick(e) {
				// debugger
				console.log('itemHandleClick' + JSON.stringify(e))
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