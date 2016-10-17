
function suceFibonacci(numero) {
	if (numero == 1){
		var resulta = [0];
		return retorno;
	} else if (numero == 2) {
		var resulta = [0, 1];
		return resulta;
	}

	var suce = [0, 1];
	for (var i=2 ; i<numero ; ++i){
		var igual = suce [i-2] + suce [i-1];
		suce.push(igual);
	}
	return suce;
}