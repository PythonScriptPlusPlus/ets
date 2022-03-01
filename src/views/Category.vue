<template>
	<div>
		<h1 class="title">
			{{ subjectsRu[subjects.indexOf($route.params.category)] }}
		</h1>
	</div>
</template>

<style lang="scss" scoped>
.title {
    font-size: 5em;
    text-transform: capitalize;
    margin-left: 50px;
    margin-top: 100px;
}
</style>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class Category extends Vue {
    name = this.$route.params.category
    subjects = ['geography','math','IT']
    subjectsRu = ['география','математика','информатика']
    
    changeRoute(route) {
    	this.$router.push(route).catch(error => {});
    }
    
    created() {
    	if (this.subjects.includes(this.name)) {
    		console.log('everything\'s fine');
    	} else {
    		console.log('everything\'s not fine');
    		this.changeRoute('/notFound');
    	}
    }
};
</script>