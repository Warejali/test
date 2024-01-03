import { useState } from 'react';
import Image from 'next/image';

export default function ProductImagePreview({ file }) {
  const [selectedImage, setSelectedImage] = useState(file[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <div className="thumbnails">
        {file.map((image) => (
          <Image
            key={image.id}
            src={image.fileUrl}
            alt={image.name}
            onClick={() => handleImageClick(image)}
            className={selectedImage === image ? 'active' : ''}
            width={500}
            height={500}
          />
        ))}
      </div>
      <div className="preview">
        <Image
          src={selectedImage.fileUrl}
          alt={selectedImage.name}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
