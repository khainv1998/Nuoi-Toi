export default function Commitments() {
  const commitments = [
    "✅ Không dùng tiền donate để đi massage.",
    "✅ Không mua skin game (trừ khi có khuyến mãi 90%).",
    "✅ Không bao gái (vì làm gì có gái mà bao).",
    "✅ Chỉ dùng để ăn, uống, và duy trì sự sống.",
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800"
          data-aos="fade-up"
        >
          🤝 Cam Kết <span className="text-gradient">Uy Tín</span>
        </h2>
        <div className="space-y-4">
          {commitments.map((item, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-2xl flex items-center gap-4 transform hover:scale-102 transition-transform duration-300"
              data-aos="fade-left"
              data-aos-delay={index * 100}
            >
              <span className="text-2xl sm:text-3xl">🤙</span>
              <p className="text-lg sm:text-xl font-medium text-gray-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
