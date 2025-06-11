import { Module } from '@nestjs/common';

import { ProdutoModule } from 'src/produto/produto.module';
import { CategoriaProdutoModule } from 'src/categoria-produto/categoria-produto.module';
import { ClienteModule } from 'src/cliente/cliente.module';
import { PedidoModule } from 'src/pedido/pedido.module';
import { ItemPedidoModule } from 'src/item-pedido/item-pedido.module';
import { PagamentoModule } from 'src/pagamento/pagamento.module';
import { EntregaModule } from 'src/entrega/entrega.module';
import { FornecedorModule } from 'src/fornecedor/fornecedor.module';
import { EstoqueModule } from 'src/estoque/estoque.module';
import { EnderecoModule } from 'src/endereco/endereco.module';

@Module({
  imports: [
    ProdutoModule,
    CategoriaProdutoModule,
    ClienteModule,
    PedidoModule,
    ItemPedidoModule,
    PagamentoModule,
    EntregaModule,
    FornecedorModule,
    EstoqueModule,
    EnderecoModule,
  ],
})
export class AppModule {}
