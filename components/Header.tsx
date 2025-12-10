export default function Header() {
  return (
    <div className="w-full bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 py-12 px-4 sm:py-16 sm:px-6 lg:py-20 shadow-lg">
      <div className="max-w-7xl mx-auto text-center">
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 flex items-center justify-center gap-3 sm:gap-4 flex-wrap"
          data-aos="fade-down"
        >
          <span className="text-5xl sm:text-6xl lg:text-7xl animate-pulse drop-shadow-2xl">
            🌱
          </span>
          <span className="whitespace-nowrap text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transform hover:scale-105 transition-transform duration-300 font-extrabold tracking-wider relative">
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-green-300 to-emerald-300 blur-lg opacity-50"></span>
            <span className="relative">NUÔI TÔI</span>
          </span>
          <span className="text-5xl sm:text-6xl lg:text-7xl animate-pulse drop-shadow-2xl">
            🌱
          </span>
        </h1>
        <p
          className="text-lg sm:text-xl lg:text-2xl text-white font-bold mb-2 drop-shadow-sm"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          HÃY NUÔI TÔI.
        </p>
        <p
          className="text-base sm:text-lg lg:text-xl text-white font-semibold"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Tôi hứa sao kê đầy đủ! 💯
        </p>
      </div>
    </div>
  );
}
