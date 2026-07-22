function Features() {
  const features = [
    "Fast Loading",
    "Lazy Images",
    "Bundle Splitting",
    "Optimized CSS",
    "Caching",
    "Responsive Design",
  ];

  return (
    <section className="container py-5">
      <h2 className="text-center mb-5 fw-bold text-dark">Features</h2>

      <div className="row">
        {features.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5>{item}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;