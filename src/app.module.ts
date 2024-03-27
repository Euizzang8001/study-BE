import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'; //다른 모듈이 필요하면 여기에 넣으면 된다.
import { UserModule } from './user/user.module';

@Module({ //controller 등을 총괄함 ex) controller는 Appservice가 없다면 실행이 안되는데 controller에게 Appservice가 있을 때 알려줌
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
