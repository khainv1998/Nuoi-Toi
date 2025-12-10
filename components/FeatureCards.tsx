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
    <section className="w-full py-12 px-4 sm:py-16 sm:px-6 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900"
          data-aos="fade-up"
        >
          🎯 Tại Sao Nên Nuôi Tôi?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow"
              data-aos="zoom-in"
              data-aos-delay={100 + index * 100}
            >
              <div className="text-4xl sm:text-5xl mb-4 text-center">
                {feature.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-center text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-800 text-center break-words font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
