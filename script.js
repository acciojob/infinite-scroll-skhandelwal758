//your code here
var listEle = document.querySelector('#infi-list');
var next = 1;
for(var i = 0; i < 10; i++){
		var item = document.createElement('li');
		item.innerText = 'Item' + next++;
		listEle.appendChild(item);
	}
var load = function(){
	for(var i = 0; i < 2; i++){
		var item = document.createElement('li');
		item.innerText = 'Item' + next++;
		listEle.appendChild(item);
	}
}

listEle.addEventListener('scroll', function(){
	if(Math.ceil(listEle.scrollTop + listEle.clientHeight) >= listEle.scrollHeight){
		load();
	}
});


