import smallBG from '@/assets/images/main-bg-small.png'
import { Button } from '@/components/ui'
import HomeNavbar from '@/components/shared/HomeNav'
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup'
import Side from '@/components/layouts/AuthLayout/Side'
import FullPageSections from './InfoSection'
import ClaimLandingSection from './ClaimLandingSection'
import { WobbleCard } from '@/components/ui/ADD_UI/wobble_card' 

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void
    featuresRef: React.RefObject<HTMLElement>
    contactRef: React.RefObject<HTMLElement>
    aboutRef: React.RefObject<HTMLElement>
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {
    return (
        <div className="relative flex flex-col w-screen  overflow-hidden">
            <HomeNavbar
                scrollToSection={scrollToSection}
                featuresRef={featuresRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />

            <WobbleCard containerClassName='bg-primary-deep'>
            <div className="xl:min-h-[90vh]  md:min-h-[45vh] sm:min-h-[70vh] h-[600px] items-center">
                {/* Background video for larger screens */}
                {/* <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hidden md:block absolute top-0 left-0 min-w-full min-h-full object-cover z-[-10]"
                    >
                    <source src={bgVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video> */}

                {/* Background image for mobile */}
                <img
                    src={smallBG}
                    alt="background_image"
                    className="md:hidden w-full object-cover absolute top-0 left-0 z-[-10]"
                />

                {/* Overlay to ensure text readability */}
                <div className="absolute top-0 left-0 w-full  min-h-full bg-black opacity-50 z-[-5]"></div>

                        <div className='sm:grid sm:grid-cols-[80%_20%]'>
                            
                <div className=" text-black   flex mt-24 ml-11 sm:px-4 ">
                    {/* Video Section */}
                    {/* <div className=" mt-8 lg:mt-0 lg:mb-0 mb-6"> */}
                        {/* <div className="relative overflow-hidden pt-[56.25%] rounded-lg shadow-lg">
                            <iframe
                            src={`https://www.youtube.com/embed/xQl8i2sO_Ls?autoplay=1&mute=${isMuted ? 1 : 0
                            }&loop=1&playlist=xQl8i2sO_Ls&controls=0&showinfo=0&rel=0`}
                            title="Product Demo Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full"
                            ></iframe>
                            <button
                            onClick={toggleMute}
                            className="absolute bottom-4 right-4 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
                            >
                            {isMuted ? (
                                <IoVolumeMuteOutline size={24} />
                                ) : (
                                    <IoVolumeHighOutline size={24} />
                                    )}
                                    </button>
                                    </div> */}
                    {/* </div> */}

                    {/* Content Section */}

                            <div className="text-white">
                                <h1 className="text-4xl md:text-6xl xl:text-8xl font-black text-white mb-4 capitalize ">
                                    <span className="text-white">
                                        AI front office{' '}
                                    </span>{' '}
                                    <br />
                                    for healthcare agents
                                </h1>
                                <p
                                    style={{ lineHeight: '0.7' }}
                                    className="text-2xl xl:text-3xl my-8 font-base"
                                    >
                                    Create{' '}
                                    <span className="text-black  font-black">
                                        AI Store
                                    </span>{' '}
                                    in 2 min <br />
                                    <br />
                                    Scale with{' '}
                                    <span className="text-black font-black">
                                        Digital Marketing
                                    </span>{' '}
                                </p>
                                <div>
                                    <HcfSignupPopup
                                        popupButtonStatus
                                        buttonChildren={
                                            <Button
                                            block
                                            variant="solid"
                                            className="rounded-[5px]  text-lg md:max-w-[250px] max-w-[200px] lg:max-w-[300px] xl:max-w-[400px]  mt-8"
                                            >
                                                Get Started
                                            </Button>
                                        }
                                        hcfLogin={true}
                                        />
                                </div>
                                <div className=" flex gap-12  p-[4px] mt-12 flex-wrap">
                                    <div>
                                        <h1 className="text-4xl font-bold ">
                                            2100
                                            <span className="text-white ml-1">
                                                +
                                            </span>
                                        </h1>
                                        <p className="text-lg capitalize">
                                            qualified doctors
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className="text-4xl font-bold ">
                                            1000
                                            <span className="text-white ml-1">
                                                +
                                            </span>
                                        </h1>
                                        <p className="text-lg capitalize">
                                            hospitals
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className="text-4xl font-bold ">
                                            800
                                            <span className="text-white ml-1">
                                                +
                                            </span>
                                        </h1>
                                        <p className="text-lg capitalize">
                                            Treatment Plans
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div>
                        <Side/>
                        </div>
                    
            </div>
                                        </div>
        </WobbleCard>
            {/* <FullPageSections/> */}
        </div>

    )
}

export default HeroSection
