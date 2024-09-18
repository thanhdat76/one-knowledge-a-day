/*  Những tính năng của interface đều có sẵn trên type.  
    Nhưng có một điều khác biệt là interface sẽ thêm field vào inteface đã tạo, còn type thì không. */

// Adding new fields to an existing interface

interface Foo {
  x: string;
}

interface Foo {
  y: string;
}

const foo: Foo = { x: "x", y: "y" };

// A type cannot be changed after being created

// type Window = {
//   title: string;
// };

// type Window = {
//   ts: TypeScriptAPI;
// };

// Error: Duplicate identifier 'Window'.
