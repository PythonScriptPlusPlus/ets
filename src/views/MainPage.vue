<template>
	<div class="main">
		<div class="about">
			<iframe
				class="about__video"
				src=""
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
			<div class="about__tagline">
				<p class="about__title">
					О нас - что такое "Easier than school"; для чего он нужен
				</p>
				<p class="about__description">
					Labore eiusmod dolore et sint dolor qui ad do. Incididunt dolore fugiat aliqua enim labore deserunt culpa. Velit reprehenderit nulla voluptate dolore voluptate ea anim laboris. Quis elit irure id consequat eu duis dolor exercitation sint veniam.
				</p>
			</div>
		</div>
		<div class="popular">
			<div
				v-for="video in videos"
				:key="video.name"
				class="popular__wrapper"
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
export default {
	name: 'MainPage',
	data() {
		return {
			videos: [ 
				{
					name: 'Перевод единиц измерения',
					description : 'Единицы измерения - очень полезная вещь. Они нужны буквально для всего! Масса? Есть килограммы, граммы...',
					picture: '/img/previews/messurement.png',
				},
				{
					name: 'Часовые пояса',
					description : 'Часовые пояса - это очень важная тема. Без них кто-то бы просыпался 10:00, а кто-то в 17:00, и это далеко не от сбитого режима сна...',
					picture: '/img/previews/timezones.png',
				},
				{
					name: 'Комбинаторика',
					description : 'Комбинаторика - наука, как можно понять из названия, про комбинации и различное расположение объектов. Зачем оно нужно?',
					picture: '/img/previews/combinations.png',
				},
			],
		};
	}
};
</script>

<style lang="scss" scoped>
.main {
	width: 100vw;
}

.about {
	width: 100%;
	border-bottom: 1px $black solid;
	padding: 20px;
	display: flex;

	&__video {
		background-color: $black;
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
	width: 100vw;
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