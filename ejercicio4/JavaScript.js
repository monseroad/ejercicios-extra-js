

function mayoresCero(array){
	var menoresCero = [];
	var mayoresCero = [];

	for(var i=0 ; i<=array.lenght - 1; ++i){
		if (array[i] <= 0){
			menoresIguales.push(array[i]);
		} else {
			mayoresCero.push(array[i]);
		}
	}

	console.log("Elementos menores o iguales a 0");
	console.log(menoresCero);

	console.log("Elementos mayores a 0");
	console.log(mayoresCero);
}