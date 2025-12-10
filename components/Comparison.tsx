export default function Comparison() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800"
          data-aos="fade-up"
        >
          ⚖️ So Sánh <span className="text-gradient">Cực Gắt</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Other Streamers */}
          <div 
            className="glass-panel p-8 rounded-3xl border-l-8 border-red-400"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold mb-6 text-red-500 flex items-center gap-2">
              <span className="text-3xl">❌</span> Các Streamer Khác
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600">
                <span className="text-red-400 mt-1">⛔</span>
                <span>Donate xong là mất hút, không biết tiền đi đâu.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="text-red-400 mt-1">⛔</span>
                <span>Sao kê bằng Excel "tự chế".</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="text-red-400 mt-1">⛔</span>
                <span>Mua nhà, mua xe, flex ầm ầm.</span>
              </li>
            </ul>
          </div>

          {/* Nuôi Tôi */}
          <div 
            className="glass-panel p-8 rounded-3xl border-l-8 border-green-400 relative overflow-hidden"
            data-aos="fade-left"
          >
            <div className="absolute top-0 right-0 bg-green-400 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
              KHUYÊN DÙNG
            </div>
            <h3 className="text-2xl font-bold mb-6 text-green-600 flex items-center gap-2">
              <span className="text-3xl">✅</span> Nuôi Tôi
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-700 font-medium">
                <span className="text-green-500 mt-1">✨</span>
                <span>Donate xong có email cảm ơn tự động.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 font-medium">
                <span className="text-green-500 mt-1">✨</span>
                <span>Sao kê realtime từ ngân hàng (không fake được).</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 font-medium">
                <span className="text-green-500 mt-1">✨</span>
                <span>Vẫn nghèo, vẫn ăn mì tôm (có video chứng minh).</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
