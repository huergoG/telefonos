# Telefonos Argentina Filter
 
Este es un filtro de AngularJS para telefonos de Argentina, teniendo en cuenta las caracteristicas Nacionales.

El filtro formatea el numero dado para mostrarlo de la forma adecuada. De acuerdo a las características disponibles en Argentina.

##Requerimientos
	-AngularJS 1.4.x

#####Ejemplo 
-**Telefonos Fijos** (11)xxxx-xxxx o (2296)xx-xxxx 
-**Celulares** (11) 15 xxxx-xxxx o (0223) 15 xxx-xxxx

##Demo
Para correr la demo en este repositorio, se tiene que instalar las dependencias necesarias usanoo npm
`npm install`
y para correr el servidor local
`gulp`
y apuntar el navegador a http://localhost:8080/demo/

[Demo on Plnkr](http://embed.plnkr.co/44sBYE2budzpmO2qimXQ/)

##Instalacion

###Manual
Para utilizar el modulo compilado e instalarlo manualmente en tu proyecto, utiliza los archivos en la carpeta `dist`
Para utilizar el codigo sin compilar puedes copiar a tu proyecto la carpeta `src`

###npm
`npm install --save-dev telefono_filter`
###Bower
`bower install --save-dev telefono_filter`
