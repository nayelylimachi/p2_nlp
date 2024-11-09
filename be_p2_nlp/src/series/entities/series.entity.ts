import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('series')
export class Serie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 250, nullable: false })
  titulo: string;

  @Column({ type: 'varchar', length: 5000, nullable: false })
  sinopsis: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  director: string;

  @Column({ type: 'int', nullable: false })
  temporadas: number;

  @Column({ name: 'fechaEstreno', type: 'date' })
  fechaEstreno: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;
}
