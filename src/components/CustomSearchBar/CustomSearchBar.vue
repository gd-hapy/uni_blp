<template>
	<view class="searchbar">
		<view :style="{borderRadius:radius+'px',backgroundColor: bgColor}" class="searchbar__box" @click="searchClick">
			<input focus=true :placeholder="placeholderText" :maxlength="maxlength"
				class="searchbar__box-search-input" confirm-type="search" type="text" v-model="searchVal"
				@confirm="confirm" @blur="blur" @focus="emitFocus" />
			<view v-if="show && (clearButton==='always'||clearButton==='auto'&&searchVal!=='')" class="searchbar__box-icon-clear" @click="clear">
				<slot name="clearIcon">
					<!-- <uni-icons color="#c0c4cc" size="20" type="clear" /> -->
				</slot>
			</view>
			<button class="searchbar__button" @click="confirm">搜索</button>
		</view>
	</view>
</template>

<script>
	/**
	 * SearchBar 搜索栏
	 * @description 搜索栏组件，通常用于搜索商品、文章等
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=866
	 * @property {Number} radius 搜索栏圆角
	 * @property {Number} maxlength 输入最大长度
	 * @property {String} placeholder 搜索栏Placeholder
	 * @property {String} clearButton = [always|auto|none] 是否显示清除按钮
	 * 	@value always 一直显示
	 * 	@value auto 输入框不为空时显示
	 * 	@value none 一直不显示
	 * @property {String} cancelButton = [always|auto|none] 是否显示取消按钮
	 * 	@value always 一直显示
	 * 	@value auto 输入框不为空时显示
	 * 	@value none 一直不显示
	 * @property {String} cancelText 取消按钮的文字
	 * @property {String} bgColor 输入框背景颜色
	 * @property {Boolean} focus 是否自动聚焦
	 * @event {Function} confirm uniSearchBar 的输入框 confirm 事件，返回参数为uniSearchBar的value，e={value:Number}
	 * @event {Function} input uniSearchBar 的 value 改变时触发事件，返回参数为uniSearchBar的value，e=value
	 * @event {Function} cancel 点击取消按钮时触发事件，返回参数为uniSearchBar的value，e={value:Number}
	 * @event {Function} clear 点击清除按钮时触发事件，返回参数为uniSearchBar的value，e={value:Number}
	 * @event {Function} blur input失去焦点时触发事件，返回参数为uniSearchBar的value，e={value:Number}
	 */

	export default {
		name: "CustomSearchBar",
		emits: ['input', 'update:modelValue', 'clear', 'cancel', 'confirm', 'blur', 'focus'],
		props: {
			placeholder: {
				type: String,
				default: "请输入视频名称或视频链接"
			},
			radius: {
				type: [Number, String],
				default: 5
			},
			clearButton: {
				type: String,
				default: "auto"
			},
			cancelButton: {
				type: String,
				default: "auto"
			},
			cancelText: {
				type: String,
				default: ""
			},
			bgColor: {
				type: String,
				default: "transparent"
			},
			maxlength: {
				type: [Number, String],
				default: 100
			},
			value: {
				type: [Number, String],
				default: ""
			},
			modelValue: {
				type: [Number, String],
				default: ""
			},
			focus: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				show: false,
				showSync: false,
				searchVal: ''
			}
		},
		computed: {
			placeholderText() {
				return this.placeholder || '请输入搜索内容'
			}
		},
		watch: {
			// #ifndef VUE3
			value: {
				immediate: true,
				handler(newVal) {
					this.searchVal = newVal
					if (newVal) {
						this.show = true
					}
				}
			},
			// #endif
			// #ifdef VUE3
			modelValue: {
				immediate: true,
				handler(newVal) {
					this.searchVal = newVal
					if (newVal) {
						this.show = true
					}
				}
			},
			// #endif
			focus: {
				immediate: true,
				handler(newVal) {
					if (newVal) {
						this.show = true;
						this.$nextTick(() => {
							this.showSync = true
						})
					}
				}
			},
			searchVal(newVal, oldVal) {
				this.$emit("input", newVal)
				// #ifdef VUE3
				this.$emit("update:modelValue", newVal)
				// #endif
			}
		},
		methods: {
			searchClick() {
				if (this.show) {
					return
				}
				this.show = true;
				this.$nextTick(() => {
					this.showSync = true
				})
				this.clear()
			},
			clear() {
				this.$emit("clear", {
					value: this.searchVal
				})
				this.searchVal = ""
			},
			cancel() {
				this.$emit("cancel", {
					value: this.searchVal
				});
				this.searchVal = ""
				this.show = false
				this.showSync = false
				// #ifndef APP-PLUS
				uni.hideKeyboard()
				// #endif
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord()
				// #endif
			},
			confirm() {
				// #ifndef APP-PLUS
				uni.hideKeyboard();
				// #endif
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord()
				// #endif
				this.$emit("confirm", {
					value: this.searchVal
				})
				this.clear()
			},
			blur() {
				// #ifndef APP-PLUS
				uni.hideKeyboard();
				// #endif
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord()
				// #endif
				this.$emit("blur", {
					value: this.searchVal
				})
			},
			emitFocus(e) {
				this.$emit("focus", e.detail)
			}
		}
	};
</script>

<style lang="scss">
	$searchbar-height: 55px;

	.searchbar {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		position: relative;
		padding: 20px;
		padding-left: 50px;
		padding-right: 50px;
		margin-top: 30px;
		background-color: transparent;
	}

	.searchbar__box {
		/* #ifndef APP-NVUE */
		display: flex;
		box-sizing: border-box;
		/* #endif */
		overflow: hidden;
		position: relative;
		flex: 1;
		justify-content: center;
		flex-direction: row;
		align-items: center;
		height: $searchbar-height;
		padding: 5px 0px 5px 0px;
		border-radius: 3px;
		border: 2px solid SeaGreen;
	}

	.searchbar__box-search-input {
		flex: 1;
		font-size: 14px;
		color: white;
		padding-left: 20px;
	}
	
	.searchbar__box-icon-clear {
		align-items: center;
		line-height: 24px;
		padding-left: 8px;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.searchbar__button {
		width: 60px;
		height: $searchbar-height;
		line-height: $searchbar-height;
		font-size: 14px;
		position: relative;
		background-color: SeaGreen;
	}
</style>