function greet(person: string, date: Date | string) {
  let dateObj: Date;
  if (typeof date === 'string') {
    dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      console.error('Invalid date string');
      return;
    }
  } else {
    dateObj = date;
  }
  console.log(`Hello ${person}, today is ${dateObj.toDateString()}`);
}

greet("John Doe", new Date());
greet("John Doe", "2023-12-25"); //Now this works!