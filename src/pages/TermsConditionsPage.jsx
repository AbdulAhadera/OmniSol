import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { motion } from "framer-motion"
import { Calendar, Globe } from 'lucide-react';
import Logo from '../../public/Logo.png'

function TermsConditionPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
            <Navbar />

            <section className="py-24 px-6 sm:px-10 max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-center text-gradient mb-12">Terms and Conditions</h1>
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
                                By accessing or using this website (the “Site”), you agree to be legally bound by these Terms and Conditions (the “Terms”), our Privacy Policy, and any other applicable policies posted on this Site. If you do not agree to these Terms, do not use this Site.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                            <p className="text-gray-300 mb-4">
                                By accessing or using this website (the “Site”), you agree to be legally bound by these Terms and Conditions (the “Terms”), our Privacy Policy, and any other applicable policies posted on this Site. If you do not agree to these Terms, do not use this Site. These Terms apply to all visitors, users, and others who access or use the Site.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">2. Intellectual Property Rights</h2>
                            <p className="text-gray-300 mb-4">
                                All content, features, and functionality on the Site—including but not limited to text, graphics, logos, icons, images, videos, software, and code—are the intellectual property of OmniSol AI, LLC or its licensors and are protected under U.S. and international copyright, trademark, patent, and other intellectual property laws.
                                You may not use, copy, reproduce, republish, upload, post, transmit, distribute, or modify any content from this Site without our prior written consent, except as explicitly permitted under these Terms.
                            </p>
                        </div>

                        {/* Section 3 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">3. User Conduct</h2>
                            <p className="text-gray-300 mb-4">
                                You agree not to use the Site:
                            </p>
                            <ul className="text-gray-300 list-disc pl-6 space-y-2">
                                <li>In any way that violates any applicable local, state, national, or international law or regulation;</li>
                                <li>To transmit any unsolicited or unauthorized advertising or promotional material;</li>
                                <li>To engage in any conduct that restricts or inhibits anyone’s use or enjoyment of the Site;</li>
                                <li>To upload or distribute malicious software or code.</li>
                            </ul>
                            <p className="text-gray-300 mt-3">
                                We reserve the right to suspend or terminate your access to the Site for any violation of these Terms.
                            </p>
                        </div>

                        {/* Section 4 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">4. Third-Party Links</h2>
                            <p className="text-gray-300 mb-4">
                                The Site may contain links to third-party websites or services. We do not control and are not responsible for the content, privacy policies, or practices of any third-party sites or services. Inclusion of a link does not imply endorsement by OmniSol AI.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">5. Disclaimers</h2>
                            <p className="text-gray-300">
                                The Site and all content, materials, and services provided on or through the Site are provided “as is” and “as available,” without warranties of any kind, either express or implied.
                                To the maximum extent permitted by applicable law, OmniSol AI disclaims all warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, or uninterrupted or error-free use.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
                            <p className="text-gray-300">
                                To the fullest extent permitted by law, in no event shall OmniSol AI, its affiliates, directors, officers, employees, agents, or licensors be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising out of:
                            </p>
                            <ul className="text-gray-300 list-disc pl-6 space-y-2">
                                <li>Your use or inability to use the Site,</li>
                                <li>Any content obtained from the Site,</li>
                                <li>Unauthorized access to or alteration of your transmissions or data.</li>
                            </ul>
                            <p className="text-gray-300 mt-3">
                                Our total liability shall not exceed one hundred dollars ($100 USD), even if we have been advised of the possibility of such damages.
                            </p>
                        </div>

                        {/* Section 7 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">7. Indemnification</h2>
                            <p className="text-gray-300">
                                You agree to defend, indemnify, and hold harmless OmniSol AI, its affiliates, officers, directors, employees, contractors, and agents from and against any claims, liabilities, damages, losses, and expenses—including reasonable attorney’s fees—arising out of or in any way connected with your use of the Site or violation of these Terms.
                            </p>
                        </div>

                        {/* Section 8 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">8. Privacy</h2>
                            <p className="text-gray-300 mb-4">
                                Your use of the Site is also governed by our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>, which explains how we collect, use, and disclose information that pertains to your privacy.
                            </p>
                        </div>

                        {/* Section 9 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">9. Modifications</h2>
                            <p className="text-gray-300">
                                We may revise and update these Terms from time to time at our sole discretion. All changes are effective immediately when posted. By continuing to use the Site after the posting of revised Terms, you agree to be bound by the changes.
                            </p>
                        </div>

                        {/* Section 10 */}
                        <div className="border-b border-gray-800 pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">10. Governing Law and Jurisdiction</h2>
                            <p className="text-gray-300">
                                These Terms are governed by and construed in accordance with the laws of the State of Missouri, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the state and federal courts located in St. Louis County, Missouri for any legal action or proceeding related to your use of the Site.
                            </p>
                        </div>

                        {/* Section 11 */}
                        <div className="pb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">11. Contact Information</h2>
                            <p className="text-gray-300">
                                If you have any questions or concerns about these Terms, you may contact us at:
                            </p>
                            <p className="text-gray-300">
                                Email: <a href="mailto:info@omnisol.ai" className="text-primary hover:underline">info@omnisol.ai</a>
                            </p>
                            <p className="text-gray-300">
                                Website: <a href="https://www.omnisol.ai" className="text-primary hover:underline">www.omnisol.ai</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default TermsConditionPage;
