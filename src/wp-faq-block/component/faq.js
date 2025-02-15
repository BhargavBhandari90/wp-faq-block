export default function FAQ(props) {
    return(
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    { props.title && (
                        <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
                            {props.title}
                        </h2>
                    ) }
                </div>
                {props.faqs && props.faqs.map((faq, index) => (
                    <div className="accordion-group" data-accordion="default-accordion" key={index}>
                        <div
                            className="accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 accordion-active:bg-indigo-50 active"
                            id="basic-heading-one-with-arrow"
                        >
                            <button
                                className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                                aria-controls="basic-collapse-one-with-arrow"
                            >
                                <h5>{faq.question}</h5>
                                <svg
                                    className="text-gray-500 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                                    width={22}
                                    height={22}
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <div
                                id="basic-collapse-one-with-arrow"
                                className="accordion-content w-full px-0 overflow-hidden"
                                aria-labelledby="basic-heading-one-with-arrow"
                                style={{ maxHeight: 250 }}
                            >
                                <p className="text-base text-gray-900 leading-6">{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}