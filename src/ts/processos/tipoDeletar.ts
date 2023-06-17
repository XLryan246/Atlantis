import Processo from "../abstracoes/processo";
import MenuTipoEdicao from "../menus/menuEdicao";
import DeletarClienteDependente from "./deletarDependente";
import DeletarClienteTitular from "./deletarTitular";

export default class TipoDelecao extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoEdicao()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')

        switch (this.opcao) {
            case 1:
                this.processo = new DeletarClienteTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new DeletarClienteDependente()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}