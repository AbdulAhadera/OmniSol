import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { motion } from "framer-motion"
import { Calendar, Globe } from 'lucide-react';
import Logo from '../../public/Logo.png'

function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
            <Navbar />


            <section className="py-24 px-6 sm:px-10 max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-center text-gradient mb-12">Our Privacy Policy</h1>
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
                                OmniSol AI ("Company," "we," "us," or "our") values your privacy. This Privacy Policy outlines
                                how we collect, use, disclose, and protect your personal information when you visit our website
                                or use our services.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">1. Information We Collect</h2>
                            <p className="text-gray-300 mb-4">We may collect the following types of information:</p>

                            <h3 className="text-xl font-semibold text-white mt-6 mb-3">1.1. Personal Information</h3>
                            <ul className="text-gray-300 list-disc pl-6 space-y-2 mb-4">
                                <li>Name, email address, phone number</li>
                                <li>Company name, job title, or billing details</li>
                                <li>Any information submitted through contact forms, email, or service requests</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-white mt-6 mb-3">1.2. Automatically Collected Data</h3>
                            <p className="text-gray-300 mb-3">When you visit our website, we may automatically collect:</p>
                            <ul className="text-gray-300 list-disc pl-6 space-y-2 mb-2">
                                <li>IP address</li>
                                <li>Browser type</li>
                                <li>Operating system</li>
                                <li>Pages viewed and the dates/times of your visits</li>
                                <li>Cookies and tracking data </li>
                            </ul>
                        </div>

                        {/* Section 2 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                            <p className="text-gray-300 mb-4">We may use your information to:</p>
                            <ul className="text-gray-300 list-disc pl-6 space-y-2">
                                <li>Provide and improve our services</li>
                                <li>Respond to inquiries or customer support requests</li>
                                <li>Send administrative information (e.g., service changes or policy updates)</li>
                                <li>Send marketing or promotional content (you can opt-out anytime)</li>
                                <li>Detect, prevent, and address technical issues or fraudulent activity</li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">3. Sharing Your Information</h2>
                            <p className="text-gray-300 mb-4">
                                We do not sell your personal information. We may share your information only:
                            </p>
                            <ul className="text-gray-300 list-disc pl-6 space-y-2">
                                <li>With service providers who perform services on our behalf (e.g., hosting, analytics)</li>
                                <li>To comply with legal obligations or respond to lawful requests</li>
                                <li>In connection with a business transfer (e.g., merger, acquisition, or sale of assets)</li>
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">4. Your Rights</h2>
                            <p className="text-gray-300 mb-4">
                                Depending on your location, you may have certain rights, including:
                            </p>
                            <ul className="text-gray-300 list-disc pl-6 space-y-2 mb-4">
                                <li>The right to access or request a copy of your data</li>
                                <li>The right to correct, delete, or restrict use of your data</li>
                                <li>The right to object to certain data uses (e.g., marketing)</li>
                                <li>The right to data portability</li>
                                <li>The right to withdraw consent at any time (where consent is the basis for processing)</li>
                            </ul>
                            <p className="text-gray-300">
                                You may exercise these rights by contacting us at <a href="mailto:Info@omnisol.ai" className="text-primary hover:underline">Info@omnisol.ai</a>.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">5. Data Retention</h2>
                            <p className="text-gray-300">
                                We retain personal information only for as long as necessary to fulfill the purposes
                                described in this Policy, unless a longer retention period is required by law.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">6. Security</h2>
                            <p className="text-gray-300">
                                We implement reasonable security measures to protect your personal data. However, no
                                transmission over the internet is completely secure, and we cannot guarantee absolute
                                security.
                            </p>
                        </div>

                        {/* Section 7 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">7. Third-Party Services</h2>
                            <p className="text-gray-300">
                                We may use third-party services like analytics providers (e.g., Google Analytics). These
                                services may collect information as described in their own privacy policies.
                            </p>
                        </div>

                        {/* Section 8 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">8. Children's Privacy</h2>
                            <p className="text-gray-300">
                                Our services are not directed to individuals under the age of 13, without the consent and
                                monitoring of an adult or legal guardian, and we do not knowingly collect personal
                                information from children.
                            </p>
                        </div>

                        {/* Section 9 */}
                        <div className="pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">9. Changes to This Policy</h2>
                            <p className="text-gray-300">
                                We may update this Privacy Policy at any time. If material changes are made, we will
                                notify you by email or prominent notice on the site. Continued use of the site constitutes
                                your agreement to the revised policy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    )
}

export default PrivacyPolicy