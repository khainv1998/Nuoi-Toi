export default function YouTubeEmbed() {
  // Placeholder video ID - user should replace with actual video ID
  const videoId = "dQw4w9WgXcQ"; // Replace with actual video ID from nuoitoi.com

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:py-20">
      <div className="max-w-5xl mx-auto">
        <div
          className="glass-panel p-4 rounded-3xl"
          data-aos="fade-up"
        >
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-inner">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Tôi nuôi cô. Châu Tinh Trì"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
        <p
          className="text-center mt-6 text-lg sm:text-xl text-gray-600 font-medium italic"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          &quot;Tôi nuôi cô&quot; - Châu Tinh Trì (Nhưng ở đây là các bạn nuôi tôi)
        </p>
      </div>
    </section>
  );
}
