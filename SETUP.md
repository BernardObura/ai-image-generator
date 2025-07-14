# AI Image Generator - Complete Setup Guide

This guide will walk you through setting up the AI Image Generator React application from scratch, including development, deployment, and GitHub integration.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Local Development Setup](#local-development-setup)
3. [API Key Configuration](#api-key-configuration)
4. [GitHub Repository Setup](#github-repository-setup)
5. [Deployment Options](#deployment-options)
6. [Troubleshooting](#troubleshooting)

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16 or higher)
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`
- **npm** (comes with Node.js)
  - Verify installation: `npm --version`
- **Git**
  - Download from: https://git-scm.com/
  - Verify installation: `git --version`
- **Code Editor** (VS Code recommended)
  - Download from: https://code.visualstudio.com/

## 🚀 Local Development Setup

### Step 1: Clone or Download the Project

**Option A: Clone from GitHub (if repository exists)**
```bash
git clone https://github.com/yourusername/ai-image-generator-react.git
cd ai-image-generator-react
```

**Option B: Use the provided source code**
1. Extract the project files to a folder
2. Open terminal/command prompt in that folder

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React 18
- Vite (build tool)
- All necessary dependencies

### Step 3: Environment Configuration

1. **Copy the environment template:**
   ```bash
   cp .env.example .env
   ```

2. **Edit the `.env` file:**
   ```env
   VITE_HUGGINGFACE_API_KEY=your_actual_api_key_here
   ```

### Step 4: Start Development Server

```bash
npm run dev
```

The application will be available at: `http://localhost:5173`

## 🔑 API Key Configuration

### Getting Your Hugging Face API Key

1. **Create Account:**
   - Visit: https://huggingface.co/
   - Sign up for a free account

2. **Generate API Key:**
   - Go to: https://huggingface.co/settings/tokens
   - Click "New token"
   - Name: "AI Image Generator"
   - Type: "Read"
   - Click "Generate a token"

3. **Copy and Save:**
   - Copy the generated token
   - Add it to your `.env` file:
   ```env
   VITE_HUGGINGFACE_API_KEY=hf_xxxxxxxxxxxxxxxxxxxxxxxxx
   ```

### Security Notes

- ⚠️ **Never commit your `.env` file to version control**
- ⚠️ **Keep your API key private**
- ✅ The `.env` file is already in `.gitignore`

## 📁 GitHub Repository Setup

### Step 1: Create GitHub Repository

1. **Go to GitHub:**
   - Visit: https://github.com/
   - Sign in to your account

2. **Create New Repository:**
   - Click "New repository"
   - Name: `ai-image-generator-react`
   - Description: "AI Image Generator built with React and Vite"
   - Set to Public or Private
   - Don't initialize with README (we already have one)

### Step 2: Connect Local Repository to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: AI Image Generator React app"

# Add remote origin (replace with your repository URL)
git remote add origin https://github.com/yourusername/ai-image-generator-react.git

# Push to GitHub
git push -u origin main
```

### Step 3: Configure Repository Settings

1. **Go to your repository on GitHub**
2. **Settings > Secrets and variables > Actions**
3. **Add Repository Secret:**
   - Name: `VITE_HUGGINGFACE_API_KEY`
   - Value: Your Hugging Face API key

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. **Visit Vercel:**
   - Go to: https://vercel.com/
   - Sign up with GitHub account

2. **Import Project:**
   - Click "New Project"
   - Import your GitHub repository
   - Framework Preset: Vite
   - Root Directory: `./`

3. **Configure Environment Variables:**
   - Add: `VITE_HUGGINGFACE_API_KEY`
   - Value: Your API key

4. **Deploy:**
   - Click "Deploy"
   - Your app will be live in minutes!

### Option 2: Netlify

1. **Visit Netlify:**
   - Go to: https://netlify.com/
   - Sign up with GitHub account

2. **Deploy from Git:**
   - Click "New site from Git"
   - Choose GitHub
   - Select your repository

3. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Environment Variables:**
   - Go to Site settings > Environment variables
   - Add: `VITE_HUGGINGFACE_API_KEY`

### Option 3: GitHub Pages

1. **Enable GitHub Pages:**
   - Repository Settings > Pages
   - Source: GitHub Actions

2. **The workflow is already configured!**
   - File: `.github/workflows/deploy.yml`
   - Automatically deploys on push to main

3. **Add API Key Secret:**
   - Repository Settings > Secrets and variables > Actions
   - Add: `VITE_HUGGINGFACE_API_KEY`

## 🛠️ Available Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically

# Deployment
npm run build        # Build for deployment
```

## 🔍 Troubleshooting

### Common Issues

**1. "Module not found" errors**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**2. API key not working**
- Verify the key is correct in `.env`
- Restart the development server
- Check Hugging Face token permissions

**3. Build fails**
```bash
# Clear cache and rebuild
npm run build --clean
```

**4. Port already in use**
```bash
# Kill process on port 5173
npx kill-port 5173
# Or use different port
npm run dev -- --port 3000
```

### Environment Issues

**Windows Users:**
- Use Git Bash or PowerShell
- Ensure Node.js is in PATH

**macOS/Linux Users:**
- You might need to use `sudo` for global installs
- Ensure proper file permissions

### Deployment Issues

**Vercel:**
- Check build logs in dashboard
- Verify environment variables are set
- Ensure build command is correct

**Netlify:**
- Check deploy logs
- Verify build settings
- Check environment variables

**GitHub Pages:**
- Verify workflow file exists
- Check Actions tab for errors
- Ensure secrets are configured

## 📞 Getting Help

If you encounter issues:

1. **Check the console** for error messages
2. **Review this guide** step by step
3. **Check GitHub Issues** in the repository
4. **Create a new issue** with:
   - Error message
   - Steps to reproduce
   - Your environment (OS, Node version, etc.)

## 🎉 Success!

Once everything is set up, you should have:

- ✅ Local development environment running
- ✅ GitHub repository with your code
- ✅ Deployed application (if you chose deployment)
- ✅ Proper API key configuration
- ✅ All features working correctly

Enjoy creating amazing AI-generated images! 🎨

