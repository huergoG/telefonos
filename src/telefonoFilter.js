(function() {

    'use strict';
	
	angular
		.module('telefonoFilter')
		.filter('tel',function(codigos,$filter){
      
  			return function (number) {
		    /* Muestra el formato del numero de telefono.
		      Caso con 549
		      Caso con 0 en caracteristica
		      Caso Celular con caracteristica
		      Caso Comun con Sin caracteristica
		      Caso Celular con Sin caracteristica

		      @param number
		    */
		    //  $inject =['codigos'];
		      
	        if (!number) { return ''; }

	        number = String(number);
    
	        // Si el numero de telefono no es mas largo que numero con area, sin area o celular devuelve el numero
	        var formattedNumber = number;
	        var encontro=false;

          //Quita el 549, si existe y lo guarda si corresponde
          var int = number.substring(0,3) == '549' ? number.substring(0,3) : "";
          number = number.substring(0,3) == '549' ? number.slice(3) : number;
          //Quita el 0, si existe y lo guarda si corresponde
      		var c = (number[0] === '0' )? number[0] : "";
      		number = number[0] === '0' ? number.slice(1) : number;
    		  
    			//Busca los cuatro ultimos numero
    			var total = number.length;
    			var endInicio = total - 4;
    			var end= number.substring(endInicio,total);
    			//Si el numero es de 10 o 12 caracteres, tiene caracteristica y no comienza con 15    			
    		  if (total>9 && total<13 || (total==10 && numbernumber.substring(0,1)!='15')){	
    		    var mobile = (number.length>10)? true: false;
      			var area = getArea(number);
      			var front =getFront(number,area,mobile,endInicio);
      			if (front!==''){
      		  	formattedNumber =  int+" ("+c+area+")"+front+"-"+end;
      		  	encontro=true;
      			}
    		  }
    		  //Si el numero es de entre 6 y 10 caracteres o (10 con 15).Numero SIN CARACTERISTICA
    		  if (total>5 && (total<11) || (total==10 && number.substring(0,1)=='15')&& !encontro){
    		    var mobile=(number.substring(0,2)=='15')?true :false;
    		    var front = getFront(number,null,mobile,endInicio);
    		    if (front!==''){
    		      formattedNumber=   front+"-"+end;
    		    }
    		  }
    			return formattedNumber;
    	    };
    	    
    	    /** Identifica la parte primera del numero y la presecia del 15 si es un numero celular
    	     * @method getFront
    	     * @param string number
    	     * @param string area
    	     * @param boolean mobile
    	     * @param endInicio
    	     */
    	    function getFront(number,area,mobile,endInicio){
    	      var front_=(area!=null)?number.substring(area.length,endInicio):number.substring(0,endInicio);
            if (mobile){
    	        if (front_.substring(0,2)=='15'){
    	          return front_.substring(0,2)+" "+front_.substring(2,front_.length);
    	        }else{
    	          if (front_.length<5){
    	            return front_;
    	          }
    	        }
    	      }else{
    	        //console.log(front_);
    	        if (front_.length<5){
    	          return front_;
    	        }
    	      }
    	      return "";  
    	    }
    	    
    	    /**
    	     * Decodifica el area del telefono en base a sus caracteres. 
    	     * Utiliza los valores officiales de las caracteristicas, guardadas en
    	     * @method getArea
    	     * @param string number
    	    */
    	    function getArea(number){
    	      if (number.substring(0,2)=='11'){
    	     
    	        return number.substring(0,2);
    	      }
    	      var valor = parseInt(number.substring(0,4));
    	      var aux= $filter('filter')(codigos,valor,true); 
    	      if (aux.length>0){
    	        return number.substring(0,4);
    	      }
    	       valor = parseInt(number.substring(0,3));
    	       aux= $filter('filter')(codigos,valor,true); 
    	      if (aux.length>0){
    	        return number.substring(0,3);
    	      }
    	      return "";
    	    }
	     });
})();