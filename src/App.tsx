import { BrowserRouter } from 'react-router-dom'
import Theme from '@/components/template/Theme'
import Layout from '@/components/layouts'
import { AuthProvider } from '@/auth'
import Views from '@/views'
import appConfig from './configs/app.config'
import './locales'
import Home from './views/Home'
import HeroSection from './views/Home/components/HeroSection'
import FeaturesGrid from './views/Home/components/FeaturesGrid'
import ClaimLandingSection from './views/Home/components/ClaimLandingSection'
import FullPageSections from './views/Home/components/InfoSection'
import ContactForm from './views/Home/components/ContactForm'
import FAQ from './views/Home/components/HomeFAQ'
import MainFooter from './views/Home/components/MainFooter'

if (appConfig.enableMock) {
    import('./mock')
}

function App() {
    return (
        <Theme>
            <BrowserRouter>
                <AuthProvider>
                    <Layout>
                        {/* <Views /> */}
                        <Home/>
                        {/* <HeroSection/>
                        {/* <ClaimLandingSection/> */}
                        {/* <FullPageSections/>
                        <FeaturesGrid/>
                        <FAQ/>
                        <ContactForm/>
                        <MainFooter/> */} 
                    </Layout>
                </AuthProvider>
            </BrowserRouter>
        </Theme>
    )
}

export default App
