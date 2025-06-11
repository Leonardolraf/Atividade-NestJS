import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CategoriaProduto } from '../../categoria-produto/entities/categoria-produto.entity';
import { Fornecedor } from '../../fornecedor/entities/fornecedor.entity';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ nullable: true })
  descricao: string;

  @Column({ default: true })
  ativo: boolean;

  @ManyToOne(() => CategoriaProduto, categoria => categoria.produtos)
  categoria: CategoriaProduto;

  @ManyToOne(() => Fornecedor, fornecedor => fornecedor.produtos)
  fornecedor: Fornecedor;
}
