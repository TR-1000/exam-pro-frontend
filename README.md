# [examPro App](http://exam--pro.s3-website.us-east-2.amazonaws.com/)
This application is intended for any Organization or teacher to test their candidates or students’ knowledge of a specific topic such as Java, Python, SQL, General knowledge, English etc. This application utilizes and Java REST API on the backend and React on the frontend.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

This application will help to generate multiple choice quiz and evaluate candidate’s knowledge. Also, this application will allow subscribers to take mock exam.

## Users interaction

Users can:
- Log in
- View their info
- Take a mock exam
- Log out

## [API](https://github.com/TR-1000/examProBdApp)
This application utilizes a REST API built in Java and is hosted on an EC2 instance connected to a PostgreSQL RDS database.

##### Endpoints
- POST: /login
- GET: /user/info
- GET: /take/quiz
- GET: /logout

## Technologies
- React
- AWS
- Jenkins

## Deployment
- Deployed to AWS S3
- Java backend hosted on EC2
- Jenkins CI/CD process for backend & frontend
