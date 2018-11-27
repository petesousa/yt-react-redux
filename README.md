
# YouTube Clone on React and Redux-Saga

This app was created to display my skills as a React developer. 

## Getting Started

If you clone this repository the app won't work right away because the file with the YouTube API credentials is not present.

To make it work, create a file called ytApi.js on the directory /src/sagas with the following content and insert your API key.

```
const credentials = {
  apiKey: 'YOUR_API_KEY_HERE'
}

export default credentials
```
