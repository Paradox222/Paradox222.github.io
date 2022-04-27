const data = {
    "text": `Actuellement en cours de developement`
}

document.getElementById("text").innerText += data.text;

function back(){
    history.back();
}