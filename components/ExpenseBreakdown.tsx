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
    <section className="w-full py-12 px-4 sm:py-16 sm:px-6 lg:py-20 bg-gradient-to-br from-blue-100 via-blue-200 to-cyan-200">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900"
          data-aos="fade-up"
        >
          📈 Tôi Sẽ Dùng Tiền Vào Đâu?
        </h2>
        <ul className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          {expenses.map((expense, index) => (
            <li
              key={index}
              className="flex items-start gap-3 sm:gap-4"
              data-aos="fade-right"
              data-aos-delay={100 + index * 100}
            >
              <span className="text-2xl sm:text-3xl flex-shrink-0">✅</span>
              <div className="flex-1">
                <span className="text-lg sm:text-xl font-bold text-gray-900">
                  {expense.percentage} - {expense.category}
                </span>
                <span className="text-sm sm:text-base text-gray-800 block mt-1 break-words font-medium">
                  ({expense.description})
                </span>
              </div>
            </li>
          ))}
        </ul>
        <p
          className="text-center text-base sm:text-lg text-gray-900 font-semibold"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          📊 Biểu đồ chi tiết cập nhật hàng tuần trên website!
        </p>
      </div>
    </section>
  );
}
