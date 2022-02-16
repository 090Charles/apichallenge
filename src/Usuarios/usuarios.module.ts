import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosController } from './controllers/usuarios.controller';
import { UsuariosEntity } from './services/models/usuario.entity';
import { UsuariosService } from './services/usuarios.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([UsuariosEntity])
      ],
      controllers: [UsuariosController],
      providers: [UsuariosService]
})
export class UsuariosModule {}
