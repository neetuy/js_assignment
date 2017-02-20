
var topic = ["array", "reduce-data", "closures", "currying","recursion","promises"];
function arraysimple(){
	document.getElementById("#arraysimple").innerHTML=topic;
}
function pop_element(){
	topic.pop();
	document.getElementById("#pop").innerHTML=topic;
}
function push_element(){
	topic.push('javascript');
	document.getElementById("#push").innerHTML=topic;
}
function shift_element(){
	topic.shift();
	document.getElementById("#shift").innerHTML=topic;
}
function unshift_element(){
	topic.unshift("javascript");
	document.getElementById("#unshift").innerHTML=topic;
}
function splice_element(){
	topic.splice(1,3,"reduce data with javasript");
	document.getElementById("#splice").innerHTML=topic;
}
function concat_element(){
	var topic1=["1","2","3","4"]
	var topic2=topic.concat(topic1);
	document.getElementById("#concat").innerHTML=topic2;
}
function join_element(){
		
	document.getElementById("#join").innerHTML=topic.join(" in javascript  ");
}
