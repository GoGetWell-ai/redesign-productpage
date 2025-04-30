import React, { ReactNode } from 'react'
import aboutUs from '@/assets/images/about_us.gif'
import mission from '@/assets/images/our_mission.gif'
import challenges from '@/assets/images/challenges_solve.gif'

// ✅ Add global CSS in your styles/globals.css or tailwind.css:
//
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
//
// @keyframes fadeInUp {
//   0% { opacity: 0; transform: translateY(20px); }
//   100% { opacity: 1; transform: translateY(0); }
// }
// .animate-fadeInUp {
//   animation: fadeInUp 1s ease-out both;
// }
//
// .warm-bg { background-color: #FFF7F0; }       // Soft peach
// .primary-color { color: #FF6B6B; }            // Warm coral
// .bg-accent { background-color: #FFEBD6; }     // Light orange
// .text-neutral { color: #333; }
// .card { background-color: white; border-radius: 1rem; }

interface SectionProps {
    img: any
    icon1: ReactNode
    icon2: ReactNode
    title: string
    content1: string
    content2: string
    icontitle1: string
    iconp1: string
    icontitle2: string
    iconp2: string
    status: 'left' | 'right'
}

const Section: React.FC<SectionProps> = ({
    status,
    img,
    icon1,
    icon2,
    title,
    content1,
    content2,
    icontitle1,
    iconp1,
    icontitle2,
    iconp2,
}) => {
    const isLeft = status === 'left'

    return (
        <section
            className={`flex flex-col-reverse ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 px-4 sm:px-8 py-16 animate-fadeInUp border-b-2 border-neutral bg-warm-bg`}
        >
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <img
                    src={img}
                    alt={title}
                    className="w-full max-w-[400px] rounded-xl shadow-md transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 space-y-6 text-neutral">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-2">{title}</h2>
                    <div className="h-1 w-20 bg-primary rounded-full"></div>
                </div>

                <p className="text-base md:text-lg leading-relaxed">{content1}</p>
                <p className="text-base md:text-lg leading-relaxed">{content2}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    {[{ icon: icon1, title: icontitle1, desc: iconp1 }, { icon: icon2, title: icontitle2, desc: iconp2 }].map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 bg-accent p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="p-2 bg-white rounded-full shadow">{item.icon}</div>
                            <div>
                                <h4 className="text-md font-semibold">{item.title}</h4>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const FullPageSections: React.FC = () => {
    const sections: SectionProps[] = [
        {
            img: aboutUs,
            icon1: (
                <svg className="w-6 h-6 text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            icon2: (
                <svg className="w-6 h-6 text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            ),
            title: 'About Us',
            content1:
                'We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry. By addressing inefficiencies and disorganization, we empower healthcare facilitators to modernize their operations, attract more patients, and deliver seamless, personalized care across borders.',
            content2:
                'Our cutting-edge solutions are designed to streamline processes and enhance the overall patient experience.',
            icontitle1: 'Modern Solutions',
            iconp1: 'Leveraging AI technology for healthcare',
            icontitle2: 'Patient-Centric',
            iconp2: 'Personalized healthcare experiences',
            status: 'left',
        },
        {
            img: mission,
            icon1: (
                <svg className="w-6 h-6 text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            icon2: (
                <svg className="w-6 h-6 text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            title: 'Our Mission',
            content1:
                'Our mission is to simplify the complex medical tourism process by leveraging advanced AI tools that optimize healthcare facilitators operations, maximize revenue opportunities, and provide patients with personalized and stress-free treatment journeys.',
            content2:
                'We strive to become the leading platform for healthcare tourism management and digital transformation.',
            icontitle1: 'AI-Powered',
            iconp1: 'Smart technology for operations',
            icontitle2: 'Growth Focus',
            iconp2: 'Maximizing potential and reach',
            status: 'right',
        },
        {
            img: challenges,
            icon1: (
                <svg className="w-6 h-6 text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            icon2: (
                <svg className="w-6 h-6 text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2z"
                    />
                </svg>
            ),
            title: 'The Challenges We Solve',
            content1:
                'Medical tourism, especially in India, is plagued by disorganization and inefficiency. Facilitators often rely on outdated methods, leading to delayed bookings, inadequate patient support, and missed growth opportunities.',
            content2:
                'Our platform addresses these pain points by streamlining lead management and improving operational efficiency for facilitators and hospitals alike.',
            icontitle1: 'Efficient Operations',
            iconp1: 'Smooth booking & tracking',
            icontitle2: 'Enhanced Support',
            iconp2: 'Better communication tools',
            status: 'left',
        },
    ]

    return (
        <div className="warm-bg scroll-smooth w-full max-w-7xl mx-auto">
            {sections.map((section, idx) => (
                <Section key={idx} {...section} />
            ))}
        </div>
    )
}

export default FullPageSections