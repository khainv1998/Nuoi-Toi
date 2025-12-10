export default function ProjectAnnouncement() {
  return (
    <section className="w-full py-12 px-4 sm:py-16 sm:px-6 lg:py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-900"
          data-aos="fade-up"
        >
          🚀 Dự Án Nuôi Tôi Chính Thức
        </h2>
        <div
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border-2 border-purple-200"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="text-base sm:text-lg text-gray-900 mb-4 sm:mb-6 leading-relaxed font-medium">
            Bắt đầu từ ngày mai –{" "}
            <strong className="text-purple-700">08/12/2025</strong>, tôi xin
            phép chính thức thành lập{" "}
            <strong className="text-purple-700">Dự án Nuôi Tôi</strong>.
          </p>
          <p className="text-base sm:text-lg text-gray-900 mb-4 sm:mb-6 leading-relaxed break-words font-medium">
            Mỗi tháng, bạn chỉ cần đóng góp{" "}
            <strong className="text-green-600 text-lg">50k</strong> tôi sẽ cập
            nhật thông tin minh bạch, rõ ràng, từng cột mốc chi tiêu – kèm báo
            cáo đầy đủ như log file production. Và tất nhiên, mỗi mạnh thường
            quân sẽ nhận được thư cảm ơn được format tử tế, font monospace, căn
            lề chuẩn chỉ.
          </p>
          <div
            className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 rounded-xl p-6 sm:p-8 mt-6 sm:mt-8 border-2 border-purple-300 shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">💌</span>
              <p className="text-base sm:text-lg text-gray-900 font-mono font-bold">
                Thư cảm ơn mẫu:
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6 border-2 border-gray-200 shadow-inner">
              <div className="border-2 border-gray-800 font-mono text-xs sm:text-sm text-gray-900">
                {/* Header */}
                <div className="border-b-2 border-gray-800 py-2 px-3 text-center font-bold bg-gray-50">
                  CẢM ƠN BẠN ĐÃ NUÔI TÔI!
                </div>
                {/* Content */}
                <div className="p-3 space-y-1">
                  <div className="h-3"></div>
                  <div className="px-1">Ngày: 08/12/2025</div>
                  <div className="px-1">Số tiền: 50,000 VNĐ</div>
                  <div className="px-1">Mã giao dịch: [Mã của bạn]</div>
                  <div className="h-3"></div>
                  <div className="px-1">Cảm ơn bạn đã tin tưởng và</div>
                  <div className="px-1">ủng hộ!</div>
                  <div className="px-1">Tôi sẽ cập nhật sao kê minh bạch.</div>
                  <div className="h-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
