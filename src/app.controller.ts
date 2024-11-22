import { Get, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('index')
  getHello() {
    return { sleeping: getRandomNumber(1, 5) === 4 };
  }
}
