let inputLastname = document.getElementById("lastname");

function showMessage(message){
    window.alert(message);
}

inputLastname.addEventListener("keyup", function()
{
    showMessage(inputLastname.value);
})

/*inputLastname.addEventListener("keydown", (e) => {
    console.log(e);
    showMessage("Vous avez appuyé sur la touche " + e.key);
});*/