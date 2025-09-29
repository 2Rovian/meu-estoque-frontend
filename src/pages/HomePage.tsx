import FeaturesComp from "../components/(HomePageComponents)/FeaturesComp";
import HeaderComp from "../components/(HomePageComponents)/HeaderComp";
import HeroComp from "../components/(HomePageComponents)/HeroComp";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <HeaderComp />

            <HeroComp />

            <FeaturesComp />
        </div>
    )
}