# Zerktis Health Platform

## Overview

Zerktis is an innovative healthcare platform developed during the FrostHacks hackathon. It aims to streamline the connection between patients and pharmacies, optimizing the traditional booking system. The platform enhances user experience with AI-driven assistance, navigation, and multilingual support.

## Features

### 1. Main Website

- **User Authentication**: Secure signup and login functionalities for patients.
- **Doctor Search**: Browse and filter doctors by department or specialty.
- **Appointment Booking**: Schedule appointments with preferred doctors.
- **Payment Integration**: Seamless payment processing through Stripe.
- **Admin Panel**: Administrators can monitor and update booking statuses.

### 2. AI-Based Chatbot

- **Real-Time Assistance**: Offers immediate answers to common patient inquiries.
- **Navigation Aid**: Helps users efficiently navigate the platform.

### 3. Hospital Navigation System

- **Shortest Route Finder**: Employs Mapbox API to determine the quickest path from the user's location to the selected hospital.

### 4. Multilingual Support

- **Diverse Language Options**: Provides platform access in over 40 languages, catering to a global audience.

## Installation and Setup

To set up the Zerktis platform locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/aditya-ghosh2992/frosthack-zerktis.git
   cd frosthack-zerktis
   ```

2. **Navigate to the Main Website Directory**:
   ```bash
   cd Main\ Website
   ```

3. **Install Dependencies**:
   Ensure you have Node.js and npm installed. Then, run:
   ```bash
   npm install
   ```

4. **Configure Environment Variables**:
   Create a `.env` file in the root directory with the following variables:
   ```env
   STRIPE_API_KEY=your_stripe_api_key
   MAPBOX_API_KEY=your_mapbox_api_key
   ```

5. **Start the Application**:
   ```bash
   npm start
   ```
   The application will be accessible at `http://localhost:3000`.

## Usage

- **Access the Platform**: Navigate to `http://localhost:3000` in your browser.
- **Sign Up or Log In**: Create a new account or log in with existing credentials.
- **Explore Features**:
  - Use the AI chatbot for assistance.
  - Search for doctors and book appointments.
  - Utilize the hospital navigation system for directions.

## Project Structure

```
frosthack-zerktis/
├── AI-bot/
│   ├── ...
├── Hospital Tracker/
│   ├── ...
├── Main Website/
│   ├── admin/
│   ├── user/
│   ├── backend/
│   ├── ...
├── .gitignore
├── LICENSE
├── README.md
```

- **AI-bot/**: Contains code for the AI-based chatbot.
- **Hospital Tracker/**: Includes the hospital navigation system implementation.
- **Main Website/**: Houses the main website's frontend and backend code.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **APIs**: Stripe API for payments, Mapbox API for navigation
- **AI**: Natural Language Processing for chatbot functionality

## Developers

This project was collaboratively developed by a team of four passionate developers:

- **Aditya Ghosh**: [GitHub Profile](https://github.com/aditya-ghosh2992)
- **Developer 2**: [GitHub Profile](#)
- **Developer 3**: [GitHub Profile](#)
- **Developer 4**: [GitHub Profile](#)

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/aditya-ghosh2992/frosthack-zerktis/blob/main/LICENSE) file for details.

## Acknowledgements

We extend our gratitude to the organizers of FrostHacks for providing this opportunity and to the open-source community for their invaluable resources and support.

## Demo Video

[![Watch the Demo](https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg)](https://youtu.be/vtcKJE6o3-g))

---
