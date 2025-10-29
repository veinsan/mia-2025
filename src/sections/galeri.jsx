export default function Galeri() {
  const images = ["assets/foto1.jpeg", "assets/foto2.jpeg", "assets/foto3.jpeg", "assets/foto4.jpeg", "assets/foto5.jpeg", "assets/foto6.jpeg"];

  return (
    <section className="py-20 bg-accent/20">
      <h2 className="text-4xl font-heading text-center text-primary mb-10">Suasana Gelap Nyawang</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Suasana ${i}`}
            className="rounded-lg shadow-md hover:scale-105 transition"
          />
        ))}
      </div>
    </section>
  );
}
