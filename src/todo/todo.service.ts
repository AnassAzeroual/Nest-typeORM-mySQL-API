import { Injectable } from '@nestjs/common';
import { TodoRepository } from './todo.repository';
import { TodoDTO } from './todo.dto';
import { TodoEntity } from './todo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(TodoRepository)
        private todoRepository: TodoRepository
    ) { }
    //* C
    addTodo(todoDto: TodoDTO): Promise<TodoEntity> {
        return this.todoRepository.createTodo(todoDto)
    }
    //* R
    getTodoList() : Promise<TodoEntity[]>
    {
        return this.todoRepository.find()
    }
    //* R
    //? Get One Todo
    getTodoByID(todo) : Promise<TodoEntity>
    {
        const { id } = todo
        console.log(id);
        
        return this.todoRepository.findOne(id)
    }
}
