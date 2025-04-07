# Reddit Photo Gallery

A basic multilanguage web application that allows users to browse and view photo galleries fetched from Reddit. This project is designed to provide a seamless and visually appealing experience for exploring Reddit's image-based content.

## Features
- Multilanguage support
- Dark - Light theme options
- Fetch and display photo galleries from Reddit.
- Responsive design for optimal viewing on all devices.
- Search functionality to find specific subreddits or topics.
- Lazy loading for improved performance.
- User-friendly interface with smooth navigation.

### Screenshots



<img width="500" alt="Screenshot 2025-04-08 at 00 19 06" src="https://github.com/user-attachments/assets/13238ed6-75d6-4ab1-918e-53e6bcfa5556" />
<img width="500" alt="Screenshot 2025-04-08 at 00 18 55" src="https://github.com/user-attachments/assets/8347f04e-3b11-41fb-9ddb-e04dfc344da6" />
<img width="500" alt="Screenshot 2025-04-08 at 00 19 16" src="https://github.com/user-attachments/assets/b403b517-1b7a-41df-b860-8fe21697a77d" />

#### Project Structure

- ## `src`: This folder is the main container of all the code.
  - `api`: This folder contains all services and base request function.
  - `redux`: This folder contains all actions, slices, thunks and store which is provided by redux.
  - `components`: Folder to store any common component that you use through app
  - `constants`: Folder to store constants
  - `localization`: Folder to store the languages files.
  - `pages`: Folder that contains all application pages.
  - `theme`: Folder to store all the styling concerns related to the application theme.
  - `store`: Folder to manage redux logic and global states.
    
- ## `__test__`: Folder to store all tests


## Technologies Used

- **Frontend**: ReactJS, TypeScript, CSS, Material UI
- **API**: Reddit API
- **Build Tools**: Webpack, Babel
- **Other Libraries**: Axios, React Router, Redux, i18n

## Testing

To run the tests, execute `npm test` in a terminal opened in the project folder.

## Commit Message Types

```
[TYPE]: [COMMIT MESSAGE]
```

For example:

```
style: style file updated.
```

| type     | release |
| -------- | ------- |
| breaking | major   |
| feat     | minor   |
| fix      | patch   |
| build    | patch   |
| style    | patch   |
| refactor | patch   |
| perf     | patch   |
| chore    | none    |
| ci       | none    |
| docs     | none    |
| test     | none    |

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/reddit-photo-gallery.git
   ```
2. Navigate to the project directory:
   ```bash
   cd reddit-photo-gallery
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and visit `http://localhost:3000`.

## Usage

1. Open the application in your browser.
2. Use the search bar to find photo galleries from specific subreddits.
3. Click on details button to navigate details page.



## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, please contact:

- **Name**: Kaan Kureli
- **Email**: kkureli@gmail.com
- **GitHub**: [kkureli](https://github.com/kkureli)
