function lerImagem() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
            document.getElementById("preview").src = e.target.result;
        };
        file.readAsDataURL(this.files[0]);
    }
}

document.getElementById("img-input").addEventListener("change", lerImagem, false);

console.log ("versão ml5;", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LeSeBnlVs/model.json', modelLoaded);

function modelLoaded() {
    console.log('Modelo Carregado e pronto para comparar!');
}

function check()
{
    img = document.getElementById('preview');
    classifier.classify(img, gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("nomeObjeto").innerHTML = results[0].label;
        document.getElementById("precisao").innerHTML = results[0].confidence.toFixed(2);
    }
}