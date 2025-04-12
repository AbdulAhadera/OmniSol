import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { motion } from "framer-motion"
import { Calendar, Globe } from 'lucide-react';
import Logo from '../../public/Logo.png'

function CookiesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
            <Navbar />

            <section className="py-24 px-6 sm:px-10 max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-center text-gradient mb-12">Our Cookie Notice</h1>
                <div className="prose prose-invert max-w-none">
                    <div className="space-y-10">
                        <div className="border-b border-gray-800 pb-8">
                            <div className="text-gray-300 mb-2 items-center">

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="hidden sm:flex justify-evenly px-4 py-1 bg-secondary/20 text-secondary rounded-full border border-secondary/40 mb-4"
                                >
                                    <span className="text-secondary flex">
                                        <Calendar size={20} className="mx-2" /> April 11th, 2025
                                    </span>

                                    <span className="text-secondary flex">
                                        <img src={Logo} className="h-6" />
                                    </span>

                                    <span className="text-secondary flex">
                                        <Globe size={20} className="mx-2" />
                                        www.omnisol.ai
                                    </span>
                                </motion.div>

                                <div className="block sm:hidden h-24">
                                    <span className="text-secondary flex my-1">
                                        <Calendar size={20} className="mx-2 " /> April 11th, 2025
                                    </span>

                                    <span className="text-secondary flex my-1">
                                        <img src={Logo} className="h-6 mx-1" />
                                    </span>

                                    <span className="text-secondary flex my-1">
                                        <Globe size={20} className="mx-2 mx" />
                                        www.omnisol.ai
                                    </span>
                                </div>

                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                OmniSol AI ("Company," "we," "us," or "our") uses cookies and similar tracking technologies to enhance your experience on our website. This Cookie Notice explains what cookies are, how we use them, and how you can manage your cookie preferences.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">1. What Are Cookies?</h2>
                            <p className="text-gray-300 mb-4">
                                Cookies are small text files stored on your device when you visit a website. They help us understand how users interact with the site, remember preferences, and improve your experience.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">2. Types of Cookies We Use</h2>
                            <p className="text-gray-300 mb-4">We use the following types of cookies:</p>
                            <div className="text-gray-300 mb-4">
                                <h3 className="text-xl font-semibold text-white mb-3">2.1. Essential Cookies</h3>
                                <p>These cookies are necessary for the website to function (e.g., login, navigation).</p>
                            </div>
                            <div className="text-gray-300 mb-4">
                                <h3 className="text-xl font-semibold text-white mb-3">2.2. Analytics Cookies</h3>
                                <p>These cookies help us understand how visitors interact with the website (e.g., Google Analytics).</p>
                            </div>
                            <div className="text-gray-300 mb-4">
                                <h3 className="text-xl font-semibold text-white mb-3">2.3. Functional Cookies</h3>
                                <p>These cookies remember preferences and settings (e.g., language, region).</p>
                            </div>
                            <div className="text-gray-300 mb-4">
                                <h3 className="text-xl font-semibold text-white mb-3">2.4. Marketing Cookies</h3>
                                <p>These cookies are used to deliver relevant ads and track ad performance (only used if user consents).</p>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">3. How You Can Control Cookies</h2>
                            <p className="text-gray-300 mb-4">You can manage your cookie preferences through:</p>
                            <ul className="text-gray-300 list-disc pl-6 space-y-2">
                                <li>Your browser settings (to block or delete cookies)</li>
                                <li>The cookie consent banner shown on your first visit</li>
                                <li>Changing your preferences at any time by contacting us</li>
                            </ul>
                            <p className="text-gray-300 mt-3">Note: Disabling some cookies may affect the functionality of the site.</p>
                        </div>

                        {/* Section 4 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">4. Third-Party Cookies</h2>
                            <p className="text-gray-300 mb-4">
                                Some cookies are placed by third-party services we use (e.g., analytics or embedded content). These providers have their own privacy and cookie policies.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">5. Updates</h2>
                            <p className="text-gray-300">
                                We may update this Cookie Notice periodically. The updated version will be posted on this page with a revised date.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div className="pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">6. Contact</h2>
                            <p className="text-gray-300">
                                For questions about our cookie practices, please email: <a href="mailto:info@omnisol.ai" className="text-primary hover:underline">info@omnisol.ai</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default CookiesPage;
