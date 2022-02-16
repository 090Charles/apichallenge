import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { TaskService } from '../services/task.service';
import { itask } from '../services/models/itask.interfaces';

@Controller('task')
export class TaskController {
    constructor(private FeedServices: TaskService){}
    @Post()
    create(@Body() feedPost: itask): Observable<itask>{
        return this.FeedServices.createPost(feedPost)
    }

    @Get()
    findAll(): Observable<itask[]>{
        return this.FeedServices.findAllPosts()
    }
    @Get(':user')
    findByUser(@Param('user') user:number): Observable<itask[]>{
        return this.FeedServices.findByUser(user)
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() feedPost: itask): Observable<UpdateResult>{
        return this.FeedServices.updatePost(id,feedPost)
    }

    @Delete(':id')
    delete(@Param('id') id:number): Observable<DeleteResult>{
        return this.FeedServices.deletePost(id)
    }

}
