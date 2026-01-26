This is a personal website I created to showcase my web development ability as well as display my accomplishments.

To run:

* clone this repository
* run `npm install` while in the repository's directory
* to run in development mode with nodemon `npm run dev`, otherwise 
    * with node: `npm start`
    * with docker: `docker compose up -d`
* if no errors appear, access at http://localhost:3000/ by default

This was built with handlebars and express

To run on AWS:

* Install git `sudo yum install git -y`
* Clone the repository `git clone https://github.com/jackmcau/jackmcau.github.io.git`
* Run the commands
    * `cd jackmcau.github.io`
    * `chmod +x run_server.sh`
    * `./run_server.sh`
* To restart `./get_latest.sh`
