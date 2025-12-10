export default function ProjectAnnouncement() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800"
          data-aos="fade-up"
        >
          🚀 Dự Án <span className="text-gradient">Nuôi Tôi</span> Chính Thức
        </h2>
        
        <div
          className="glass-panel rounded-3xl p-8 lg:p-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed font-medium">
            Bắt đầu từ ngày mai –{" "}
            <strong className="text-indigo-600">08/12/2025</strong>, tôi xin
            phép chính thức thành lập{" "}
            <strong className="text-indigo-600">Dự án Nuôi Tôi</strong>.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed break-words font-medium">
            Mỗi tháng, bạn chỉ cần đóng góp{" "}
            <strong className="text-green-600 text-2xl">50k</strong> tôi sẽ cập
            nhật thông tin minh bạch, rõ ràng, từng cột mốc chi tiêu – kèm báo
            cáo đầy đủ như log file production. Và tất nhiên, mỗi mạnh thường
            quân sẽ nhận được thư cảm ơn được format tử tế, font monospace, căn
            lề chuẩn chỉ.
          </p>

          <div
            className="bg-white/40 rounded-2xl p-6 sm:p-8 border border-white/60 shadow-inner"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">💌</span>
              <p className="text-lg sm:text-xl text-gray-800 font-mono font-bold">
                Thư cảm ơn mẫu:
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm font-mono text-sm sm:text-base text-gray-800 tracking-tight">
              <div className="border-b-2 border-dashed border-gray-300 pb-4 mb-4 text-center font-bold text-lg">
                CẢM ƠN BẠN ĐÃ NUÔI TÔI!
              </div>
              <div className="space-y-2 font-medium">
                <div>Ngày: 08/12/2025</div>
                <div>Số tiền: 50,000 VNĐ</div>
                <div>Mã giao dịch: [Mã của bạn]</div>
                <div className="h-4"></div>
                <div>Cảm ơn bạn đã tin tưởng và ủng hộ!</div>
                <div>Tôi sẽ cập nhật sao kê minh bạch.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
