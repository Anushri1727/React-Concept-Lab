const assetOptimizationConcept = {
  id: "asset-optimization",
  title: "Asset Optimization",
  category: "Production & Best Practices",

  definition:
    "Asset optimization involves reducing the file size of images, fonts, and other media without significantly sacrificing quality, and choosing the right format to ensure fast download speeds for users.",

  syntax: "<img src='image.webp' loading='lazy' alt='...' />",

  useCase:
    "Images and media often make up the vast majority of a webpage's downloaded bytes. Optimizing them is the single most effective way to improve page load times and Core Web Vitals.",

  realLifeExamples: [
    "Converting a 3MB PNG hero image into a 150KB WebP image.",
    "Using responsive images (`srcset`) to send a small image to a mobile phone and a large image to a 4K desktop monitor.",
  ],

  codeExamples: [
    {
      id: "responsive-images",
      title: "1. Responsive Images & Lazy Loading",
      description:
        "Using modern HTML attributes to ensure the browser only downloads what it needs.",
      code: `import React from 'react';

function ImageGallery() {
  return (
    <div>
      <h2>Optimized Images</h2>
      
      {/* 
        1. loading="lazy" tells the browser NOT to download this image 
           until the user scrolls near it.
        2. The <picture> tag allows the browser to choose the best format.
           It will use the WebP if supported, otherwise fallback to JPG.
      */}
      <picture>
        <source srcSet="/images/hero.webp" type="image/webp" />
        <img 
          src="/images/hero.jpg" 
          alt="Beautiful landscape" 
          loading="lazy"
          style={{ width: '100%', height: 'auto' }}
        />
      </picture>

      {/* 
        Using srcset allows the browser to pick the right resolution 
        based on the user's screen size.
      */}
      <img
        srcSet="/images/small.jpg 480w,
                /images/medium.jpg 800w,
                /images/large.jpg 1200w"
        sizes="(max-width: 600px) 480px,
               (max-width: 900px) 800px,
               1200px"
        src="/images/large.jpg"
        alt="Responsive product"
        loading="lazy"
      />
    </div>
  );
}

export default ImageGallery;`,
    }
  ],
  keyNotes: [
    "Use modern formats like WebP or AVIF instead of JPEG/PNG when possible. They offer superior compression.",
    "Always set explicit `width` and `height` attributes (or aspect ratios in CSS) on images to prevent Cumulative Layout Shift (CLS) as the images load.",
    "SVGs are excellent for icons and logos because they are vector-based, scale infinitely without losing quality, and have tiny file sizes.",
  ],
  commonMistakes: [
    {
      mistake: "Serving full-resolution images to mobile devices",
      wrong: `<img src="4k-background.jpg" style={{ width: '100vw' }} /> // A mobile phone downloads 5MB for a 400px wide screen.`,
      correct: `Use the srcset attribute or a service like Cloudinary/Imgix to serve appropriately sized images.`,
    },
  ],

  interviewQuestions: [
    {
      question: "What is Cumulative Layout Shift (CLS) and how do images affect it?",
      answer:
        "CLS is a metric that measures how much the page content jumps around as it loads. If an image doesn't have a defined width and height, the browser doesn't know how much space to reserve for it. When the image finally downloads, it pushes the content below it down, causing a layout shift. You fix this by explicitly setting dimensions or aspect ratios.",
    },
  ],
};

export default assetOptimizationConcept;
