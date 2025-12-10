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
    <section className="w-full py-12 px-4 sm:py-16 sm:px-6 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-900"
          data-aos="fade-up"
        >
          🎯 Sprint 1 - Hạng Mục Sống Còn
        </h2>
        <p
          className="text-base sm:text-lg text-gray-900 mb-6 sm:mb-8 text-center font-medium"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Hiện tại, sprint đầu tiên của dự án cần hoàn thành những hạng mục sống
          còn để một developer tồn tại qua deadline:
        </p>
        <div
          className="bg-gradient-to-br from-blue-100 via-cyan-100 to-green-200 rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 border-2 border-blue-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <ul className="space-y-4 sm:space-y-6">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 sm:gap-4"
                data-aos="fade-right"
                data-aos-delay={300 + index * 100}
              >
                <span className="text-2xl sm:text-3xl flex-shrink-0">✅</span>
                <div className="flex-1">
                  <span className="text-base sm:text-lg font-bold text-gray-900 block">
                    - {item.item}
                  </span>
                  <span className="text-sm sm:text-base text-gray-800 block mt-1 break-words font-medium">
                    {item.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="bg-gradient-to-br from-orange-200 via-yellow-200 to-orange-300 rounded-2xl shadow-xl p-6 sm:p-8 text-center border-2 border-orange-400"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
            Mục tiêu quyên góp đầu tiên của dự án là
          </p>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-700 mb-4 drop-shadow-sm">
            1.43jack
          </p>
          <p className="text-xl sm:text-2xl font-bold text-gray-900">
            (~ 5.000.000đ)
          </p>
          <p className="text-base sm:text-lg text-gray-900 mt-4 sm:mt-6 break-words font-medium">
            Hãy cùng nhau chung tay nuôi dưỡng tương lai tươi sáng và một chiếc
            lưng lành lặn (của tôi) nhé.
          </p>
        </div>
      </div>
    </section>
  );
}
