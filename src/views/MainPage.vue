<template>
	<div class="main">
		<div class="about">
			<iframe
				class="about__video"
				src="https://www.youtube.com/embed/gOjXEDIhDuk"
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
					src="https://www.youtube.com/embed/gOjXEDIhDuk"
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
					name: 'test',
					description : 'text',
					picture: '',
				},
				{
					name: 'video2',
					description : 'text, but different',
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
}

.about {
	width: 100%;
	height: calc(40vw * 9 / 16 + 40px);
	border-bottom: 1px $black solid;
	padding: 20px;
	display: flex;

	&__video {
		width: 40%;
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
	display: flex;
	flex-direction: row;
	width: 100vw;
	padding: 20px;
	flex-wrap: wrap;

	&__wrapper {
		display: flex;
		flex-direction: row;
		width: 50%;
		height: calc(50vw * 9 / 16 * 0.48);
		margin-bottom: 50px;
	}

	&__video {
		width: 50%;
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