document.querySelector("#salvar").addEventListener("click", cadastrar)

let tarefas = []

window.addEventListener("load", () => {
    tarefas = JSON.parse( localStorage.getItem("tarefas") ) || []
    atualizar()
})

function atualizar(){
    document.querySelector("#tarefas").innerHTML = ""
    tarefas.forEach(tarefa => 
        document.querySelector("#tarefas").innerHTML += criarCard(tarefa))
        
}

function cadastrar() {
    const titulo = document.querySelector("#titulo").value
    const preco = document.querySelector("#preco").value
    const categoria = document.querySelector("#categoria").value
    const descricao = document.querySelector("#descricao").value
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))

    const tarefa = {
        titulo,
        preco,
        descricao,
        categoria
    }

    tarefas.push(tarefa)
    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    atualizar()
    modal.hide()

    document.querySelector("#tarefas")
        .innerHTML += criarCard(tarefa)
}

function apagar(botao){
    botao.parentNode.parentNode.parentNode.remove()
}

function criarCard(tarefa) {
    const card = `
        <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card">
            <div class="card-header">
                ${tarefa.titulo}
            </div>
            <div class="card-body">
                <p class="card-text">${tarefa.descricao}</p>
                <p class="card-text">${tarefa.categoria}</p>
                <span class="badge text-bg-warning">${tarefa.preco}$</span>
            </div>
            <div class="card-footer">
                <a href="#" class="btn btn-success" title="salvar">
                    <i class="bi bi-check2"></i>
                </a>
                <a href="#" onClick="apagar(this)" class="btn btn-danger" title="apagar produto">
                    <i class="bi bi-trash3"></i>
                </a>
            </div> <!-- card footer -->
        </div> <!-- card -->
    </div> <!-- col -->
    ` 
    return card
}