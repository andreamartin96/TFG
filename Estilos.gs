
/*
listaCitas=[arrayCites,bibtexDoc] //No estoy seguro de estos campos

//arrayCites está compuesto por [cite, info]
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
				arrayFin.push(listaCitas[id]); //el campo cite es el id dado.
				arrayFin.push(listaCitas[id]); //el campo name, para este estilo, también es el id
				arayFin.push();
			}

			return arrayFin//[cite, name, text]

		case "unsrt":

			for (int i=0, i<listaCitas.length, i++){
				//Para cada cita, incluir en el array y en orden el id, el nombre y 
				//el texto asociado y repetir con los demás estilos en cambiando el orden
				arrayFin.push(listaCitas[id]); //el campo cite es el id dado.
				arrayFin.push(listaCitas[id]); //el campo name, para este estilo, también es el id
				arayFin.push();
			}
			return [cite, name, text]

		case "acm":

			for (int i=0, i<listaCitas.length, i++){
				//Para cada cita, incluir en el array y en orden el id, el nombre y 
				//el texto asociado y repetir con los demás estilos en cambiando el orden
				arrayFin.push(listaCitas[id]); //el campo cite es el id dado.
				arrayFin.push(listaCitas[id]); //el campo name, para este estilo, también es el id
				arayFin.push();
			}
			return [cite, name, text]

		case "alpha":

			for (int i=0, i<listaCitas.length, i++){
				//Para cada cita, incluir en el array y en orden el id, el nombre y 
				//el texto asociado y repetir con los demás estilos en cambiando el orden
				arrayFin.push(listaCitas[id]); //el campo cite es el id dado.
				arrayFin.push(); //en este caso se insertará en función del nombre del autor y el año de publicación.
				arayFin.push();
			}
			return [cite, name, text]
			
		/*default*/
	}
}