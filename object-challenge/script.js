let x;

const library = [
  {
    title: "book one",
    author: "hamza salam",
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
  {
    title: "book two",
    author: "ali",
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
  {
    title: "book three",
    author: "salam",
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

const todo = {
  id: 1,
  title: "Take out trash",
  user: {
    name: "John",
  },
};

const {
  id: todoId, // rename id to todoId
  title: mera,
  user: { name: namess }, // destructuring multiple levels
} = todo;

console.log(namess);

const { title: firstBook } = library[0];
console.log(firstBook);

// let y;

// y = JSON.stringify(library);
// const b = JSON.parse(y);

// console.log(b);
