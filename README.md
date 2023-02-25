# J-Rock Music Lessons Frontend 
<!-- stage -->


## Description

The J-Rock Music Lessons is an App that allows students to sign up for music lessons. During sign up the student can pick which teacher they want to conduct lessons with. Fortunately, our teachers are multi talented Rock musicians, so if the student changes their mind on what Intrument they want to play, they have the ability to do so while keeping the same teacher for the Semester. Since, the school is a ever growing business, the app has the ability to hire new teachers. Everytime a student signs up, they will have that ability to pick the  hired teachers. Lastly, if the student wants to cancel lessons, they can go ahead and delete themselves from the student page. 

## Installation
In the terminal create a new directory with new file name. Once you are in the file of the new directory, run this command:  
npx-create-react-app file name    
*type the command followed by the file name of your choice.*  
*CD into new file*

After creating the app, you need to add the package Dependencies with the following command:

npm install react-router-dom@5

## Project Startup:

### Start App
In the project directory located at "phase-3-project", cd into "jareds-project-frontend"
  then run the following command: NPM Start 

  *SIDE NOTE: To see start up work properly, you need to run through project startup of the backend first*


## Usage  

Add  db.json file to create your own json-server with an array of objects and key/pairs. 
Two models using CRUD
Teachers:
* GET Request: "http://localhost:9292/teachers"  
* POST Request: "http://localhost:9292/teachers"  

Students (FULL CRUD)
* GET Request: "http://localhost:9292/students" 
* POST Request: "http://localhost:9292/students"  
* PATCH Request: "http://localhost:9292/students/${student.id}"  
* DELETE Request: "http://localhost:9292/students/${student.id}"  




## ToDo's  
* More CSS work 
* Route to display students when clicking on certain teacher ID 
* Fix bugs 
* Add a reviews/comments section 

## Credit
Patch work frontend:
https://github.com/ihollander
https://github.com/learn-co-curriculum/react-hooks-practice-pizza/tree/solution



