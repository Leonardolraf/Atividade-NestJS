import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';

@Entity()
export class Pagamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  forma: string;

  @Column()
  valor: number;

  @OneToOne(() => Pedido, pedido => pedido.pagamento)
  @JoinColumn()
  pedido: Pedido;
}
