export default function HeartMessage() {
  return (
    <section className="w-full py-12 px-4 sm:py-16 sm:px-6 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900"
          data-aos="fade-up"
        >
          🎤 Lời Nhắn Từ Trái Tim
        </h2>
        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-900 leading-relaxed font-medium">
          <p className="break-words" data-aos="fade-in" data-aos-delay="100">
            Trong thời đại mà{" "}
            <strong className="text-purple-700">&quot;từ thiện&quot;</strong> đã
            trở thành từ nhạy cảm, Tôi xin khẳng định:{" "}
            <strong className="text-green-600">HÃY NUÔI TÔI!</strong>
          </p>
          <p className="break-words" data-aos="fade-in" data-aos-delay="200">
            Tôi nghèo, tôi cần tiền, nhưng tôi{" "}
            <strong className="text-red-600">KHÔNG MẤT LƯƠNG TÂM!</strong> Mỗi
            đồng tiền các bạn gửi, tôi sẽ chi tiêu rõ ràng, minh bạch như bụng
            đói của tôi vậy! 😭
          </p>
          <p
            className="italic break-words text-gray-800"
            data-aos="fade-in"
            data-aos-delay="300"
          >
            P/S: Tôi hứa sẽ không mua xe hơi bằng tiền donate. Vì... tôi chưa có
            bằng lái! 🚗❌
          </p>
        </div>
      </div>
    </section>
  );
}
