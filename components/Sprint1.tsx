export default function Sprint1() {
  const items = [
    {
      item: "1 chiếc bàn phím cơ switch nâu",
      description: "Gõ êm tai, code mượt, tăng 200% cảm hứng deploy.",
    },
    {
      item: "1 con chuột Logitech MX Master 3S",
      description: "Trợ thủ tăng productivity thần thánh.",
    },
    {
      item: "1 chiếc ghế công thái học giá rẻ",
      description:
        "Giúp ngồi code lâu mà không gãy lưng, giảm bug do đau cột sống gây ra.",
    },
    {
      item: "1 bình giữ nhiệt 1L",
      description:
        "Để đựng cà phê, tiếp năng lượng sống sót qua overnight sprint.",
    },
    {
      item: "1 thùng Salonpas",
      description: "(cool)",
    },
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800"
          data-aos="fade-up"
        >
          🎯 Sprint 1 - <span className="text-gradient">Hạng Mục Sống Còn</span>
        </h2>
        <p
          className="text-lg sm:text-xl text-gray-600 mb-12 text-center font-medium max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Hiện tại, sprint đầu tiên của dự án cần hoàn thành những hạng mục sống
          còn để một developer tồn tại qua deadline:
        </p>
        
        <div
          className="glass-panel rounded-3xl p-8 lg:p-12 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <ul className="space-y-6">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4"
                data-aos="fade-right"
                data-aos-delay={300 + index * 100}
              >
                <span className="text-3xl flex-shrink-0">✅</span>
                <div className="flex-1">
                  <span className="text-lg sm:text-xl font-bold text-gray-900 block">
                    {item.item}
                  </span>
                  <span className="text-base text-gray-600 block mt-1 font-medium">
                    {item.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="glass-panel rounded-3xl p-8 text-center transform hover:scale-105 transition-transform duration-300 border-2 border-orange-300/50"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            Mục tiêu quyên góp đầu tiên của dự án là
          </p>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-gradient mb-4 drop-shadow-sm">
            1.43jack
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-700">
            (~ 5.000.000đ)
          </p>
          <p className="text-lg text-gray-600 mt-6 font-medium">
            Hãy cùng nhau chung tay nuôi dưỡng tương lai tươi sáng và một chiếc
            lưng lành lặn (của tôi) nhé.
          </p>
        </div>
      </div>
    </section>
  );
}
