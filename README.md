# AI Image Generator - React

A modern, responsive AI image generator built with React and Vite. This application allows users to generate images using various AI models through the Hugging Face API.

![AI Image Generator Screenshot](https://via.placeholder.com/800x400/5C56E1/FFFFFF?text=AI+Image+Generator)

## ✨ Features

- **Multiple AI Models**: Support for FLUX.1-dev, FLUX.1-schnell, Stable Diffusion XL, and more
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Random Prompts**: Get inspiration with built-in example prompts
- **Clear Form**: Smart clear button to reset all form fields when needed
- **Batch Generation**: Generate 1-4 images at once
- **Multiple Aspect Ratios**: Square, landscape, and portrait options
- **Download Images**: Save generated images directly to your device
- **Modern UI**: Beautiful gradient design with smooth animations

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Hugging Face API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-image-generator-react.git
   cd ai-image-generator-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Hugging Face API key:
   ```env
   VITE_HUGGINGFACE_API_KEY=your_huggingface_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔑 Getting Your API Key

1. Visit [Hugging Face](https://huggingface.co/)
2. Create an account or sign in
3. Go to [Settings > Access Tokens](https://huggingface.co/settings/tokens)
4. Create a new token with "Read" permissions
5. Copy the token and add it to your `.env` file

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px and above)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Supported AI Models

- **FLUX.1-dev** - High-quality image generation
- **FLUX.1-schnell** - Fast image generation
- **Stable Diffusion XL** - Versatile and detailed images
- **Stable Diffusion v1.5** - Classic stable diffusion
- **Stable Diffusion 3** - Latest stable diffusion model

## 🏗️ Project Structure

```
ai-image-generator-react/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── PromptForm.jsx
│   │   └── ImageGallery.jsx
│   ├── services/
│   │   └── imageService.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_HUGGINGFACE_API_KEY` | Your Hugging Face API key | Yes |

### Customization

You can customize the application by:
- Adding new AI models in `PromptForm.jsx`
- Modifying the color scheme in `App.css`
- Adding new example prompts in `PromptForm.jsx`
- Adjusting image dimensions in `imageService.js`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to [Netlify](https://netlify.com)
3. Configure environment variables in Netlify dashboard

### Other Platforms

The application can be deployed to any static hosting service:
1. Run `npm run build`
2. Upload the contents of the `dist` folder
3. Configure environment variables as needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Hugging Face](https://huggingface.co/) for providing the AI models API
- [Vite](https://vitejs.dev/) for the fast build tool
- [React](https://reactjs.org/) for the UI framework
- [Font Awesome](https://fontawesome.com/) for the icons

## 📞 Support

If you have any questions or issues, please:
1. Check the [Issues](https://github.com/yourusername/ai-image-generator-react/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide as much detail as possible

## 🔄 Updates

Stay updated with the latest features and improvements:
- ⭐ Star this repository
- 👀 Watch for releases
- 🍴 Fork to contribute

---

Made with ❤️ by [Your Name](https://github.com/yourusername)

