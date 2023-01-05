const form=document.getElementById('formulario')

let linhas = "";



form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNome = document.getElementById('name');
    const inputContato = document.getElementById('phone');

    let linha = '<tr>';
    linha += `<td> ${inputNome.value}</td>`;
    linha += `<td> ${inputContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputContato.value = "";
    inputNome.value = "";
})