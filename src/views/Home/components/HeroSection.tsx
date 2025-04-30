import smallBG from '@/assets/images/main-bg-small.png';
import { Button } from '@/components/ui';
import HomeNavbar from '@/components/shared/HomeNav';
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
    featuresRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {
    return (
        <section className="bg-gradient-to-br from-green-100 to-white w-full relative flex flex-col py-6 overflow-hidden">
            <HomeNavbar
                scrollToSection={scrollToSection}
                featuresRef={featuresRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />

            <div className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center md:justify-between px-6 lg:px-20">
                {/* Mobile Background Image */}
                <img
                    src={smallBG}
                    alt="background"
                    className="md:hidden absolute inset-0 object-cover w-full h-full z-[-10]"
                />

                {/* Dark Overlay for contrast on mobile */}
                <div className="md:hidden absolute inset-0 bg-gradient-to-t from-white via-transparent to-white z-[-5]"></div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 text-gray-800 animate-slideInLeft">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4">
                        <span className="text-green-600">AI Front Office</span><br />
                        for Healthcare Agents
                    </h1>
                    <p className="text-base sm:text-lg mb-6 leading-relaxed animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                        Create <span className="text-green-600 font-semibold">AI Store</span> in just <strong>2 minutes</strong>.<br />
                        <span className="text-green-600 font-semibold">Scale</span> effortlessly with Digital Marketing.
                    </p>
                    <div className="mb-10 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
                        <HcfSignupPopup
                            popupButtonStatus
                            buttonChildren={
                                <Button
                                    block
                                    variant="solid"
                                    className="bg-green-600 text-white rounded-lg py-3 px-6 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-bounceOnHover max-w-[200px]"
                                >
                                    Get Started
                                </Button>
                            }
                        />
                    </div>
                </div>

                {/* Stats & Image/Video Placeholder */}
                <div className="w-full md:w-1/2 flex flex-col lg:flex-row gap-8 lg:gap-12">
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                        {[
                            { num: '2100+', label: 'Qualified Doctors' },
                            { num: '1000+', label: 'Hospitals' },
                            { num: '800+', label: 'Treatment Plans' },
                        ].map((item, idx) => (
                            <div
                                key={item.label}
                                className="bg-white p-5 rounded-xl shadow-md text-center transform transition-all duration-500 ease-out animate-zoomIn"
                                style={{ animationDelay: `${600 + idx * 200}ms` }}
                            >
                                <h2 className="text-3xl font-bold text-green-700">
                                    {item.num}
                                </h2>
                                <p className="mt-2 text-sm font-medium text-gray-600 uppercase tracking-wide">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex-1">
                        {/* Placeholder for video or illustration */}
                        <div className="w-full h-56 md:h-full bg-green-50 rounded-xl shadow-inner animate-fadeInRight" style={{ animationDelay: '800ms' }}>
                            {/* Future video embed goes here */}
                        </div>
                    </div>
                </div>

            </div>

            {/* Animations */}
            <style jsx>{`
                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeInRight {
                    from { opacity: 0; transform: translateX(50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes zoomIn {
                    from { opacity: 0; transform: scale(0.8); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-slideInLeft {
                    animation: slideInLeft 0.8s ease-out forwards;
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                .animate-fadeInRight {
                    animation: fadeInRight 0.8s ease-out forwards;
                }
                .animate-zoomIn {
                    animation: zoomIn 0.6s ease-out forwards;
                }
                .animate-bounceOnHover:hover {
                    animation: bounce 0.6s ease-in-out;
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
            `}</style>
        </section>
    );
};

export default HeroSection;
