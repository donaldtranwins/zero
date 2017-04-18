


function ArrayConstructor(){
	this.data = [];
	this.push = function(newData){
		console.log('push method called');
		this.data[this.data.length] = newData;
		return this.data.length;
	}
	this.pop = function(){
		console.log('pop method called');
		var outboundData = this.data[this.data.length-1];
		var newArray = [];
		for(var i=0; i<this.data.length-1; i++){
			newArray[i] = this.data[i];
		}
		this.data = newArray;
		return outboundData;
	}
	this.shift = function(){
		/*add the shift method*/	
	}
	this.unshift = function(){
		/*add the unshift method*/
	}
	/*optional*/
	this.splice = function(){
		/*add the splice method*/
	}

}


var myArray = new ArrayConstructor();