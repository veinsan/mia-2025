export default function Testimoni() {
  const reviews = [
    { name: "Apay", text: "nigger" },
    { name: "Ibnas", text: "hai aku tipcu, istri kalian selamanya" },
    { name: "Endra", text: "bego bgt ini anak2 STI" },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-heading text-primary mb-10">Apa Kata Mereka?</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-8">
        {reviews.map((r, i) => (
          <div key={i} className="bg-accent/10 p-6 rounded-xl shadow-md">
            <p className="italic text-dark/80 mb-3">“{r.text}”</p>
            <span className="font-bold text-primary">— {r.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
