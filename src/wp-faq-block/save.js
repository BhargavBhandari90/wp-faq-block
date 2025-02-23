import { useBlockProps } from '@wordpress/block-editor';
import FAQDropdown from './component/faq-dropdown';
import FAQAccordian from './component/faq-accordian';
import FAQSection from './component/faq-section';

export default function save( { attributes } ) {
	const { faqs, title, faqtype } = attributes;

	const renderFAQ = () => {
		switch ( faqtype ) {
			case 'dropdown':
				return <FAQDropdown title={ title } faqs={ faqs } />;
			case 'accordian':
				return <FAQAccordian title={ title } faqs={ faqs } />;
			case 'section':
				return <FAQSection title={ title } faqs={ faqs } />;
			default:
				return <FAQDropdown title={ title } faqs={ faqs } />;
		}
	};

	return <div { ...useBlockProps.save() }>{ renderFAQ() }</div>;
}
