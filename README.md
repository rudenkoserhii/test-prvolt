# Project Name

## ToDo List Application

A simple ToDo List application built with React and Redux for state management.

### Features

- **Add a New Record:** Users can add a new task to the list.

- **Character Limitation:** A new record is added only if its length is less than or equal to N characters.

- **Display List:** Displays a list of added records.

- **Task Status Toggle:** Clicking on a task's name switches its status between Completed and Not Completed.

- **Filter by Type:** Users can filter tasks based on their type (All, Completed, Current).

- **Task Counter:** Displays the count of completed and uncompleted tasks.

- **State Management:** Utilizes Redux for state management.

- **Linter:** The project adheres to the [wemake-frontend-styleguide](https://github.com/wemake-services/wemake-frontend-styleguide).

### Tech Stack

- React
- Redux
- TypeScript
- Flowbite-React (for styling)
- @react-spring/web
- Redux Toolkit
- React-Redux
- Tailwind CSS
- TypeScript

### Project Structure

The project follows a modular structure:

- **`src/components/`**: Contains React components.
- **`src/redux/`**: Manages Redux-related files (actions, reducers, slices).
- **`src/helpers/`**: Holds utility functions for data manipulation.
- **`src/types/`**: Defines TypeScript types/interfaces.

### Setting Up the Project

1. Clone the repository:

   ```bash
   git clone <repository-url>


2. Install dependencies:

    ```bash
    cd project-directory
    npm install

3. Start the development server:

    ```bash
    npm start

4. Scripts
 - npm start: Starts the development server.
 - npm build: Builds the production-ready application.
 - npm run lint: Runs the linter to enforce code style.

5. Dependencies
 - @react-spring/web
 - @reduxjs/toolkit
 - flowbite-react
 - react
 - react-dom
 - react-redux
 - react-scripts
 - redux-persist
 - tailwindcss
 - typescript

6. Dev Dependencies
 - @typescript-eslint/eslint-plugin
 - @typescript-eslint/parser
 - @wemake-services/eslint-config-javascript
 - @wemake-services/eslint-config-typescript
 - autoprefixer
 - prettier