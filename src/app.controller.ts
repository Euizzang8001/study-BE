import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController { //매번 AppService를 찍어냄 -> 메모리 관리 어려움 --> AppService만 생성하겠다라는 의미
  constructor(private readonly appService: AppService) {}

  @Post('/hello') //get request가 들어오면 아래 함수를 실행하겠다. get이 아니라면 실행 x..아마..
  getHello(): string { //자신만의 getHello 함수를 생성
    return this.appService.getHello();
  }
}
