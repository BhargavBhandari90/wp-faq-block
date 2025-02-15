import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Button, TextControl, TextareaControl, __experimentalDivider as Divider, Icon } from '@wordpress/components';
import {  plus, trash } from '@wordpress/icons';
import FAQ from './component/faq';
import './editor.scss';

export default function Edit({ attributes, setAttributes, isSelected }) {
	const { faqs, title } = attributes;

	const setTitle = ( val ) => {
		setAttributes({ title: val });
	};

	const addFAQ = () => {
		setAttributes({ faqs: [...faqs, { question: '', answer: '' }] });
	};

	const removeFAQ = (index) => {
		const updatedFaqs = faqs.filter((_, i) => i !== index);
		setAttributes({ faqs: updatedFaqs });
	};

	const updateFAQ = (index, key, value) => {
		const updatedFaqs = [...faqs];
		updatedFaqs[index][key] = value;
		setAttributes({ faqs: updatedFaqs });
	};

	return (
		<div>
			{ isSelected ? (
				<>
				<TextControl
					__nextHasNoMarginBottom
					__next40pxDefaultSize
					label="Title"
					value={ title }
					onChange={ ( value ) => setTitle( value ) }
				/>
				{ faqs.map((faq, index) => (
					<div key={index} style={{ padding: '15px', marginTop: '15px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '5px' }}>
						<div style={{ alignItems: 'center', justifyContent: 'space-between' }}>
							<div style={{
								width: '100%',
								display: 'flex',
                                alignItems: 'end',
                                justifyContent: 'right',
                                gap: '8px'
							}}>
							<Button isDestructive showTooltip onClick={() => removeFAQ(index)} icon={trash}></Button>
							</div>
							<div style={{ flex: 1 }}>
							<TextControl
								__next40pxDefaultSize
								label="Question"
								placeholder="Enter question..."
								value={faq.question}
								onChange={(value) => updateFAQ(index, 'question', value)}
							/>
							<TextareaControl
								placeholder="Enter answer..."
								label="Answer"
								value={faq.answer}
								onChange={(value) => updateFAQ(index, 'answer', value)}
							/>
							</div>
						</div>
					</div>
				))}
				<Button showTooltip variant='primary' onClick={addFAQ} style={{
					width: '100%',
					border: '1px solid #ddd',
					boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
					padding: '10px',
					fontSize: '16px',
					fontWeight: 'bold',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '8px'
				}}>
					<Icon icon={plus} /> Add More
				</Button>
				</>
			) : (
				<div {...useBlockProps()}>
					<FAQ faqs={faqs} title={title} />
				</div>
			)}
		</div>
	);
}
