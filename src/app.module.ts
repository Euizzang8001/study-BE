import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'; //다른 모듈이 필요하면 여기에 넣으면 된다.
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({ //controller 등을 총괄함 ex) controller는 Appservice가 없다면 실행이 안되는데 controller에게 Appservice가 있을 때 알려줌
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal:true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
