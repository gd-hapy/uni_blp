<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/*每个页面公共css */
	page{
		background:radial-gradient(#0a2e38 0%, #000000 80%);
		width: 100%;
		height: 100%;
	    }
</style>
