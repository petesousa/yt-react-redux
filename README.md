This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This app was created to display my skills as a React developer. If you clone this repository the app won't work because the file with the YouTube API credentials is not present. If yout want to make it work, create a file called ytApi.js on the directory /src/sagas with the following content and insert your API key.

const credentials = {
  apiKey: 'YOUR_API_KEY_HERE'
}

export default credentials
