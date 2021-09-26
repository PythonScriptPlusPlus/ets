<template>
	<div>
		<desktop-header class="header" />
		<router-view />
		<custom-footer class="foot" />
	</div>
</template>

<style lang="scss" scoped>
.header {
	position: sticky;
}

.foot {
	position: absolute;
	bottom: 0;
}
</style>
