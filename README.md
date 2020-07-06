# Employee Management App:

An app which is lets you manage users of an organization. It lets admin manage users and their permissions of following actions:

    • Add an Employee
    • View list of Employees
    • Delete Employee
    • Update Employee

It mainly consists of two roles:

    • User  - User can perform actions based on permissions granter by the admin.
    • Admin – Admin can perform all actions which a user can and grant permissions to user.

Procedure to use:

    • One admin is already defined for the app with credentials as follows:
            ▪ email: admin123@gmail.com
            ▪ password: admin123

    • The app initailly loads with a login screen. Login using above admin credentials if any other user is not created or you can login with any login credentials of user created by you.

    • Also you can register yourself as a user. By default user can only view the list of employees. Other permissions can be provided by the admin.

    • Once a user is logged in the dashboard consists of a Navigation bar which consists of Home, Add New User and a logout button.

    • Dashboard also consists of 2 Tabs. “Your Details” tab displays data of current logged in user. “Employee List” displays the list of employees if the user has the permission to view the list.

    • If the logged in user has permissions to update and delete the employee details the user can update and deleter the employee details from Employee list tab by clicking a particular employee from the list.

    • By clicking on Update button of a particular employee, user can update the details and permissions.

    • User can only update basic information of an employee while admin can update basic information and permissions of the user.

    • If user has permission to add a new employee user can add an employee from the “Add Employee” tab in the navigation-bar.
    
 # Get Starterd:
    • Clone the repository in your local system

    • In 'front-end' folder run npm-install to install all the dependencies and npm-start to run the front-end i.e react.js server.

    • In 'back-end' folder run npm-install to install all the dependencies and node server.js to run the back-end server.

## Screenshots:

<img src="/screenshots/login-page.png" width="100%" height="500">
<img src="/screenshots/home-page.png" width="100%" height="500">
<img src="/screenshots/employee-list.png" width="100%" height="500">
<img src="/screenshots/add-employee.png" width="100%" height="500">
<img src="/screenshots/update-page.png" width="100%" height="500">

Tech Stack:
    • React.js.
    • Node.js.
    • React Bootstap.
    • Mongo DB.
