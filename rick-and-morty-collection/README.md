תיעוד אפליקציית "Rick and Morty Character Collection"

אפליקציית "Rick and Morty Character Collection" 
מאפשרת למשתמשים לצפות, ליצור, לעדכן ולמחוק דמויות מהסדרה "Rick and Morty". 
האפליקציה פותחה באמצעות  ב Angular 17
בונוס: צפוי לפיתוח עתידי.

ארכיטקטורה
Components: כל קומפוננטה מוגדרת לטיפול בחלק מסוים של הממשק הגרפי.

CharacterListComponent: מציגה את רשימת הדמויות.
CharacterDetailComponent: מציגה פרטים על דמות בודדת.
CharacterCreateComponent: מאפשרת יצירת דמות חדשה.
CharacterEditComponent: מאפשרת עריכת דמות קיימת.
Services:

CharacterService: ניהול התקשורת עם ה-API ושמירת המצב המקומי של הדמויות.
Models:

Character: מודל המייצג דמות עם כל התכונות הרלוונטיות (כגון שם, מצב, תמונה).


Installation:

Open a terminal and type git clone <repository-url>, where <repository-url> is the repository address of the project.
Navigate to the project directory using cd rick-and-morty-collection.
Run npm install to install dependencies.
Start the project by running ng serve. Open your browser to http://localhost:4200.


Directory Structure:

src/app/components: This directory contains all the Angular components.
src/app/services: Contains services for handling API requests and business rules.
src/app/services::Interface


Certainly! Here's a detailed example of project documentation for your 'Rick and Morty Character Collection' application:

Project Documentation: 'Rick and Morty Character Collection'
1. Overview
   Purpose: The application aims to display and manage a collection of characters from the 'Rick and Morty' series, utilizing the official Rick and Morty API. Users can perform CRUD operations on characters, search for characters by name, species, and location, and save favorite characters in local storage.

Architecture: The application is built using Angular on the front end, with RxJS for state management and data flow. The Rick and Morty API serves as the primary data source.

2. Setup Instructions
   Prerequisites: Node.js and Angular CLI must be installed. Internet access is required to fetch data from the API.

Installation:

Open a terminal and type git clone <repository-url>, where <repository-url> is the repository address of the project.
Navigate to the project directory using cd rick-and-morty-collection.
Run npm install to install dependencies.
Start the project by running ng serve. Open your browser to http://localhost:4200.



   Directory Structure:

src/app/components: This directory contains all the Angular components.
src/app/services: Contains services for handling API requests and business rules.
src/assets: Images and other files.
Important Files and Modules:

app.module.ts: The root module of Angular, defining components and imported modules.
character.service.ts: A service that handles API calls to fetch, update, delete, and add new characters.
character.component.ts: Component responsible for displaying character details and handling user interactions.
 Front-end Documentation
   Components:

CharacterListComponent: Displays a list of characters, includes pagination and search functionalities.
CharacterDetailComponent: Shows detailed information about a single character, with options to edit or delete a character.
Services:

CharacterService: Manages API interactions for retrieving and manipulating character data using RxJS operators like switchMap and mergeMap.
Styling:

Discusses the SCSS structure and CSS standards, including responsive design principles and advanced CSS features used in the project.


 API Documentation
   Endpoints:

GET /api/characters: Fetches a list of characters.
POST /api/characters: Adds a new character.
PUT /api/characters/{id}: Updates an existing character.
DELETE /api/characters/{id}: Deletes a character.

