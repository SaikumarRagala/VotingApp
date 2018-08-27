This app is to vote for your favouite trending technologies. 

Steps to run the Voting APP

1) Install mongodb in your local machine and start the mongo server
2) Create a DB named "Voting" and create a collection called "technologies".
3) In that collection, insert the record with following content : 
{
	"_id" : "Tech",
	"ML" : 0,
	"Blockchain" : 0,
	"Serverless" : 0,
	"AR" : 0
}
4) Unzip the code folder and open the command prompt
5) Run following command "npm install", which will install all the dependencies needed to run the app
6) Then run the command  "nodemon" to run your application in local machine
7) Open the url "http://localhost:3000" in  your browser
8) first register two users, one with username "admin" and another with username as your wish.
9) when the user login with admin, he will be directed to Dashboard which shows the table of votes polled
10) when the user login with other name, he will be directed to voting page, where he can vote fot the technologies.