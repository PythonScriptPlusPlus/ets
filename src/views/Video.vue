<template>
	<div>
		<vid-comb v-if="names[2]==name" />
		<vid-meas v-if="names[1]==name" />
		<vid-time v-if="names[0]==name" />
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class VideoTemp extends Vue {
    cat = this.$route.params.category
    name = this.$route.params.vid
    subjects = ['geography','math','IT']
    names = ['measurements','timezones','combinatorics']
    subjectsRu = ['география','математика','информатика']
    
    changeRoute(route) {
    	this.$router.push(route).catch(error => {});
    }
    
    created() {
    	//alert(this.cat + ' ' + this.name);
    	if (this.subjects.includes(this.cat) && this.names.includes(this.name)) {
    		console.log('everything\'s fine');
    	} else {
    		console.log('everything\'s not fine');
    		this.changeRoute('/notFound');
    	}
    }
}
</script>