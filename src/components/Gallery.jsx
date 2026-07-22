import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import image1 from "../assets/images/image1.webp";
import image2 from "../assets/images/image2.webp";
import image3 from "../assets/images/image3.webp";
import image4 from "../assets/images/image4.webp";
import image5 from "../assets/images/image5.webp";
import image6 from "../assets/images/image6.webp";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  <h2 className="text-center mb-5 fw-bold text-dark">
  Optimized Gallery
</h2>
];

function Gallery() {
  return (
    <section className="container py-5">
    <h2 className="text-center mb-5 fw-bold text-dark">
  Optimized Gallery
</h2>

      <div className="row">
        {images.map((img, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <LazyLoadImage
              src={img}
              alt={`Gallery ${index + 1}`}
              effect="blur"
              loading="lazy"
              className="img-fluid rounded shadow"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;