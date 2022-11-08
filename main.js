$(document).ready(()=>{
	console.log("hsiao")

	const option = {responseType: "blob"};
	axios.get('./data.json', option).then(res=>{
		// 通信が成功した場合
		console.log("gaogsl")
		console.log(res);

		res.data.text().then(str=>{
			let arr = JSON.parse(str);
			console.log(arr);
		});

	}).catch(err=>{
		// 通信が失敗した場
		console.log("hsdohfo")

	});

})
