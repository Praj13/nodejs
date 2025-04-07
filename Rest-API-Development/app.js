const express= require("express")
const app=express();

app.use(express.json());

let books=[
    {
        id:"1",
        title:"book-1"
    },
    {
        id:"2",
        title:"book-2"
    },
    {
        id:"3",
        title:"book-3"
    },
]

app.get('/',(req,res)=>{
    res.json({
        message:"welcome to our bookstore"
    })
})

app.get('/get',(req,res)=>{
    res.json(books);
})

app.get('/get/:id',(req,res)=>{
    const book=books.find(items=>items.id===req.params.id)
    if(book){
    res.status(200).json(book);

    }
    res.status(404).json("book not found");
})

//add a new book
app.post('/add',(req,res)=>{
    const newBook=
        {
            id:books.length+1,
            title:`book-${books.length+1}`
        }
    books.push(newBook);
    res.status(200).json({
        data:newBook,
        message:"new book added"
    })
})

//update a book
app.put("/update/:id", (req, res) => {
    const findCurrentBook = books.find(
      (bookItem) => bookItem.id === req.params.id
    );
    if (findCurrentBook) {
      findCurrentBook.title = req.body.title || findCurrentBook.title;
  
      res.status(200).json({
        message: `Book with ID ${req.params.id} updated successfully`,
        data: findCurrentBook,
      });
    } else {
      res.status(404).json({
        message: "Book not found",
      });
    }
  });
app.listen(3000,()=>{
    console.log("server is running at port 3000");
})