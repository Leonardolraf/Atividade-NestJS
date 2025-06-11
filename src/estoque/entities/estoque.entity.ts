import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Produto } from '../../produto/entities/produto.entity';

@Entity()
export class Estoque {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantidade: number;

  @OneToOne(() => Produto)
  @JoinColumn()
  produto: Produto;
}
