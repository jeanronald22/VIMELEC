import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

const sendEmail = async (form: HTMLFormElement) => {
	const response = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
		publicKey: PUBLIC_KEY,
	});
	return response.status;
};
export default sendEmail;
