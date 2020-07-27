<template>
  <div id="app">
		 <div>
			 <el-row type="flex" class="row-bg" justify="center">
				   <el-col :span="6">
					   <el-form label-position="right" label-width="80px" >
					     <el-form-item label="用户名">
					   	<el-input v-model="formTest.username"></el-input>
					     </el-form-item>
					     <el-form-item label="密码">
					   	<el-input v-model="formTest.password" show-password></el-input>
					     </el-form-item>
						<el-form-item>
							<el-button type="danger" @click="toSubmit()">登录</el-button>
							<el-button type="danger" @click="testUsername()">测试Get</el-button>
							<el-button type="danger" @click="testPost()">测试post</el-button>
							<el-button type="danger" @click="testToken()">测试token生成</el-button>
						  </el-form-item>		  
					   </el-form>
			</el-col>
				
				    
		     </el-row>
			
		 </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'RBotton',
  data () {
    return {
	  formTest:{
		  username:'testUsername',
		  password:'1234567'
	  }
    }
  },
  methods:{
	  
	 toSubmit(){
		this.$http.post('http://localhost:8088/getToken1',{
		username:this.formTest.username,
		password:this.formTest.password,
		 })
		 .then(function (response) {
		   console.log(response);
		 })
		 .catch(function (error) {
		   console.log(error);
		 });
	     
  },
  testUsername(){
	 var params={
	   		  username:'testStr111',
	 		  password:'123456'
	 }
	  this.$requestUtil.postJson('/getToken2',params,function(res){
		  console.log(res);
	  });
  },
  testPost(){
  	  var params={
  		  username:'testStr111',
		  password:'123456'
  	  }
  	  this.$requestUtil.post('/getToken1',params,function(res){
  		  console.log(res);
  	  });
  },
  testToken(){
	  var params={
	    		  username:'testStr111',
	  		  password:'123456'
	  }
	  this.$requestUtil.post('/getToken1',params,function(res){
	    		  console.log(res);
	  });
  }
 
},
}
</script>
<style scoped>
	#app{
		width: 100%;
		height: 640px;
		border: 1px gold solid;
	}
	
	#test{

		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
	}
	
	
</style>
