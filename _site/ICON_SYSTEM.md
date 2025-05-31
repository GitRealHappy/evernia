# Custom Icon System Documentation

## Overview
Evernia Design now features a custom SVG icon system that replaces emoji usage throughout the site. This system provides:
- **Professional Appearance**: Custom-designed SVG icons that match the premium brand aesthetic
- **Performance**: Optimized vector graphics that scale perfectly at any size
- **Consistency**: Uniform styling and behavior across all icons
- **Accessibility**: Better screen reader support and semantic meaning
- **Advanced Animations**: Sophisticated micro-interactions and scroll-triggered effects

## Icon Sprite Location
- **File**: `/assets/images/icons.svg`
- **Format**: SVG symbol sprite
- **Loading**: Automatically loaded in `_layouts/default.html`

## Available Icons

### Core Service Icons
- `icon-lightning` - Performance/Speed (⚡ replacement)
- `icon-store` - E-commerce/Shopping (🏪 replacement)
- `icon-tools` - Development/Tools (🔧 replacement)
- `icon-target` - Strategy/Goals (🎯 replacement)
- `icon-content` - Content/Writing (📝 replacement)
- `icon-design` - Design/Creative (🎨 replacement)
- `icon-analytics` - Analytics/Growth (📈 replacement)
- `icon-security` - Security/Protection (🛡️ replacement)
- `icon-rocket` - Launch/Growth (🚀 replacement)

### UI Support Icons
- `icon-phone` - Contact/Phone
- `icon-email` - Email/Contact
- `icon-clock` - Time/Schedule
- `icon-user` - User/Person
- `icon-check` - Success/Confirmation
- `icon-arrow-right` - Navigation/Next
- `icon-brain` - Intelligence/AI
- `icon-globe` - Global/Web

## Usage

### Basic Usage
```html
<svg class="icon"><use href="#icon-lightning"></use></svg>
```

### With Size Classes
```html
<svg class="icon icon-sm"><use href="#icon-lightning"></use></svg>  <!-- 16px -->
<svg class="icon icon-md"><use href="#icon-lightning"></use></svg>  <!-- 24px -->
<svg class="icon icon-lg"><use href="#icon-lightning"></use></svg>  <!-- 32px -->
<svg class="icon icon-xl"><use href="#icon-lightning"></use></svg>  <!-- 48px -->
```

### With Advanced Animations
```html
<!-- Animated Icons -->
<svg class="icon icon-animated"><use href="#icon-lightning"></use></svg>

<!-- Hover Effects -->
<svg class="icon icon-hover-lift"><use href="#icon-lightning"></use></svg>
<svg class="icon icon-hover-pulse"><use href="#icon-lightning"></use></svg>
<svg class="icon icon-hover-spin"><use href="#icon-lightning"></use></svg>
<svg class="icon icon-hover-bounce"><use href="#icon-lightning"></use></svg>
<svg class="icon icon-hover-glow"><use href="#icon-lightning"></use></svg>

<!-- Enhanced Service Icons -->
<div class="service-icon service-icon-enhanced">
  <svg class="icon icon-animated"><use href="#icon-lightning"></use></svg>
</div>
```

## Advanced Animation System

### Scroll-Triggered Animations
Elements automatically animate into view when scrolled into viewport:
```html
<!-- Basic scroll animation -->
<div class="animate-on-scroll">Content animates in</div>

<!-- Staggered animations -->
<div class="animate-cascade">
  <div class="animate-on-scroll">Item 1</div>
  <div class="animate-on-scroll">Item 2</div>
  <div class="animate-on-scroll">Item 3</div>
</div>
```

### Interactive Effects
```html
<!-- Magnetic hover effect -->
<div class="magnetic-effect">Follows cursor slightly</div>

<!-- Ripple click effect -->
<button class="btn ripple-effect">Click for ripple</button>

<!-- 3D tilt on hover -->
<div class="tilt-card">Tilts on hover</div>

<!-- Text reveal animation -->
<h2 class="text-reveal">Text with sweep effect</h2>
```

### Icon-Specific Animations
Special animations trigger based on icon type:
- **Lightning**: Flash effect on hover
- **Rocket**: Launch animation on hover  
- **Target**: Focus pulsing animation
- **Analytics**: Growth scaling effect

### Button Animations
```html
<!-- Icon slides right on hover -->
<a class="btn btn-icon-slide">
  Button Text 
  <svg class="icon"><use href="#icon-arrow-right"></use></svg>
</a>

<!-- Icon rotates on hover -->
<a class="btn btn-icon-rotate">
  Button Text 
  <svg class="icon"><use href="#icon-arrow-right"></use></svg>
</a>
```

