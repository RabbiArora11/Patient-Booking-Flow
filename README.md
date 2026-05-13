HOW TO RUN:
Step 1. Clone the repository by entering the command "git clone https://github.com/RabbiArora11/Patient-Booking-Flow.git" in the terminal.

Step 2. Navigate into the project by entering 'cd patient-booking' in the terminal.

Step 3. Install dependencies by entering 'npm install' in the terminal.

Step 4. Start the development server by entering 'npm run dev' in the terminal.

Step 5. Open the link provided to view the application

WHAT I MADE:
I have made a patient booking flow that replicates a clinic's scheduling system. This project is for both patients and doctors. Patients are able to book appointments where they can choose their doctor, time and provide a reason for their appointment as well as view their scheduled appointments, which they can cancel if they want. Doctors can view all the appointments that have been booked with them, and can approve or decline pending appointment requests or cancel appointments. 

WHAT YOU WILL SEE:
Once on the site, the user must sign in on the top right to continue. You must select whether you are a patient or a physician. From that point on, you log in with your credentials. After that, you will be directed back to the home screen, where you are shown the things you can do on this site. 
For patients, you will see the option to book an appointment or view your upcoming appointments. If you choose to book an appointment, you will be given a form to fill out. This form requires you to select a physician to see, select a date and time, enter the reason for your visit and optionally provide some extra notes. After booking the appointment, you will be taken to a page that tells you your appointment has been placed, and you can either head back to the home page, view your appointments or book another appointment. If you decide to view your appointments, you will be able to see all your pending, accepted and cancelled appointments along with their details, including the physician it is with, the date and time, your reason, any extra notes and the status of the request. Your appointment status can be either pending, accepted or cancelled. You will also have the option to cancel your appointments on this page. 
For Physicians, once logged in on the home page, you will see an option to view your bookings. On this page, you will see outgoing requests to book appointments as well as previously confirmed and cancelled ones. You will have the option to cancel any incoming appointment or previously booked appointment, as well as the option to accept pending requests. 
The user can go back to the home page by clicking on the Header (top left) or sign out and switch accounts by clicking the Sign out button on the top right at any time. 

GIVEN DATA:
As this is a demo, there is no backend connected to this app. All users (patients and physicians) as well as time slots for appointments are hard-coded values. There is also a set of pre-made appointments in the data that can be played around with. 

RESETTING DATA: 
This project stores the data locally, if you wish to forget any changes made and reset back to the originally given values, you must do so manually as such: 
Step 1: While on the website, right click on the screen
Step 2: Click Inspect Element
Step 3: Go to Applications
Step 4: Expand the Local Storage tab
Step 5: Right click on the website URL (Most likely http://localhost:5173/)
Step 6: Select Clear




