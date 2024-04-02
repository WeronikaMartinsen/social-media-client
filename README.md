# CA Workflow

Welcome to the Quality Improvement Project! 🚀

In this project, we aim to enhance the quality of an existing application by implementing efficient development workflows and a robust testing strategy. The application features a front-end login form connected to an API JWT endpoint, a logout button connected to browser storage, CRUD functionality for at least one object type, and a profile page.

Using the skills and knowledge acquired in this course, our mission is to establish helpful workflows that streamline the development process and elevate the overall quality of the application.

## Checklist

- [x] **Completed**: I have chosen an existing application package that meets the requirements
- [x] **Completed**: I have forked this repository to my own GitHub username.
- [x] **Completed**: I have created a new branch called `workflow`.
- [x] **Completed**: I have performed the required changes.
- [x] **Completed**: I have opened a Pull Request into the fork's default branch.
- [x] **Completed**: I have requested review from my peers.
- [x] **Completed**: I have reviewed work from my peers.
- [x] **Completed**: I have delivered an open PR link on Moodle.

### Unit Testing

- **The login function stores a token when provided with valid credentials**
- **The logout function clears the token from browser storage**

### E2E Testing

- **The user can log in with the login form with valid credentials**
- **The user cannot submit the login form with invalid credentials and is shown a message**
- **The user can log out with the logout button**

## Installation

To install and run this project locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/WeronikaMartinsen/social-media-client
   ```

2. Navigate to the project directory:

   ```bash
   cd your-project
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

## Cypress Tests

1. Run the following command to start Cypress:

   ```bash
   npm run test-e2e
   ```

## Jest Jest

1. Run the following command to start Cypress:

   ```bash
   npm run test-unit

   ```