# Rocxion Button System

A comprehensive, reusable button component system built with Rocxion's brand colors and design principles.

## Features

- **Brand-consistent colors**: Uses Rocxion's primary (`#0ea5e9`) and accent (`#ec1c24`) colors
- **Multiple variants**: Primary, secondary, accent, outline, ghost, destructive, and success
- **Responsive sizes**: Small, default, large, extra-large, and icon-only
- **Interactive states**: Hover, active, focus, disabled, and loading states
- **Accessibility**: Full keyboard navigation and screen reader support
- **Motion**: Smooth animations with Framer Motion integration

## Installation

The button system is already set up in your project. To use it:

```tsx
import { Button } from '@/components/Button';
```

## Usage

### Basic Examples

```tsx
// Primary button
<Button variant="primary">Get Started</Button>

// Secondary button
<Button variant="secondary">Learn More</Button>

// Accent button for high-priority actions
<Button variant="accent">Contact Us</Button>

// Outline button
<Button variant="outline">View Details</Button>
```

### With Icons

```tsx
import { ArrowRightIcon, DownloadIcon } from '@heroicons/react/24/outline';

<Button variant="primary" rightIcon={<ArrowRightIcon />}>
  Get Started
</Button>

<Button variant="secondary" leftIcon={<DownloadIcon />}>
  Download
</Button>
```

### Sizes

```tsx
<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="default">Default</Button>
<Button variant="primary" size="lg">Large</Button>
<Button variant="primary" size="xl">Extra Large</Button>
<Button variant="primary" size="icon"><IconComponent /></Button>
```

### States

```tsx
// Loading state
<Button variant="primary" loading>
  Processing...
</Button>

// Disabled state
<Button variant="primary" disabled>
  Unavailable
</Button>

// Full width
<Button variant="primary" fullWidth>
  Full Width Button
</Button>
```

## Button Variants

### Primary (`variant="primary"`)
- **Use for**: Main actions, CTAs, primary navigation
- **Color**: Rocxion primary blue (`#0ea5e9`)
- **Style**: Solid background with white text and shadow

### Secondary (`variant="secondary"`)
- **Use for**: Secondary actions, alternative options
- **Color**: Neutral colors with border
- **Style**: White background with border and colored text

### Accent (`variant="accent"`)
- **Use for**: High-priority actions, urgent calls-to-action
- **Color**: Rocxion accent red (`#ec1c24`)
- **Style**: Solid background with white text and shadow

### Outline (`variant="outline"`)
- **Use for**: Secondary actions, less prominent buttons
- **Color**: Primary blue border and text
- **Style**: Transparent background with colored border

### Ghost (`variant="ghost"`)
- **Use for**: Subtle actions, navigation, tertiary buttons
- **Color**: Primary blue text
- **Style**: No background or border, text-only

### Destructive (`variant="destructive"`)
- **Use for**: Delete, remove, dangerous actions
- **Color**: Error red (`#dc2626`)
- **Style**: Solid background with white text

### Success (`variant="success"`)
- **Use for**: Confirm, save, success actions
- **Color**: Success green (`#22c55e`)
- **Style**: Solid background with white text

## Color System

### Primary Colors
- **Default**: `#0ea5e9` (Sky blue)
- **Hover**: `#0284c7` (Darker sky blue)
- **Active**: `#0369a1` (Even darker sky blue)
- **Focus**: `#bae6fd` (Light sky blue)
- **Disabled**: `#e0f2fe` (Very light sky blue)

### Accent Colors
- **Default**: `#ec1c24` (Rocxion red)
- **Hover**: `#d8181f` (Darker red)
- **Active**: `#b5141a` (Even darker red)
- **Focus**: `#f8c5c7` (Light red)
- **Disabled**: `#f7b1b5` (Very light red)

## API Reference

### Button Props

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'destructive' | 'success';
  size?: 'sm' | 'default' | 'lg' | 'xl' | 'icon';
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  children: React.ReactNode;
  // ... standard button HTML attributes
}
```

## Best Practices

### 1. Use Semantic Variants
```tsx
// ✅ Good - semantic usage
<Button variant="primary">Save Changes</Button>
<Button variant="destructive">Delete Account</Button>
<Button variant="success">Confirm Order</Button>

// ❌ Avoid - non-semantic usage
<Button variant="destructive">Learn More</Button>
```

### 2. Consistent Sizing
```tsx
// ✅ Good - consistent sizing in groups
<div className="flex gap-4">
  <Button variant="primary" size="lg">Primary Action</Button>
  <Button variant="secondary" size="lg">Secondary Action</Button>
</div>
```

### 3. Loading States
```tsx
// ✅ Good - clear loading states
const [isSubmitting, setIsSubmitting] = useState(false);

<Button 
  variant="primary" 
  loading={isSubmitting}
  disabled={isSubmitting}
>
  {isSubmitting ? 'Saving...' : 'Save Changes'}
</Button>
```

### 4. Icon Usage
```tsx
// ✅ Good - meaningful icons
<Button variant="primary" rightIcon={<ArrowRightIcon />}>
  Get Started
</Button>

<Button variant="secondary" leftIcon={<DownloadIcon />}>
  Download PDF
</Button>
```

## Accessibility

The button component includes:
- Proper ARIA attributes
- Keyboard navigation support
- Focus indicators
- Screen reader compatibility
- Disabled state management

## Animation

All buttons include subtle animations:
- **Hover**: Scale to 1.02x
- **Active**: Scale to 0.98x
- **Transitions**: 300ms duration
- **Loading**: Spinner animation

## Examples in Production

Check out the button showcase at `/buttons` to see all variants and states in action.

## Migration from Old Buttons

Replace old button implementations:

```tsx
// Old
<button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-2xl">
  Click me
</button>

// New
<Button variant="primary">
  Click me
</Button>
```