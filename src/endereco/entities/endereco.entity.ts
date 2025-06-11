import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity';

@Entity()
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rua: string;

  @Column()
  cidade: string;

  @ManyToOne(() => Cliente, cliente => cliente.enderecos)
  cliente: Cliente;
}
