SafeAid Project
Overview
SafeAid is a comprehensive web-based application designed to enhance emergency response by providing real-time access to resources and community updates. It features a robust frontend for user interaction, a backend for data management, and a detailed report with diagrams and documentation. This project leverages modern technologies to bridge the gap between affected individuals and aid providers, supporting features like user authentication, resource management, update submissions, and admin oversight.
Features

Frontend: Interactive user interface for resource browsing, update submissions, and account management.
Backend: RESTful API for data handling, authentication, and admin functionalities.
Report: Includes Level 0 and Level 1 DFDs, sequence diagram, use case diagram, schema design, conclusion, future scope, and enhancements, with embedded images.
Scalability: Supports offline mode, multilingual support, and potential integrations with emergency portals.

Project Structure

frontend/: Contains React-based frontend code.
backend/: Contains Node.js/Express-based backend code.
SafeAid_Report.pdf: Compiled LaTeX report with diagrams and writings.
README.md: This file.

Prerequisites

Node.js: For frontend and backend development (download from nodejs.org).
npm: Included with Node.js.
Git: For version control.
Text Editor: e.g., VS Code, IntelliJ, or Overleaf.

Installation and Setup
Backend

Navigate to the backend/ directory:
cd backend


Install dependencies:
npm install


Set up environment variables (e.g., database credentials) in a .env file based on .env.example (if provided).

Start the server:
npm start



Frontend

Navigate to the frontend/ directory:
cd frontend


Install dependencies:
npm install


Start the development server:
npm start


This opens the app in your browser (usually at http://localhost:5000).



Usage

Application: Access the frontend at http://localhost:5000 after starting both backend and frontend. Use it to manage resources, submit updates, and view analytics (admin features require login).
Report: Review SafeAid_Report.pdf for system design details, including diagrams and textual content.
Development: Extend the codebase by adding features or modifying the schema based on the report.

Contributing

Fork the repository.
Create a branch (git checkout -b feature-branch).
Commit changes (git commit -m "Add new feature").
Push to the branch (git push origin feature-branch).
Open a pull request.

License
This project is open-source under the MIT License (see LICENSE file or add one).
Contact

For questions or contributions, contact your.email@example.com.
GitHub: github.com/yourusername

Acknowledgements

Inspired by emergency management needs and community resilience strategies.
Utilized resources from MERN Stack Development Guide (2023) and Journal of Crisis Response (2024).
