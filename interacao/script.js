var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function filtrarTexto(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z\s]/g, '');
}

textInput.addEventListener('input', function() {
    this.value = filtrarTexto(this.value);
});

function criptografar() {
    var texto = filtrarTexto(textInput.value);

    var resultCripto = texto.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    outInput.innerHTML = '<textarea readonly id="texto-cripto">' + resultCripto + '</textarea>' + 
                         '<button class="btn-copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
    var texto = filtrarTexto(textInput.value);

    var resultDescripto = texto.replace(/enter/g, "e")
                               .replace(/imes/g, "i")
                               .replace(/ai/g, "a")
                               .replace(/ober/g, "o")
                               .replace(/ufat/g, "u");

    outInput.innerHTML = '<textarea readonly id="texto-descripto">' + resultDescripto + '</textarea>' + 
                         '<button class="btn-copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
    var textoCop = document.querySelector('#output textarea');
    
    textoCop.select();
    textoCop.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(textoCop.value).then(function() {
        alert("Texto Copiado");
    }).catch(function(err) {
        console.error("Erro ao copiar o texto: ", err);
    });
}
