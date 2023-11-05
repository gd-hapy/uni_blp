<template>
	<view class="video-contain" v-if="JSON.stringify(current_video_list_info)!=='{}'">
		<!-- <Loading v-if="is_loading"></Loading> -->

		<uni-nav-bar left-icon="arrowleft" color="white"
			sta status-bar="true" background-color="#000000" @clickLeft="back" @clickRight="showMenu" :border="false" />
		
		<view v-if="this.current_video_list_info.info[0].video.length > 1"
			style="background-color: black; display: flex;flex-direction: row-reverse;color: white;padding-right: 20px;height: 44px;align-items: center;"
			@click="showMenu">选集</view>
		
		<video id="myVideo" :class="this.current_video_list_info.info[0].video.length > 1 ? 'video-player-list' : 'video-player-normal'" :src="current_player_url.parseUrl" autoplay controls enable-play-gesture :title="current_video_info.title" @error="videoErrorHandle" show-loading
			@loadedmetadata="loadedmetadata" play-strategy=2 :poster="poster_image_url" @fullscreenclick="videoFullscreen" @longpress="longPress" @touchend="touchend"></video>
		
		<u-popup v-if="this.current_video_list_info.info[0].video.length > 0" border-radius="10" v-model="show"
			mode="bottom" length="60%" :closeable="true" close-icon-pos="top-right">
			<view class="content" style="margin-top:-10px; display: flex;flex-direction: row;flex-wrap: wrap;background-color: #0a2e38;">
				<block v-for="(item, index) in current_video_list_info.info[0].video" :key="index">
					<view
						style="margin:15px;width: 90px;height: 60rpx;display: flex;border: #2693FF 1px solid;border-radius: 5px;"
						@click="switchCurrentPlaying(item, index)">
						<image v-if="item.includes(current_player_url.originUrl)" src="@/static/playing.png" mode="aspectFit"
							style=" width: 30rpx;height: 30rpx;margin-top: 20rpx;margin-left: 5px;"></image>
						<text
							style="margin-left: 15px;font-size: 15px;color: white;align-self: center; position: absolute; display:flex;justify-content: center;width: 60px;">{{item.split('$')[0]}}</text>
					</view>
				</block>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import HttpRequest from '@/src/api/axios.js'
	import {
		request
	} from '@/src/api/uniRequest.js'
	import CustomTag from '@/src/components/CustomHotSearch/CustomTag.vue'
	import Loading from '@/src/components/CustomLoading/CustomLoading.vue'
	import {
		url_videoPlayer_url, url_video_parse_url, url_video_parse_url_back
	} from '@/src/config/url.js'

	export default {
		components: {
			CustomTag,
			Loading
		},
		data() {
			return {
				current_player_url: {
					originUrl: '',// 原始url
					parseUrl: ''//解析后的url
				}, 
				poster_image_url: '', //当前视频封面
				current_video_info: '', //当前视频信息
				current_video_list_info: {}, //当前视频列表信息

				show: false, //是否展示播放列表
				containerHeight: 0,
				leftHeight: 44,
				is_loading: false,
				
				param: [],//分享使用
				retryCount: 0, // 解析失败，重试，最多两次
			}
		},
		watch: {
			show(n) {
				// console.log(n);
			}
		},
		onLoad(e) {
			debugger
			this.retryCount = 1
			this.param = e.value
			this.is_loading = true
			if (JSON.stringify(e) === "{}") {
				let json =
					'{"flag":0,"flag_name":"kuaikan","from":"BL高清D","type":"日本动漫","id":"64161","title":"龙珠超：布罗利","img:":"null"}'
				this.current_video_info = JSON.parse(json)
				this.requestList(true)
			} else {
				// debugger
				let systemInfo = wx.getSystemInfoSync()
				this.containerHeight = systemInfo.statusBarHeight + 44 + 'px'
				if (JSON.stringify(e) === '{}') return
				// this.$store.state.loading = true

				this.current_video_info = JSON.parse(e.value) || ''
				// console.log(e.value)
				this.requestList(false)
			}
		},
		methods: {
			videoErrorHandle(e) {
				console.log('视频错误信息:' + e.target.errMsg)
			},
			loadedmetadata() {
				// debugger
				this.$store.state.loading = false
			},
			
			onReady(){
				// debugger
			    this.videoContext = uni.createVideoContext('myVideo')
			},
			
			longPress() {
				console.log("longPress------")
				this.videoContext.playbackRate(Number(2))
			},
			touchend() {
				this.videoContext.playbackRate(Number(1))
			},
			
			requestList(local = false) {
				
				if (local === false) {
					let that = this
					let url = url_videoPlayer_url(this.current_video_info.flag, this.current_video_info.id)
					request(url).then(res => {
						// debugger
						let dataStr = "{" + res.split('({')[1].split('})')[0] + "}"
						// let strArr = data.split('(')[1].split(')')[0]
						let result = JSON.parse(dataStr)
						debugger
						that.poster_image_url = result.pic || ''
						that.current_video_list_info = result
						that.handleCurrent_player_url(this.current_video_list_info.url)
						// debugger
						console.log('VideoPlayer:' + result)
						// this.$store.state.loading = false
						this.is_loading = false
					})
				} else {
					// debugger
					let dataStr =
						'{"success":1,"code":200,"url":"https:\/\/vip.kuaikan-cdn2.com\/20230524\/IRYhvhUl\/index.m3u8","pic":"https:\/\/img.kuaikanzy.net\/upload\/vod\/20230315-10\/6f10df39caf9f9c07a35f8d9d12afb9c.jpg","title":"七龙珠(日)","part":1,"type":"kuaikan","info":[{"flag":"kuaikan","flag_name":"BL高清D","part":152,"video":["1$https:\/\/vip.kuaikan-cdn2.com\/20230524\/IRYhvhUl\/index.m3u8$","2$https:\/\/vip.kuaikan-cdn2.com\/20230524\/TUWPpKPb\/index.m3u8$","3$https:\/\/vip.kuaikan-cdn2.com\/20230524\/x7I0UZKo\/index.m3u8$","4$https:\/\/vip.kuaikan-cdn2.com\/20230524\/v5MNBXjE\/index.m3u8$","5$https:\/\/vip.kuaikan-cdn2.com\/20230524\/k7UWHM6T\/index.m3u8$","6$https:\/\/vip.kuaikan-cdn2.com\/20230524\/6O2zzIvs\/index.m3u8$","7$https:\/\/vip.kuaikan-cdn2.com\/20230524\/XajnRBeu\/index.m3u8$","8$https:\/\/vip.kuaikan-cdn2.com\/20230524\/pSmRsrJ6\/index.m3u8$","9$https:\/\/vip.kuaikan-cdn2.com\/20230524\/8L6exWzO\/index.m3u8$","10$https:\/\/vip.kuaikan-cdn2.com\/20230524\/KMSGnHdV\/index.m3u8$","11$https:\/\/vip.kuaikan-cdn2.com\/20230524\/1P0XySJD\/index.m3u8$","12$https:\/\/vip.kuaikan-cdn2.com\/20230524\/3jzO4S9H\/index.m3u8$","13$https:\/\/vip.kuaikan-cdn2.com\/20230524\/clxm8cVA\/index.m3u8$","14$https:\/\/vip.kuaikan-cdn2.com\/20230524\/ZG8wTZlm\/index.m3u8$","15$https:\/\/vip.kuaikan-cdn2.com\/20230524\/SmY8v1Bz\/index.m3u8$","16$https:\/\/vip.kuaikan-cdn2.com\/20230524\/tKY6g7eR\/index.m3u8$","17$https:\/\/vip.kuaikan-cdn2.com\/20230524\/fWnm75zv\/index.m3u8$","18$https:\/\/vip.kuaikan-cdn2.com\/20230524\/K65gCbYg\/index.m3u8$","19$https:\/\/vip.kuaikan-cdn2.com\/20230524\/9b5KPlJR\/index.m3u8$","20$https:\/\/vip.kuaikan-cdn2.com\/20230524\/viCSCt33\/index.m3u8$","21$https:\/\/vip.kuaikan-cdn2.com\/20230524\/fOHhOYND\/index.m3u8$","22$https:\/\/vip.kuaikan-cdn2.com\/20230524\/nGhMHUil\/index.m3u8$","23$https:\/\/vip.kuaikan-cdn2.com\/20230524\/Nf0b0mhT\/index.m3u8$","24$https:\/\/vip.kuaikan-cdn2.com\/20230524\/UX2knTIn\/index.m3u8$","25$https:\/\/vip.kuaikan-cdn2.com\/20230524\/fyuoOoGZ\/index.m3u8$","26$https:\/\/vip.kuaikan-cdn2.com\/20230524\/PIkr6E7a\/index.m3u8$","27$https:\/\/vip.kuaikan-cdn2.com\/20230524\/enJdPE4Y\/index.m3u8$","28$https:\/\/vip.kuaikan-cdn2.com\/20230524\/nhuO7vhq\/index.m3u8$","29$https:\/\/vip.kuaikan-cdn2.com\/20230524\/7rlR9PzG\/index.m3u8$","30$https:\/\/vip.kuaikan-cdn2.com\/20230524\/IebtJ8SV\/index.m3u8$","31$https:\/\/vip.kuaikan-cdn2.com\/20230524\/U9ggCtts\/index.m3u8$","32$https:\/\/vip.kuaikan-cdn2.com\/20230524\/ybxK8o13\/index.m3u8$","33$https:\/\/vip.kuaikan-cdn2.com\/20230524\/ITbqrkpT\/index.m3u8$","34$https:\/\/vip.kuaikan-cdn2.com\/20230524\/UqOeqxSS\/index.m3u8$","35$https:\/\/vip.kuaikan-cdn2.com\/20230524\/bvY79Tpn\/index.m3u8$","36$https:\/\/vip.kuaikan-cdn2.com\/20230524\/ytuJTadf\/index.m3u8$","37$https:\/\/vip.kuaikan-cdn2.com\/20230524\/tQQY69wU\/index.m3u8$","38$https:\/\/vip.kuaikan-cdn2.com\/20230524\/U2Z3FFOc\/index.m3u8$","39$https:\/\/vip.kuaikan-cdn2.com\/20230524\/6dZWyLE6\/index.m3u8$","40$https:\/\/vip.kuaikan-cdn2.com\/20230524\/BJGEKPvO\/index.m3u8$","41$https:\/\/vip.kuaikan-cdn2.com\/20230524\/vYSjw8iP\/index.m3u8$","42$https:\/\/vip.kuaikan-cdn2.com\/20230524\/rUWi99C3\/index.m3u8$","43$https:\/\/vip.kuaikan-cdn2.com\/20230524\/HIN5OmKS\/index.m3u8$","44$https:\/\/vip.kuaikan-cdn2.com\/20230524\/ltSqnFSZ\/index.m3u8$","45$https:\/\/vip.kuaikan-cdn2.com\/20230524\/blPHnTz1\/index.m3u8$","46$https:\/\/vip.kuaikan-cdn2.com\/20230524\/h0veaqrj\/index.m3u8$","47$https:\/\/vip.kuaikan-cdn2.com\/20230524\/4R3o5iOv\/index.m3u8$","48$https:\/\/vip.kuaikan-cdn2.com\/20230524\/jFe3nNa3\/index.m3u8$","49$https:\/\/vip.kuaikan-cdn2.com\/20230524\/PfYmR0IT\/index.m3u8$","50$https:\/\/vip.kuaikan-cdn2.com\/20230524\/3GhmHW0q\/index.m3u8$","51$https:\/\/vip.kuaikan-cdn2.com\/20230524\/JxJe4KZY\/index.m3u8$","52$https:\/\/vip.kuaikan-cdn2.com\/20230524\/4RACwhm6\/index.m3u8$","53$https:\/\/vip.kuaikan-cdn2.com\/20230524\/MamNos1S\/index.m3u8$","54$https:\/\/vip.kuaikan-cdn2.com\/20230524\/88aOwQzl\/index.m3u8$","55$https:\/\/vip.kuaikan-cdn2.com\/20230524\/v0Tb4K6O\/index.m3u8$","56$https:\/\/vip.kuaikan-cdn2.com\/20230524\/h53bFjwE\/index.m3u8$","57$https:\/\/vip.kuaikan-cdn2.com\/20230524\/BCL1QBlf\/index.m3u8$","58$https:\/\/vip.kuaikan-cdn2.com\/20230524\/7SKRprQt\/index.m3u8$","59$https:\/\/vip.kuaikan-cdn2.com\/20230524\/Vt9QsMl2\/index.m3u8$","60$https:\/\/vip.kuaikan-cdn2.com\/20230524\/yYDKBX1K\/index.m3u8$","61$https:\/\/vip.kuaikan-cdn2.com\/20230524\/A9LYj9uT\/index.m3u8$","62$https:\/\/vip.kuaikan-cdn2.com\/20230524\/fsCaMpBB\/index.m3u8$","63$https:\/\/vip.kuaikan-cdn2.com\/20230524\/I3nZ0FKi\/index.m3u8$","64$https:\/\/vip.kuaikan-cdn2.com\/20230524\/XXsMxAzc\/index.m3u8$","65$https:\/\/vip.kuaikan-cdn2.com\/20230524\/bbePfN8Y\/index.m3u8$","66$https:\/\/vip.kuaikan-cdn2.com\/20230524\/LN9PsO3s\/index.m3u8$","67$https:\/\/vip.kuaikan-cdn2.com\/20230524\/XnwFKFQP\/index.m3u8$","68$https:\/\/vip.kuaikan-cdn2.com\/20230524\/ZTrendPW\/index.m3u8$","69$https:\/\/vip.kuaikan-cdn2.com\/20230524\/oCdiJjfi\/index.m3u8$","70$https:\/\/vip.kuaikan-cdn2.com\/20230524\/uPlunX3R\/index.m3u8$","71$https:\/\/vip.kuaikan-cdn2.com\/20230524\/emazruW3\/index.m3u8$","72$https:\/\/vip.kuaikan-cdn2.com\/20230524\/DtbALDnb\/index.m3u8$","73$https:\/\/vip.kuaikan-cdn2.com\/20230524\/sT2yYs3j\/index.m3u8$","74$https:\/\/vip.kuaikan-cdn2.com\/20230524\/D2by6wST\/index.m3u8$","75$https:\/\/vip.kuaikan-cdn2.com\/20230524\/WgFFk6cL\/index.m3u8$","76$https:\/\/vip.kuaikan-cdn2.com\/20230524\/IfwOn2fC\/index.m3u8$","77$https:\/\/vip.kuaikan-cdn2.com\/20230524\/YCIq25sO\/index.m3u8$","78$https:\/\/vip.kuaikan-cdn2.com\/20230524\/oIf0teOd\/index.m3u8$","79$https:\/\/vip.kuaikan-cdn2.com\/20230524\/FgpnomVn\/index.m3u8$","80$https:\/\/vip.kuaikan-cdn2.com\/20230524\/WWoKfwoO\/index.m3u8$","81$https:\/\/vip.kuaikan-cdn2.com\/20230524\/G7hRgURS\/index.m3u8$","82$https:\/\/vip.kuaikan-cdn2.com\/20230524\/VMy0bFg5\/index.m3u8$","83$https:\/\/vip.kuaikan-cdn2.com\/20230524\/FEUiGy7i\/index.m3u8$","84$https:\/\/vip.kuaikan-cdn2.com\/20230524\/PNkmMk23\/index.m3u8$","85$https:\/\/vip.kuaikan-cdn2.com\/20230524\/xcvnlUpN\/index.m3u8$","86$https:\/\/vip.kuaikan-cdn2.com\/20230524\/vgG2F0kE\/index.m3u8$","87$https:\/\/vip.kuaikan-cdn2.com\/20230524\/ot8VqZAy\/index.m3u8$","88$https:\/\/vip.kuaikan-cdn2.com\/20230524\/XzgMHqKk\/index.m3u8$","89$https:\/\/vip.kuaikan-cdn2.com\/20230524\/d0YOVGwR\/index.m3u8$","90$https:\/\/vip.kuaikan-cdn2.com\/20230524\/zHwzmAJZ\/index.m3u8$","91$https:\/\/vip.kuaikan-cdn2.com\/20230524\/exFb2d6w\/index.m3u8$","92$https:\/\/vip.kuaikan-cdn2.com\/20230524\/6ifs3DQm\/index.m3u8$","93$https:\/\/vip.kuaikan-cdn2.com\/20230524\/Jd8vjGX6\/index.m3u8$","94$https:\/\/vip.kuaikan-cdn2.com\/20230524\/KkOfoAer\/index.m3u8$","95$https:\/\/vip.kuaikan-cdn2.com\/20230524\/rP54dAD8\/index.m3u8$","96$https:\/\/vip.kuaikan-cdn2.com\/20230524\/MCiokRN0\/index.m3u8$","97$https:\/\/vip.kuaikan-cdn2.com\/20230524\/au7gkabZ\/index.m3u8$","98$https:\/\/vip.kuaikan-cdn2.com\/20230524\/NdEACHDE\/index.m3u8$","99$https:\/\/vip.kuaikan-cdn2.com\/20230524\/V7UAzSXS\/index.m3u8$","100$https:\/\/vip.kuaikan-cdn2.com\/20230524\/C8LhssC9\/index.m3u8$","101$https:\/\/vip.kuaikan-cdn2.com\/20230524\/2zT5ZaHT\/index.m3u8$","102$https:\/\/vip.kuaikan-cdn2.com\/20230524\/rflx5bNH\/index.m3u8$","103$https:\/\/vip.kuaikan-cdn2.com\/20230524\/DltTxypZ\/index.m3u8$","104$https:\/\/vip.kuaikan-cdn2.com\/20230524\/mJdRgjwY\/index.m3u8$","105$https:\/\/vip.kuaikan-cdn2.com\/20230524\/OJaATceL\/index.m3u8$","106$https:\/\/vip.kuaikan-cdn2.com\/20230524\/icT3sHyp\/index.m3u8$","107$https:\/\/vip.kuaikan-cdn2.com\/20230524\/bxwWj2Em\/index.m3u8$","108$https:\/\/vip.kuaikan-cdn2.com\/20230524\/55ZrHLax\/index.m3u8$","109$https:\/\/vip.kuaikan-cdn2.com\/20230524\/HK6IFzIC\/index.m3u8$","110$https:\/\/vip.kuaikan-cdn2.com\/20230524\/1n9RSNrv\/index.m3u8$","111$https:\/\/vip.kuaikan-cdn2.com\/20230524\/VIHtEAgy\/index.m3u8$","112$https:\/\/vip.kuaikan-cdn2.com\/20230524\/U11piqw1\/index.m3u8$","113$https:\/\/vip.kuaikan-cdn2.com\/20230524\/mzrdRswn\/index.m3u8$","114$https:\/\/vip.kuaikan-cdn2.com\/20230524\/5fKDcEZR\/index.m3u8$","115$https:\/\/vip.kuaikan-cdn2.com\/20230524\/fF50TE0H\/index.m3u8$","116$https:\/\/vip.kuaikan-cdn2.com\/20230524\/VkcYO4vs\/index.m3u8$","117$https:\/\/vip.kuaikan-cdn2.com\/20230524\/c0GDN8Q9\/index.m3u8$","118$https:\/\/vip.kuaikan-cdn2.com\/20230524\/l8hOPiDB\/index.m3u8$","119$https:\/\/vip.kuaikan-cdn2.com\/20230524\/pBOYlJLv\/index.m3u8$","120$https:\/\/vip.kuaikan-cdn2.com\/20230524\/S1tstl3L\/index.m3u8$","121$https:\/\/vip.kuaikan-cdn2.com\/20230524\/UPtYZgEG\/index.m3u8$","122$https:\/\/vip.kuaikan-cdn2.com\/20230524\/43sm45UA\/index.m3u8$","123$https:\/\/vip.kuaikan-cdn2.com\/20230524\/2hInrvOv\/index.m3u8$","124$https:\/\/vip.kuaikan-cdn2.com\/20230524\/XxOYG6Vl\/index.m3u8$","125$https:\/\/vip.kuaikan-cdn2.com\/20230524\/PtHvo8ZK\/index.m3u8$","126$https:\/\/vip.kuaikan-cdn2.com\/20230524\/NHyJ4yIF\/index.m3u8$","127$https:\/\/vip.kuaikan-cdn2.com\/20230524\/HQIEutw8\/index.m3u8$","128$https:\/\/vip.kuaikan-cdn2.com\/20230524\/zwTlsbqf\/index.m3u8$","129$https:\/\/vip.kuaikan-cdn2.com\/20230524\/t1zUnjPm\/index.m3u8$","130$https:\/\/vip.kuaikan-cdn2.com\/20230524\/AmIfztMB\/index.m3u8$","131$https:\/\/vip.kuaikan-cdn2.com\/20230524\/tSOBkAHo\/index.m3u8$","132$https:\/\/vip.kuaikan-cdn2.com\/20230524\/Y6TPzqnl\/index.m3u8$","133$https:\/\/vip.kuaikan-cdn2.com\/20230524\/Sj5kMaxJ\/index.m3u8$","134$https:\/\/vip.kuaikan-cdn2.com\/20230524\/L6mlDqAj\/index.m3u8$","135$https:\/\/vip.kuaikan-cdn2.com\/20230524\/SHvne06z\/index.m3u8$","136$https:\/\/vip.kuaikan-cdn2.com\/20230524\/IB5LuaRq\/index.m3u8$","137$https:\/\/vip.kuaikan-cdn2.com\/20230524\/2jQXln9f\/index.m3u8$","138$https:\/\/vip.kuaikan-cdn2.com\/20230524\/oOW84VBj\/index.m3u8$","139$https:\/\/vip.kuaikan-cdn2.com\/20230524\/KuJrQkkN\/index.m3u8$","140$https:\/\/vip.kuaikan-cdn2.com\/20230524\/2WMz6JoP\/index.m3u8$","141$https:\/\/vip.kuaikan-cdn2.com\/20230524\/0o43mQte\/index.m3u8$","143$https:\/\/vip.kuaikan-cdn2.com\/20230524\/rtAKsERR\/index.m3u8$","144$https:\/\/vip.kuaikan-cdn2.com\/20230524\/nwy5rX8l\/index.m3u8$","145$https:\/\/vip.kuaikan-cdn2.com\/20230524\/VfXGXweb\/index.m3u8$","146$https:\/\/vip.kuaikan-cdn2.com\/20230524\/tGmEJDTM\/index.m3u8$","147$https:\/\/vip.kuaikan-cdn2.com\/20230524\/7yG3h47x\/index.m3u8$","148$https:\/\/vip.kuaikan-cdn2.com\/20230524\/4UUzBNyN\/index.m3u8$","149$https:\/\/vip.kuaikan-cdn2.com\/20230524\/mXmFP8iF\/index.m3u8$","150$https:\/\/vip.kuaikan-cdn2.com\/20230524\/AA6gns4z\/index.m3u8$","151$https:\/\/vip.kuaikan-cdn2.com\/20230524\/iGQq4v5K\/index.m3u8$","152$https:\/\/vip.kuaikan-cdn2.com\/20230524\/uKGhiSbl\/index.m3u8$","153$https:\/\/vip.kuaikan-cdn2.com\/20230524\/uW1jJpUH\/index.m3u8$"]}]}'
					let result = JSON.parse(dataStr)
					this.poster_image_url = result.pic || ''
					this.current_video_list_info = result
					this.handleCurrent_player_url(this.current_video_list_info.url)
				}
			},
			itemClick(item) {
				// console.log(item)
				let arr = item.split('$')
				this.handleCurrent_player_url(arr[1])
				this.show = !this.show
			},
			
			handleCurrent_player_url(play_url) {
				debugger
				if (play_url.includes('.html')) {// 不是m3u8格式
					this.parseVideoPlayUrl(play_url)
					this.current_player_url.originUrl = play_url
					
				} else {
					this.current_player_url.originUrl = play_url
					this.current_player_url.parseUrl = play_url
				}
			},
			
			/* 视频播放url 格式不是m3u8,再次获取 */
			parseVideoPlayUrl(play_url, useBack = false) {
				debugger
				let url = url_video_parse_url(play_url)
				if (useBack) {
					url = url_video_parse_url_back(url)
				}
				let that = this
				request(url).then(res => {
					debugger
					console.log('VideoPlayer: parseUrl' + res)
					
					if(res.code === 200) {
						that.current_player_url.parseUrl = res.url;
					} else {
						that.retryCount += 1
						if (that.retryCount > 2) {
							uni.showToast({
								title: '解析失败，请切换其他！'
							});
						}
						that.parseVideoPlayUrl(play_url, useBack = true);
					}
				})			
			},

			backAction() {
				uni.navigateBack()
			},
			onShareAppMessage() {
				return {
					title: '欢迎体验...影视号',
					path: '/pages/VideoPlayer/VideoPlayer?value=' + this.param
				}
			},
			switchCurrentPlaying(item, index) {
				// debugger
				let arr = item.split('$')
				this.handleCurrent_player_url(arr[1])
				this.show = false
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			showMenu() {
				this.show = true;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.video-contain {
		width: 100%;
		height: 90%;
		// height: -webkit-calc(100% - 88px);
		// height: -moz-calc(100% - 88px);
		// height: calc(100% - 88px);
	}

	// 带列表
	.video-player-list {
		width: 100%;
		height: calc(100% - 88px);
	}
	
	// 不带列表
	.video-player-normal {
		width: 100%;
		height: calc(100% - 44px);
	}
</style>