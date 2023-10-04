<template>
	<view>
		<view class="currentTime">{{currentTime}} </view>
		<view class="currentDate">{{currentDate}}</view>
	</view>
</template>

<script>
	import {
		currentTime,
		currentDate
	} from '@/src/utils/time.js'
	export default {
		name: 'CustomTime',
		data() {
			return {
				currentTime: '00:00:00',
				currentDate: '2023-02-01 星期一'
			}
		},
		created() {
			// time
			this._getCurrentTimeHandle()
			// date
			this.currentDate = currentDate()

		},
		methods: {
			_getCurrentTimeHandle() {
				let delay = 1000
				let that = this
				let timeFun = function() {
					that._getCurrentTime()
				}
				setInterval(timeFun, delay)
			},
			_getCurrentTime() {
				this.currentTime = currentTime()
			}
		}
	}
</script>

<style lang="scss">
	.currentTime {
		font-family: 'Share Tech Mono', monospace;
		text-align: center;
		color: #daf6ff;
		letter-spacing: 0.05em;
		font-size: 50px;
		padding-top: 50px;
	}

	.currentDate {
		// padding: 20px 0 0;
		font-family: 'Share Tech Mono', monospace;
		text-align: center;
		color: #daf6ff;
		margin-top: 20px;
	}
</style>