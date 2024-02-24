import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { JsonLdDocument } from 'jsonld';
import { RestProxyService } from './rest-proxy.service';

@Controller()
export class RestProxyController {
  constructor(private readonly appService: RestProxyService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/students')
  @Header('content-type', 'application/ld+json')
  @HttpCode(HttpStatus.ACCEPTED)
  public async addStudents(@Body() newStudents: JsonLdDocument): Promise<void> {
    console.log("Message Recieved!");
    return this.appService.addStudents(newStudents);
    //    return newStudents;
  }
}
