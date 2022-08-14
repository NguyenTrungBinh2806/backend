import { NoteService } from './../../note/services/note/note.service';
import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { Note } from 'src/schemas/note.schema';

@Controller('note')
export class NoteController {

    constructor(private noteServices: NoteService) {}

    @Get("/all")
    public async getAllNotes() {
      return await this.noteServices.findAll();
    }
    @Get("/")
    public async getNoteById(@Query("id") id: string) {
      return await this.noteServices.findById(id);
    }
    @Post("/")
    public async createNote(@Body() note: Note) {
      return await this.noteServices.createNote(note);
    }
    @Put("/")
    public async updateNote(@Body() note: Note) {
      return await this.noteServices.updateNote(note.id, note);
    }
    @Delete("/")
    public async deleteNote(@Query("id") id: string) {
      return await this.noteServices.deleteNote(id);
    }
   
}
