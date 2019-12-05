import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { NewsService } from './news.service';
@Controller('news')
export class NewsController {
    constructor(private readonly appService: NewsService) { }
    @Get()
    getnews() {

        return 'OK';
    }
    @Get(':id')
    getOneUser(@Param('id') id) {
        return 'OK';
    }
    @Post()
    postUser(@Body() body) {

        return 'OK';
    }
    @Put(':id')
    putUser(@Body() body, @Param('id') id) {

        return 'OK';
    }
    @Delete(':id')
    deleteUser(@Param('id') id) {
        return 'OK';
    }
}