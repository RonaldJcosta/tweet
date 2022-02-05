import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TweetsModule} from './tweets/tweets.module';
import {join} from 'path';
import {SequelizeModule} from '@nestjs/sequelize';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: join(__dirname, 'database.sqlite'),
      autoLoadModels: true,
      synchronize: true
    }),
    TweetsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
