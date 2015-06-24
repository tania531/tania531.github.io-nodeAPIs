function Calc(input){
	items = input.split(',');

	var op = items.pop();

	var result = 0;
	result = items.reduce(function(a,b){
		switch(op) {
		    case '+':
		    	return a*1 + b*1;				    	 
		        break;
		    case '*':
		    	return a*1 * b*1;
		        break;
	        case '-':
		    	return a*1 -b*1;
	        	break;				    
		    default:
		        return op;
		}
	});
	return result;
}

module.exports = Calc;



 	