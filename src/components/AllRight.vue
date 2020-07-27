<template>
  <div class="app">
	<rtop></rtop>
	<rbottom></rbottom>
  </div>
</template>

<script>
	import RTop from '@/components/RTop.vue'
	import RBottom from '@/components/RBottom.vue'
export default {
  name: 'Left',
  data () {
    return {
      
    }
  },
  components:{
	 rtop: RTop,
	 rbottom: RBottom
  }
}
</script>
<style scoped>
	.app{
		height: 100%;
		width: 100%;
		border: 1px green solid;
	}
</style>
