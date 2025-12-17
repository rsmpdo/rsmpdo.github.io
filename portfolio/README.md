# Portfolio Website - Setup Guide

## 📋 Project Structure

```
portfolio/
├── index.html              # Main homepage
├── css/
│   └── style.css          # Main stylesheet with futuristic design
├── js/
│   └── script.js          # Interactive features
├── projects/
│   ├── building-control.html      # Engineering project (complete example)
│   ├── motion-graphics.html        # Design project
│   ├── ui-design.html              # Design project
│   ├── video-editing.html          # Design project
│   ├── data-management.html        # Engineering project
│   └── system-optimization.html    # Engineering project
└── assets/
    ├── images/            # Place your images here
    └── videos/            # Place your videos here
```

## 🎨 Features

- **Futuristic Design**: Modern gradient colors (neon green #00ff88, cyan #00d4ff, dark blue background)
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll animations, hover effects, and parallax backgrounds
- **Two Main Sections**:
  - Design & Video Editing Projects
  - Engineering Projects
- **Interactive Navigation**: Smooth scrolling and dynamic navigation bar

## 📸 Adding Images

### Method 1: Direct Image Path
In any project page, add images using:
```html
<div class="media-container">
    <img src="../assets/images/your-image.jpg" alt="Description">
</div>
```

### Method 2: Replace Placeholder SVG
Edit the Building Control project page's dashboard section to add your image:
```html
<img src="../assets/images/your-dashboard.png" alt="Dashboard Interface">
```

### Supported Formats
- JPG/JPEG
- PNG
- WebP
- SVG

## 🎬 Adding Videos

### Method 1: Embedded Video
```html
<div class="media-container">
    <video width="100%" height="auto" controls>
        <source src="../assets/videos/your-video.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>
```

### Method 2: YouTube/Vimeo Embed
```html
<div class="media-container">
    <iframe width="100%" height="400" 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        frameborder="0" allowfullscreen></iframe>
</div>
```

### Supported Formats
- MP4
- WebM
- Ogg

## 🚀 Getting Started

### 1. Quick Start (Local Testing)
- Open `index.html` in a web browser
- Click through the navigation to explore all pages

### 2. Using Live Server (Recommended)
```bash
# If using VS Code, install Live Server extension
# Then right-click index.html and select "Open with Live Server"
```

### 3. Using Python
```bash
# Python 3.x
python -m http.server 8000

# Then visit: http://localhost:8000
```

### 4. Using Node.js
```bash
# Install http-server globally
npm install -g http-server

# Run from portfolio directory
http-server
```

## ✏️ Customization Guide

### Change Logo Text
Find this in index.html and all project files:
```html
<a href="#home" class="logo">⚡ Portfolio</a>
```
Change "Portfolio" to your name or title.

### Update Colors
Edit `css/style.css` to modify:
- Primary green: `#00ff88` → your color
- Primary cyan: `#00d4ff` → your color
- Background: `#0a0e27` → your color

### Add New Projects
1. Create a new HTML file in `projects/` folder
2. Copy structure from `motion-graphics.html` or `video-editing.html`
3. Add link in `index.html` projects grid

### Update Contact Email
Find this in all files:
```html
<a href="mailto:contact@portfolio.com" class="cta-button">
```
Replace `contact@portfolio.com` with your email.

## 📝 Building Control Project - Example Format

The `building-control.html` file shows the recommended structure for detailed project pages:

- **Overview**: Project description and purpose
- **Key Features**: Main features and benefits
- **Technical Architecture**: Technical details and stack
- **Performance Metrics**: Results and improvements
- **Implementation Timeline**: Project phases
- **Use Cases**: Real-world applications
- **Future Roadmap**: Planned enhancements

## 🎯 Best Practices

1. **Image Optimization**
   - Use 1920x1080px for hero images
   - Compress images (use TinyPNG or similar)
   - Use WebP format for better compression

2. **Video Optimization**
   - Keep videos under 100MB for web
   - Use MP4 format for best compatibility
   - Add captions for accessibility

3. **Performance**
   - Minimize CSS/JS files for production
   - Use lazy loading for images
   - Implement caching strategies

4. **SEO**
   - Update meta descriptions
   - Add proper alt text to images
   - Use semantic HTML structure

## 🔗 Useful Resources

- [CSS Gradients](https://cssgradients.io/)
- [Unsplash - Free Images](https://unsplash.com/)
- [Pexels - Free Videos](https://www.pexels.com/videos/)
- [Font Awesome - Icons](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

## 📱 Testing Checklist

- [ ] Navigation works on all pages
- [ ] Images load correctly
- [ ] Videos play properly
- [ ] Mobile responsiveness tested
- [ ] All links work (internal and external)
- [ ] Contact email links work
- [ ] Animations run smoothly
- [ ] Console has no errors

## 🚨 Troubleshooting

### Images Not Loading
- Check file paths (use `../` for going up directories)
- Ensure image files are in `assets/images/` folder
- Verify file extensions are correct

### Videos Not Playing
- Check video format is MP4 or supported by browser
- Verify file path is correct
- Ensure video file is not too large
- Test in different browsers

### Styling Issues
- Clear browser cache (Ctrl+Shift+Del)
- Check CSS file path in HTML
- Verify no conflicting CSS rules
- Test in incognito/private mode

## 📞 Support Resources

- CSS/HTML questions: MDN Web Docs
- Design inspiration: Dribbble, Behance
- Performance testing: Google PageSpeed Insights

---

**Enjoy your portfolio website! 🎉**
