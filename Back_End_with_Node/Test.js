let books = {
  1: {"author": "Chinua Achebe","title": "Things Fall Apart", "reviews": {"User1": "Great Book all round"} },
  2: {"author": "Hans Christian Andersen","title": "Fairy tales", "reviews": {} },
  3: {"author": "Dante Alighieri","title": "The Divine Comedy", "reviews": {} },
  4: {"author": "Unknown","title": "The Epic Of Gilgamesh", "reviews": {} },
  5: {"author": "Unknown","title": "The Book Of Job", "reviews": {} },
  6: {"author": "Unknown","title": "One Thousand and One Nights", "reviews": {} },
  7: {"author": "Unknown","title": "Nj\u00e1l's Saga", "reviews": {} },
  8: {"author": "Jane Austen","title": "Pride and Prejudice", "reviews": {} },
  9: {"author": "Honor\u00e9 de Balzac","title": "Le P\u00e8re Goriot", "reviews": {} },
  10: {"author": "Samuel Beckett","title": "Molloy, Malone Dies, The Unnamable, the trilogy", "reviews": {} }
}

function temp(isbn) {
  const username = 'User1'
  if (isbn) { //Check isbn is valid
    let book = books[isbn];  
    if (book) {//Check isbn is a book in stock
      if (username in book.reviews) {
        delete book.reviews[username];
        console.log(`Your review for book ${isbn} has been deleted`);
      } else {
        console.log("You haven't made a review for this book");
      };
    } else {
      console.log("That book isn't stocked");
    };
  } else {
    console.log("ISBN has not been entered");
  };
};

temp(1)