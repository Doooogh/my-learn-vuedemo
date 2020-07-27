<template>
  <div id="app" >
	  <div class="all-content">
		  <left></left>
		<right></right>
	  </div>
  </div>
</template>

<script>

import Left from '@/components/Left.vue'
import AllRight from '@/components/AllRight.vue'
export default {
  name: 'app',
  components: {
	  'left':Left,
	  'right':AllRight
  },

}
</script>

<style scoped>
#app{
	width: 100%;
	height: 700px;
	border: 1px black solid;
}
.all-content{
	width: 100%;
	height: 100%;
	border: 1px red solid;
	display: flex;
	justify-content: start;
}
</style>
