<template>
	<div class="header">
		<h1
			class="header__title"
			@click="changeRoute('/')"
		>
			Easier Than School
		</h1>
		<div class="header__wrap">
			<category-pop-up />
		</div>
		<div
			class="header__search"
		/>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class DesktopHeader extends Vue {
	changeRoute(route) {
    	this.$router.push(route).catch(error => {});
	}
};
</script>

<style lang="scss" scoped>
.header {
    height: 50px;
    background-color: $main-color;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__title {
        padding: 0px 15px;
        border-right: 2px solid $white;
        color: $white;
        cursor: pointer;
    }

    &__wrap {
        display: flex;
        align-items: center;
    }

    &__categories {
        color: $white;
        font-size: 24px;
        padding: 0px;
        margin: 0px;
    }

    &__arrow {
        margin-left: 10px;
        width: 25px;
        height: 25px;
        background-image: url(/img/icons/technical/Arrow-Down.png);
        background-size: cover;
    }

    &__search {
        width: 40px;
        height: 40px;
        margin: 5px;
        //background-image: url(/img/icons/technical/Magnifier.png);
        background-size: cover;
        //background-repeat: no-repeat;
        //background-position-y: top;
        //background-position-x: right;
        //border-left: 2px solid $white;
        padding-left: 10px;
    }
}
</style>