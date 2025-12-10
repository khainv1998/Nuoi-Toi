export default function Disclaimer() {
  return (
    <section className="w-full py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div 
          className="glass-panel rounded-2xl p-6 text-center border border-yellow-200 bg-yellow-50/50" 
          data-aos="fade-up"
        >
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center justify-center gap-2 text-yellow-700">
            <span>⚠️</span>
            <span>DISCLAIMER:</span>
          </h3>
          <p className="text-sm sm:text-base text-gray-700 font-medium max-w-3xl mx-auto">
            Đây là trang web mang tính chất{" "}
            <strong className="text-gray-900">HÀI HƯỚC</strong>. Mọi nội dung
            đều mang tính giải trí, không nhằm mục đích xúc phạm hay chỉ trích
            bất kỳ cá nhân/tổ chức nào.
          </p>
        </div>
      </div>
    </section>
  );
}
