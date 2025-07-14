import React, { useState } from 'react';

const examplePrompts = [
  "A magic forest with glowing plants and fairy homes among giant mushrooms",
  "An old steampunk airship floating through golden clouds at sunset",
  "A future Mars colony with glass domes and gardens against red mountains",
  "A dragon sleeping on gold coins in a crystal cave",
  "An underwater kingdom with merpeople and glowing coral buildings",
  "A floating island with waterfalls pouring into clouds below",
  "A witch's cottage in fall with magic herbs in the garden",
  "A robot painting in a sunny studio with art supplies around it",
  "A magical library with floating glowing books and spiral staircases",
  "A Japanese shrine during cherry blossom season with lanterns and misty mountains",
  "A cosmic beach with glowing sand and an aurora in the night sky",
  "A medieval marketplace with colorful tents and street performers",
  "A cyberpunk city with neon signs and flying cars at night",
  "A peaceful bamboo forest with a hidden ancient temple",
  "A giant turtle carrying a village on its back in the ocean",
];

const PromptForm = ({ onGenerate, isGenerating }) => {
  const [formData, setFormData] = useState({
    promptText: '',
    selectedModel: '',
    imageCount: '',
    aspectRatio: ''
  });
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRandomPrompt = () => {
    const randomPrompt = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
    setIsTyping(true);
    setFormData(prev => ({ ...prev, promptText: '' }));
    
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < randomPrompt.length) {
        setFormData(prev => ({
          ...prev,
          promptText: randomPrompt.substring(0, i + 1)
        }));
        i++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 10);
  };

  const handleClearForm = () => {
    setFormData({
      promptText: '',
      selectedModel: '',
      imageCount: '',
      aspectRatio: ''
    });
    setIsTyping(false);
    
    // Focus back to the prompt input for better UX
    setTimeout(() => {
      const promptInput = document.querySelector('.prompt-input');
      if (promptInput) {
        promptInput.focus();
      }
    }, 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.promptText.trim() || !formData.selectedModel || !formData.imageCount || !formData.aspectRatio) {
      return;
    }

    onGenerate({
      promptText: formData.promptText.trim(),
      selectedModel: formData.selectedModel,
      imageCount: parseInt(formData.imageCount),
      aspectRatio: formData.aspectRatio
    });
  };

  // Check if form has any data to show/hide clear button
  const hasFormData = formData.promptText.trim() || 
                     formData.selectedModel || 
                     formData.imageCount || 
                     formData.aspectRatio;

  return (
    <form className="prompt-form" onSubmit={handleSubmit}>
      <div className="prompt-container">
        <textarea
          className="prompt-input"
          name="promptText"
          value={formData.promptText}
          onChange={handleInputChange}
          placeholder="Describe your imagination in detail..."
          spellCheck="false"
          autoFocus
          required
        />
        <button
          type="button"
          className="prompt-btn"
          onClick={handleRandomPrompt}
          disabled={isTyping}
          title="Get Random Prompt"
          style={{ opacity: isTyping ? '0.5' : '0.8' }}
        >
          <i className="fa-solid fa-dice"></i>
        </button>
      </div>

      <div className="prompt-actions">
        <div className="select-wrapper">
          <select
            className="custom-select"
            name="selectedModel"
            value={formData.selectedModel}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Select Model</option>
            <option value="black-forest-labs/FLUX.1-dev">FLUX.1-dev</option>
            <option value="black-forest-labs/FLUX.1-schnell">FLUX.1-schnell</option>
            <option value="stabilityai/stable-diffusion-xl-base-1.0">Stable Diffusion XL</option>
            <option value="runwayml/stable-diffusion-v1-5">Stable Diffusion v1.5</option>
            <option value="stabilityai/stable-diffusion-3-medium-diffusers">Stable Diffusion 3</option>
          </select>
        </div>

        <div className="select-wrapper">
          <select
            className="custom-select"
            name="imageCount"
            value={formData.imageCount}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Image Count</option>
            <option value="1">1 Image</option>
            <option value="2">2 Images</option>
            <option value="3">3 Images</option>
            <option value="4">4 Images</option>
          </select>
        </div>

        <div className="select-wrapper">
          <select
            className="custom-select"
            name="aspectRatio"
            value={formData.aspectRatio}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Aspect Ratio</option>
            <option value="1/1">Square (1:1)</option>
            <option value="16/9">Landscape (16:9)</option>
            <option value="9/16">Portrait (9:16)</option>
          </select>
        </div>

        <div className="action-buttons">
          {hasFormData && (
            <button
              type="button"
              className="clear-btn"
              onClick={handleClearForm}
              disabled={isGenerating}
              title="Clear Form"
            >
              <i className="fa-solid fa-eraser"></i>
              Clear
            </button>
          )}
          
          <button
            type="submit"
            className="generate-btn"
            disabled={isGenerating}
          >
            <i className="fa-solid fa-wand-sparkles"></i>
            Generate
          </button>
        </div>
      </div>
    </form>
  );
};

export default PromptForm;

