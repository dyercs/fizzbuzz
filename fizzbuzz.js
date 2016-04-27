var count, fizzer, buzzer, fizzbuzzer;
exports.count = function(start,end) {
	// create a variable for our output
	var output = buzzer(fizzer(fizzbuzzer(start)));

	// modify output to look like what we want
	for (var i = start; i < end; i += 1) {
		// code to be repeated goes here
		output = output + " " + buzzer(fizzer(fizzbuzzer(i + 1)));
	}

	// return the output
	return output;
};

exports.fizzer = function(num) {
	// if(0 === num % 3) {
	// return "fizz";	
	// }
	// return num;
	return 0 === num % 3 ? "fizz" : num;
};

exports.buzzer = function(num) { 
	return 0 === num % 5 ? "buzz" : num;
};

exports.fizzbuzzer = function(num) { 
	return 0 === num % 15 ? "fizzbuzz" : num;
};

module.exports = {
	count : count,
	fizzer : fizzer,
	buzzer : buzzer,
	fizzbuzzer : fizzbuzzer

};

