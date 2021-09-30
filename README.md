#Viajes Chile

> Viajes Chile es un Landing page diseñado para mostrar algunos algunos lugares de Chile, donde podras realizar entretenidas salidas y conocer lugares maravillosos en las distintas modalidades de Tour que existen.
Para el diseño de esta pagina se emplearon distintas herramientas tecnologicas que nombraremos a continuacion:

* Html
* css
* Javascript
* Bootstrap v5.0.2
[Descargar cdn de Bootstrap](https://getbootstrap.com/)
* Jquery 3.6.0
[Descargar cdn de Jquery](https://jquery.com/)
* Google Font
[Descargar cdn de Google Fonts](https://fonts.google.com/)
* Fontawesome 
[Descargar cdn de Fontawesome](https://fontawesome.com/)

Primeramente tiene una barra de navegacion transparente y de manera fija la cual se crea de la siguiente manera

```
<nav class="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
```

Tambien existe una seccion que contiene un carousel de 3 imagenes


![imagen](/assets/img/carrusel.jpg)

Luego tiene una seccion llamada Quienes Somos, que consta de 3 parrafos los cuales al pasar el mouse sobre el texto de dichos parrafos se aumenta la letra de manera temporal.

Dicho efecto se logra con el siguiente codigo en tu archivo con extension css

```
.p-pseudoclases:hover {
    font-size: 20px;
}
```
Logrando el siguiente efecto

![imagen](/assets/img/parrafos.jpg)

A continuacion esta la seccion Destacados donde tenemos 4 tarjetas con imagenes de lugares de Chile, las cuales tienen el efecto de que al pinchar sobre la imagen la descripcion de esta se oculta. Este efecto es de Javascript y se llama toggle.

```
$( ".fas" ).click(function() {
    $( ".parrafito" ).toggle(function() {
   });
 ```