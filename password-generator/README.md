# Secure Password Generator

This is a web-based password generator that emphasizes security and usability. The generator employs several techniques to ensure strong and unpredictable password generation.

## Features

- Cryptographically Secure: Utilizes Crypto: getRandomValues() for randomness, ensuring generated passwords are not as predictable as using Math.random().
- Fisher-Yates Shuffle Algorithm: Implements the Fisher-Yates shuffle algorithm to further enhance the unpredictability of the hash value.
- Multiple Password Length Options: Users can choose between three different password lengths: 16, 20, or 24 characters, tailoring the generated password to their preferences.
- Responsive Design: The web app is fully responsive, ensuring a seamless experience across various devices and screen sizes.
- Copy to Clipboard: Includes a convenient 'Copy to Clipboard' function, allowing users to easily copy the generated password to use immediately.

## Technologies Used

- React and Vite: Built entirely using React for efficient component-based development and Vite for quick and optimized bundling.
- Libraries: Utilizes react-icons for icons and sha256 for hashing functionality.
