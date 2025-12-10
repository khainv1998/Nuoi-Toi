import Image from "next/image";

export default function DonateSection() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 break-words text-gray-800"
          data-aos="fade-up"
        >
          💳 DONATE NGAY ĐI, <br />
          <span className="text-gradient">NẾU BẠN ĐANG CƯỜI!</span>
        </h2>
        <p
          className="text-lg sm:text-xl mb-12 text-gray-600 font-medium"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Quét mã QR này để nuôi tôi (và nhận bản sao kê ngay lập tức!)
        </p>
        
        <div className="flex justify-center mb-12">
          {/* VIETQR Card Design */}
          <div
            className="glass-panel rounded-3xl p-8 max-w-sm w-full relative overflow-hidden transform hover:scale-105 transition-transform duration-500"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            {/* Decorative shapes */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400 rounded-full -mr-20 -mt-20 opacity-20 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-400 rounded-full -ml-16 -mb-16 opacity-20 blur-2xl"></div>

            {/* VIETQR Logo */}
            <div className="text-center mb-6 relative z-10">
              <div className="inline-flex items-center gap-2 text-3xl font-bold bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="text-blue-600">Viet</span>
                <span className="text-green-600">QR</span>
              </div>
            </div>

            {/* QR Code with heart overlay */}
            <div className="relative flex justify-center mb-6 z-10">
              <div className="relative p-4 bg-white rounded-2xl shadow-sm">
                <Image
                  src="https://img.vietqr.io/image/vcb-0851000034922-qr_only.png?accountName=NGUYEN%20vAN%20HAI"
                  alt="QR Code Donation"
                  width={280}
                  height={280}
                  className="w-64 h-64 object-contain rounded-lg"
                  unoptimized
                />
                {/* Heart overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl animate-pulse">
                  ❤️
                </div>
              </div>
            </div>

            {/* Banking Information */}
            <div className="text-center space-y-3 relative z-10 bg-white/30 p-4 rounded-xl backdrop-blur-sm">
              <p className="text-sm text-gray-700 font-medium">
                Tên chủ TK:{" "}
                <span className="font-bold text-gray-900 block text-lg">NGUYEN VAN HAI</span>
              </p>
              <p className="text-sm text-gray-700 font-medium">
                Số TK:{" "}
                <span className="font-black text-blue-600 text-xl block tracking-wider">
                  0851000034922
                </span>
              </p>
              <p className="text-xs text-gray-600 font-medium">
                Ngân hàng TMCP Ngoại Thương Việt Nam (Vietcombank)
              </p>
            </div>
          </div>
        </div>

        <p
          className="text-xl sm:text-2xl font-bold mb-8 text-gray-800"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          ⚡ Chuyển xong là có mail tự động! ⚡
        </p>
        <button
          className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold py-4 px-10 rounded-full text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/30"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          🎁 TÔI MUỐN NUÔI BẠN!
        </button>
      </div>
    </section>
  );
}
