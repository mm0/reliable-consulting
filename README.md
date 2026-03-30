# Reliable Consulting - Portfolio Site

Modern React SPA portfolio site for Matt Margolin's consulting services, built with Vite and hosted on GitHub Pages.

## Development

```bash
npm install
npm run dev
```

Dev server runs on `http://localhost:3000`

## Build for Production

```bash
npm run build
```

Builds to `dist/` directory, including:
- React app bundle
- All assets and images
- Static files

## Deployment

Deploy the `dist/` folder to GitHub Pages. The site will be accessible at `reliable.consulting` with proper DNS configuration.

## Features

- Modern React 18 with React Router for client-side navigation
- Responsive design with Bootstrap 3 CSS framework
- Portfolio showcase with 13+ projects
- Contact form with Calendly integration
- Resume and work experience
- Social media links (LinkedIn, GitHub, etc.)
- Smooth parallax background effects

## Project Structure

```
├── src/
│   ├── components/      # React components
│   ├── data/           # Project data and configurations
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # React entry point
│   └── overrides.css   # CSS overrides for styling
├── public/
│   ├── css/            # Bootstrap and font awesome
│   └── img/            # Static images (served from external dir)
├── static/             # Static files
├── index.html          # HTML template
└── vite.config.js      # Vite configuration
```
