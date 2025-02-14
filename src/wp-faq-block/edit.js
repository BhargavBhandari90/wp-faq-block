import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { Button } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { faqs } = attributes;
	const [activeIndex, setActiveIndex] = useState(null);

	const addFAQ = () => {
		setAttributes({ faqs: [...faqs, { question: '', answer: '' }] });
	};

	const updateFAQ = (index, key, value) => {
		const updatedFaqs = [...faqs];
		updatedFaqs[index][key] = value;
		setAttributes({ faqs: updatedFaqs });
	};

	return (
		<div {...useBlockProps()}>
			{ faqs.map((faq, index) => (
				<div key={index} className="faq-item-editor">
					<RichText
						tagName="h4"
						placeholder="Enter question..."
						value={faq.question}
						onChange={(value) => updateFAQ(index, 'question', value)}
					/>
					<RichText
						tagName="p"
						placeholder="Enter answer..."
						value={faq.answer}
						onChange={(value) => updateFAQ(index, 'answer', value)}
					/>
				</div>
			))}
			<Button variant='primary' onClick={addFAQ}>Add More</Button>
		</div>
	);
}
