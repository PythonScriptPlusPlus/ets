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
					Proident in ea esse aute eu amet pariatur duis do laborum cillum.
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
				<iframe
					class="popular__video"
					src=""
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
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
					name: 'Название темы 1',
					description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet faucibus molestie. Donec rhoncus...',
					picture: '',
				},
				{
					name: 'Название темы 2',
					description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet faucibus molestie. Donec rhoncus...',
					picture: '',
				},
				{
					name: 'Название темы 3',
					description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet faucibus molestie. Donec rhoncus...',
					picture: '',
				},
				{
					name: 'Название темы 4',
					description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet faucibus molestie. Donec rhoncus...',
					picture: '',
				}
			],
		};
	}
};
</script>

<style lang="scss" scoped>
.main {
	width: 100vw;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.about {
	width: 100%;
	height: calc(40vw * 9 / 16 + 40px);
	border-bottom: 1px $black solid;
	padding: 20px;
	display: flex;

	&__video {
		background-color: $black;
		width: 40vw;
		height: calc(40vw * 9 / 16);
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
		display: grid;
		grid-template-columns: 1fr 1fr;
		height: calc((100vw - 80px) * 9 / 64);
	}

	&__video {
		background-color: $description;
		background-image: url(/img/testpic.jpg);
		background-size: cover;
		width: 100%;
		height: 100%;
	}

	&__tagline {
		display: flex;
		flex-direction: column;
	}

	&__title {
		margin: 0px 10px;
		font-weight: 600;
	}

	&__description {
		margin: 10px;
		color: $description;
	}
}
</style>