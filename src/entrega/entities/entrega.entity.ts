import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';

@Entity()
export class Entrega {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: Date;

  @Column()
  status: string;

  @OneToOne(() => Pedido, pedido => pedido.entrega)
  @JoinColumn()
  pedido: Pedido;
}
