export default function Commitments() {
  const commitments = [
    "Sao kê mỗi ngày: Cập nhật lúc 6h sáng, đều như vắt chanh! (Kể cả Chủ Nhật & Lễ)",
    "Không giấu giếm: Từ tô phở 50k đến hộp sữa chua 8k đều được ghi chép tỉ mỉ!",
    "Có hóa đơn chứng từ: Chụp hình bill, quét mã vạch, lưu biên lai đầy đủ!",
    "Video unboxing: Mở từng gói mì tôm live trên Facebook cho anh chị xem!",
    "Hotline 24/7: Gọi hỏi tôi ăn gì bất cứ lúc nào, kể cả 3h sáng!",
    'Khôngblock: Hỏi khó đến mấy cũng trả lời, không "đã xem" rồi im lặng!',
  ];

  return (
    <section className="w-full py-12 px-4 sm:py-16 sm:px-6 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900"
          data-aos="fade-up"
        >
          🎪 Cam Kết Vàng Của Tôi:
        </h2>
        <ul className="space-y-4 sm:space-y-6">
          {commitments.map((commitment, index) => {
            const parts = commitment.split(":");
            const title = parts[0];
            const description = parts.slice(1).join(":");
            return (
              <li
                key={index}
                className="flex items-start gap-3 sm:gap-4"
                data-aos="fade-left"
                data-aos-delay={100 + index * 100}
              >
                <span className="text-2xl sm:text-3xl flex-shrink-0">✅</span>
                <span className="text-base sm:text-lg text-gray-900 flex-1 break-words font-medium">
                  <strong className="font-bold">{title}:</strong>
                  {description}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
