class Produto{

    constructor() {
        this.id = 1
        this.arrayProdutos = []
        this.editId = null
        
    }

    salvar() {
        let produto = this.lerDados()

        if(this.validaCampo(produto)){
            if(this.editId == null){
                this.adicionar(produto)
                this.cancelar()
            }else{
                this.atualizar(this.editId, produto)
            }


        }
        this.listaTabela()
        console.log(this.arrayProdutos)
        
        
    }

    

    listaTabela() {
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''
        for(let i = 0; i < this.arrayProdutos.length; i++){
            
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_nome = tr.insertCell()
            let td_valor = tr.insertCell()
            let td_acao = tr.insertCell()
            
            td_id.innerText = this.arrayProdutos[i].id
            td_nome.innerText = this.arrayProdutos[i].nomeProduto
            td_valor.innerText = this.arrayProdutos[i].valor
            
            
            td_id.classList.add('center')

            let imgEdit = document.createElement('img')
            imgEdit.classList.add('padding')
            imgEdit.src = 'images/editar.png'
            imgEdit.setAttribute("onclick","produto.preparaEdicao("+ JSON.stringify(this.arrayProdutos[i])+")")
            
            let imgExcluir = document.createElement('img')
            imgExcluir.src = 'images/excluir.png'
            imgExcluir.setAttribute("onclick","produto.deletar("+this.arrayProdutos[i].id+")")

            td_acao.classList.add('center')
            td_acao.appendChild(imgEdit)
            td_acao.appendChild(imgExcluir)
            
            
            
            


        }
        document.getElementById('btn1').innerText = 'Salvar'
        this.cancelar()
        this.editId = null
    }

    adicionar(produto){
        produto.valor = parseFloat(produto.valor)
        this.arrayProdutos.push(produto)
        this.id++

    }

    atualizar(id, produto){
        for(let i = 0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto
                this.arrayProdutos[i].valor = produto.valor
            }
    }
}

    preparaEdicao(dados){
        this.editId = dados.id

        document.getElementById('produto').value = dados.nomeProduto
        document.getElementById('valor').value = dados.valor

        document.getElementById('btn1').innerText = 'Atualizar'

    }

    lerDados() {
        let produto = {}

        produto.id = this.id
        produto.nomeProduto = document.getElementById('produto').value
        produto.valor = document.getElementById('valor').value

        return produto
    } 

    validaCampo(produto) {
        let msg = ''
        if(produto.nomeProduto == ''){
            msg += ' - Informe o nome do produto \n'
        }

        if(produto.valor == ''){
            msg += ' - Informe o valor do produto \n'
        }

        if(msg != ''){
            alert(msg)
            return false
        }
        return true
    }

    cancelar() {
        document.getElementById('produto').value = ''
        document.getElementById('valor').value = ''
        
    }

    deletar(id){
        if(confirm('Deseja realmente deletar o produto de ID' + id)){
            let tbody = document.getElementById('tbody')

        for(let i = 0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i, 1)
                tbody.deleteRow(i)
                console.log(i)
                
                

            }
        }
        }
        
        console.log(this.arrayProdutos)

    }

}

var produto = new Produto()
 