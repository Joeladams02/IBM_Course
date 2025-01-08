
<h2 align = 'center'>
This is the fifth module of the IBM Course and covers the server side with node.js and express</h2>
<ol>
<li>The first lab completed in this module was the first server project. In the http_server folder of the CD220labs I worked on the index-with-require.js file, along with the today.js file. This project introduced me to using the http package to listen and respond to http requests. I created a local server on port 8080 and then returned to the user a greeting message dependent upon the time of day it was. This also practiced creating a module of our own (today.js) and importing it's functionality into the main index file.</li>
<li>Secondly, I practiced some asynchronous code in the promises project. The first half of the code used the promises and nested .then() to ensure the two functions execute concurrently, but are logged in the correct order. The second half of the script uses the async/await syntax. This provides a more readable way of writing the same fucntionality.</li>
<li>The third lab was unusual as all the code was pre-written, and I spent some time going through each file to view the different ways asynchronous tasks can be performed They are to be found in the async_callback folder of CD220labs. These files included ones for asynchronous I/O requests using fs.readFile, explicitly using promises, and the use of Axios for HTTP client requests. I have kept these files here for future reference as a handy resource.</li>
<li>The fourth lab is to be found in the firstserver directory and involved using a simple server with a few different endpoints. All the endpoints in users.js were written by myself and provide CRUD capabilities to the users.</li>
<li>The fifth lab was similiar to the third with the code pre-written and can be found in the expressjs folder within cd220labs. 
  <ul><li>We began with the expressServer.js file which created a very simple Server initially with 4 end-points. I added a fifth end-point which allowed me to pass a number as a parameter and fetched the corresponding month.</li>
    <li>This was followed with the expressAppLevelMiddleware.js which used a very simple password based authentication. If the incorrect password is sent as a query, the user is not allowed to access the endpoint.</li>
    <li>I then used the expressWithAuthentication.js. This allowed users to register by passing username and password as query parameters. It checks if the user has aready registered and then allows them to login. Upon logging in, they can access the auth/get-message endpoint.</li>
    <li>The next script was expressRouting.js amd gave a simpe example of a couple of routers, each with different middleware employed.</li>
    <li>Then I looked at expressStaticPages.js and saw how it locates and renders a html document. I also added my own html document from when I was learning front end and rendered that.</li>
</ul>
</ol>
<h3 style="font-size: 2em;">Final Project</h3><p>The final project is the expressBookReviews. This was almost entirely coded by me with just the skeleton put together for us to fill in. This included creating PUT, POST, GET and DELETE requests to register, login, and then search for the info in different ways and leave a review. Token based authentication was employed and I worked with promises for all the GET requests to minimise loading times if the app were to be scaled.</p>
</html>

