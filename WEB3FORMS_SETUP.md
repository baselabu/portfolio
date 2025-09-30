# Web3Forms Setup Guide

This guide will help you set up Web3Forms to enable direct email sending from your contact form without any redirects.

## Step 1: Get Web3Forms Access Key

1. Go to [Web3Forms.com](https://web3forms.com/)
2. Enter your email address: `baseltv11@gmail.com`
3. Click "Get Access Key"
4. Check your email for the access key
5. Copy the access key (it looks like: `12345678-1234-1234-1234-123456789abc`)

## Step 2: Update Your Code

1. Open `js/contact.js`
2. Find this line:
   ```javascript
   formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');
   ```
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key:
   ```javascript
   formData.append('access_key', '12345678-1234-1234-1234-123456789abc');
   ```

## Step 3: Test Your Setup

1. Open your website
2. Fill out the contact form
3. Click "Send"
4. You should see "Message sent successfully!" message
5. Check your Gmail inbox for the message

## How It Works

- **No redirects**: Email is sent directly in the background
- **No Gmail opening**: Users stay on your website
- **Instant feedback**: Success/error messages appear immediately
- **Form clears**: After successful sending
- **Professional**: Emails arrive properly formatted

## Benefits

- ✅ **Free**: No cost for up to 250 emails/month
- ✅ **No setup**: Just need an access key
- ✅ **Reliable**: 99.9% uptime
- ✅ **Secure**: HTTPS encryption
- ✅ **Spam protection**: Built-in filtering
- ✅ **No redirects**: Users never leave your site

## Troubleshooting

- **"Please fill in all fields"**: Make sure all form fields are filled
- **"Failed to send message"**: Check your access key is correct
- **No emails received**: Check spam folder, verify access key
- **CORS errors**: Make sure you're testing on a web server (not file://)

## Alternative: Formspree

If Web3Forms doesn't work, you can also use Formspree:
1. Go to [Formspree.io](https://formspree.io/)
2. Create account and get form endpoint
3. Replace the fetch URL in the code

## Security Notes

- The access key is safe to use in client-side code
- Web3Forms handles rate limiting and spam protection
- No sensitive data is stored on their servers