## Animation Classes

### Hover Micro-Interactions
- `.icon-hover-lift` - Lifts up with shadow
- `.icon-hover-pulse` - Gentle pulsing effect
- `.icon-hover-spin` - Continuous rotation
- `.icon-hover-bounce` - Elegant bouncing
- `.icon-hover-glow` - Glowing outline effect

### Scroll Animations
- `.animate-on-scroll` - Basic entrance animation
- `.animate-cascade` - Staggered children animations
- `.in-view` - Applied automatically when element enters viewport

### Interactive Effects
- `.magnetic-effect` - Subtle cursor following
- `.ripple-effect` - Click ripple animation
- `.tilt-card` - 3D hover tilt effect
- `.text-reveal` - Text sweep reveal
- `.parallax-icon` - Scroll parallax movement

### State Animations
- `.icon-loading` - Loading spinner state
- `.icon-success` - Success pop animation
- `.icon-error` - Error shake animation

### Timing Utilities
- `.animation-delay-100` through `.animation-delay-500`
- `.animation-duration-fast/normal/slow`
- `.animation-ease-premium` - Custom easing curves

## Service Icon Styling
The `.service-icon-enhanced` class provides advanced styling:

- **Rotating Border**: Animated conic gradient border
- **Hover Effects**: Scale, rotate, and glow transitions
- **3D Transforms**: Sophisticated hover animations
- **Performance**: GPU-accelerated animations

## JavaScript Controller

Access the animation controller globally:
```javascript
// Show loading state
window.EverniaAnimations.showLoadingState(element);

// Show success state  
window.EverniaAnimations.showSuccessState(element);

// Show error state
window.EverniaAnimations.showErrorState(element);
```

## Performance Optimizations

### Automatic Optimizations
- **Intersection Observer**: Efficient scroll detection
- **Animation Pausing**: Pauses when tab not visible
- **Mobile Reduction**: Simplified animations on mobile
- **Reduced Motion**: Respects user accessibility preferences

### Manual Performance Controls
```css
@media (prefers-reduced-motion: reduce) {
  /* Animations automatically disabled */
}

@media (max-width: 768px) {
  /* Complex animations simplified */
}
```

## Browser Support
- **Modern Browsers**: Full support with hardware acceleration
- **Safari**: Full support including backdrop-filter
- **Mobile**: Optimized for touch interactions
- **Accessibility**: Respects motion preferences

## Adding New Icons

### 1. Design Guidelines
- **ViewBox**: Use `0 0 24 24` for consistency
- **Style**: Line weight 2px, filled shapes where appropriate
- **Colors**: Use `currentColor` and `white` with opacity for highlights
- **Animation Ready**: Design for transform animations

### 2. Animation Integration
```xml
<symbol id="icon-name" viewBox="0 0 24 24">
  <path d="..." fill="currentColor"/>
  <!-- Animation-friendly structure -->
  <circle cx="..." cy="..." r="..." fill="white" opacity="0.9"/>
</symbol>
```

### 3. Custom Animation Effects
Add specific animations in `/assets/css/animations.css`:
```css
.icon-newicon-effect:hover {
  animation: custom-animation 1.5s ease-in-out;
}

@keyframes custom-animation {
  /* Custom keyframes */
}
```

## Migration Notes
All emoji replacements completed with enhanced animations:
- ⚡ → `icon-lightning` (with flash effect)
- 🏪 → `icon-store` (with scale effect)
- 🔧 → `icon-tools` (with rotate effect)
- 🎯 → `icon-target` (with focus effect)
- 📝 → `icon-content` (with typing effect)
- 🎨 → `icon-design` (with color effect)
- 📈 → `icon-analytics` (with growth effect)
- 🛡️ → `icon-security` (with pulse effect)
- 🚀 → `icon-rocket` (with launch effect)

## Animation Performance Guidelines

### Best Practices
1. **Use Transform Properties**: Better GPU acceleration
2. **Avoid Layout Thrashing**: Stick to opacity and transforms
3. **Limit Concurrent Animations**: Maximum 6 simultaneous
4. **Progressive Enhancement**: Base functionality without animations

### Implementation Examples
```html
<!-- Optimal: GPU-accelerated -->
<div class="service-icon service-icon-enhanced">
  <svg class="icon icon-animated"><use href="#icon-lightning"></use></svg>
</div>

<!-- Good: With fallbacks -->
<div class="animate-on-scroll tilt-card magnetic-effect">
  Content with multiple effects
</div>
```

---

*Last Updated: January 2025*
*Next Review: February 2025*
*Animation System: Version 2.0* 