import {Module} from '@nestjs/common';
import {TweetsModule} from './tweets/tweets.module';
import {join} from 'path';
import {SequelizeModule} from '@nestjs/sequelize';
import { ScheduleModule } from '@nestjs/schedule';
import { BullModule } from '@nestjs/bull';
import { MailingModule } from './mailing/mailing.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: 'redis',
        port: 6379
      }
    }),
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: join(__dirname, 'database.sqlite'),
      autoLoadModels: true,
      synchronize: true
    }),
    TweetsModule,
    MailingModule
  ],
})
export class AppModule {}
