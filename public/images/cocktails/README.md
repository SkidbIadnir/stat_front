# Cocktail Images Directory

This directory contains images for the cocktail menu.

## Image Naming Convention

Images should be named using kebab-case (lowercase with hyphens) matching the cocktail names:

- `old-fashioned.jpg` - Old Fashioned cocktail
- `mojito.jpg` - Mojito cocktail
- `margarita.jpg` - Margarita cocktail
- `spiced-pear-fizz.jpg` - Spiced Pear Fizz cocktail
- `elderflower-gin-fizz.jpg` - Elderflower Gin Fizz cocktail
- `virgin-mojito.jpg` - Virgin Mojito (mocktail)

## Image Requirements

- **Format**: JPG, PNG, or WebP recommended
- **Dimensions**: Minimum 400x300px, recommended 800x600px or higher
- **Aspect Ratio**: 4:3 or 16:9 work well
- **File Size**: Keep under 500KB for optimal loading performance

## Adding New Images

1. Place the image file in this directory
2. Update the corresponding cocktail object in `/src/app/cocktail-menu/page.tsx`
3. Set the `image` property to `/images/cocktails/your-image-name.jpg`

## Next.js Image Optimization

The images are automatically optimized by Next.js for:

- Responsive loading
- Format conversion (WebP when supported)
- Lazy loading
- Size optimization

