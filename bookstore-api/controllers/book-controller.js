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


const getSingleBookById = async (req, res) => {
    try{
        const getCurrentBookId=req.params.id;
        const bookDetailsById= await Book.findById(getCurrentBookId);
        if(!bookDetailsById){
            return res.status(404).json({
                success:false,
                message:'Book couldnt be found, please try again with different id'
            })
        }
        res.status(201).json({
            success:true,
            message:"book found",
            data:bookDetailsById,
        })
    }
    catch(e){
        console.log(e)
        res.status(500).json({
            success:false,
            message:'Something went wrong, please try again later'
        })
    }
};

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

const updateBook = async (req, res) => {
  try {
    const updatedBookFormData = req.body;
    const getCurrentBookID = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(
      getCurrentBookID,
      updatedBookFormData,
      {
        new: true,
      }
    );

    if (!updatedBook) {
      res.status(404).json({
        success: false,
        message: "Book is not found with this ID",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

const deleteBook = async (req, res) => {
  try{
    const getCurrentBookID=req.params.id;
    const deleteBook=await Book.findByIdAndDelete(getCurrentBookID)
    if(deleteBook){
      res.status(200).json({
        success:true,
        message:"book deleted successfully",
        data:deleteBook
      })
    }
    res.status(404).json({
      success:false,
      message:"couldnt delete book, please try with different id",
    })
  }
  catch(e){
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
