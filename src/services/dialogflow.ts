import axios from 'axios';

const projectId = 'YOUR_PROJECT_ID';
const sessionId = 'unique-session-id';
const languageCode = 'en';
const accessToken = 'YOUR_DIALOGFLOW_ACCESS_TOKEN'; 

export async function sendToDialogflow(message: string): Promise<string> {
    const url = `https://dialogflow.googleapis.com/v2/projects/${projectId}/agent/sessions/${sessionId}:detectIntent`;

    const requestBody = {
        queryInput: {
        text: {
            text: message,
            languageCode,
        },
        },
    };

    const headers = {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
    };

    try {
        const response = await axios.post(url, requestBody, { headers });
        return response.data.queryResult;
    } catch (error) {
        console.error('Dialogflow error:', error);
        return "Sorry, I didn't understand that.";
    }
}
