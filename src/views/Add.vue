<template>
	<div class="add">
		<p class="add__headline">
			Нет объяснения темы?
		</p>
		<p class="add__subtext">
			напишите на почту и мы добавим тему
		</p>
		<p class="add__link">
			easierthanschool@gmail.com
		</p>
	</div>
</template>

<style lang="scss" scoped>
.add {
    margin: 20% 15%;

	&__headline {
		font-size: 2em;
		margin: 0;
		font-weight: 500;
	}

	&__subtext {
		font-size: 1em;
		margin: 0;
	}

	&__link {
		margin: 0;
		padding-right: 10%;
		font-size: 1.5em;
		color: blue;
		width: 100%;
		text-align: right;
	}
}
</style>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class AddVid extends Vue {}
</script>