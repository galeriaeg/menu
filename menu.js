function menu(v){
	var fleg = v;
	if(fleg==1){
	document.getElementById('iconClose').style.display='block';
	document.getElementById('iconBars').style.display='none';
	document.getElementById('menu').style.display='block';
	}else{
	document.getElementById('iconClose').style.display='none';
	document.getElementById('iconBars').style.display='block';
	document.getElementById('menu').style.display='none';
	}
}