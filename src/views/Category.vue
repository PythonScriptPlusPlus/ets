<template>
	<div>
		<h1 class="title">
			{{ subjectsRu[subjects.indexOf($route.params.category)] }}
		</h1>
		<geography v-if="subjects[0]==$route.params.category" />
		<mathe v-if="subjects[1]==$route.params.category" />
		<info-T v-if="subjects[2]==$route.params.category" />
	</div>
</template>

<style lang="scss" scoped>
.title {
    font-size: 5em;
    text-transform: capitalize;
    margin: 0 50px;
    padding-top: 100px;
	text-align: center;
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