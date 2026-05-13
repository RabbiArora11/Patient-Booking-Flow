HOW TO RUN:
Step 1. Clone the repository by entering the command "git clone https://github.com/RabbiArora11/Patient-Booking-Flow.git" in the terminal.

Step 2. Navigate into the project by entering 'cd patient-booking' in the terminal.

Step 3. Install dependencies by entering 'npm install' in the terminal.

Step 4. Start the development server by entering 'npm run dev' in the terminal.

Step 5. Open the link provided to view the application

WHAT I MADE:
I have made a patient booking flow that replicates a clinic's scheduling system. This project is for both patients and doctors. Patients are able to book appointments where they can choose their doctor, time and provide a reason for their appointment as well as view their scheduled appointments, which they can cancel if they want. Doctors can view all the appointments that have been booked and can approve or decline pending appointment requests or cancel appointments. 

GIVEN DATA:
As this is a demo, there is no backend connected to this app. All patients and physicians, as well as the time slots for appointments, are hard-coded values. There is also a set of pre-made appointments in the data that can be played around with. 

RESETTING DATA: 
This project stores the data locally. If you wish to forget any changes made and reset back to the originally given values, you must do so manually as such: 
Step 1: While on the website, right click on the screen
Step 2: Click Inspect Element
Step 3: Go to Applications
Step 4: Expand the Local Storage tab
Step 5: Right click on the website URL (Most likely http://localhost:5173/)
Step 6: Select Clear

KEY DECISIONS:
For this project, I chose to use  React for frontend development alongside Tailwind to simplify the CSS. I did this because I didn't have as much experience with React as I do with other frameworks and thought this would be the perfect opportunity to increase my skills through a project. This proved to be very challenging, especially when combined with the tight deadline, but I was still able to complete a  product that I could be proud of. This was also my first time using Tailwind but I had read that it is a great option to streamline CSS development, very effectively, so I thought I'd give it a try. 

TECHNICAL/PRODUCT DECISIONS: 
Data Storage: I used localStorage for storing bookings and user data so I could maintain the data through page refreshes.
Global Variables: I used React Context API to manage and manipulate data throughout the project. 
Simplified Login: I separated Sign in for patients and physicians so there can be different forms/levels of verification added later on. I also had hard coded data consisting of all emails of all users that you'd select from a dropdown rather than type out yourself to simplify the process even more. There is also no password needed to sign in. 
Overlapping Schedules: I implemented a system to not allow one physician to have multiple appointments booked at the same time.








