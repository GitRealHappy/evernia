# Custom Icon System Documentation

## Overview
Evernia Design now features a custom SVG icon system that replaces emoji usage throughout the site. This system provides:
- **Professional Appearance**: Custom-designed SVG icons that match the premium brand aesthetic
- **Performance**: Optimized vector graphics that scale perfectly at any size
- **Consistency**: Uniform styling and behavior across all icons
- **Accessibility**: Better screen reader support and semantic meaning

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

### With Animations
```html
<svg class="icon icon-rotate"><use href="#icon-lightning"></use></svg>  <!-- Spinning -->
<svg class="icon icon-pulse"><use href="#icon-lightning"></use></svg>   <!-- Pulsing -->
```

### In Service Cards
```html
<div class="service-icon">
  <svg class="icon"><use href="#icon-lightning"></use></svg>
</div>
```

## Styling System

### Size Classes
- `.icon-sm` - 16x16px (small UI elements)
- `.icon-md` - 24x24px (standard inline icons)
- `.icon-lg` - 32x32px (feature highlights)
- `.icon-xl` - 48x48px (hero sections)

### Animation Classes
- `.icon-rotate` - Continuous rotation
- `.icon-pulse` - Opacity pulsing effect

### Color Control
Icons inherit the `currentColor` CSS property, making them responsive to text color changes:

```css
.text-gold .icon { color: var(--champagne-gold); }
.text-blue .icon { color: var(--electric-blue); }
.text-purple .icon { color: var(--royal-purple); }
```

## Service Icon Styling
The `.service-icon` class provides special styling for service cards:

- **Background**: Gold to blue gradient
- **Hover Effect**: Transforms to blue/purple gradient
- **Animation**: Scale and color transition on hover
- **Size**: Fixed 80px circle with 40px icon

## Adding New Icons

### 1. Design Guidelines
- **ViewBox**: Use `0 0 24 24` for consistency
- **Style**: Line weight 2px, filled shapes where appropriate
- **Colors**: Use `currentColor` and `white` with opacity for highlights
- **Simplicity**: Keep designs clean and recognizable at small sizes

### 2. SVG Structure
```xml
<symbol id="icon-name" viewBox="0 0 24 24">
  <path d="..." fill="currentColor"/>
  <!-- Optional highlight elements -->
  <circle cx="..." cy="..." r="..." fill="white" opacity="0.9"/>
</symbol>
```

### 3. Integration Steps
1. Add new `<symbol>` to `/assets/images/icons.svg`
2. Follow naming convention: `icon-descriptive-name`
3. Test at multiple sizes
4. Update this documentation

## Performance Notes
- **Sprite Loading**: Icons are loaded once per page via JavaScript fetch
- **Caching**: SVG sprite is cached by the browser
- **Size**: Current sprite ~3KB gzipped
- **Rendering**: Hardware-accelerated SVG rendering

## Browser Support
- **Modern Browsers**: Full support (Chrome 55+, Firefox 55+, Safari 12+)
- **Legacy Support**: Graceful degradation (IE11 with polyfill if needed)
- **Mobile**: Full support on iOS Safari and Chrome Mobile

## Migration Notes
The following emoji replacements have been completed:
- ⚡ → `icon-lightning`
- 🏪 → `icon-store`
- 🔧 → `icon-tools`
- 🎯 → `icon-target`
- 📝 → `icon-content`
- 🎨 → `icon-design`
- 📈 → `icon-analytics`
- 🛡️ → `icon-security`
- 🚀 → `icon-rocket`

## Future Enhancements
1. **Icon Variants**: Outlined and filled versions
2. **Theme Adaptation**: Automatic dark/light mode variants
3. **Animation Library**: More sophisticated animations
4. **Icon Font**: Optional webfont version for simpler implementation
5. **Build Process**: Automated optimization and sprite generation

---

*Last Updated: January 2025*
*Next Review: February 2025* 