$(document).ready(function()
{

    editbtn= "<button id='edit'>✍️</button>";
    removebtn="<button id='remove' >❌ </button>";
    donebtn="<button id='done' >✔️</button>";
    console.log("ready");
        $("#Add").click(function write()
        {
            data=  $("#data").val();
            $('ol').append('<li>'+'<input type="text"  id="itemlist" value="'+data+'">' +donebtn  + removebtn + editbtn +'</li>');
            $("#data").val(" ");
            $('ol').next("li").next("input").css({
                "color": "green",

            });
            console.log("Add-item");
        });
        $('ol').on("click","#done",function()
        {
            console.log("Done");
            $(this).prev("input").css({
                "text-decoration": "line-through",

            });
        });

        $('ol').on("click","#remove",function()
        {
            console.log("remove");
            $(this).parent("li").remove();
        });
        $('ol').on("click","#edit",function()
        {
            console.log("edit");
           $(this).prevAll("input").focus();
           $(this).prevAll("input").val(" ");
        });
        

});