generateRandomActOfKindness();
$(".primary").click(function() {
        generateRandomActOfKindness();
});

function generateRandomActOfKindness(){
  $("#quote").addClass("reset");
        $("#quote").removeClass("executed");
        $("#writer").toggleClass("fade");
  setTimeout(function(){
        $.ajax({
            crossOrigin: true,
            url: "kindnessMessages.json",
            dataType:"json"
        }).done(function(act){
            var random = Math.floor(Math.random() * 12) + 1; // Generate Random Number to choose an act from json
            var act = act[random];
            var url = "https://twitter.com/intent/tweet?text=I did a random act of kindness today. " + act.message + "%20%23happyworld";
            console.log(url);
            $('a').attr('href', url);
            $("#quote").html(act.message)
            $("#quote").addClass("executed");
            $("#quote").removeClass("reset");
            $("#writer").toggleClass("fade");
        }).fail(function()  {
            alert("Whoops!");
        });
  },1000);
}