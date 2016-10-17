

function tikitaka(ventas) {
	var electronica = 0;
	var lineaBlanca = 0;
	var vestuario = 0;

	var iguall500 = 0;
	var igual500y1000 = 0;
	var mayor1000 = 0;

	paraCada(venta en lista_de_ventas) {
		if(venta.categoria es "electronica") {
			electronica++;
		} else if(venta.categoria es "lineaBlanca") {
			lineaBlanca++;
		} else {
			vestuario++;
		}

		if(valor <= 500) {
			igual500++;
		} else if(valor <= 1000) {
			igual500y1000++;
		} else {
			mayor1000;
		}
	}
}