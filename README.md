API Endpoints 

1. POST /api/notes
Create a new note.

Request Body: { "title": "string", "content": "string" }
Response: 201 Created with the created note.

2. GET /api/notes
Retrieve all notes.

Response: 200 OK with a list of notes.

3. GET /api/notes/:id
Retrieve a specific note by ID.

Response: 200 OK with the note, or 404 Not Found if the note does not exist.

4. PUT /api/notes/:id
Update a specific note by ID.

Request Body: { "title": "string", "content": "string" }
Response: 200 OK with the updated note, or 404 Not Found if the note does not exist.

5. DELETE /api/notes/:id
Delete a specific note by ID.

Response: 200 OK with a deletion confirmation, or 404 Not Found if the note does not exist.



