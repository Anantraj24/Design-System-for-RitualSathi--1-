# RitualSathi Design System
**Premium Indian Ceremony Planning App**

*Tagline: "Plan every ceremony, effortlessly."*

---

## Design Philosophy

RitualSathi bridges traditional Indian ceremonies with modern digital convenience. The design system embodies:

- **Premium & Trustworthy**: Polished, professional interface that builds confidence
- **Culturally Rooted**: Warm saffron and green honor Indian tradition without cliché
- **Accessible**: Clear typography and generous touch targets for all ages
- **Family-Centric**: Warm, inviting atmosphere that feels welcoming, not transactional

**Visual Stance**: Warm boutique marketplace — think Aesop meets Urban Company with Indian soul. Cream backgrounds, soft shadows, rounded corners, and ample breathing room create a premium feel that respects both tradition and modernity.

---

## Color System

### Primary Palette

```css
--color-primary-saffron: #F97316;        /* Primary CTA, active states */
--color-primary-saffron-light: #FB923C;  /* Hover states */
--color-primary-saffron-dark: #EA580C;   /* Pressed states */
--color-primary-saffron-bg: #FFF7ED;     /* Light backgrounds */

--color-secondary-green: #22A55A;        /* Success, verified badges */
--color-secondary-green-light: #4ADE80;  /* Hover */
--color-secondary-green-dark: #16A34A;   /* Pressed */
--color-secondary-green-bg: #F0FDF4;     /* Light backgrounds */

--color-accent-yellow: #FDE68A;          /* Highlights, premium badges */
--color-accent-yellow-dark: #FCD34D;     /* Borders, emphasis */

--color-trust-blue: #60A5FA;             /* Trust signals, info */
--color-trust-blue-light: #93C5FD;       /* Backgrounds */
--color-trust-blue-dark: #3B82F6;        /* Emphasis */
```

### Neutral Palette

```css
--color-background: #FFFDF8;             /* App background - warm cream */
--color-card: #FFFFFF;                   /* Cards, surfaces */
--color-card-hover: #FEFEFE;             /* Interactive cards */

--color-text-primary: #1F2937;           /* Headings, primary text */
--color-text-secondary: #6B7280;         /* Body text, descriptions */
--color-text-tertiary: #9CA3AF;          /* Captions, metadata */
--color-text-disabled: #D1D5DB;          /* Disabled states */

--color-border-light: #F3F4F6;           /* Subtle dividers */
--color-border-medium: #E5E7EB;          /* Default borders */
--color-border-strong: #D1D5DB;          /* Input borders, emphasis */
```

### Semantic Colors

```css
--color-success: #22C55E;                /* Success messages, confirmations */
--color-success-bg: #F0FDF4;             /* Success backgrounds */

--color-error: #F87171;                  /* Errors, warnings */
--color-error-bg: #FEF2F2;               /* Error backgrounds */

--color-warning: #FBBF24;                /* Warnings */
--color-warning-bg: #FFFBEB;             /* Warning backgrounds */

--color-info: #60A5FA;                   /* Information */
--color-info-bg: #EFF6FF;                /* Info backgrounds */
```

### Usage Guidelines

