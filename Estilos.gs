
/*
listaCitas=[arrayCites,bibtexDoc] //No estoy seguro de estos campos
*/

function apply_style(listaCitas, style){
	var arrayFin = [];
	var id, name, text;
	switch (style)
	{
		case "abbrv":

			for (int i=0, i<listaCitas.length, i++){
				//Para cada cita, incluir en el array y en orden el id, el nombre y 
				//el texto asociado y repetir con los demás estilos en cambiando el orden
			}

			return arrayFin//[cite, name, text]

		case "unsrt":
			return [cite, name, text]

		case "acm":
			return [cite, name, text]

		case "alpha":
			return [cite, name, text]
			
		/*default*/
	}
}