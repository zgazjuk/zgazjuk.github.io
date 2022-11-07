window.onload =  function(){

}

function change_tab(id){
    document.getElementById("placeholder").innerHTML=document.getElementById(id + "_desc").innerHTML;
    document.getElementById("description").className="notselected";
    document.getElementById("history").className="notselected";
    document.getElementById("careers").className="notselected";
    document.getElementById(id).className="selected";
}