//your code here
var listEle = document.querySelector('#infi-list');
var next = 1;
var load = function(){
	for(var i = 0; i < 10; i++){
		var item = document.createElement('li');
		item.ineerText = 'Item' + next++;
		listEle.appendChild(item);
	}
}

listEle.addEventListener('scroll', function(){
	if(listEle.scrollTop + listEle.clientHeight >= listEle.scrollHeight){
		load();
	}
});

load();
