<template>
	<div>
		<div
			class="about" 
			@click="changeRoute('/about')"
		>
			<div
				class="about__video"
			/>
			<div class="about__tagline">
				<p class="about__title">
					Что такое "Easier than school"? Для чего нужна эта платформа?
				</p>
				<p class="about__description">
					"Easier than school" - вспомогательная платформа с видеоуроками для 5-6 классов
				</p>
			</div>
		</div>
		<div class="popular">
			<div
				v-for="video in videos"
				:key="video.name"
				class="popular__wrapper"
				@click="changeRoute(video.url)"
			>
				<img
					class="popular__video"
					:style="'background-image: url('+ video.picture +')'"
				/>
				<div class="popular__tagline">
					<p class="popular__title">
						{{ video.name }}
					</p>
					<p class="popular__description">
						{{ video.description }}
					</p>
				</div>
			</div>
		</div>	
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class MainPage extends Vue {
	videos = [
		{
			name: 'Перевод единиц измерения',
			description : 'Единицы измерения - очень полезная вещь. Они нужны буквально для всего! Масса? Есть килограммы, граммы...',
			picture: '/img/previews/messurement.png',
			url : '/category/math/measurements'
		},
		{
			name: 'Часовые пояса',
			description : 'Часовые пояса - это очень важная тема. Без них кто-то бы просыпался 10:00, а кто-то в 17:00, и это далеко не от сбитого режима сна...',
			picture: '/img/previews/timezones.png',
			url : '/category/math/timezones'
		},
		{
			name: 'Комбинаторика',
			description : 'Комбинаторика - наука, как можно понять из названия, про комбинации и различное расположение объектов. Зачем оно нужно?',
			picture: '/img/previews/combinations.png',
			url : '/category/IT/combinatorics'
		},
	];

	changeRoute(route) {
		this.$router.push(route).catch(error => {});
	}
};
</script>

<style lang="scss" scoped>

.about {
	border-bottom: 1px $black solid;
	padding: 20px;
	display: flex;
	transition: background-color 0.3s; 

	&:hover {
		transition: background-color 0.3s; 
		background-color: rgb(218,218,218);
		cursor: pointer;
	}

	&__video {
		background-color: $black;
		background-image: url(/img/previews/preview.png);
		background-size: cover;
		aspect-ratio: 16/9;
		width: 40vw;
	}

	&__tagline {
		margin-left: 2%;
		width: 58%;
		display: flex;
		flex-direction: column;		
	}

	&__title {
		font-size: 1.6em;
		margin: 20px 0px;
	}

	&__description {
		margin: 0px;
		color: $description;
	}
}

.popular {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 40px;
	//width: 100vw;
	padding: 20px;

	&__wrapper {
		transition: background-color 0.5s;
		display: grid;
		grid-template-columns: 1fr 1fr;
		height: fit-content;

		&:hover {
			transition: background 1s ease-out; 
			//background: rgb(218,218,218);
			cursor: pointer;
			background: linear-gradient(90deg, rgba(218,218,218,1) 0%, rgba(218,218,218,1) 38%, rgba(255,255,255,1) 100%);
		}
	}

	&__video {
		background-color: $description;
		background-image: url(/img/testpic.jpg);
		background-size: cover;
		aspect-ratio: 16/9;
		width: 100%;
	}

	&__tagline {
		display: flex;
		flex-direction: column;
	}

	&__title {
		margin: 10px 10px 0;
		font-weight: 600;
	}

	&__description {
		margin: 10px;
		color: $description;
	}
}
</style>