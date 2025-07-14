import React, { useEffect } from 'react';

const ImageCard = ({ image, index }) => {
  const { status, url, aspectRatio, error } = image;

  const handleDownload = async () => {
    if (!url) return;
    
    try {
      // Create a more descriptive filename
      const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
      const filename = `ai-generated-image-${index + 1}-${timestamp}.png`;
      
      // Fetch the image blob
      const response = await fetch(url);
      const blob = await response.blob();
      
      // Create download link
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = filename;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
      
      // Show success feedback
      console.log(`Image downloaded: ${filename}`);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download image. Please try again.');
    }
  };

  const handleImageClick = () => {
    if (status === 'success' && url) {
      // Open image in new tab as fallback
      window.open(url, '_blank');
    }
  };

  return (
    <div
      className={`img-card ${status} animate-in`}
      style={{ aspectRatio }}
    >
      {status === 'loading' && (
        <div className="status-container">
          <div className="spinner"></div>
          <p className="status-text">Generating your image...</p>
        </div>
      )}

      {status === 'error' && (
        <div className="status-container">
          <i className="fa-solid fa-triangle-exclamation"></i>
          <p className="status-text">
            {error || 'Generation failed! Please try again.'}
          </p>
        </div>
      )}

      {status === 'success' && url && (
        <>
          <img 
            className="result-img" 
            src={url} 
            alt={`AI Generated Image ${index + 1}`}
            onClick={handleImageClick}
            style={{ cursor: 'pointer' }}
          />
          <div className="img-overlay">
            <div className="img-actions">
              <button
                className="img-action-btn img-view-btn"
                onClick={handleImageClick}
                title="View Full Size"
              >
                <i className="fa-solid fa-expand"></i>
              </button>
              <button
                className="img-action-btn img-download-btn"
                onClick={handleDownload}
                title="Download Image"
              >
                <i className="fa-solid fa-download"></i>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const ImageGallery = ({ images }) => {
  useEffect(() => {
    // Stagger animation for new images
    const cards = document.querySelectorAll('.img-card:not(.animate-in)');
    cards.forEach((card, i) => {
      setTimeout(() => card.classList.add('animate-in'), 100 * i);
    });
  }, [images]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="gallery-grid">
      {images.map((image, index) => (
        <ImageCard
          key={image.id}
          image={image}
          index={index}
        />
      ))}
    </div>
  );
};

export default ImageGallery;

