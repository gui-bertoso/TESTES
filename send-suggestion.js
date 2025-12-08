const button = document.getElementById("send-suggestion");
const data_inputs = [document.getElementById("new-suggestion-bairro"), document.getElementById("new-suggestion-type"), document.getElementById("new-suggestion-text")];

function checkDataInputs(){
    const allFilled = data_inputs.every(data >= data.value.trim() !== "");
    button.disabled = !allFilled;
}

data_inputs.forEach(campo =>{
    data.addEventListener("input", checkDataInputs);
}
);

button.addEventListener("click", function(e){
    if(button.disabled){
        alert("Preencha todos os campos para enviar!");
        return;
    }

    const bairro = document.getElementById("new-suggestion-bairro").value;
    const type = document.getElementById("new-suggestion-type").value;
    const text = document.getElementById("new-suggestion-text").value;

    console.log("Sugestão enviada com sucesso!", {bairro, type, text});

    data_inputs.forEach(data =>  data.value = "");
    checkDataInputs();
}
);