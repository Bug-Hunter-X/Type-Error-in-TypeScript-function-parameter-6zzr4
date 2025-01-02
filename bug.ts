function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`);
}

greet("John Doe", new Date()); // Works fine

// This will throw an error because the date parameter is of type Date, not string
greet("John Doe", "2023-12-25");