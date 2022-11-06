# Great Portland Street Stops Api

This app downloads the latest times for the Great Portland Street tube station. There is the ability to sort on the Line, Destination, Platform, Direction and Expected Arrival fields. The data is refreshed from its TFL source every 5 seconds. It is written in C# and JavaScript.

To run the app browse to http://localhost:500 after executing the commands below:

```

git clone https://github.com/matthewblott/great-portland-street/
cd great-portland-street/api
dotnet run

```

Both the .NET 6.0 runtime and Git need to be installed. Node must be installed if you wish to rebuild the client app.

To rebuild the client Svelte app:

```
cd great-portland-street/www
npm install
npm run build

```
