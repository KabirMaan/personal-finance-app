const book = {
  title: "Ego is the enemy",
  author: "ryan holiday",
  publishers: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self published" } = book.publishers;

console.log(publisherName);

const item = ["cofee (hot)", "$2.00", "$2.50", "$3.00"];

const [type, , medium] = item;

console.log(`a medium ${type} costs ${medium}`);
