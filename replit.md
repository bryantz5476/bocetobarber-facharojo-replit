# BLADE KINGS - Premium Barbershop Landing Page

## Overview

BLADE KINGS is a premium barbershop landing page that combines street culture aesthetics with luxury service presentation. The project delivers an aggressive, modern, and visually impactful user experience inspired by high-end streetwear brands (Supreme, Off-White) and luxury services. The application is a frontend-only React application, designed for deployment on Netlify without backend requirements.

## User Preferences

- Preferred communication style: Simple, everyday language (Spanish)
- Design style: Calle + lujo (street + luxury), aggressive, modern, bold
- Color palette: Black, White, Red (#FF0000)
- Font: Bebas Neue for headlines, Montserrat for body text

## Project Structure

```
client/
├── public/
│   ├── _redirects          # Netlify SPA routing configuration
│   └── favicon.png
├── src/
│   ├── App.tsx             # Main landing page with all sections
│   ├── index.css           # Custom styles and Tailwind configuration
│   ├── main.tsx            # Entry point with BrowserRouter
│   └── components/ui/      # shadcn/ui components
├── index.html              # HTML template with Google Fonts
```

## Technology Stack

### Frontend Framework
- **React 18** with TypeScript
- **Vite** as build tool and development server
- **react-router-dom** with BrowserRouter for SPA routing
- **Framer Motion** for advanced animations, parallax, and transitions

### Styling
- **Tailwind CSS** with custom design tokens
- **shadcn/ui** components (available but minimal usage for this landing)
- Custom CSS utilities for glitch effects, glow effects, and noise overlays

### Fonts
- **Bebas Neue** - Display/headline font (aggressive, uppercase)
- **Montserrat** - Body text font (weights 400-900)

## Landing Page Sections

### 1. Hero Section
- Full viewport height with animated gradient background
- Floating red particles animation
- Parallax scroll effect
- Headline: "DONDE EL ESTILO ES LEY" with red accent
- Two CTAs: "Agendar Cita" (primary) and "Explorar Servicios"

### 2. Value Proposition (Propuesta de Valor)
- 3 animated pillar cards:
  - PRECISIÓN EXTREMA (Target icon)
  - LUJO URBANO (Crown icon)
  - ACTITUD REBELDE (Zap icon)
- Staggered entrance animations on scroll
- Hover effects with red border accent

### 3. Services Section (Servicios)
- Infinite horizontal scroll carousel
- Two rows moving in opposite directions
- Service cards showing: name, price (in red), description
- Services include: Corte Clásico, Fade Premium, Barba Esculpida, etc.

### 4. Before/After Gallery (Galería)
- 6 transformation cards in grid layout
- Split design showing "Antes" and "Después"
- Animated divider with pulsing sparkle icon
- Style labels: Fade Clásico, Barba Esculpida, Skin Fade, etc.

### 5. Final CTA Section
- Stats counters: 5000+ Clientes, 4.9 Rating, 8+ Años, 15K+ Cortes
- Rotating testimonials with star ratings
- Pulsing "Agendar Cita Ahora" button with red glow

### 6. Footer
- Logo and brand description
- Social media links (Instagram, Facebook)
- Contact information and business hours

## Special Features

### Custom Cursor
- Desktop-only custom cursor that follows mouse movement
- Scales up on hover over interactive elements
- Mix-blend-difference effect for visibility on any background

### Animations
- Parallax scrolling on hero section
- Scroll-triggered entrance animations
- Infinite scroll carousel for services
- Hover lift and scale effects on cards
- Pulsing glow effects on CTAs
- Staggered card animations

### Setmore Integration
- All "Agendar Cita" buttons have `href=""` for Setmore scheduling integration
- Ready to add Setmore booking URL when configured

## Navigation

The navbar includes smooth scroll navigation to sections:
- `servicios` - Services section
- `galeria` - Gallery section
- `nosotros` - Value Proposition section

## Netlify Deployment

The project includes `client/public/_redirects` file for proper SPA routing:
```
/*    /index.html   200
```

## Development

```bash
npm run dev    # Start development server on port 5000
npm run build  # Build for production
```

## Color Scheme

```css
--background: 0 0% 0%;           /* Pure black */
--foreground: 0 0% 100%;         /* Pure white */
--primary: 0 100% 50%;           /* Vivid red #FF0000 */
--card: 0 0% 5%;                 /* Near black for cards */
--noir-light: 0 0% 3%;           /* Very dark gray */
--noir-medium: 0 0% 10%;         /* Dark gray */
```

## Recent Changes

- 2024: Initial landing page implementation
- Complete 5-section landing page structure
- Framer Motion animations throughout
- Custom cursor with hover detection
- Infinite scroll service carousel
- Before/after gallery with interactive cards
- Testimonial carousel with auto-rotation
- Netlify-compatible SPA configuration
