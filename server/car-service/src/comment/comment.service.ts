import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';

@Injectable()
export class CommentService {
    constructor(@InjectRepository(Comment) private readonly _commentRepo:Repository<Comment>){}
    save =(comment:Comment):Promise<Comment>=>this._commentRepo.save(comment)
}
