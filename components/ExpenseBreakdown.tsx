export default function ExpenseBreakdown() {
  const expenses = [
    {
      percentage: "40%",
      category: "Ăn uống",
      description: "Cơm, mì tôm, trứng, rau. KHÔNG có tôm hùm!",
    },
    {
      percentage: "20%",
      category: "Điện nước internet",
      description: "Để sao kê cho anh chị",
    },
    {
      percentage: "15%",
      category: "Thuê nhà",
      description: "Phòng trọ 15m², không phải penthouse",
    },
    {
      percentage: "10%",
      category: "Y tế",
      description: "Thuốc cảm, vitamin C, khẩu trang",
    },
    {
      percentage: "10%",
      category: "Học tập nâng cao",
      description: "Sách, khóa học online để sao kê tốt hơn",
    },
    {
      percentage: "5%",
      category: "Giải trí",
      description: "Netflix? Không! Chỉ Youtube miễn phí thôi!",
    },
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800"
          data-aos="fade-up"
        >
          📈 Tôi Sẽ Dùng Tiền <span className="text-gradient">Vào Đâu?</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {expenses.map((expense, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-3xl font-black text-indigo-500">{expense.percentage}</span>
                <h3 className="text-xl font-bold text-gray-800">{expense.category}</h3>
              </div>
              <p className="text-gray-600 font-medium">
                {expense.description}
              </p>
            </div>
          ))}
        </div>

        <p
          className="text-center text-lg sm:text-xl text-gray-700 font-bold bg-white/40 py-4 px-8 rounded-full inline-block mx-auto backdrop-blur-sm border border-white/50"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          📊 Biểu đồ chi tiết cập nhật hàng tuần trên website!
        </p>
      </div>
    </section>
  );
}
