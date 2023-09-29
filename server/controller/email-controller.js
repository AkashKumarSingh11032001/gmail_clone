import Email from "../model/email.js";

export const saveSendEmails = async (request, response) => {
    try {
        // console.log(request.body.payload)
        const email = await new Email(request.body.payload);
        email.save();
        response.status(200).json('email saved successfully');
    } catch (error) {
        response.status(500).json(error.message);
    }
}