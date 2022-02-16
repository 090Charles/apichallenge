import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity('Task')
export class TaskEntity{
    
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({default: ''})
    title:string;

    @Column({default: ''})
    description:string;

    @Column({default: ''})
    status:string;

    @Column()
    user:number;

    @Column({ type:'timestamp', default:()=>'CURRENT_TIMESTAMP', nullable: true})
    createAt: Date;

    @Column({ type:'timestamp',nullable: true})
    finishAt: Date;
}