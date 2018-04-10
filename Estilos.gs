
/*
listaCitas=[object,bibtexDoc] //No estoy seguro de estos campos

//object está compuesto por conjuntos [cite, info], que es la información en bruto parseada y ordenada previamente.
*/


/*
funciones que se utilizarán para otros estilos:

->str_split(string[,X]): permite divir el string en un array cuya posición contiene un carácter si no se especifica un número
o con X caracteres en cada posición(los espacios cuentan como carácter).  ==> para devolver un name de la forma [Ein01], obteniendo mediante aux[] = str_split(autor,3)
y utilizando aux[0]-> 'Ein' (habiendo eliminado primero el nombre).

->explode("D", string): divide el string dado en partes en función del delimitador D pasado como parámetro ==> apell=explode(" ", autor)
*/

function apply_style(object, style){
	var arrayFin = [];
	var id, name, text;
	var autor, primL;
	var nombCom = [];
	var pages = [];
	switch (style)
	{
		case "abbrv":

			for (int i=0, i<listaCitas.length, i++){
				//Para cada cita, incluir en el array y en orden el id, el nombre y 
				//el texto asociado y repetir con los demás estilos en cambiando el orden

				autor = object.author;	//autor completo			
				nombCom[] = explode(" ", autor); //nombCom[0]-> es el nombre
								 //nombCom[1]-> es el apellido
				primL = left(nombCom[0], 1) //cogemos la primera letra del nombre
				pages[] = explode("--", object.pages); 	//pages[0]->Principio del intervalo
									//pages[1]->Fin del intervalo

				text = primL.concat('. ', nombCom[1], '. ', object.title, '. ', object.journal, ', ', object.volume, '(', object.number, '):', pages[0], '-', pages[1], ', ', object.year, '.');				

				arrayFin.push(listaCitas[id]); //el campo cite es el id dado.
				arrayFin.push(listaCitas[id]); //el campo name, para este estilo, también es el id
				arrayFin.push(text);
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
