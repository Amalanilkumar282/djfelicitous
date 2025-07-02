/**
 * Performance Monitoring Utility for DJ Felicitous Website
 * Monitors and optimizes website performance for professional standards
 */

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();
  
  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Monitor component rendering time
  measureComponentRender(componentName: string, renderFn: () => void) {
    const start = performance.now();
    renderFn();
    const end = performance.now();
    const duration = end - start;
    
    this.metrics.set(`${componentName}_render`, duration);
    
    // Log if render takes too long (> 16ms for 60fps)
    if (duration > 16) {
      console.warn(`⚠️ ${componentName} render took ${duration.toFixed(2)}ms (> 16ms threshold)`);
    }
    
    return duration;
  }

  // Monitor animation performance
  measureAnimation(animationName: string, animationFn: () => Promise<void>) {
    const start = performance.now();
    
    return animationFn().then(() => {
      const end = performance.now();
      const duration = end - start;
      
      this.metrics.set(`${animationName}_animation`, duration);
      
      // Log if animation is not smooth (> 300ms)
      if (duration > 300) {
        console.warn(`⚠️ ${animationName} animation took ${duration.toFixed(2)}ms (> 300ms threshold)`);
      }
      
      return duration;
    });
  }

  // Monitor resource loading
  measureResourceLoad(resourceName: string, loadFn: () => Promise<unknown>) {
    const start = performance.now();
    
    return loadFn().then((result) => {
      const end = performance.now();
      const duration = end - start;
      
      this.metrics.set(`${resourceName}_load`, duration);
      
      // Log if resource loading is slow (> 1000ms)
      if (duration > 1000) {
        console.warn(`⚠️ ${resourceName} loading took ${duration.toFixed(2)}ms (> 1000ms threshold)`);
      }
      
      return result;
    });
  }

  // Get all performance metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  // Get performance score (0-100)
  getPerformanceScore(): number {
    const metrics = Array.from(this.metrics.values());
    if (metrics.length === 0) return 100;
    
    const averageTime = metrics.reduce((sum, time) => sum + time, 0) / metrics.length;
    
    // Score based on average performance (lower is better)
    if (averageTime < 16) return 100; // Excellent
    if (averageTime < 50) return 85;  // Good
    if (averageTime < 100) return 70; // Acceptable
    if (averageTime < 300) return 50; // Poor
    return 25; // Very Poor
  }

  // Clear all metrics
  clearMetrics(): void {
    this.metrics.clear();
  }

  // Log performance summary
  logSummary(): void {
    const score = this.getPerformanceScore();
    const metrics = this.getMetrics();
    
    console.group('🎧 DJ Felicitous Performance Summary');
    console.log(`📊 Performance Score: ${score}/100`);
    console.log('⏱️ Detailed Metrics:', metrics);
    
    if (score >= 85) {
      console.log('✅ Excellent performance! Ready for professional use.');
    } else if (score >= 70) {
      console.log('⚠️ Good performance, minor optimizations recommended.');
    } else {
      console.log('❌ Performance issues detected. Optimization required.');
    }
    
    console.groupEnd();
  }
}

// React Hook for performance monitoring
export const usePerformanceMonitor = () => {
  const monitor = PerformanceMonitor.getInstance();
  
  return {
    measureRender: monitor.measureComponentRender.bind(monitor),
    measureAnimation: monitor.measureAnimation.bind(monitor),
    measureLoad: monitor.measureResourceLoad.bind(monitor),
    getScore: monitor.getPerformanceScore.bind(monitor),
    getMetrics: monitor.getMetrics.bind(monitor),
    logSummary: monitor.logSummary.bind(monitor)
  };
};

// Performance optimization utilities
export const OptimizationUtils = {
  // Debounce function for performance
  debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  },

  // Throttle function for performance
  throttle<T extends (...args: unknown[]) => unknown>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        func(...args);
      }
    };
  },

  // Lazy load images for better performance
  createIntersectionObserver(
    callback: (entries: IntersectionObserverEntry[]) => void,
    options?: IntersectionObserverInit
  ): IntersectionObserver {
    return new IntersectionObserver(callback, {
      rootMargin: '50px',
      threshold: 0.1,
      ...options
    });
  },

  // Preload critical resources
  preloadResource(href: string, as: string): void {
    if (typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      document.head.appendChild(link);
    }
  },

  // Check if user prefers reduced motion
  prefersReducedMotion(): boolean {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  },

  // Get device performance class
  getDevicePerformanceClass(): 'high' | 'medium' | 'low' {
    if (typeof navigator !== 'undefined') {
      const nav = navigator as typeof navigator & {
        hardwareConcurrency?: number;
        deviceMemory?: number;
      };
      
      const cores = nav.hardwareConcurrency || 2;
      const memory = nav.deviceMemory || 2;
      
      if (cores >= 8 && memory >= 8) return 'high';
      if (cores >= 4 && memory >= 4) return 'medium';
    }
    return 'low';
  }
};
