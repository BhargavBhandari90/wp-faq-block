export default function FAQSection( props ) {
	return (
		<div className="bg-white">
			<div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
				<h2 className="text-3xl leading-9 font-extrabold text-gray-900 text-center">
					{ props.title }
				</h2>
				<div className="mt-6 border-t-4 border-gray-100 pt-10">
					<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
						{ props.faqs &&
							props.faqs.map( ( faq, index ) => (
								<dl key={ index }>
									<dt className="font-medium leading-6 text-gray-900 text-lg mt-4">
										{ faq.question }
									</dt>
									<dd className="mt-4">
										<p className="leading-6 text-base text-gray-500">
											{ faq.answer }
										</p>
									</dd>
								</dl>
							) ) }
					</div>
				</div>
			</div>
		</div>
	);
}
