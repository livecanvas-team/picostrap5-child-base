# Picostrap5 Child Base Theme

A WordPress child theme for **Picostrap5** - providing a solid foundation for custom WordPress development with Bootstrap 5, LiveCanvas integration, and browser-based SASS compilation.

## Overview

This child theme extends the powerful **Picostrap5** parent theme, which is a modern WordPress starter theme built on **Bootstrap 5.3.8** featuring unique browser-based SASS compilation. No build tools required!

### Key Features

- ✅ **Bootstrap 5.3.6** integration with full SCSS customization
- ✅ **Browser-based SASS compilation** - no npm, webpack, or Node.js needed
- ✅ **LiveCanvas page builder** blocks, sections, and templates included
- ✅ **WooCommerce ready** with Bootstrap styling
- ✅ **Performance optimized** with single CSS bundle output
- ✅ **Child theme architecture** for safe customization
- ✅ **Release automation** with packaging script

## Requirements

- WordPress (latest version recommended)
- **Picostrap5 parent theme** (version 3.8.3+)
- Administrator privileges for SASS compilation
- Modern web browser

## Installation

1. **Install the parent theme first:**
   ```bash
   # Download and install picostrap5 parent theme
   # Available from the theme developer
   ```

2. **Install this child theme:**
   ```bash
   # Upload this child theme to /wp-content/themes/
   # Or install via WordPress admin
   ```

3. **Activate the child theme** in WordPress Admin > Appearance > Themes

## Development Workflow

### SASS/CSS Customization

1. **Edit SASS files** in the `/sass/` directory:
   - `sass/custom.scss` - Your custom styles
   - `sass/main.scss` - Main compilation entry point

2. **Compile SASS** via WordPress Customizer:
   - Go to **Appearance > Customize**
   - Use the **"RECOMPILE SASS"** button
   - Compiled CSS outputs to `/css-output/bundle.css`

3. **Live preview** your changes in the Customizer

### PHP Customization

- Add custom PHP code in `functions.php` after line 58
- Custom loops go in `/loops/`
- Template parts go in `/partials/`

### JavaScript Customization

- Uncomment line 41 in `functions.php` to enable `/js/custom.js`
- Bootstrap bundle loads with defer strategy for performance

### LiveCanvas Integration

This child theme includes LiveCanvas page builder assets:
- **Blocks**: `/livecanvas/blocks/`
- **Sections**: `/livecanvas/sections/`
- **Pages**: `/livecanvas/pages/`
- **Configuration**: LiveCanvas theme options and editor settings

## Key Files Structure

```
picostrap5-child-base/
├── functions.php           # Main theme customization
├── style.css              # Theme header and metadata
├── sass/
│   ├── main.scss          # Main SASS entry point
│   ├── custom.scss        # Your custom styles
│   └── bootstrap5/        # Bootstrap 5 SCSS source
├── css-output/
│   └── bundle.css         # Compiled CSS output
├── js/
│   ├── bootstrap.bundle.min.js
│   └── custom.js          # Custom JavaScript
├── livecanvas/            # LiveCanvas integration
├── loops/                 # Custom post loops
├── partials/             # Template partials
└── fonts/                # Custom fonts
```

## Customization Guide

### Colors and Bootstrap Variables

Customize Bootstrap variables through:
1. **WordPress Customizer** - live editing interface
2. **SASS files** - direct SCSS variable overrides

### Adding Custom Styles

1. Edit `sass/custom.scss`
2. Use WordPress Customizer to recompile
3. Changes appear in `/css-output/bundle.css`

### Custom JavaScript

```php
// In functions.php, uncomment to enable custom.js:
wp_enqueue_script('custom', get_stylesheet_directory_uri() . '/js/custom.js', array(), null, array('strategy' => 'defer', 'in_footer' => true));
```

### Navigation Menus

```php
// Uncomment in functions.php to add more menus:
register_nav_menus( array( 
    'third' => __( 'Third Menu', 'picostrap' ),
    'fourth' => __( 'Fourth Menu', 'picostrap' )
));
```

## Deployment

### Creating a Release

```bash
./release.sh
```

This creates `picostrap5-child-base.zip` ready for distribution, excluding:
- `.git` files
- `.DS_Store` files
- Development artifacts

### Production Checklist

- [ ] SASS compiled via Customizer
- [ ] Custom code tested
- [ ] Performance optimized
- [ ] Security reviewed (Application Passwords disabled if needed)

## Parent Theme Features

Your child theme inherits these powerful features from Picostrap5:

- **PicoSASS**: Browser-based SASS compilation
- **NinjaBootstrap**: Extended Bootstrap utilities
- **AI Color Palette Generator**: Automatic color scheme generation
- **Performance optimization**: Head cleanup, single CSS bundle
- **WooCommerce integration**: Bootstrap-styled e-commerce
- **Customizer integration**: Live preview and editing

## Support

- **Parent Theme**: [Picostrap5 Documentation](https://www.youtube.com/playlist?list=PLtyHhWhkgYU8i11wu-5KJDBfA9C-D4Bfl)
- **Bootstrap**: [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- **LiveCanvas**: [LiveCanvas Documentation](https://livecanvas.com)

## License

GPL v2 or later, same as WordPress core.

---

**Built with ❤️ using Picostrap5 - The best way to experience SASS, Bootstrap and WordPress**