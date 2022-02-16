import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Usuarios')
export class UsuariosEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({default:''})
    name: string;

    @Column({default:''})
    email: string
    
    @Column({default:''})
    password: string

}