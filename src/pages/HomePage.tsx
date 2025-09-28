import FeaturesComp from "../components/(HomePageComponents)/FeaturesComp";
import HeaderComp from "../components/(HomePageComponents)/HeaderComp";
import HeroComp from "../components/(HomePageComponents)/HeroComp";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <HeaderComp />

            <HeroComp />

            <FeaturesComp />

            <footer className="bg-gray-100 text-center py-4 text-gray-600">
                feito por <a href="https://github.com/2Rovian" target="_blank" className="">Rovian</a>
            </footer> 
        </div>
    )
}