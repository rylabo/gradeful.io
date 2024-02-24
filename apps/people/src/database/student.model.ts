import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { NodeObject } from 'jsonld';
import { Document, HydratedDocument } from 'mongoose';

export type StudentDocument = HydratedDocument<Student> & NodeObject;

export type AnnotatedName = {
  annotation: string;
  nameToken: {
    en: string;
    ja: string;
  };
};

const AnnotatedName = raw({
  annotation: String,
  nameToken: {
    en: String,
    ja: String,
  },
});

@Schema()
export class Student {
  @Prop()
  '_id': string;
  @Prop()
  '@type': [string];
  @Prop()
  'attendanceNum': number;
  @Prop({
    _id: false,
    type: raw([AnnotatedName]),
    required: true,
  })
  'givenNames': {
    type: [AnnotatedName];
    required: true;
  };
  @Prop({
    _id: false,
    type: raw([AnnotatedName]),
    required: true,
  })
  'familyNames': {
    type: [AnnotatedName];
    required: true;
  };
}

export const StudentSchema = SchemaFactory.createForClass(Student);
StudentSchema.index({ '$**': 'text' });
