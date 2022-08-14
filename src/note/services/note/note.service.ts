
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note, NoteDocument } from 'src/schemas/note.schema';
import { createContext } from 'vm';

@Injectable()
export class NoteService {

    constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>){}

    async createNote(note: Note){
        let createNote = new this.noteModel(note);
        createNote.id = createNote._id;
        note.id = Date.now().toString();
        return await createNote.save();
    }

    async findAll(){
        return await this.noteModel.find().exec();
    }

    async findById(id: string){
        return await this.noteModel.findById(id).exec();


    }

    async updateNote(id: string, note: Note){
        return await this.noteModel.findByIdAndUpdate(id, note, {new: true}).exec();
    }

    async deleteNote(id: string){
        
        return await this.noteModel.findByIdAndDelete(id).exec();
    }
}

