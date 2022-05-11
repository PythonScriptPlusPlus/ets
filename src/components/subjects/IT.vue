<template>
	<div class="it">
		<div
			v-for="video in videos"
			:key="video.name"
			class="it__wrapper"
			@click="changeRoute(video.url)"
		>
			<div
				class="it__picture"
				:style="video.picture"
			/>
			<div class="it__tagline">
				<p class="it__header">
					{{ video.name }}
				</p>
				<p class="it__description">
					{{ video.description }}
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.it {
	margin: 3% 5vw;

	&__wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin-bottom: 20px;

		&:hover {
			transition: background 1s ease-out; 
			//background: rgb(218,218,218);
			cursor: pointer;
			background: linear-gradient(90deg, rgba(218,218,218,1) 0%, rgba(218,218,218,1) 38%, rgba(255,255,255,1) 100%);
		}
	}

	&__picture {
		background-color: $technical;
		background-size: cover;
		aspect-ratio: 16/9;
	}

	&__tagline {
		padding-left: 10px;
	}

	&__header {
		margin: 10px 0;
		font-weight: 900;
		text-transform: capitalize;
		font-size: 48px;
	}

	&__description {
		margin: 0;
		font-size: 24px;
		color: $description;
	}
}
</style>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class InfoT extends Vue {
	videos = [
		{
			picture : 'background-image: url(/img/previews/combinations.png)',
			name : 'комбинаторика',
			description : 'Наука, как можно понять из названия, про комбинации и различное расположение объектов. Зачем оно нужно?',
			url : '/category/IT/combinatorics'
		}
	];

	changeRoute(route) {
		this.$router.push(route).catch(error => {});
	}
};
</script>