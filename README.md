# E-commerce Platform with Firebase, Vite, Redux Toolkit, Tailwind CSS, Razorpay, and Google Authentication

[https://e-commerce-with-firebase.vercel.app/](https://e-commerce-with-firebase.vercel.app/)

This project is an e-commerce platform built using Firebase, Vite for fast development, Redux Toolkit for state management, Tailwind CSS for styling, Razorpay for payments, and Google Authentication for user sign-in. It also includes admin features, Redux DevTools for debugging, and testing email/password for admin login.

<img src="https://github.com/codespace555/E_commerce_with_Firebase/blob/main/public/screenshort/Screenshot%202024-03-26%20091611.png" alt="project-screenshot"  width="300" height="300 /"> <img src="https://github.com/codespace555/E_commerce_with_Firebase/blob/main/public/screenshort/Screenshot%202024-03-26%20091635.png" alt="project-screenshot" width="300" height="300/"> <img src="https://github.com/codespace555/E_commerce_with_Firebase/blob/main/public/screenshort/Screenshot%202024-03-26%20091654.png" alt="project-screenshot" width="300" height="300/"> <img src="https://github.com/codespace555/E_commerce_with_Firebase/blob/main/public/screenshort/Screenshot%202024-03-26%20091712.png" alt="project-screenshot" width="300" height="300/"> <img src="https://github.com/codespace555/E_commerce_with_Firebase/blob/main/public/screenshort/Screenshot%202024-03-26%20091758.png" alt="project-screenshot" width="300" height="300/"> <img src="https://github.com/codespace555/E_commerce_with_Firebase/blob/main/public/screenshort/Screenshot%202024-03-26%20091815.png" alt="project-screenshot" width="300" height="300/"> <img src="https://github.com/codespace555/E_commerce_with_Firebase/blob/main/public/screenshort/Screenshot%202024-03-26%20091931.png" alt="project-screenshot" width="300" height="300/"> <img src="https://github.com/codespace555/E_commerce_with_Firebase/blob/main/public/screenshort/Screenshot%202024-03-26%20091947.png" alt="project-screenshot" width="300" height="300/"> <img src="https://github.com/codespace555/E_commerce_with_Firebase/blob/main/public/screenshort/Screenshot%202024-03-26%20112309.png" alt="project-screenshot" width="300" height="300/">



## Features

- **Firebase Store**: Utilizes Firebase's database to synchronize product information, user data, and orders in FireStore.

- **Authentication**: Implements Firebase Authentication with Google Authentication for secure user sign-up and login.

- **Admin Features**: Includes special features accessible only to admin users, such as managing products and orders.

- **Redux Toolkit**: Utilizes Redux Toolkit for efficient state management, providing a predictable state container for the application.

- **Razorpay Integration**: Integrated Razorpay for handling payments securely.
  

## Installation

1. Clone the repository:
```
git clone https://github.com/codespace555/E_commerce_with_Firebase
```
2. Install dependencies:
   ```
   cd e-commerce-firebase
   npm install
   ```

3. Set up Firebase:

- Create a Firebase project at [Firebase Console](https://console.firebase.google.com).
- Enable necessary Firebase services like Realtime Database, Authentication, and Storage.
- Copy Firebase configuration settings into your project.
  
3. create .env File
```
VITE_API_KEY = ""
VITE_AUTH_DOMAIN =""
VITE_PROJECT_ID = ""
VITE_BUCKET_ID = ""
VITE_MESSAGINGSENDER_ID = ""
VITE_APP_ID = ""
VITE_MEASUREMENT_ID = ""
VITE_ADMIN_EMAIL = ""  
```
4. Configure Firebase:

- Replace the Firebase configuration in `.env` with your Firebase project configuration.

5. Run the application:
```
npm run dev
```

## Usage

- Register as a new user using Google Authentication or log in with existing credentials.
- Browse through the  products.
- Add desired products to the shopping cart.
- Proceed to checkout and complete the order using Razorpay.
- View order history and manage account settings.
- Access admin features using special admin credentials.

## Admin Login Credentials

- Email: admin@example.com
- Password: admin123

## Future Enhancements

- Implement personalized recommendations using Firebase ML Kit.
- Integrate Firebase Cloud Functions for serverless backend logic.
- Enhance the checkout process for a smoother user experience.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.



## Acknowledgements

Special thanks to Firebase for providing an excellent platform for building modern web applications. Also, thanks to the Vite, Redux Toolkit, Tailwind CSS, and Razorpay teams for their amazing tools and frameworks.

   



