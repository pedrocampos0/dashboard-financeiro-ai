
/**
 * Utility functions for webhook integration
 */

/**
 * Sends data to an n8n webhook
 * @param url The webhook URL
 * @param data The data to send
 */
export const triggerWebhook = async (url: string, data: any) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors', // Handle CORS restrictions
      body: JSON.stringify(data),
    });
    
    console.log('Webhook triggered successfully');
    return true;
  } catch (error) {
    console.error('Error triggering webhook:', error);
    return false;
  }
};
