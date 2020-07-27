import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8088";
axios.defaults.timeout = 5000;

let requestUtil={
	//get 方式
	get:(url,params,successFunction)=>{
		axios.request({
			url:url,
			method: "get", // 默认是 get
			params: params,
		}).then(response=>{
			successFunction(response);
		}).catch(function (error) {
			alert("error !!!");
		});
	},
	//post方式
	post:(url,params,successFunction)=>{
		axios.request({
			url:url,
			method: "post", // 默认是 get
			headers:{
			            'Content-type': 'application/x-www-form-urlencoded'
			         },
				 
			params: params,
		}).then(response=>{
			successFunction(response);
		}).catch(function (error) {
			alert("error !!!");
		});
	},
	//postJson方式
	postJson:(url,params,successFunction)=>{
		axios.request({
			url:url,
			method: "post", // 默认是 get
			data: params,
		}).then(response=>{
			successFunction(response);
		}).catch(function (error) {
			alert("error !!!");
		});
	},
}
export default requestUtil