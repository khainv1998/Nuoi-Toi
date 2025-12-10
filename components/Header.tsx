export default function Header() {
  return (
    <div className="w-full py-20 px-4 sm:px-6 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1
          className="text-6xl sm:text-7xl lg:text-9xl font-black mb-6 flex items-center justify-center gap-4 flex-wrap tracking-tighter"
          data-aos="fade-down"
        >
          <span className="animate-bounce-slow text-6xl sm:text-7xl lg:text-8xl">
            🌱
          </span>
          <span className="text-gradient drop-shadow-sm">
            NUÔI TÔI
          </span>
          <span className="animate-bounce-slow text-6xl sm:text-7xl lg:text-8xl" style={{ animationDelay: '0.5s' }}>
            🌱
          </span>
        </h1>
        <p
          className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 font-bold mb-4 font-handwriting"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          HÃY NUÔI TÔI.
        </p>
        <p
          className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-medium max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Tôi hứa sao kê đầy đủ! 💯 (Uy tín hơn cả người yêu cũ của bạn)
        </p>
      </div>
    </div>
  );
}
