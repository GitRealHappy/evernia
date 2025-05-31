/* Evernia Design - Simple Icon Animation Controller */
/* Basic hover effects and icon enhancements */

class SimpleAnimationController {
  constructor() {
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupAnimations());
    } else {
      this.setupAnimations();
    }
  }

  setupAnimations() {
    this.setupIconHoverEffects();
    this.setupMagneticEffects();
  }

  // Enhanced hover effects for service icons
  setupIconHoverEffects() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
      const icon = card.querySelector('.service-icon');
      if (!icon) return;

      // Add enhanced animation classes
      icon.classList.add('service-icon-enhanced');
    });
  }

  // Simple magnetic effect for buttons
  setupMagneticEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
      btn.classList.add('magnetic-effect');
    });
  }

  // Loading state management
  showLoadingState(element) {
    const icon = element.querySelector('.icon');
    if (icon) {
      icon.classList.add('icon-loading');
    }
  }

  hideLoadingState(element) {
    const icon = element.querySelector('.icon');
    if (icon) {
      icon.classList.remove('icon-loading');
    }
  }
}

// Auto-initialize when script loads
const animationController = new SimpleAnimationController();

// Expose controller globally for advanced usage
window.EverniaAnimations = animationController; 