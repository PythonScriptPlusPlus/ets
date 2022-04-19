<template>
	<div class="main">
		<desktop-header class="header" />
		<router-view class="view" />
		<custom-footer class="foot" />
	</div>
</template>

<style lang="scss" scoped>
.main {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.view {
	min-height: calc(100vh - 150px);
}

.header {
	position: sticky;
	z-index: 5;
}

.foot {
	position: sticky;
	bottom: 0;
}
</style>
