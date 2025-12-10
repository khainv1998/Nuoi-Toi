export default function FeatureCards() {
  const features = [
    {
      icon: "📊",
      title: "Sao Kê Realtime",
      description:
        "Cập nhật từng giây! Còn nhanh hơn cả tốc độ bạn chuyển tiền!",
    },
    {
      icon: "🔍",
      title: "Minh Bạch 300%",
      description: "Hơn cả 100%! Tôi còn báo cáo cả việc mua ly trà sữa!",
    },
    {
      icon: "💸",
      title: "Chi Tiêu Hợp Lý",
      description: "Không mua xe hơi, nhà cửa. Chỉ ăn cơm với mì tôm thôi!",
    },
    {
      icon: "📱",
      title: "App Tracking",
      description:
        'Theo dõi 24/7 tôi ăn gì, uống gì, đi đâu. Như "Big Brother" vậy!',
    },
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800"
          data-aos="fade-up"
        >
          🎯 Tại Sao Nên <span className="brand-highlight">Nuôi Tôi?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-panel rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-5xl sm:text-6xl mb-6 text-center transform hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center text-gray-900">
                {feature.title}
              </h3>
              <p className="text-base text-gray-600 text-center font-medium leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
