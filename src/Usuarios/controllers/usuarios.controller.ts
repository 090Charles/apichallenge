import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { get } from 'http';
import path from 'path/posix';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { iusuario } from '../services/models/iusuario.interfaces';
import { UsuariosService } from '../services/usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(private UsuariosService: UsuariosService){}
    @Post()
    create(@Body() usuarios: iusuario): Observable<iusuario>{
        return this.UsuariosService.createPost(usuarios)
    }

    @Get()
    findAll():Observable<iusuario[]>{
        return this.UsuariosService.finAllPost();
    }
    @Get(':id')
    findByid(@Param('id') id:number):Observable<iusuario>{
        return this.UsuariosService.finByIdPost(id);
    }
    @Get('Byemail/:email')
    // [Route("ReportDetails/{reportId}/{approved}")]
    findByemail(@Param('email') email:string):Observable<iusuario>{
        return this.UsuariosService.finBymailPost(email);
    }

    @Put(':id')
    update(@Param('id') id:number,@Body() usuarios: iusuario): Observable<UpdateResult>{
        return this.UsuariosService.updatePost(id,usuarios);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult>{
        return this.UsuariosService.deletePost(id);
    }
}
