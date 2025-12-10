import Header from "@/components/Header";
import FeatureCards from "@/components/FeatureCards";
import Commitments from "@/components/Commitments";
import Comparison from "@/components/Comparison";
import DonateSection from "@/components/DonateSection";
import ExpenseBreakdown from "@/components/ExpenseBreakdown";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import HeartMessage from "@/components/HeartMessage";
import ProjectAnnouncement from "@/components/ProjectAnnouncement";
import Sprint1 from "@/components/Sprint1";
import Disclaimer from "@/components/Disclaimer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <ProjectAnnouncement />
        <Sprint1 />
        <FeatureCards />
        <Commitments />
        <Comparison />
        <DonateSection />
        <ExpenseBreakdown />
        <YouTubeEmbed />
        <HeartMessage />
        <Disclaimer />
      </div>
    </div>
  );
}
