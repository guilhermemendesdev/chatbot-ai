import { Body, Controller, Post } from '@nestjs/common';
import { CreateChatCompletionRequest } from './dto/create-chat-completion.request';

@Controller('openai')
export class OpenaiController {
  @Post('chatCompletion')
  async createChatCompletion(@Body() body: CreateChatCompletionRequest) {}
}
