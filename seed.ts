import { DataSource } from 'typeorm';

import { Produto } from './src/produto/entities/produto.entity';
import { CategoriaProduto } from './src/categoria-produto/entities/categoria-produto.entity';
import { Cliente } from './src/cliente/entities/cliente.entity';
import { Pedido } from './src/pedido/entities/pedido.entity';
import { ItemPedido } from './src/item-pedido/entities/item-pedido.entity';
import { Pagamento } from './src/pagamento/entities/pagamento.entity';
import { Entrega } from './src/entrega/entities/entrega.entity';
import { Fornecedor } from './src/fornecedor/entities/fornecedor.entity';
import { Estoque } from './src/estoque/entities/estoque.entity';
// Entidades que estavam dando erro: Estudante, Cidade, Uf, Endereco — não serão usadas aqui

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'db.sqlite',
  synchronize: true,
  entities: [__dirname + '/src/**/*.entity.{ts,js}'],
});

AppDataSource.initialize().then(async () => {
  // Categoria e Fornecedor
  const categoriaRepo = AppDataSource.getRepository(CategoriaProduto);
  const fornecedorRepo = AppDataSource.getRepository(Fornecedor);

  const categoria = categoriaRepo.create({ nome: 'Frutas' });
  await categoriaRepo.save(categoria);

  const fornecedor = fornecedorRepo.create({ nome: 'Sitio das Frutas' });
  await fornecedorRepo.save(fornecedor);

  // Produto
  const produtoRepo = AppDataSource.getRepository(Produto);
  const produto = produtoRepo.create({
    nome: 'Maçã',
    ativo: true,
    categoria,
    fornecedor,
  });
  await produtoRepo.save(produto);

  // Estoque
  const estoqueRepo = AppDataSource.getRepository(Estoque);
  const estoque = estoqueRepo.create({ quantidade: 150, produto });
  await estoqueRepo.save(estoque);

  // Cliente e Pedido
  const clienteRepo = AppDataSource.getRepository(Cliente);
  const cliente = clienteRepo.create({ nome: 'Maria Cliente', ativo: true });
  await clienteRepo.save(cliente);

  const pedidoRepo = AppDataSource.getRepository(Pedido);
  const pedido = pedidoRepo.create({ nome: 'Pedido 1', ativo: true, cliente });
  await pedidoRepo.save(pedido);

  // Item do Pedido
  const itemPedidoRepo = AppDataSource.getRepository(ItemPedido);
  const item = itemPedidoRepo.create({ pedido, produto, quantidade: 2 });
  await itemPedidoRepo.save(item);

  // Pagamento
  const pagamentoRepo = AppDataSource.getRepository(Pagamento);
  const pagamento = pagamentoRepo.create({ forma: 'Cartão', valor: 50.0, pedido });
  await pagamentoRepo.save(pagamento);

  // Entrega
  const entregaRepo = AppDataSource.getRepository(Entrega);
  const entrega = entregaRepo.create({ data: new Date(), status: 'Pendente', pedido });
  await entregaRepo.save(entrega);

  console.log('✅ Dados básicos populados com sucesso!');
  process.exit(0);
}).catch((err) => {
  console.error('❌ Erro ao popular o banco:', err);
  process.exit(1);
});
