import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-rose-100">
        <button
            onClick={onClick}
            className="w-full py-4 px-3 sm:px-4 flex items-center justify-between text-left transition-colors duration-300 hover:bg-rose-50/60 rounded-xl"
        >
            <h3 className="text-base sm:text-lg font-semibold text-rose-900 pr-8">{question}</h3>
            <div className={`transition-transform duration-300 transform ${isOpen ? 'rotate-180' : ''}`}>
                <BiChevronDown className="w-6 h-6 text-rose-500" />
            </div>
        </button>

        <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'}`}
        >
            <div className="p-3 sm:p-4 pt-0 text-rose-700 text-sm leading-relaxed">
                {answer}
            </div>
        </div>
    </div>
);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqData = [
        { que: 'What is gogetwell.ai?', ans: 'gogetwell.ai is an AI-powered platform that helps healthcare facilitators streamline their operations...' },
        { que: 'What is the AI Front Office for Healthcare Agents?', ans: 'The AI Front Office is a powerful platform that helps me manage my healthcare services more efficiently...' },
        { que: 'How does the AI Agent assist me in my healthcare business?', ans: 'The AI Agent works like a virtual assistant, answering patient questions, scheduling consultations...' },
        { que: 'Can I customize the website for my healthcare services?', ans: 'Yes, I can fully customize the website to showcase my services...' },
        { que: 'How does this platform support independent healthcare facilitators like me?', ans: 'The platform is designed specifically for independent facilitators or small teams...' },
        { que: 'How does the platform help me manage patient leads?', ans: 'The AI system captures, organizes, and prioritizes patient leads for me...' },
        { que: 'Is it easy to integrate the platform with the hospitals I work with?', ans: 'Yes, the platform easily connects with the hospital systems I collaborate with...' },
        { que: 'Is the platform secure and compliant with healthcare regulations?', ans: "Absolutely. The platform is designed with top-level security measures..." },
        { que: 'How quickly can I get started with the platform?', ans: 'Setting up the platform is fast and easy...' },
        { que: 'What kind of customer support is available if I need help?', ans: 'I have access to 24/7 customer support, along with tutorials and live demos...' },
        { que: 'How does the platform help me attract more patients?', ans: 'The platform allows me to create a custom, SEO-optimized website...' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 to-orange-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-rose-900 mb-4 tracking-tight">
                        Frequently Asked Questions
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-rose-400 to-orange-400 mx-auto rounded-full" />
                </div>

                {/* FAQ Items */}
                <div className="space-y-3 bg-white rounded-3xl shadow-2xl p-6 sm:p-8 transition-shadow duration-300 hover:shadow-rose-200 animate-fade-in-up">
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.que}
                            answer={faq.ans}
                            isOpen={index === openIndex}
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
