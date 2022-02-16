import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UsuariosEntity } from './models/usuario.entity';
import { iusuario } from './models/iusuario.interfaces';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(UsuariosEntity)
        private readonly usuariosPosRepository: Repository<UsuariosEntity>
    ){}
    createPost(usuariosPost: iusuario): Observable<iusuario>{
        return from(this.usuariosPosRepository.save(usuariosPost));
    }
    finAllPost(): Observable<iusuario[]>{
        return from(this.usuariosPosRepository.find());
    }
    finByIdPost(id:number): Observable<iusuario>{
        return from(this.usuariosPosRepository.findOne(id));
    }
    finBymailPost(email:string): Observable<iusuario>{
        return from(this.usuariosPosRepository.createQueryBuilder("user").where("user.email = :email", { email: email }).getOne());
    }
    updatePost(id:number, usuariosPost: iusuario): Observable<UpdateResult>{
        return from(this.usuariosPosRepository.update(id,usuariosPost));
    }
    deletePost(id: number): Observable<DeleteResult>{
        return from(this.usuariosPosRepository.delete(id));
    }

}
