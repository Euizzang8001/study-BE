import { Injectable } from '@nestjs/common';

@Injectable() //이거 안달면 의존성 주입 안됨 constructor에 넣으려면 코드 작성해야함
export class AppService { //export: 다른 파일에서도 사용할 수 있도록
  getHello(): string { //자료형을 안써주어도 에러가 나지 않지만 써주면 잘못된 파일이 왔을 때 오류 발새
    return 'Hello World!';
  }
}
