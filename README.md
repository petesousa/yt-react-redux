
## YouTube Clone on React and Redux-Saga

This web app was created for the solely purpose of displaying my current skills as a React developer and does not in any way pretend to be associeated with YouTube.

### Techniques Used

React
Redux-Saga
React Router
CSS Modules
Layout focused on CSS Grid

### Getting Started

If you clone this repository the app won't work right away because the file with the YouTube API credentials is not present.

To make it work, create a file called ytApi.js on the directory /src/sagas with the following content and insert your API key.

```
const credentials = {
  apiKey: 'YOUR_API_KEY_HERE'
}

export default credentials
```
