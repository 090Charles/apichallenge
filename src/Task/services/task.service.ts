import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TaskEntity } from './models/task.entity';
import { itask } from './models/itask.interfaces';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(TaskEntity)
        private readonly taskRepository: Repository<TaskEntity>
    ){}
    createPost(task: itask): Observable<itask>{
        return from(this.taskRepository.save(task));
    }
    findByUser(user:number): Observable<itask[]>{
        return from(this.taskRepository.createQueryBuilder("task").where("task.user = :user", { user: user }).getMany());
    }
    findAllPosts(): Observable<itask[]>{
        return from(this.taskRepository.find());
    }
    updatePost(id: number, task: itask): Observable<UpdateResult>{
        return from(this.taskRepository.update(id,task));
    }
    deletePost(id: number): Observable<DeleteResult>{
        return from(this.taskRepository.delete(id));
    }
}
