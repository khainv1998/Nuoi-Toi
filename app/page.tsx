import Commitments from "@/components/Commitments";
import Comparison from "@/components/Comparison";
import Disclaimer from "@/components/Disclaimer";
import DonateSection from "@/components/DonateSection";
import ExpenseBreakdown from "@/components/ExpenseBreakdown";
import FeatureCards from "@/components/FeatureCards";
import Header from "@/components/Header";
import HeartMessage from "@/components/HeartMessage";
import ProjectAnnouncement from "@/components/ProjectAnnouncement";
import CamKet from "@/components/CamKet";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <ProjectAnnouncement />
        <CamKet />
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
