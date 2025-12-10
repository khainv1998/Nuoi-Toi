export default function HeartMessage() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <div 
          className="glass-panel rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
          data-aos="zoom-in"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
          
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gray-800"
            data-aos="fade-up"
          >
            🎤 Lời Nhắn Từ <span className="text-gradient">Trái Tim</span>
          </h2>
          
          <div className="space-y-6 text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
            <p className="break-words" data-aos="fade-in" data-aos-delay="100">
              Trong thời đại mà{" "}
              <strong className="text-indigo-600">&quot;từ thiện&quot;</strong> đã
              trở thành từ nhạy cảm, Tôi xin khẳng định:{" "}
              <strong className="text-green-600 text-2xl block mt-2">HÃY NUÔI TÔI!</strong>
            </p>
            <p className="break-words" data-aos="fade-in" data-aos-delay="200">
              Tôi nghèo, tôi cần tiền, nhưng tôi{" "}
              <strong className="text-red-500">KHÔNG MẤT LƯƠNG TÂM!</strong> Mỗi
              đồng tiền các bạn gửi, tôi sẽ chi tiêu rõ ràng, minh bạch như bụng
              đói của tôi vậy! 😭
            </p>
            <div className="h-px bg-gray-200 my-6"></div>
            <p
              className="font-handwriting text-2xl sm:text-3xl text-gray-600 rotate-1"
              data-aos="fade-in"
              data-aos-delay="300"
            >
              P/S: Tôi hứa sẽ không mua xe hơi bằng tiền donate. Vì... tôi chưa có
              bằng lái! 🚗❌
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
