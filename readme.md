# Assignment submission portal

This Assignment Submission Portal is a system that is used to facilitate the process of submission and management of assignments by both the users and the administrators. Students are able to upload their assignments, whilst administrators are able to accept or reject the submissions with the management system.

## Key Features

- **User Functionality**:

  - **Register**:Users can register by using a user Id and password.
  - **Login**: Users can log into their account using the registered user id and password
  - **Submit assignment**: User can submit their assignment.
  - **View assignment status**:User can view their assignment status, whether the assignment is accepted/rejected by the admin.

- **Admin Functionality**:
  - **Register**:Admin can register by using a user Id and password.
  - **Login**:Admin can log into their account using the registered user id and password
  - **Accept/Reject**:Admin can accept/reject the assignment tagged under his name.

## Technologies Used:

- **Node.js**
- **Express.js**
- **MongoDB**
- **mongoose**
- **swagger-jsdoc**
- **swagger-ui-express**
- **jsonwebtoken**
- **bcrypt**
- **dotenv**

## Installation:

**The installation steps are provided in the root folder as PDF inside the git repository**

#### Please Note: The user and admin data submission will be in json format.

## APIs:

- **Student**:

  - **Register API=> /students/register**: To register a new student

    - Conditions:
      - The userId must be unique
      - The userId cannot be be used by more than one users
        **example**:
        request

    ```json {
    "userId": "admin123",
    "password": "strongpassword123"
    }

    ```

  - **Login API => /students/login**: To log into the existing account

    - Conditions:
      - The user need to register before login
      - The user need to enter both the fields correctly to get the access. The user will get a jwt token in response, and for further requests jwt token is used for authentication.
        **example**:
        response

    ```json {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```

    - **Add assignment API=> /students/add-assignment**: To add assignments

      - Conditions :

        - The user must be logged in and have a valid jwt token to submit assignments
          **example**:
          request

        ```json {
        "task": "Math Assignment",
        "admin": "adminUser"
        }

        ```

    - **Get all assignments API=> /students/assignments**: To view all submited assignments

      - Conditions:
        - The User must be logged in to view the assignments
          **example**:
          respose
          ```json [
          {
              "userId": "67060cfb61e10d99d19fa913",
              "task": "Math Assignment",
              "admin": "growthXadmin",
              "_id": "67068bc91d8e59a498c121f5",
              "createdAt": "2024-10-09T13:57:29.842Z",
              "updatedAt": "2024-10-09T13:57:29.842Z",
              "__v": 0
                  }
          ]
          ```

    - **Get assignment status API=> /students/status/{id}**: To get the status of the selected assignment
      - Conditions:
        - The user must be logged in
        - The user must provide a valid assigment ID which is the **\_id** of the **GET /students/assignments** api
          **example**
          response
        ```json {
        "status": "Pending"
        }
        ```


