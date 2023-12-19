# Netflix - GPT
Hey there! So, NetflixGPT? It's this cool web application that taps into the incredible potential of OpenAI's GPT-3 to totally level up your Netflix game.

### Personalized Recommendations:

- Get customized movie and TV show suggestions aligned with your interests and preferences.
Tailored recommendations to enhance your viewing experience.

### Natural Language Conversations:

- Engage in insightful conversations with the AI to explore new content or seek recommendations.
Fluid and natural interactions to discover personalized choices effortlessly.

### Detailed Information:

- Access comprehensive details about movies and TV shows, encompassing cast information, ratings, and synopses.
Dive deep into the specifics to make informed viewing decisions.

### Secure Authentication:

- User authentication managed through Firebase for robust security measures.
Ensures the safety and privacy of your data and interactions throughout the platform.

## Technologies Used
NetflixGPT is built using a combination of modern web technologies and services:

```React```: NetflixGPT is primarily built using React, a popular JavaScript library for building user interfaces.

```Tailwind CSS```: We have used Tailwind CSS for efficient and responsive styling, ensuring a seamless user experience across devices.

```Redux Toolkit```: Redux Toolkit helps manage the application's state, making it easier to handle complex data flows and state changes.

```Firebase```: Firebase is used for user authentication, ensuring secure access to personalized recommendations and conversation history.

```OpenAI GPT-3.5```: The heart of NetflixGPT is powered by OpenAI's GPT-3, which enables natural language understanding and conversation generation.


## Whats is done in this project:
- Create React App
- Configured Tailwind
- Header
- Routing of App
- Login Form (Sign In/Sign Up)
- Form Validation
- useRef Hook
- Firebase Setup
- Deployment our app to production
- Create SignUp User Account
- Implement Sign In user Api
- Created Redux Store with userSlice 
- Implement Sign out 
- Update Profile
- Bugfix: if the user is not logged in Redirect/browse to Login Page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Register TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for Main Container & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Youtube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie Card
- TMDB Image CDN URL
- Made the browser page amazing with Tailwind CSS
- usePopularMovies Custom hook
- GPT Search Page
- GPT Search Bar
- Multi-lang Feature in app
- Gpt Open AI Api key
- Gpt Search Api Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Reused movieList component to make movie suggestions contianer
- Memoization
- Added .env file
- Adding .env file to gitignore
- Made our Site Responsive

# Features
- Login/Sign up Form
- Redirect to Browse Page
- Browse {after authentication}
    - Header
    - Main Movie
        - Trailer in Background
        - Title and Description
        - Movie Suggestion
- Netflix GPT
     - Search Bar
     - Movie Suggestions 























# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
