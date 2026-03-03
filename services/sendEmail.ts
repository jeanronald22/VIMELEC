import { sendForm } from 'emailjs-com';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

const sendEmail = async (form: HTMLFormElement) => {
	const response = await sendForm(SERVICE_ID, TEMPLATE_ID, form, USER_ID);
	return response.status;
};
export default sendEmail;
