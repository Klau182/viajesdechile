$(document).ready(function() {
    //al pinchar en quienes somos se cambiaran el fondo de los 3 h2 que existen
    $("#quienes-somos").on("click", function(){
        $("h2").addClass("bg-warning");
    });

       
    $( ".fas" ).click(function() {
        $( ".parrafito" ).toggle(function() {
        });
    });

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
   return new bootstrap.Tooltip(tooltipTriggerEl)
})
})



