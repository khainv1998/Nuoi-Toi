import React from 'react';

export default function CamKet() {
    const items = [
        {
            title: "Sao kê mỗi ngày",
            description: "Cập nhật lúc 6h sáng, đều như vắt tranh! (Kể cả Chủ Nhật & Lễ)",
            icon: "📅"
        },
        {
            title: "Không giấu giếm",
            description: "Từ tô phở 50k đến hộp sữa chua 8k đều được ghi chép tỉ mỉ!",
            icon: "🔍"
        },
        {
            title: "Có hóa đơn chứng từ",
            description: "Chụp hình bill, quét mã vạch, lưu biên lai đầy đủ!",
            icon: "🧾"
        },
        {
            title: "Video unboxing",
            description: "Mở từng gói mì tôm live trên Facebook cho anh chị xem!",
            icon: "🎥"
        },
        {
            title: "Hotline 24/7",
            description: "Gọi hỏi tôi ăn gì bất cứ lúc nào, kể cả 3h sáng!",
            icon: "☎️"
        },
        {
            title: "Không block",
            description: 'Hỏi khó đến mấy cũng trả lời, không "đã xem" rồi im lặng!',
            icon: "💬"
        }
    ];

    return (
        <section className="w-full py-20 px-4 sm:px-6 lg:py-32">
            <div className="max-w-7xl mx-auto">
                <h2
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800"
                    data-aos="fade-up"
                >
                    🎪 <span className="text-red-500">Cam Kết Vàng</span> Của Tôi
                </h2>

                <div
                    className="glass-panel-gold rounded-3xl p-8 lg:p-12 mb-12"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors duration-300"
                                data-aos="fade-up"
                                data-aos-delay={200 + index * 100}
                            >
                                <span className="text-2xl sm:text-3xl flex-shrink-0 select-none bg-green-100 w-12 h-12 flex items-center justify-center rounded-full text-green-600">✔</span>
                                <div className="flex-1">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-base text-gray-700 font-medium leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
