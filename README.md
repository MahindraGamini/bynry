# Profile Explorer

## Overview
Profile Explorer is a responsive React application designed to manage and display user profiles. It features a clean and intuitive UI with a sidebar navigation, responsive grid layout for profile cards, and smooth interactions tailored for both desktop and mobile users.

## Features
- **Responsive Sidebar Navigation**
  - Collapsible sidebar for smaller screens.
  - Navigation links to different sections (Home, Profiles, Map View, Admin Panel).
- **Dashboard Overview**
  - Displays user profiles in a responsive grid layout.
  - Each profile card includes a photo, name, description, and a link to detailed information.
- **Responsive Design**
  - Optimized for both desktop and mobile devices.
  - Smooth transitions and dynamic alignment adjustments.

## Technologies Used
- **Frontend**:
  - React
  - Tailwind CSS
  - React Router DOM
  - Lucide Icons
  - 

## Setup and Installation

### Prerequisites
- Node.js and npm installed.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/profile-explorer.git
   cd profile-explorer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Project Structure
```
src/
├── components/
│   ├── Sidebar.jsx    # Sidebar navigation component
│   ├── Dashboard.jsx
    |
    |__ MapView.jsx
    |__ProfileDetails.jsx
    |__AdminPanel.jsx
    |       # Dashboard overview component
├── App.js             # Main app file
├── index.js           # React entry point
├── context           # Admin Context for deleting and adding the users
```


## Usage
1. Navigate through the sidebar to access different sections.
2. View profiles on the dashboard and click "View in Detail" for more information.
3. View each members location at once 
4. The admin DashBoard is built to manage the users 

## Responsive Behavior
- **Mobile**:
  - Sidebar can be toggled open/closed using a menu button.
  - Dashboard adjusts to a single-column layout.
- **Desktop**:
  - Sidebar remains fixed on the left.
  - Dashboard adapts to a multi-column grid.

