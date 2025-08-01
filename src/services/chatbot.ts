import { sendToDialogflow } from './dialogflow';

export async function getBotResponse(message: string): Promise<string> {
  return await sendToDialogflow(message);
}
