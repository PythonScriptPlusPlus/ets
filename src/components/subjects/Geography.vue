<template>
	<div class="geography">
		<img
			src="/img/sharks/confusedShark.png"
			alt="sad shark"
			class="geography__confusedPic"
		/>
		<h1 class="geography__text">
			Мы ещё изучаем этот предмет. Наберитесь терпения, и он тут появится!
		</h1>
	</div>
</template>

<style lang="scss" scoped>
.geography {
	width: 80vw;
	margin-left: 10vw;
	padding-top: 10%;
	display: flex;
    align-items: center;

	&__confusedPic {
	width: 300px;
	height: 300px;
	}

	&__text {
		padding-left: 50px;
	}
}
</style>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class Geography extends Vue {};
</script>