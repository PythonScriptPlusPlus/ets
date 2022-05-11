<template>
	<div class="math">
		<div
			v-for="video in videos"
			:key="video.name"
			class="math__wrapper"
			@click="changeRoute(video.url)"
		>
			<div
				class="math__picture"
				:style="'background-image: url(' + video.picture + ')'"
			/>
			<div class="math__tagline">
				<p class="math__header">
					{{ video.name }}
				</p>
				<p class="math__description">
					{{ video.description }}
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.math {
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

export default class Mathe extends Vue {
	videos = [
		{
			picture : '/img/previews/timezones.png',
			name : 'Часовые пояса',
			description : 'Это очень важная тема. Без них кто-то бы просыпался 10:00, а кто-то в 17:00, и это далеко не от сбитого режима сна.',
			url : '/category/math/timezones'
		},
		{
			picture : '/img/previews/messurement.png',
			name : 'Единицы измерения',
			description : 'Очень полезная вещь. Они нужны буквально для всего! Масса? Есть килограммы, граммы, тонны...',
			url : '/category/math/measurements'
		},
	];

	changeRoute(route) {
		this.$router.push(route).catch(error => {});
	}
};
</script>