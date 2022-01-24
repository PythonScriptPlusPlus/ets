<template>
	<div class="main">
		<desktop-header class="header" />
		<router-view />
		<custom-footer class="foot" />
	</div>
</template>

<style lang="scss" scoped>
.main {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.header {
	position: sticky;
}

.foot {
	position: absolute;
	bottom: 0;
}
</style>
