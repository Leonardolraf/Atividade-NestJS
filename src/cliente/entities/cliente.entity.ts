import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';
import { Endereco } from '../../endereco/entities/endereco.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ nullable: true })
  descricao: string;

  @Column({ default: true })
  ativo: boolean;

  @OneToMany(() => Pedido, pedido => pedido.cliente)
  pedidos: Pedido[];

  @OneToMany(() => Endereco, endereco => endereco.cliente)
  enderecos: Endereco[];
}
