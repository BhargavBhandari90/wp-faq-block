import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { faqs } = attributes;
	return (
		<div {...useBlockProps.save()}>
			{faqs && faqs.map((faq, index) => (
				<details key={index}>
					<summary>{faq.question}</summary>
					<p>{faq.answer}</p>
				</details>
			))}
		</div>
	);
}
