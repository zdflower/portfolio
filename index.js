        //reescribir esto con menos redundancia
    $("#navContact").on("click", function(){
       $(this).addClass('active'); 
        $("#navPortfolio").removeClass('active');
        $("#navAbout").removeClass('active');
    });
        
        $("#navAbout").on("click", function(){
       $(this).addClass('active'); 
        $("#navPortfolio").removeClass('active');
        $("#navContact").removeClass('active');
    });
        
    $("#navPortfolio").on("click", function(){
       $(this).addClass('active'); 
        $("#navAbout").removeClass('active');
        $("#navContact").removeClass('active');
    });

