import Image from "next/image";

export default function DonateSection() {
  return (
    <section className="w-full py-12 px-4 sm:py-16 sm:px-6 lg:py-20 bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400">
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 sm:mb-8 break-words px-2 text-gray-900 drop-shadow-sm"
          data-aos="fade-up"
        >
          💳 DONATE NGAY ĐI, NẾU BẠN ĐANG CƯỜI!
        </h2>
        <p
          className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-900 font-semibold"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Quét mã QR này để nuôi tôi (và nhận bản sao kê ngay lập tức!)
        </p>
        <div className="flex justify-center mb-6 sm:mb-8">
          {/* VIETQR Card Design */}
          <div
            className="bg-white rounded-3xl border-4 border-blue-500 shadow-2xl p-6 sm:p-8 max-w-sm w-full relative overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            {/* Decorative shapes */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-100 rounded-full -ml-12 -mb-12 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-blue-100 rounded-full -mr-10 -mb-10 opacity-50"></div>

            {/* VIETQR Logo */}
            <div className="text-center mb-4 relative z-10">
              <div className="inline-flex items-center gap-1 text-2xl sm:text-3xl font-bold">
                <span className="text-red-500">V</span>
                <span className="text-red-500">IET</span>
                <span className="text-blue-500">QR</span>
              </div>
            </div>

            {/* QR Code with heart overlay */}
            <div className="relative flex justify-center mb-4 relative z-10">
              <div className="relative">
                <Image
                  src="https://img.vietqr.io/image/vcb-0851000034922-qr_only.png?accountName=NGUYEN%20vAN%20HAI"
                  alt="QR Code Donation"
                  width={280}
                  height={280}
                  className="w-64 h-64 sm:w-72 sm:h-72 object-contain rounded-lg"
                  unoptimized
                />
                {/* Heart overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-5xl">
                  ❤️
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-4 relative z-10"></div>

            {/* Bank logos */}
            <div className="flex justify-between items-center mb-4 relative z-10">
              <div className="text-blue-600 font-semibold text-sm sm:text-base">
                napas 247
              </div>
              <div className="flex items-center gap-1 text-green-600 font-semibold text-sm sm:text-base">
                <span className="text-green-600 font-bold">V</span>
                <span>Vietcombank</span>
              </div>
            </div>

            {/* Banking Information */}
            <div className="text-center space-y-2 relative z-10">
              <p className="text-xs sm:text-sm text-gray-700">
                Tên chủ TK:{" "}
                <span className="font-semibold">NGUYEN VAN HAI</span>
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                Số TK:{" "}
                <span className="font-bold text-blue-600 text-sm sm:text-base">
                  0851000034922
                </span>
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                Ngân hàng TMCP Ngoại Thương Việt Nam
              </p>
            </div>

            {/* Footer */}
            <div className="text-right mt-4 relative z-10">
              <p className="text-xs text-gray-400">Tạo bởi VietQR.net</p>
            </div>
          </div>
        </div>
        <p
          className="text-base sm:text-lg lg:text-xl font-bold mb-6 sm:mb-8 text-gray-900 break-words drop-shadow-sm"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          ⚡ Chuyển xong là có mail tự động! ⚡
        </p>
        <button
          className="bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 text-white font-bold py-4 px-6 sm:py-5 sm:px-10 rounded-full text-base sm:text-lg lg:text-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 whitespace-nowrap drop-shadow-lg"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          🎁 TÔI MUỐN NUÔI BẠN!
        </button>
      </div>
    </section>
  );
}
