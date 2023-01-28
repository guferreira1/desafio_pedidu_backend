import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ibge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ibge_id: number;

  @Column()
  ibge_name: string;
}
