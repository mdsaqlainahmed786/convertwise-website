# ConvertWise

A modern, responsive landing page for ConvertWise - an AI-powered sales automation platform. Built with React, TypeScript, and Vite.

## 🚀 Features

- **Modern UI/UX**: Beautiful, gradient-based design with smooth animations
- **Responsive Design**: Fully responsive across all device sizes
- **SEO Optimized**: React Helmet integration for meta tags and SEO
- **Performance**: Built with Vite for fast development and optimized production builds
- **TypeScript**: Full type safety throughout the application
- **Component Library**: Built with Radix UI and custom components

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Version 18.x or higher ([Download Node.js](https://nodejs.org/))
- **npm**: Version 9.x or higher (comes with Node.js)
- **Git**: For cloning the repository ([Download Git](https://git-scm.com/))

### Verify Installation

Check if you have the required tools installed:

```bash
node --version  # Should be v18.x or higher
npm --version   # Should be 9.x or higher
git --version   # Any recent version
```

## 🛠️ Installation

### Step 1: Clone the Repository

```bash
git clone git@github.com:gnilansh/ConvertWiseLandingPage.git
cd ConvertWiseLandingPage
```

### Step 2: Install Dependencies

Install all required npm packages:

```bash
npm install
```

This will install all dependencies listed in `package.json`, including:
- React and React DOM
- Vite (build tool)
- Radix UI components
- Motion (animations)
- React Router
- And other dependencies

**Note**: This may take a few minutes depending on your internet connection.

### Step 3: Verify Installation

After installation completes, verify that `node_modules` folder was created:

```bash
ls node_modules  # Should show all installed packages
```

## 🏃 Running the Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The development server will start and you'll see output like:

```
  VITE v6.3.5  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

Open your browser and navigate to `http://localhost:3000` to view the application.

### Development Server Features

- **Hot Module Replacement (HMR)**: Changes reflect instantly without page reload
- **Fast Refresh**: React components update while preserving state
- **Error Overlay**: Helpful error messages displayed in the browser

## 🏗️ Building for Production

Create an optimized production build:

```bash
npm run build
```

This will:
- Compile TypeScript to JavaScript
- Optimize and minify code
- Bundle assets
- Generate production-ready files in the `build/` directory

### Preview Production Build

To preview the production build locally:

```bash
# After running npm run build
npx vite preview
```

## 📁 Project Structure

```
ConvertWiseLandingPage/
├── public/                 # Static assets
│   ├── assets/            # Images and media files
│   └── convertwiselogo1.svg
├── src/
│   ├── components/        # React components
│   │   ├── About.tsx     # About page component
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Navigation.tsx # Navigation bar
│   │   ├── Footer.tsx     # Footer component
│   │   ├── backgrounds/   # Animated background components
│   │   ├── figma/         # Image components
│   │   └── ui/            # Reusable UI components
│   ├── styles/            # Global styles
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global CSS
├── .gitignore             # Git ignore rules
├── package.json            # Project dependencies and scripts
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on `http://localhost:3000` |
| `npm run build` | Create optimized production build in `build/` directory |
| `npm install` | Install all project dependencies |

## 🛠️ Technologies Used

- **React 18.3.1**: UI library
- **TypeScript**: Type-safe JavaScript
- **Vite 6.3.5**: Build tool and dev server
- **React Router 6.26.0**: Client-side routing
- **Radix UI**: Accessible component primitives
- **Motion**: Animation library
- **Tailwind CSS**: Utility-first CSS (via PostCSS)
- **React Helmet Async**: SEO and meta tag management
- **Lucide React**: Icon library

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Environment Variables

Currently, no environment variables are required. If you need to add any, create a `.env` file in the root directory.

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is already in use:

```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or specify a different port
npm run dev -- --port 3001
```

### Node Modules Issues

If you encounter issues with dependencies:

```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
npm install
```

### Build Errors

If the build fails:

1. Ensure you're using Node.js 18.x or higher
2. Clear the build directory: `rm -rf build`
3. Reinstall dependencies: `npm install`
4. Try building again: `npm run build`

## 📄 License

This project is private and proprietary.

## 👥 Contributors

- **Nilansh Gupta** - Co-Founder & CEO
- **Archit Dhir** - Co-Founder & CTO

## 📞 Support

For issues or questions, please contact: hello@convertwise.site

---

**Happy Coding! 🚀**
