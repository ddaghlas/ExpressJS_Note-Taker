# Note Taking Application Using Express.js

## Deployed Link:

## Description
- As a developer, my task was to modify starter code to create an application called Note Taker that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file.
- The application’s front end had already been created. My job was to build the back end, connect the two, and then deploy the entire application to Heroku.
- I added a DELETE route to the application using `DELETE /api/notes/:id` that will receive a query parameter containing the id of the note to delete. The route will read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file. This displays an empty column on the left, free of saved notes. 
- I created two HTML routes that will GET and return the data from both `.html` files. An API route was created to read the `db.json` file and return all saved notes as JSON.
- An API to POST the notes was created to receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client (machine). This is where the `uuid npm package` was utilized, creating a unique id for each new note saved.
- This Note Taker application can be used by a business owner, for example, to write and save notes and to keep track of tasks to complete. 


  ## Table of Contents
  * [Usage](#usage)
  * [DEMO App Images](#Screenshots)
  * [Built With](#Built-With)
  * [License](#license)
  * [Questions](#questions)


## Prerequisites
- [Node.js](https://nodejs.org/en/)

## Usage
- The application has a `db.json` file on the back end that will be used to store and retrieve notes using the `fs` module.
- GIVEN a note-taking application, WHEN a user opens the Note Taker, THEN they are presented with a landing page with a link to a notes page. WHEN the user clicks on the link to the notes page, THEN they are presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column. WHEN the user enters a new note title and the note’s text, THEN a Save icon appears in the navigation at the top of the page. WHEN the user clicks on the Save icon, THEN the new note they have entered is saved and appears in the left-hand column with the other existing notes. WHEN the user clicks on an existing note in the list in the left-hand column, THEN that note appears in the right-hand column. WHEN the user clicks on the Write icon in the navigation at the top of the page, THEN they are presented with empty fields to enter a new note title and the note’s text in the right-hand column.


## Screenshots




## Built-With
- JavaScript
- Node.js
- Node Packages:
  * Express.js

## License


ISC


---


  ## Questions?
  
  For any questions, please contact me with the information below:

  GitHub: [@ddaghlas](https://api.github.com/users/ddaghlas) 

