export default function Comparison() {
  const others = [
    "Sao kê sau 3 năm (hoặc không bao giờ)",
    "File Excel blur mờ như ảnh ma",
    'Số liệu "làm tròn" theo kiểu 1 + 1 = 3',
    "Block người hỏi nhanh như chớp",
  ];

  const nuoiToi = [
    "Sao kê trước khi tiêu (để anh chị duyệt)",
    "File Excel 4K Ultra HD, có chữ ký điện tử",
    "Số liệu chính xác đến từng đồng",
    "Trả lời inbox nhanh hơn cả chatbot",
  ];

  return (
    <section className="w-full py-12 px-4 sm:py-16 sm:px-6 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900"
          data-aos="fade-up"
        >
          💰 So Sánh Với &quot;Người Khác&quot;
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Người Khác */}
          <div
            className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-6 sm:p-8 border-2 border-red-400 shadow-lg"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 text-gray-900">
              <span>❌</span>
              <span>Người Khác:</span>
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {others.map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <span className="text-red-700 text-lg sm:text-xl flex-shrink-0 font-bold">
                    ❌
                  </span>
                  <span className="text-sm sm:text-base text-gray-900 break-words font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nuôi Tôi */}
          <div
            className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 sm:p-8 border-2 border-green-400 shadow-lg"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 text-gray-900">
              <span>✅</span>
              <span>Nuôi Tôi:</span>
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {nuoiToi.map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <span className="text-green-700 text-lg sm:text-xl flex-shrink-0 font-bold">
                    ✅
                  </span>
                  <span className="text-sm sm:text-base text-gray-900 break-words font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
