import { Button, Notification, toast } from '@/components/ui';
import { useState } from 'react';
import { BiPhone, BiSend, BiUser } from 'react-icons/bi';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const ContactForm = () => {
    const [formState, setFormState] = useState({
        fullname: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focused, setFocused] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsSubmitting(true);
            // await apiContactUs(formState)
            setIsSubmitting(false);
            toast.push(
                <Notification
                    title={'Success'}
                    type={'success'}
                >
                    Successfully submitted
                </Notification>,
            );
            setFormState({ fullname: '', email: '', subject: '', message: '' });
        } catch (err) {
            setIsSubmitting(false);
            toast.push(
                <Notification
                    title={err?.response?.data.message}
                    type={'danger'}
                >
                    {err?.response?.data.message}
                </Notification>,
            );
        }
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-gradient-to-br from-orange-50 via-pink-100 to-orange-200 min-h-screen py-20 px-4 sm:px-6 lg:px-16 animate-fade-in">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10 animate-slide-in-left">
                        <h2 className="text-5xl font-extrabold text-orange-900 leading-tight">Reach Out to Us</h2>
                        <p className="text-orange-700 text-lg">
                            Whether you have questions, feedback, or need support — we’re here to help. Let's build a healthier future together.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-orange-100 p-3 rounded-full shadow-sm">
                                    <BiPhone className="w-6 h-6 text-orange-700" />
                                </div>
                                <a href="tel:+919811396858" className="text-orange-800 hover:text-orange-600 font-medium">
                                    +91 9811396858
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-orange-100 p-3 rounded-full shadow-sm">
                                    <CgMail className="w-6 h-6 text-orange-700" />
                                </div>
                                <a href="mailto:hello@gogetwell.ai" className="text-orange-800 hover:text-orange-600 font-medium">
                                    hello@gogetwell.ai
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-orange-900 mb-2">Connect With Us</h3>
                            <div className="flex gap-3">
                                <Link to="https://x.com/gogetwellai" target='_blank' className="bg-orange-100 p-3 rounded-full hover:bg-orange-200 transition">
                                    <BsTwitter className="w-5 h-5 text-orange-800" />
                                </Link>
                                <Link to="https://www.linkedin.com/company/gogetwellai/" target='_blank' className="bg-orange-100 p-3 rounded-full hover:bg-orange-200 transition">
                                    <BsLinkedin className="w-5 h-5 text-orange-800" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-10 animate-fade-in-up">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative">
                                <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all ${focused === 'fullname' || formState.fullname ? 'text-orange-500' : 'text-gray-400'}`}>
                                    <BiUser className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    name="fullname"
                                    placeholder="Full Name"
                                    value={formState.fullname}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('fullname')}
                                    onBlur={() => setFocused('')}
                                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-500 transition-all"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all ${focused === 'email' || formState.email ? 'text-orange-500' : 'text-gray-400'}`}>
                                    <CgMail className="w-5 h-5" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('email')}
                                    onBlur={() => setFocused('')}
                                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-500 transition-all"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('message')}
                                    onBlur={() => setFocused('')}
                                    rows={4}
                                    className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-500 transition-all"
                                    required
                                />
                            </div>
                            <Button
                                loading={isSubmitting}
                                type="submit"
                                className="w-full bg-orange-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                            >
                                <span>Submit</span>
                                <BiSend className="w-5 h-5" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;