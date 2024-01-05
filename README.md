# Emotion Detector Server Application

This server application is designed to be used in conjunction with a mobile application. It employs various third-party APIs to process images sent by the client and generates a collection of emotional images based on the input image.

## Technologies Used

- Node.js
- Nest.js
- Axios for HTTP requests
- Swagger for API documentation

## Features

- **Image Processing**: Accepts image uploads from the client and processes them to derive emotional data.
- **Third-Party API Integration**: Utilizes various APIs for image analysis and emotion detection.
- **Swagger Documentation**: Provides detailed API documentation through Swagger for easy reference and usage.

## Installation

### Prerequisites

- Node.js and npm installed
- API keys for third-party services 

### Steps

1. Clone the repository: `git clone https://github.com/Makstorm/emotion-detector-server.git`
2. Install dependencies: `cd emotion-detector-server && npm install || yarn install`
3. Set up API keys for third-party services in the configuration files.
4. Start the server: `npm run start`

## Usage

### API Documentation

- Access the Swagger documentation at `/api/docs` to explore available endpoints and their usage.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
