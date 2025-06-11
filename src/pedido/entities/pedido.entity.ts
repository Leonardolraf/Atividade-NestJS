import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { ItemPedido } from '../../item-pedido/entities/item-pedido.entity';
import { Pagamento } from '../../pagamento/entities/pagamento.entity';
import { Entrega } from '../../entrega/entities/entrega.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ nullable: true })
  descricao: string;

  @Column({ default: true })
  ativo: boolean;

  @ManyToOne(() => Cliente, cliente => cliente.pedidos)
  cliente: Cliente;

  @OneToMany(() => ItemPedido, item => item.pedido)
  itens: ItemPedido[];

  @OneToOne(() => Pagamento, pagamento => pagamento.pedido)
  pagamento: Pagamento;

  @OneToOne(() => Entrega, entrega => entrega.pedido)
  entrega: Entrega;
}
