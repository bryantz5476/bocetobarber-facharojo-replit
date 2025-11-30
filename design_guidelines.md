# Design Guidelines: Barbería Masculina - Estética Calle + Lujo

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium streetwear brands (Supreme, Off-White) + luxury services (high-end automotive, premium fashion) to create an aggressive yet refined aesthetic that appeals to young, style-conscious men.

## Core Design Principles
- **Street Luxury Fusion**: Raw, edgy urban energy balanced with premium, polished refinement
- **Aggressive Modernism**: Bold, in-your-face visual statements with sophisticated execution
- **Kinetic Energy**: Constant motion, animation, and visual dynamism throughout the experience
- **Unapologetic Masculinity**: Strong, confident design language without softness

## Color System
- **Primary**: Pure Black (#000000) - dominance, power, sophistication
- **Accent**: Vivid Red (#FF0000 or #E31E24) - aggression, energy, passion
- **Contrast**: Pure White (#FFFFFF) - cleanliness, premium quality
- **Application**: Black backgrounds with white text and strategic red highlights for CTAs and emphasis points

## Typography Hierarchy
- **Hero Headlines**: Extra bold, uppercase, massive scale (text-7xl to text-9xl), aggressive letterspacing
- **Section Headers**: Bold, uppercase, modern sans-serif with tight tracking
- **Body Text**: Clean, readable sans-serif, white on black for high contrast
- **Accent Text**: Red for pricing, CTAs, and key highlights
- **Font Recommendation**: Industry-standard bold sans-serif via Google Fonts (Montserrat Black, Bebas Neue, Oswald)

## Layout System
**Spacing**: Generous use of p-8, p-12, p-16, p-24 for breathing room between aggressive visual elements. Full-bleed sections (w-full) with contained content (max-w-7xl).

## 5 Required Sections

### 1. Hero Cinematográfico
- Full viewport (min-h-screen) with video background or animated gradient overlay
- Parallax-enabled with scroll-triggered depth effects
- Headline: Oversized, bold, split across multiple lines with staggered animation entrance
- Subheadline: Supporting text with subtle red accent underline
- Primary CTA: "AGENDAR CITA" button - large, red background, white text, aggressive hover state with scale/glow effects
- Cursor interaction: Custom cursor that follows mouse, changes on hover
- No traditional image - use video loop or abstract animated backgrounds

### 2. Propuesta de Valor (3 Pilares)
- Three-column grid (grid-cols-1 md:grid-cols-3)
- Animated cards with hover lift effects and red border accent on hover
- Each card: Icon/graphic at top, bold title, description text
- Staggered entrance animations as user scrolls into view
- Cards with glass-morphism effect or subtle borders

### 3. Servicios con Cards Infinitas
- Horizontal infinite scroll loop (carousel continuo)
- Service cards in continuous motion without user interaction
- Each card: Service name, price in red, brief description, striking visual or icon
- Seamless loop with duplicated content for endless effect
- Hover pauses individual card with scale/glow effect

### 4. Galería Antes/Después
- Grid layout with before/after transformations
- Interactive reveal on hover (slider or fade transition)
- Motion effects: Cards tilt slightly on hover, zoom on active state
- "Antes" and "Después" labels in bold with red accent
- Showcase dramatic transformations (haircuts, beard styling)

### 5. CTA Final
- Full-width section with high impact
- Prueba social: Customer count, reviews, or testimonials in animated counters
- Large "AGENDAR CITA" button (href="" for Setmore integration)
- Supporting text emphasizing urgency or exclusivity
- Background: Black with red geometric accent shapes or patterns

## Animation Strategy
- **Entrance Animations**: Staggered fade-up and slide-in effects for all sections
- **Scroll-Triggered**: Parallax on hero, reveal animations on cards
- **Hover States**: Scale, glow, color shift on all interactive elements
- **Continuous Motion**: Infinite scroll on services carousel, subtle floating effects
- **Cursor Effects**: Custom cursor that grows/changes color on hover over interactive elements

## Component Library
- **Buttons**: Large, rectangular, red primary buttons with white text and hover glow
- **Cards**: Dark backgrounds with subtle borders, red accent on active/hover
- **Navigation**: Fixed header with minimal design, smooth scroll anchors
- **Forms/CTA**: Bold, high-contrast design with red submit buttons

## Visual Impact Elements
- Diagonal cuts and geometric shapes breaking traditional grid
- Red accent lines as visual separators between sections
- Bold typography as design element (oversized numbers, quotes)
- High-contrast photography (black/white with red pops)
- Urban textures: concrete, metal, graffiti-inspired graphics

## Responsive Behavior
- Mobile-first with aggressive scaling for desktop
- Cards stack to single column on mobile
- Typography scales dramatically (text-4xl mobile to text-9xl desktop)
- Touch-friendly buttons and interactions on mobile

**Final Note**: Every element should feel intentional, bold, and premium - no timid design choices. The experience should feel like walking into an exclusive, high-energy barbershop where style and attitude are everything.