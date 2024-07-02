import 'reflect-metadata';
// this is called Side-Effect import, code in the module runs on import. not binding to any var in this file.
// after it's executed, it adds a single Reflect var into global.
// metadata is secret message that only visible through this reflec-metadata package
// the metadata we created and associated with the plane obj, is a little obj on its own

const plane = {
  color: 'red',
};
Reflect.defineMetadata('note', 'first obj that I try metadata', plane);
Reflect.defineMetadata('noteOnProperty', 'twisted color', plane, 'color');

const note = Reflect.getMetadata('note', plane);
const noteOnProperty = Reflect.getMetadata('noteOnProperty', plane, 'color');
console.log(note);
console.log(noteOnProperty);
console.log(plane);
