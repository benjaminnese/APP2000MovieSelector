For å installere og kjøre koden. 
Ikke push før komplierer

1. I terminal CD til root mappen
2. npm install
3. "CD client"
4. npm install
5. "CD .."
6. "npm run dev"
7. I config mappen, opprett filen dev.js

8 Skriv inn med egen nøkkel
```javascript
 module.exports = {
    googleClientID: '495370301328-enj7n41j4lkmpdutu1ee8o1bielsse81.apps.googleusercontent.com',
    googleClientSecret: 't9Oy5I5Ighj2h0pSDn9t-euP',
    mongoURI: 'mongodb+srv://benjamin:sI8rt7qaMGC6ubuW@moviedbdev.tsztr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    cookieKey: 'regregegrerge',
    redirectDomain: 'http://localhost:3000'
 }
