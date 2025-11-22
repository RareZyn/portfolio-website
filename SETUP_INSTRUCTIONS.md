# Portfolio Website Setup Instructions

## Your Profile Photo

To add your profile photo to the Hero section:

1. Save your professional photo (from the resume) as `profile.jpg` or `profile.png`
2. Place it in the `src/assets/` folder
3. Open `src/components/sections/Hero.jsx`
4. Replace the image placeholder section (around lines 69-75) with:

```jsx
<div className="profile-image-wrapper">
  <div className="profile-image">
    <img src="/src/assets/profile.jpg" alt="Razin Bin Nazarudin" />
  </div>
</div>
```

## Customizing Your Projects

The Projects section has a placeholder for your Final Year Project. To customize it:

1. Open `src/components/sections/Projects.jsx`
2. Update the first project object in the `projects` array:
   - Replace the `description` with your actual FYP description
   - Update the `technologies` array with your actual tech stack
   - Add your GitHub repository link to `github`
   - Add your demo/deployment link to `demo` (if available)

Example:
```jsx
{
  title: 'Your FYP Project Title',
  description: 'Detailed description of what your project does...',
  technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
  github: 'https://github.com/RareZyn/your-fyp-repo',
  demo: 'https://your-project-demo.com',
  featured: true
}
```

## Development Commands

- **Start dev server**: `npm run dev`
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
- **Lint code**: `npm run lint`

## Current Status

✅ All sections are built and responsive
✅ Navy/slate blue color scheme applied
✅ Animations with AOS implemented
✅ Bootstrap integrated
✅ Mobile-responsive design

## What's Next?

1. Add your profile photo
2. Update FYP project details
3. Test on different devices
4. Deploy when ready!

## Notes

- The website is running at: http://localhost:5173/
- Your resume PDF is already linked in the navigation and hero section
- All social links (GitHub, LinkedIn, Email) are already configured from your resume
