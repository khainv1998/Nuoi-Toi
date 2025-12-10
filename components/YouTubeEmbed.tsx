export default function YouTubeEmbed() {
  // Placeholder video ID - user should replace with actual video ID
  const videoId = "dQw4w9WgXcQ"; // Replace with actual video ID from nuoitoi.com

  return (
    <section className="w-full py-12 px-4 sm:py-16 sm:px-6 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg"
          data-aos="fade-up"
        >
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
        <p
          className="text-center mt-4 text-base sm:text-lg text-gray-700"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tôi nuôi cô. Châu Tinh Trì
        </p>
      </div>
    </section>
  );
}
