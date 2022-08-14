
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Note{
    @Prop()
    id: string;

    @Prop()
    title: string;

    @Prop()
    date: string;

    @Prop() 
    content: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
export type  NoteDocument = Note & Document;