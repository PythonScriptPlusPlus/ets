<template>
	<div class="categories">
		<div
			class="categories__title"
			@click="popUp"
		>
			категории
			<div class="categories__arrow" />
		</div>
		<div
			class="list"
			:style="isUp ? 'bottom: 0' : 'top: 48px'"
		>
			<p
				v-for="name in names"
				:key="name"
				class="list__name link"
			>
				{{ name }}
			</p>
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class CategoryPopUp extends Vue {
    names = ['География','Математика','Информатика'];
    isUp = true;

    popUp() {
    	this.isUp = !this.isUp;
    }
};
</script>

<style lang="scss" scoped>
.categories {
    position: relative;
    width: fit-content;
	display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
        width: 200px;
        height: 50px;
        background-color: $main-color;
        color: $white;
        font-size: 24px;
        padding: 0px;
        margin: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 5;
    }

    &__arrow {
        margin-left: 10px;
        width: 25px;
        height: 25px;
        background-image: url(/img/icons/technical/Arrow-Down.png);
        background-size: cover;
    }
}

.list {
    background-color: $subcolor;
    width: 200px;
    color: $white;
    position: absolute;
    border: 4px solid $subcolor;
    border-top: none;

    &__name {
        border-top: 2px solid $white;
        margin: 0;
        padding: 15px 0 10px 10px;
        font-size: 18px;
    }
}
</style>