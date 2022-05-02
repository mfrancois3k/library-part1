
// starter data
const db = require("../db")
const BookModel = require("../models/book")

db.on("error", console.error.bind(console, "MongoDB connection error:" ));

const main = async () =>  {
    const books = [
 {
    title: "Kafka on the Shore",
    author: "Haruki Murakami",
    year: "2002",
    genres: ["fiction", "magical realism", "Japanese literature"],
    ISBN: "1400079276",
    imageLink:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1429638085l/4929.jpg"
},
{
    title: "Hilma AF Klint: Visionary",
    author: "Hilma af Klint (Contributor)",
    year: "2020 ",
    genres: ["nonfiction", "art", "biography"],
    ISBN: "9163972034",
    imageLink:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1576003478l/49185111.jpg"
},
  {
    title: "Tales from Moominvalley",
    author: "Tove Jansson",
    year: "1995",
    genres: ["fantasy", "childrens", "fiction"],
    ISBN: "0374474133",
imageLink:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388948318l/79552.jpg"
},
{
    title: "The House of the Spirits",
    author: "Isabel Allende",
    year: "1995 ",
    genres: ["fiction", "magical realism", "historical fiction"],
    ISBN: "0553383809",
imageLink:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1621672028l/9328._SY475_.jpg"
},
{
    title: "Parable of the Sower (Earthseed #1)",
    author: "Octavia Butler",
    year: "1993 ",
    genres: ["fiction", "science fiction", "post-apocalyptic"],
    ISBN: "0446675504",
imageLink:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442169447l/52397._SY475_.jpg"
  },
]

await BookModel.deleteMany({})
  
await BookModel.insertMany(books)
console.log("Created Books!")

}
const run = async() => {
await main()
db.close()
}
run()