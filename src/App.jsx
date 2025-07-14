import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PromptForm from './components/PromptForm';
import ImageGallery from './components/ImageGallery';
import { imageService } from './services/imageService';
import './App.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [images, setImages] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  // Initialize theme based on saved preference or system default
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkTheme = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    
    setDarkTheme(isDarkTheme);
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.body.classList.toggle('dark-theme', newTheme);
  };

  const handleImageGeneration = async (formData) => {
    setIsGenerating(true);
    setImages([]);
    
    // Create placeholder images
    const placeholderImages = Array.from({ length: formData.imageCount }, (_, index) => ({
      id: `img-${index}`,
      status: 'loading',
      aspectRatio: formData.aspectRatio,
      url: null,
      error: null
    }));
    
    setImages(placeholderImages);

    try {
      await imageService.generateImages(formData, setImages);
    } catch (error) {
      console.error('Generation failed:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="container">
      <Header darkTheme={darkTheme} onToggleTheme={toggleTheme} />
      <div className="main-content">
        <PromptForm onGenerate={handleImageGeneration} isGenerating={isGenerating} />
        <ImageGallery images={images} />
      </div>
    </div>
  );
}

export default App;

