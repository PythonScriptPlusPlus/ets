<template>
	<div class="footer">
		<p class="footer__about">
			данный сайт является проектом 10 класса
		</p>
		<div class="add">
			<p class="add__text">
				нет разбора?
			</p>
			<a
				class="link add__link"
				@click="changeRoute('/add_video')"
			>
				добавить тему
			</a>
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class CustomFooter extends Vue {
	changeRoute(route) {
		this.$router.push(route).catch(error => {});
	}
};
</script>

<style lang="scss" scoped>
.footer {
	background-color: $subcolor;
	//width: 100vw;
	height: 100px;
	padding: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	&__about {
		margin: 0px;
		color: $white;
		font-size: 24px;
		min-width: 25%;
		max-width: 30%;
		max-height: 70px;
	}
}

.add {
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	&__text {
		margin: 0px;
		color: $white;
		font-size: 24px;
	}

	&__link {
		font-size: 24px;
	}
}
</style>