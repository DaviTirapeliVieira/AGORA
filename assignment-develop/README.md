# Ágora SPA Project

This is the front-end project for the Ágora. It works as the client-side application and connects to the [Ágora API] for backend functionalities, including user authentication, data management, and other API services.

---

### Prerequisites

To run and develop the project, ensure the following tools are installed:

- [Node.js (>= 16.x)](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (package manager)
- [Vite](https://vitejs.dev/) (for development and build tools)

---

### Installation

#### 1. Clone the Repository
Clone the project repository from GitHub:

```bash
git clone https://github.com/DaviTirapeliVieira/AGORA && cd assignment
```

#### 2. Install Dependencies
Install the required packages using `npm` or `yarn`:

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

#### 3. Configure Environment Variables
Create a `.env` file in the project root by copying the example file:

```bash
cp .env.example .env
```

Update the `.env` file with the appropriate API base URL for the Agora API:

```env
VITE_API_BASE_URL=http://localhost:3000/
```

---

### Running the Application

#### Development Mode
Start the development server with hot-reloading:

```bash
# Using npm
npm run dev

# Or using yarn
yarn dev
```

The application will be accessible at `http://localhost:5173`.

#### Production Build
To build the application for production:

```bash
# Using npm
npm run build

# Or using yarn
yarn build
```

Preview the production build locally:

```bash
# Using npm
npm run serve

# Or using yarn
yarn serve
```

---

### Project Structure

Here’s an overview of the project directory structure:

```
.
├── src                 # Application source code
│   ├── app             # Application core (store, routing, etc.)
│   ├── components      # Reusable UI components
│   ├── pages           # Page-level components for routing
│   ├── logic           # Business logic (Redux slices, sagas, API calls)
│   ├── templates       # Layout templates
│   ├── config          # Configuration files
│   ├── utils           # Utility functions
│   ├── main.jsx        # Entry point of the app
│   └── main.scss       # Global styles
├── public              # Static assets (favicon, manifest, etc.)
├── plop-templates      # Templates for code generation
├── .env.example        # Example environment variables
├── package.json        # Project metadata and scripts
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```

---

### Available Scripts

The project includes several scripts for development and build tasks:

- **`npm run dev`** / **`yarn dev`**: Starts the development server.
- **`npm run build`** / **`yarn build`**: Builds the application for production.
- **`npm run serve`** / **`yarn serve`**: Previews the production build locally.
- **`npm run test`** / **`yarn test`**: Runs the unit tests using Vitest.
- **`npm run lint`** / **`yarn lint`**: Lints the codebase (JavaScript, styles, Prettier).
- **`npm run fix`** / **`yarn fix`**: Fixes linting issues automatically.
- **`npm run plop`** / **`yarn plop`**: Generates boilerplate code using Plop.

---

### Redux Ducks Pattern

The Redux Ducks Pattern organizes Redux-related code into modular "ducks," improving structure and maintainability. Each "duck" encapsulates the following:

1. **Actions**:
   Define all actions for a specific domain in one file. For example:
   ```javascript
   export const FETCH_USERS = 'users/FETCH_USERS';
   export const ADD_USER = 'users/ADD_USER';
   ```

2. **Reducers**:
   Include the reducer logic directly in the duck file. For example:
   ```javascript
   const initialState = { users: [] };
   export default function reducer(state = initialState, action) {
       switch (action.type) {
           case FETCH_USERS:
               return { ...state, users: action.payload };
           default:
               return state;
       }
   }
   ```

3. **Action Creators**:
   Define action creators for dispatching actions:
   ```javascript
   export const fetchUsers = (users) => ({
       type: FETCH_USERS,
       payload: users,
   });
   ```

4. **Sagas (if using redux-saga)**:
   Include domain-specific side effects in the same duck file for simplicity.

This pattern helps reduce boilerplate by combining actions, reducers, and related logic in a single file, promoting modularity and scalability.

---

### Atomic Design Pattern

The Atomic Design Pattern structures UI components into five distinct levels:

1. **Atoms**:
   The smallest building blocks of the interface, such as buttons, inputs, or labels.
   - Example: A `<Button />` component.

2. **Molecules**:
   Combinations of atoms to create more functional components.
   - Example: A `<SearchBar />` composed of an input and a button.

3. **Organisms**:
   Complex, reusable structures combining molecules and atoms.
   - Example: A `<Header />` component containing a logo, navigation menu, and a search bar.

4. **Templates**:
   Layouts combining organisms to define page structures.
   - Example: A dashboard template with a header, sidebar, and content area.

5. **Pages**:
   Fully realized screens using templates with real data.
   - Example: The login page populated with authentication logic.

This approach ensures consistency, reusability, and scalability across the UI by separating components into hierarchical layers.

---

### Troubleshooting

- **API Errors**: Ensure the `VITE_API_BASE_URL` in your `.env` file points to a running instance of the [Assignment API](https://github.com/joaopschias/assignment-api).
- **Port Conflicts**: Change the development server port in `vite.config.js` if `5173` is already in use.
- **Style or Lint Errors**: Run `npm run fix` / `yarn fix` to auto-fix issues.

---

### License

This project is licensed under the MIT License.

