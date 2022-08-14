import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteModule } from './note/note.module';
import { NoteController } from './apis/note/note.controller';

@Module({
  imports: [
    NoteModule,
    MongooseModule.forRoot('mongodb+srv://admin:admin@atlascluster.ucxcfpi.mongodb.net/?retryWrites=true&w=majority')
  ],
  controllers: [AppController, NoteController],
  providers: [AppService],
})
export class AppModule {}