- **Saffron (#F97316)**: Primary CTAs, ceremony type indicators, active navigation
- **Green (#22A55A)**: Verified vendors, success states, booking confirmations
- **Yellow (#FDE68A)**: Premium vendor badges, featured listings, special offers
- **Blue (#60A5FA)**: Trust badges, ratings, informational elements
- **Warm Cream (#FFFDF8)**: App background creates warmth and reduces eye strain

---

## Typography

### Type Scale

```css
/* Display - For landing screens, empty states */
--font-size-display: 32px;
--line-height-display: 40px;
--font-weight-display: 600;

/* Heading 1 - Page titles */
--font-size-h1: 24px;
--line-height-h1: 32px;
--font-weight-h1: 600;

/* Heading 2 - Section titles */
--font-size-h2: 20px;
--line-height-h2: 28px;
--font-weight-h2: 600;

/* Heading 3 - Card titles, vendor names */
--font-size-h3: 18px;
--line-height-h3: 26px;
--font-weight-h3: 600;

/* Body Large - Important descriptions */
--font-size-body-lg: 16px;
--line-height-body-lg: 24px;
--font-weight-body-lg: 400;

/* Body - Default text */
--font-size-body: 14px;
--line-height-body: 20px;
--font-weight-body: 400;

/* Body Small - Supporting text */
--font-size-body-sm: 13px;
--line-height-body-sm: 18px;
--font-weight-body-sm: 400;

/* Caption - Metadata, labels */
--font-size-caption: 12px;
--line-height-caption: 16px;
--font-weight-caption: 400;

/* Button - CTA text */
--font-size-button: 16px;
--line-height-button: 20px;
--font-weight-button: 600;
```

### Font Families

```css
--font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
--font-numbers: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif; /* For prices, ratings */
```

### Typography Guidelines

- **All Ages**: 14px minimum for body text, 16px for buttons ensures readability
- **Line Height**: 1.4-1.5 ratio prevents crowding, especially for Hindi/regional text
- **Weight**: 600 for headings creates hierarchy without being aggressive
- **Letter Spacing**: Default tracking; slight increase (0.02em) for all-caps labels
- **Number Format**: Always use Indian numbering (₹1,00,000 not ₹100,000)

---

## Spacing System

Mobile-first spacing based on 4px grid:

```css
--space-1: 4px;      /* Tight internal spacing */
--space-2: 8px;      /* Icon-to-text, chip padding */
--space-3: 12px;     /* Card internal padding */
--space-4: 16px;     /* Default card padding, button padding */
--space-5: 20px;     /* Section spacing */
--space-6: 24px;     /* Card gaps in grid */
--space-8: 32px;     /* Major section breaks */
--space-10: 40px;    /* Screen top/bottom padding */
--space-12: 48px;    /* Large section spacing */
```

### Spacing Guidelines

- **Touch Targets**: Minimum 48px height for all tappable elements
- **Card Padding**: 16px (var(--space-4)) standard
- **Screen Padding**: 16px horizontal, 20px vertical from safe areas
- **Stack Spacing**: 12px between related elements, 24px between sections
- **Grid Gaps**: 16px for tight grids, 24px for card grids

---

## Border Radius

```css
--radius-sm: 6px;     /* Small elements, badges */
--radius-md: 10px;    /* Buttons, inputs, chips */
--radius-lg: 16px;    /* Cards, modals */
--radius-xl: 20px;    /* Feature cards, images */
--radius-full: 9999px; /* Circular elements */
```

---

## Shadows

Soft, layered shadows for depth without harshness:

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);                  /* Subtle borders */
--shadow-md: 0 2px 8px rgba(0, 0, 0, 0.06),
             0 1px 2px rgba(0, 0, 0, 0.04);                  /* Cards */
--shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.08),
             0 2px 4px rgba(0, 0, 0, 0.04);                  /* Elevated cards, modals */
--shadow-xl: 0 8px 24px rgba(0, 0, 0, 0.10),
             0 4px 8px rgba(0, 0, 0, 0.06);                  /* Bottom sheets, drawers */
```

---

## Icons

### Icon System

- **Library**: Lucide React (clean, consistent, professional)
- **Sizes**: 16px (small), 20px (default), 24px (large), 32px (features)
- **Stroke Width**: 2px (default), 2.5px (emphasis)
- **Color**: Inherit from parent text color by default

### Icon Usage

- **Navigation**: 24px, centered in 48px touch target
- **Buttons**: 20px, 8px gap from text
- **Cards**: 20px for metadata icons (location, rating)
- **Feature Icons**: 32px, often with colored background circle

---

## Component Patterns

### 1. Primary Button

**Purpose**: Main CTAs like "Book Now", "Continue", "Submit"

```tsx
// Visual Specs
Background: var(--color-primary-saffron)
Text: #FFFFFF
Height: 48px
Padding: 0 24px
Border Radius: var(--radius-md)
Font: var(--font-size-button) / var(--font-weight-button)
Shadow: var(--shadow-sm)

// States
Hover: var(--color-primary-saffron-light)
Active: var(--color-primary-saffron-dark)
Disabled: opacity 40%, cursor not-allowed

// Variants
- Full Width (default on mobile)
- Inline (min-width 120px, auto-width)
- Icon + Text (icon 20px, 8px gap)
- Loading (spinner replaces text)
```

**Accessibility**: Minimum contrast ratio 4.5:1, focus ring 2px var(--color-primary-saffron)

---

### 2. Secondary Button

**Purpose**: Alternate actions, "View Details", "Skip", "Cancel"

```tsx
// Visual Specs
Background: transparent
Border: 2px solid var(--color-border-strong)
Text: var(--color-text-primary)
Height: 48px
Padding: 0 24px
Border Radius: var(--radius-md)
Font: var(--font-size-button) / var(--font-weight-button)

// States
Hover: background var(--color-border-light)
Active: background var(--color-border-medium)

// Variants
- Outlined (default)
- Ghost (no border, hover background only)
```

---

### 3. Input Field

**Purpose**: Text entry for name, phone, location, etc.

```tsx
// Visual Specs
Height: 48px
Padding: 12px 16px
Background: var(--color-card)
Border: 1.5px solid var(--color-border-medium)
Border Radius: var(--radius-md)
Font: var(--font-size-body-lg)
Text Color: var(--color-text-primary)
Placeholder: var(--color-text-tertiary)

// States
Focus: border var(--color-primary-saffron), shadow 0 0 0 3px var(--color-primary-saffron-bg)
Error: border var(--color-error), shadow 0 0 0 3px var(--color-error-bg)
Disabled: background var(--color-border-light), text var(--color-text-disabled)

// Label
Position: Above input
Font: var(--font-size-body-sm)
Color: var(--color-text-secondary)
Margin: 0 0 6px

// Helper Text
Font: var(--font-size-caption)
Color: var(--color-text-tertiary)
Error Color: var(--color-error)
```

---

### 4. Search Bar

**Purpose**: Vendor search, ceremony search, location search

```tsx
// Visual Specs
Height: 48px
Padding: 12px 16px 12px 44px
Background: var(--color-card)
Border: 1.5px solid var(--color-border-medium)
Border Radius: var(--radius-lg)
Font: var(--font-size-body-lg)
Shadow: var(--shadow-sm)

// Icon
Position: Absolute left 16px
Icon: Search (Lucide)
Size: 20px
Color: var(--color-text-tertiary)

// States
Focus: border var(--color-primary-saffron)
Filled: Clear icon appears on right (20px, 12px padding)

// Variants
- Default (white background)
- On Background (var(--color-background) with no border)
- With Filter (filter icon button on right)
```

---

### 5. Ceremony Card

**Purpose**: Display ceremony type on home/category screens

```tsx
// Visual Specs
Width: 100% (mobile), min-width 160px
Height: 140px
Background: var(--color-card)
Border: 1px solid var(--color-border-light)
Border Radius: var(--radius-lg)
Padding: 16px
Shadow: var(--shadow-md)

// Layout
- Icon or Image: 48px circular or 40px emoji at top
- Title: var(--font-size-h3), var(--color-text-primary), margin-top 12px
- Subtitle: var(--font-size-caption), var(--color-text-secondary), margin-top 4px
- Accent: 3px saffron bottom border when active/selected

// States
Hover: shadow var(--shadow-lg), translate -1px (subtle lift)
Active: border var(--color-primary-saffron)
```

**Content Examples**:
- Wedding (👰), Engagement (💍), Puja (🕉️), Thread Ceremony (🧵)
- "500+ vendors available"

---

### 6. Vendor Card

**Purpose**: Display vendor in search results, category listings

```tsx
// Visual Specs
Width: 100%
Background: var(--color-card)
Border: 1px solid var(--color-border-light)
Border Radius: var(--radius-lg)
Padding: 12px
Shadow: var(--shadow-md)

// Layout (Horizontal)
┌─────────────────────────────────────┐
│ [Image]  Vendor Name          ₹₹₹   │
│  100px   ★ 4.8 (234)    [Verified]  │
│          Location • Service          │
└─────────────────────────────────────┘

// Image
Size: 100px × 100px
Border Radius: var(--radius-lg)
Object Fit: cover

// Vendor Name
Font: var(--font-size-h3)
Color: var(--color-text-primary)

// Rating
Icon: Star (filled)
Color: #FBBF24 (yellow)
Font: var(--font-size-body-sm)
Count: var(--color-text-tertiary)

// Verified Badge
Icon: CheckCircle
Color: var(--color-secondary-green)
Size: 16px

// Price Indicator
₹: var(--color-text-tertiary)
₹₹: Budget-friendly
₹₹₹: Premium
Font: var(--font-size-body-sm)

// Location
Icon: MapPin (16px)
Font: var(--font-size-caption)
Color: var(--color-text-secondary)

// States
Hover: shadow var(--shadow-lg)
Active: border var(--color-primary-saffron)
```

---

### 7. Category Chip

**Purpose**: Vendor category selection (Priest, Caterer, Decorator, etc.)

```tsx
// Visual Specs
Height: 36px
Padding: 8px 16px
Background: var(--color-card)
Border: 1.5px solid var(--color-border-medium)
Border Radius: var(--radius-full)
Font: var(--font-size-body-sm) / var(--font-weight-button)

// States
Default: background var(--color-card)
Selected: background var(--color-primary-saffron), text #FFFFFF, border transparent
Hover: border var(--color-primary-saffron)

// With Icon
Icon Size: 16px
Gap: 6px
```

---

### 8. Filter Chip

**Purpose**: Active filters display with remove option

```tsx
// Visual Specs
Height: 32px
Padding: 6px 8px 6px 12px
Background: var(--color-primary-saffron-bg)
Border: 1px solid var(--color-primary-saffron)
Border Radius: var(--radius-full)
Font: var(--font-size-caption) / var(--font-weight-button)
Color: var(--color-primary-saffron-dark)

// Close Icon
Icon: X (Lucide)
Size: 14px
Padding: 4px
Hover: background var(--color-primary-saffron), color #FFFFFF
```

---

### 9. Verified Badge

**Purpose**: Trust signal for verified vendors

```tsx
// Visual Specs (Compact)
Display: inline-flex
Padding: 4px 8px
Background: var(--color-secondary-green-bg)
Border: 1px solid var(--color-secondary-green)
Border Radius: var(--radius-sm)
Font: var(--font-size-caption) / 600
Color: var(--color-secondary-green-dark)

// Icon
Icon: CheckCircle
Size: 12px
Gap: 4px

// Visual Specs (Prominent)
Size: 24px circular
Background: var(--color-secondary-green)
Icon: Check
Icon Color: #FFFFFF
Icon Size: 14px
Position: Absolute top-right on vendor image
Border: 2px solid #FFFFFF
```

---

### 10. Rating Badge

**Purpose**: Display star rating and review count

```tsx
// Visual Specs
Display: inline-flex
Align: center
Gap: 4px

// Star Icon
Icon: Star (filled)
Size: 16px
Color: #FBBF24

// Rating Number
Font: var(--font-size-body-sm) / 600
Color: var(--color-text-primary)

// Review Count
Font: var(--font-size-caption)
Color: var(--color-text-tertiary)
Format: "(234)" or "(234 reviews)"

// Example
★ 4.8 (234)
```

---

### 11. Price Tag

**Purpose**: Display pricing for packages, services

```tsx
// Visual Specs
Font: var(--font-size-h3) / 600
Color: var(--color-text-primary)
Format: ₹1,00,000 (Indian numbering)

// Variants
- Starting Price: "Starting from ₹1,00,000"
- Price Range: "₹50,000 - ₹2,00,000"
- Per Person: "₹500/person"
- Custom: "Contact for pricing"

// Strike Through (Discount)
Original: text-decoration line-through, color var(--color-text-tertiary)
Discounted: color var(--color-error)

// Label
Font: var(--font-size-caption)
Color: var(--color-text-secondary)
Position: Above price
```

---

### 12. Budget Slider

**Purpose**: Filter vendors by budget range

```tsx
// Visual Specs
Track Height: 6px
Track Background: var(--color-border-medium)
Active Track: var(--color-primary-saffron)
Border Radius: var(--radius-full)

// Thumb
Size: 24px circular
Background: #FFFFFF
Border: 3px solid var(--color-primary-saffron)
Shadow: var(--shadow-md)

// Labels
Position: Below slider
Font: var(--font-size-body-sm) / 600
Color: var(--color-text-primary)
Format: ₹50,000 - ₹5,00,000

// Current Value
Position: Above active thumb
Background: var(--color-primary-saffron)
Color: #FFFFFF
Padding: 4px 8px
Border Radius: var(--radius-sm)
Font: var(--font-size-caption) / 600
```

---

### 13. Package Card

**Purpose**: Display vendor packages/offerings

```tsx
// Visual Specs
Width: 100%
Background: var(--color-card)
Border: 1.5px solid var(--color-border-medium)
Border Radius: var(--radius-lg)
Padding: 16px
Shadow: var(--shadow-md)

// Layout
- Badge: "Most Popular" (optional, var(--color-accent-yellow) bg)
- Package Name: var(--font-size-h3)
- Price: var(--font-size-h2), bold
- Features List: checkmark icon, var(--font-size-body), 8px gap
- CTA Button: Full width

// Popular Badge
Position: Absolute top -12px left 16px
Background: var(--color-accent-yellow)
Border: 2px solid var(--color-accent-yellow-dark)
Padding: 4px 12px
Border Radius: var(--radius-full)
Font: var(--font-size-caption) / 700
Color: var(--color-text-primary)
Shadow: var(--shadow-sm)

// Feature Item
Icon: CheckCircle
Icon Color: var(--color-secondary-green)
Icon Size: 16px
Text: var(--font-size-body)
Gap: 8px

// States
Hover: border var(--color-primary-saffron)
Selected: border 2px var(--color-primary-saffron), shadow var(--shadow-lg)
```

---

### 14. Payment Option Card

**Purpose**: Display payment methods during checkout

```tsx
// Visual Specs
Width: 100%
Height: 64px
Background: var(--color-card)
Border: 1.5px solid var(--color-border-medium)
Border Radius: var(--radius-md)
Padding: 12px 16px
Display: flex
Align: center
Gap: 12px

// Layout
[Radio] [Payment Icon] Payment Name                [Info Icon]

// Radio Button
Size: 20px
Border: 2px solid var(--color-border-strong)
Selected: background var(--color-primary-saffron), white dot

// Payment Icon
Size: 32px
Examples: UPI, Cards, Net Banking, Wallet icons

// Payment Name
Font: var(--font-size-body-lg) / 600
Color: var(--color-text-primary)

// States
Selected: border var(--color-primary-saffron), shadow var(--shadow-sm)
Hover: background var(--color-border-light)
```

---

### 15. Booking Status Card

**Purpose**: Show booking status in order history

```tsx
// Visual Specs
Width: 100%
Background: var(--color-card)
Border: 1px solid var(--color-border-light)
Border-Left: 4px solid [status color]
Border Radius: var(--radius-lg)
Padding: 16px
Shadow: var(--shadow-md)

// Status Colors
Confirmed: var(--color-secondary-green)
Pending: var(--color-warning)
Cancelled: var(--color-error)
Completed: var(--color-trust-blue)

// Layout
- Ceremony Type: var(--font-size-caption), var(--color-text-secondary)
- Vendor Name: var(--font-size-h3)
- Date & Time: var(--font-size-body-sm)
- Status Badge: Colored background with status text
- Action Button: Secondary button, aligned right

// Status Badge
Padding: 4px 12px
Border Radius: var(--radius-full)
Font: var(--font-size-caption) / 600
Background: [status color]-bg
Color: [status color]-dark
```

---

### 16. Timeline Step

**Purpose**: Booking process, ceremony planning steps

```tsx
// Visual Specs
Display: flex
Gap: 12px

// Step Indicator
Size: 32px circular
Background: var(--color-border-medium)
Color: var(--color-text-tertiary)
Font: var(--font-size-body-sm) / 600
Border: 2px solid var(--color-border-medium)

// Active Step
Background: var(--color-primary-saffron)
Border: var(--color-primary-saffron)
Color: #FFFFFF

// Completed Step
Background: var(--color-secondary-green)
Border: var(--color-secondary-green)
Icon: Check (instead of number)
Color: #FFFFFF

// Connector Line
Width: 2px
Background: var(--color-border-medium)
Position: Between steps
Active: var(--color-primary-saffron)

// Step Content
Title: var(--font-size-body-lg) / 600
Description: var(--font-size-body-sm), var(--color-text-secondary)
Margin-top: 4px
```

---

### 17. Bottom Navigation Bar

**Purpose**: Main app navigation (5 items max)

```tsx
// Visual Specs
Height: 64px + safe area
Background: var(--color-card)
Border-Top: 1px solid var(--color-border-light)
Shadow: 0 -2px 8px rgba(0, 0, 0, 0.04)
Position: Fixed bottom
Padding: 8px 0px

// Nav Item
Width: 20% (for 5 items)
Display: flex column
Align: center
Gap: 4px

// Icon
Size: 24px
Color: var(--color-text-tertiary)
Active: var(--color-primary-saffron)

// Label
Font: var(--font-size-caption)
Color: var(--color-text-tertiary)
Active: var(--color-primary-saffron) / 600

// Active Indicator
Position: Top of nav bar
Width: 24px
Height: 3px
Background: var(--color-primary-saffron)
Border Radius: var(--radius-full)

// Navigation Items
- Home (Home icon)
- Categories (Grid icon)
- Bookings (Calendar icon)
- Wishlist (Heart icon)
- Profile (User icon)
```

---

### 18. Header Bar

**Purpose**: Screen header with title and actions

```tsx
// Visual Specs
Height: 56px + safe area
Background: var(--color-card)
Border-Bottom: 1px solid var(--color-border-light)
Padding: 0 16px
Display: flex
Align: center
Position: sticky top 0
Z-index: 10

// Layout
[Back Button] Title                    [Action Icon]

// Back Button
Icon: ChevronLeft
Size: 24px
Color: var(--color-text-primary)
Touch Target: 40px

// Title
Font: var(--font-size-h3) / 600
Color: var(--color-text-primary)
Flex: 1
Text-align: center (centered variant)
Text-align: left (default)

// Action Icons
Size: 24px
Color: var(--color-text-primary)
Touch Target: 40px
Examples: Share, Wishlist, More (vertical dots)

// Variants
- Default: Back + Title + Actions
- Centered: Back + Centered Title + Actions
- Search: Search bar fills header
- Transparent: No background, absolute position (for image headers)
```

---

### 19. Empty State Card

**Purpose**: No results, no bookings, no wishlist items

```tsx
// Visual Specs
Width: 100%
Padding: 40px 24px
Text-align: center
Background: transparent

// Illustration
Size: 120px
Margin: 0 auto 24px
SVG or Image with var(--color-border-light) background circle

// Title
Font: var(--font-size-h2) / 600
Color: var(--color-text-primary)
Margin-bottom: 8px

// Description
Font: var(--font-size-body)
Color: var(--color-text-secondary)
Max-width: 300px
Margin: 0 auto 24px
Line-height: 1.5

// CTA Button
Primary button
Width: fit-content
Margin: 0 auto

// Examples
- No Search Results: "No vendors found" + "Try different filters"
- No Bookings: "No bookings yet" + "Start planning your ceremony"
- No Wishlist: "Your wishlist is empty" + "Browse vendors"
```

---

### 20. Success Screen Component

**Purpose**: Booking confirmation, payment success

```tsx
// Visual Specs
Width: 100%
Height: 100vh
Background: var(--color-card)
Display: flex column
Align: center
Justify: center
Padding: 24px

// Success Icon
Icon: CheckCircle
Size: 80px
Color: var(--color-secondary-green)
Margin-bottom: 24px
Animation: Scale in + slight bounce

// Title
Font: var(--font-size-display) / 600
Color: var(--color-text-primary)
Text-align: center
Margin-bottom: 12px

// Message
Font: var(--font-size-body-lg)
Color: var(--color-text-secondary)
Text-align: center
Max-width: 320px
Margin-bottom: 32px

// Details Card (Optional)
Background: var(--color-background)
Border: 1px solid var(--color-border-light)
Border Radius: var(--radius-lg)
Padding: 16px
Width: 100%
Max-width: 360px
Margin-bottom: 24px

// CTAs
Primary Button: "View Booking"
Secondary Button: "Go to Home"
Gap: 12px
Full width

// Examples
- Booking Confirmed: "Booking Confirmed!" + "We've sent details to your email"
- Payment Success: "Payment Successful!" + "Booking ID: #RIT12345"
```

---

## Layout Principles

### Mobile-First Grids

```css
/* Container */
max-width: 100%
padding: 0 16px
margin: 0 auto

/* Breakpoints (for future tablet/desktop) */
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
```

### Safe Areas

Account for notches, home indicators, status bars:

```css
padding-top: env(safe-area-inset-top);
padding-bottom: env(safe-area-inset-bottom);
```

### Scrollable Content

- **Screen Padding**: 16px horizontal, 20px top (below header), 80px bottom (above bottom nav)
- **Scroll Behavior**: Smooth scrolling, momentum on iOS
- **Pull to Refresh**: Consider for home, search results, bookings

### Card Grids

```tsx
// 2-Column Grid (Ceremony Cards)
display: grid
grid-template-columns: repeat(2, 1fr)
gap: 16px

// 1-Column Stack (Vendor Cards)
display: flex column
gap: 12px
```

---

## Animation & Interaction

### Transitions

```css
/* Default */
transition: all 0.2s ease;

/* Button Hover */
transition: transform 0.15s ease, box-shadow 0.15s ease;

/* Page Transitions */
transition: opacity 0.3s ease, transform 0.3s ease;
```

### Micro-interactions

- **Button Press**: Scale 0.98 on active
- **Card Tap**: Subtle scale 0.99 + shadow increase
- **Wishlist Heart**: Scale 1.2 bounce when filled
- **Success Check**: Scale in from 0 to 1 with bounce
- **Loading**: Spinner or skeleton screens (avoid long white screens)

### Loading States

- **Button Loading**: Spinner inside button, disable interaction
- **Screen Loading**: Skeleton screens matching layout
- **Image Loading**: Low-res blur-up or color placeholder
- **Infinite Scroll**: Spinner at bottom when loading more

---

## Accessibility

### Contrast Ratios

- **Normal Text**: Minimum 4.5:1
- **Large Text** (18px+): Minimum 3:1
- **UI Components**: Minimum 3:1

### Touch Targets

- **Minimum**: 48px × 48px for all tappable elements
- **Spacing**: 8px minimum between adjacent touch targets

### Focus States

All interactive elements must have visible focus indicators:

```css
outline: 2px solid var(--color-primary-saffron);
outline-offset: 2px;
```

### Alt Text

- **Vendor Images**: "Vendor name - Service type in Location"
- **Ceremony Icons**: "Wedding ceremony planning"
- **Decorative**: Empty alt or aria-hidden

### Screen Readers

- Use semantic HTML: `<button>`, `<nav>`, `<header>`, `<main>`
- Label all form inputs
- Provide ARIA labels for icon-only buttons

---

## Content Guidelines

### Tone of Voice

**Warm, Helpful, Trustworthy**

- Use "you" and "your" (conversational)
- Active voice over passive
- Simple language for all age groups
- Respectful of traditions without being preachy

### Examples

✅ **Good**: "Find the perfect priest for your puja"
❌ **Avoid**: "Priest discovery for puja ceremonies"

✅ **Good**: "234 families trusted this vendor"
❌ **Avoid**: "234 previous transactions"

✅ **Good**: "Your booking is confirmed!"
❌ **Avoid**: "Transaction completed successfully"

### Number Formatting

- **Indian Rupees**: ₹ symbol, Indian numbering (₹1,00,000)
- **Large Numbers**: "500+ vendors" instead of "500 vendors"
- **Ratings**: One decimal (4.8, not 4.82)
- **Percentages**: "Save 20%" not "20% discount"

### Button Labels

- **Primary CTAs**: Action-oriented ("Book Now", "Continue", "Confirm Booking")
- **Secondary**: Informative ("View Details", "Learn More", "Skip")
- **Avoid**: Generic labels ("Submit", "OK", "Next")

---

## Special Patterns

### Vendor Verification Flow

Show trust signals prominently:

1. **Verified Badge**: Green checkmark on card
2. **Trust Factors**: "Verified ID", "Background checked", "Insurance covered"
3. **Social Proof**: Reviews, ratings, families served

### Price Transparency

Always show:

1. **Base Price**: Starting price or price range
2. **What's Included**: Package details
3. **Extra Costs**: Clearly labeled additional fees
4. **Payment Terms**: Advance amount, cancellation policy

### Ceremony Type Selection

Make it visual and scannable:

1. **Large Cards**: 140px height with icon/emoji
2. **Clear Labels**: Ceremony name + subtitle
3. **Visual Hierarchy**: Most popular ceremonies first
4. **Search**: For less common ceremonies

### Regional Considerations

1. **Language**: Support Hindi, English, regional languages (future)
2. **Festivals**: Highlight auspicious dates (Muhurat)
3. **Regional Customs**: Adapt vendor categories by region
4. **Currency**: INR only, Indian numbering

---

## Implementation Notes

### CSS Custom Properties

All design tokens should be defined as CSS custom properties in `/src/styles/theme.css`:

```css
@layer theme {
  :root {
    --color-primary-saffron: #F97316;
    --font-size-body: 14px;
    --space-4: 16px;
    --radius-lg: 16px;
    --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
  }
}
```

### Component Structure

Create reusable components in `/src/app/components/`:

```
/components
  /buttons
    PrimaryButton.tsx
    SecondaryButton.tsx
  /cards
    CeremonyCard.tsx
    VendorCard.tsx
    PackageCard.tsx
  /inputs
    InputField.tsx
    SearchBar.tsx
  /navigation
    BottomNav.tsx
    HeaderBar.tsx
  /badges
    VerifiedBadge.tsx
    RatingBadge.tsx
```

### Using Design System

Before creating custom UI:

1. Check if component exists in design system
2. Use design tokens (colors, spacing, typography) from theme.css
3. Follow component patterns for consistency
4. Maintain accessibility standards

---

## Quick Reference

### Most Used Colors

```
Primary CTA: #F97316
Success/Verified: #22A55A
Background: #FFFDF8
Text Primary: #1F2937
Text Secondary: #6B7280
Border: #E5E7EB
```

### Most Used Spacing

```
Card Padding: 16px
Button Height: 48px
Touch Target: 48px
Screen Padding: 16px horizontal
Section Gap: 24px
```

### Most Used Typography

```
Heading: 18px / 600
Body: 14px / 400
Button: 16px / 600
Caption: 12px / 400
```

### Most Used Radius

```
Buttons/Inputs: 10px
Cards: 16px
Chips: 9999px (full)
```

---

## Examples in Context

### Home Screen Anatomy

```
┌─────────────────────────────────────┐
│ [Header: Logo + Location + Profile] │ 56px
├─────────────────────────────────────┤
│ Search Bar (rounded, shadow)        │ 48px + padding
│                                     │
│ "Plan your ceremony"                │ H2
│ [Wedding] [Engagement] [Puja]...    │ Ceremony chips
│                                     │
│ "Top Rated Vendors"                 │ H2
│ [Vendor Card 1]                     │
│ [Vendor Card 2]                     │
│ [Vendor Card 3]                     │
│                                     │
│ "Popular Categories"                │ H2
│ [Priest] [Caterer] [Decorator]...   │ Category grid
│                                     │
├─────────────────────────────────────┤
│ [Bottom Navigation: 5 items]        │ 64px
└─────────────────────────────────────┘
```

### Vendor Detail Screen

```
┌─────────────────────────────────────┐
│ [Back] Vendor Details    [♡] [Share]│ Header
├─────────────────────────────────────┤
│                                     │
│ ┌─────────────────────────────────┐ │
│ │   Vendor Cover Image            │ │ 240px
│ │   [Verified Badge]              │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Vendor Name                   ₹₹₹   │ H1
│ ★ 4.8 (234 reviews)                 │
│ 📍 Location • Category              │
│                                     │
│ [Call] [WhatsApp] [Get Directions]  │ Action buttons
│                                     │
│ About                               │ H2
│ Description text...                 │
│                                     │
│ Packages                            │ H2
│ [Package Card: Basic]               │
│ [Package Card: Premium] ⭐          │
│                                     │
│ Gallery                             │ H2
│ [Image Grid]                        │
│                                     │
│ Reviews (234)                       │ H2
│ [Review 1]                          │
│ [Review 2]                          │
│                                     │
├─────────────────────────────────────┤
│ [Book Now - Primary Button]         │ Sticky footer
└─────────────────────────────────────┘
```

---

**Last Updated**: May 2026
**Version**: 1.0
**For**: RitualSathi Mobile App (Android)

This design system is a living document. Update as patterns emerge and user needs evolve.
