import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Update the document title
document.title = "PY-Partners - Internet Freedom Solution";

// Add meta description for SEO
const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'PY-Partners provides seamless internet access without boundaries. Navigate freely with our advanced proxy solution.';
document.head.appendChild(metaDescription);

// Add Open Graph tags for better social media sharing
const ogTitle = document.createElement('meta');
ogTitle.setAttribute('property', 'og:title');
ogTitle.content = 'PY-Partners - Internet Freedom Solution';
document.head.appendChild(ogTitle);

const ogDescription = document.createElement('meta');
ogDescription.setAttribute('property', 'og:description');
ogDescription.content = 'Access the global internet freely with PY-Partners advanced proxy solution.';
document.head.appendChild(ogDescription);

const ogType = document.createElement('meta');
ogType.setAttribute('property', 'og:type');
ogType.content = 'website';
document.head.appendChild(ogType);

createRoot(document.getElementById("root")!).render(<App />);
