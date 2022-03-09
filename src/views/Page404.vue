<template>
	<div class="notFound">
		<img
			src="/img/sharks/sadShark.webp"
			alt="sad shark"
			class="notFound__picture"
		/>
		<h1 class="notFound__text">
			О нет! Мы ещё не изучили эту тему. Можем предложить перейти <router-link
				to="/"
			>
				сюда
			</router-link>
		</h1>
	</div>
</template>

<style lang="scss" scoped>
.notFound {
    width: 80vw;
    height: fit-content;
    margin: calc(50% - 300px) 10vw;
    display: flex;
    align-items: center;

    &__text {
        height: fit-content;
    }

    &__picture {
        width: 300px;
        height: 300px;
    }
}
</style>