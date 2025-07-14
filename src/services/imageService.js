// API service for Hugging Face image generation
export class ImageGenerationService {
  constructor() {
    this.apiKey = import.meta.env.VITE_HUGGINGFACE_API_KEY;
    
    if (!this.apiKey || this.apiKey === 'your_huggingface_api_key_here') {
      console.warn('⚠️ Hugging Face API key not configured. Please set VITE_HUGGINGFACE_API_KEY in your .env file');
    }
  }

  // Calculate width/height based on chosen ratio
  getImageDimensions(aspectRatio, baseSize = 512) {
    const [width, height] = aspectRatio.split('/').map(Number);
    const scaleFactor = baseSize / Math.sqrt(width * height);
    let calculatedWidth = Math.round(width * scaleFactor);
    let calculatedHeight = Math.round(height * scaleFactor);
    
    // Ensure dimensions are multiples of 16 (AI model requirements)
    calculatedWidth = Math.floor(calculatedWidth / 16) * 16;
    calculatedHeight = Math.floor(calculatedHeight / 16) * 16;
    
    return { width: calculatedWidth, height: calculatedHeight };
  }

  // Generate a single image
  async generateSingleImage(modelUrl, promptText, dimensions) {
    if (!this.apiKey || this.apiKey === 'hf_demo_key_replace_with_real_key') {
      throw new Error('API key not configured. Please set your Hugging Face API key in the .env file.');
    }

    const response = await fetch(modelUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        'x-use-cache': 'false',
      },
      body: JSON.stringify({
        inputs: promptText,
        parameters: dimensions,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData?.error || `HTTP ${response.status}: ${response.statusText}`);
    }

    const blob = await response.blob();
    return URL.createObjectURL(blob);
  }

  // Generate multiple images
  async generateImages(formData, onImageUpdate) {
    const { selectedModel, imageCount, aspectRatio, promptText } = formData;
    const modelUrl = `https://api-inference.huggingface.co/models/${selectedModel}`;
    const dimensions = this.getImageDimensions(aspectRatio);

    const imagePromises = Array.from({ length: imageCount }, async (_, index) => {
      try {
        const imageUrl = await this.generateSingleImage(modelUrl, promptText, dimensions);
        
        // Update the specific image
        onImageUpdate(prevImages => 
          prevImages.map(img => 
            img.id === `img-${index}` 
              ? { ...img, status: 'success', url: imageUrl }
              : img
          )
        );
      } catch (error) {
        console.error(`Error generating image ${index}:`, error);
        
        // Update the specific image with error
        onImageUpdate(prevImages => 
          prevImages.map(img => 
            img.id === `img-${index}` 
              ? { ...img, status: 'error', error: error.message }
              : img
          )
        );
      }
    });

    await Promise.allSettled(imagePromises);
  }
}

// Export a singleton instance
export const imageService = new ImageGenerationService();

