var options = {
	path: 'lll',
	onSuccess: function(res) {
		console.log(res);
	},
	onFailure: function(res) {
		console.log(res);
	}
}

var name = ["casenumber", "zuoangongju", "shouduantedian", "jiaotonggongju", "qinaimubiao", "quyuleixing"],
		val = [1, 2, 3, 4, 5, 6]
console.log(val.length)
var upload = tinyImgUpload('#upload', options, name, val);
$('.submit').on('click', function() {
	upload();
})
