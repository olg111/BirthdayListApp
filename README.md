# Birthday-list-app
This application allows the user to make a list of birthdays and mark who should be congratulated and who should be given a gift.

It consists of two parts - Server and Client. The Server and Client must be running for the application to work.

## Server 
- To start the Server, you need to open a terminal, go to the appropriate directory and run the command ```npm run server```. 

- Server will be launched in http://localhost:4000.
- The application uses `Faker` to generate initial dataset that will be stored in `db.json` file.
You can do it via running the command `npm run generate`. It will reset the all changes user did and creates new initial data.

- The data added by the user will be placed in the same file.

- The `json-server` package is in use in order to simulate rest server. 


## Client
- To start the Client, you need to open a terminal, go to the appropriate directory and execute the command `npm start`.
- Client will be served available via http://localhost:3000.


![Alt text](client/images/Birthday%20list.png)

- Using the panel Add new birthday, you can add new people to the list.
- By clicking on the name, you can add or remove the gift icon. The presence of a gift icon indicates that this person should be given a present.
- By clicking on the message icon, the person's name changes color to red. This means that for this person you need to write a congratulation.
- You can remove a person from the list by clicking on the trash icon.

- Search panel allows you to sort the list into three categories: gifts, congratulations, date.


