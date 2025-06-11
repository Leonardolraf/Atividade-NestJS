import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';
import { Produto } from '../../produto/entities/produto.entity';

@Entity()
export class ItemPedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantidade: number;

  @ManyToOne(() => Pedido, pedido => pedido.itens)
  pedido: Pedido;

  @ManyToOne(() => Produto, produto => produto.id)
  produto: Produto;
}
