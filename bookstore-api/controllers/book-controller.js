const Book = require("../models/book");

const getAllBooks = async (req, res) => {
    try{
        const allBooks = await Book.find({});
        if (allBooks?.length > 0) {
          res.status(201).json({
            success: true,
            message: "List of books fetched successfully",
            data:allBooks
          });
        }
        else{
          res.status(401).json(
              {
                  success:false,
                  message:"no collection found"
              }
          )
        }
    }
    catch(e){
    console.log(e)
    res.status(500).json({
        success:false,
        message:'Something went wrong, please try again later'
    })
    }
}


const getSingleBookById = async (req, res) => {};

const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);
    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: "book added",
        data: newBookFormData,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
        success:false,
        message:'Something went wrong, please try again later'
    })
  }
};

const updateBook = async (req, res) => {};

const deleteBook = async (req, res) => {};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
