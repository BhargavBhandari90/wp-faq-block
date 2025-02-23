export default function FAQAccordian( props ) {
	return (
		<section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
			<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
						{ props.title }
					</h2>
				</div>
				{ props.faqs &&
					props.faqs.map( ( faq, index ) => (
						<div
							className="max-w-3xl mx-auto mt-8 space-y-4"
							key={ index }
						>
							<div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
								<button
									type="button"
									id={ 'question' + index }
									data-state="closed"
									className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
								>
									<span className="flex text-lg font-semibold text-black">
										{ faq.question }
									</span>
									<svg
										id={ 'arrow' + index }
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										className="w-6 h-6 text-gray-400"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={ 2 }
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>
								<div
									id={ 'answer' + index }
									style={ { display: 'none' } }
									className="px-4 pb-5 sm:px-6 sm:pb-6"
								>
									<p>{ faq.answer }</p>
								</div>
							</div>
						</div>
					) ) }
			</div>
		</section>
	);
}
