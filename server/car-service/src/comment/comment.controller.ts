import { Controller } from '@nestjs/common';
import { CommentService } from './comment.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AddCommentDto } from './dtos/add.comment.dto';
import { Comment } from './comment.entity';

@Controller()
export class CommentController {
    constructor(private readonly _commentService:CommentService){}

    @MessagePattern({cmd:'add_comment'})
    save(@Payload() data:AddCommentDto):Promise<Comment>{
        const comment = new Comment()
        comment.usersId     = data.usersId
        comment.carsId      = data.carsId
        comment.description = data.description
        return this._commentService.save(comment)
    }
}
