# Git Course Test Project

A glassmorphism-inspired static website built to demonstrate modern front-end development techniques, modular architecture using client-side includes, and effective Git version control workflows.

## Features

- **Glassmorphism UI:** Uses frosted glass effects with transparent backgrounds, backdrop filters, and smooth shadows.
- **Modular Components:** Header and footer are stored as separate HTML files (in `src/styles/includes/`) and loaded dynamically via JavaScript.
- **Responsive Design:** Grid-based layouts and flexible containers ensure compatibility across devices.
- **Dark/Light Theme Toggle:** Switch between themes using the built-in toggle in the navbar.
- **Interactive Gallery:** Click on gallery cards to view animated fullscreen transitions.
- **Smooth Page Transitions:** Fade-in/out animations create a seamless navigation experience.

## Project Structure

```
/home/tim/Bureau/CoursGit/
├── index.html         # Home page
├── gallery.html       # Gallery page
├── contact.html       # Contact page
├── src/
│   ├── scripts/
│   │   ├── script.js       # Main JavaScript (includes gallery, fullscreen, theme toggle, page transitions, etc.)
│   │   └── include.js      # Loads header and footer dynamically
│   └── styles/
│       ├── style.css       # Project styles and theme definitions
│       └── includes/
│           ├── header.html # Header component (navbar, theme toggle)
│           └── footer.html # Footer component
└── README.md          # This file
```

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/tmeier-lang/git-learning.git
   cd git-learning
   ```

2. **Open the Project in VS Code**

   Launch the repository folder in your favorite code editor.

3. **Run the Project Locally**

   You can use the Live Server extension in VS Code or start a local server via your terminal. For example, using Python:

   ```bash
   python3 -m http.server
   ```

   Then, navigate to [http://localhost:8000](http://localhost:8000) in your browser.

## Usage

- **Dynamic Components:** The `include.js` script dynamically loads the header and footer components (from `src/styles/includes/`) on every page.
- **Theme Toggle:** Click the theme button in the header (displayed as "🌙" or "☀️") to switch between dark and light modes.
- **Gallery Interactions:** On the Gallery page, click any gallery card to see it expand into fullscreen with smooth animation.
- **Page Transitions:** Internal links trigger fade-out animations before navigating, providing a seamless page transition experience.

## Contributing

Contributions are welcome! Feel free to fork this project and submit pull requests. For major changes, please open an issue first to discuss your ideas.

## License

This project is open source under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by modern glassmorphism designs.
- Icons and UI ideas powered by [Font Awesome](https://fontawesome.com/).
- Thanks to the open source community for the many resources and inspirations.
