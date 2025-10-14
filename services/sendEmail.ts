import { sendForm } from 'emailjs-com';

const SERVICE_ID = 'service_88kf7ji';
const TEMPLATE_ID = 'template_rqlaomo';
const USER_ID = 'ngFjEYY9BamsPuTcB';

const sendEmail = async (e: HTMLFormElement) => {
	e.preventDefault;
	try {
		const response = await sendForm(SERVICE_ID, TEMPLATE_ID, e, USER_ID);
		return response.status;
	} catch (error) {
		alert('Failed to send message');
		console.error(error);
	}
};
export default sendEmail;
