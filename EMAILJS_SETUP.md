# Contact Form Setup Guide

Your contact form now works immediately without any setup required! It uses an improved mailto method that provides a better user experience than the previous version.

## How It Works Now

1. **User fills out the form** and clicks "Send"
2. **Email client opens** with pre-filled message (if supported by browser)
3. **Fallback options** if email client doesn't open:
   - Copies email details to clipboard
   - Shows formatted message for manual copying
4. **Form clears** and shows success message

## Optional: EmailJS Setup (For Direct Sending)

If you want to send emails directly without opening the user's email client, you can set up EmailJS:

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Follow the setup instructions to connect your Gmail account
5. Note down your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})
Reply-To: {{reply_to}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** in the API Keys section
3. Copy this key

## Step 5: Update Your Code

Replace the placeholder values in `js/contact.js`:

1. Replace `YOUR_PUBLIC_KEY` with your actual public key
2. Replace `YOUR_SERVICE_ID` with your service ID
3. Replace `YOUR_TEMPLATE_ID` with your template ID

Example:
```javascript
emailjs.init("user_abc123def456"); // Your public key
// ...
const result = await emailjs.send(
  'service_xyz789', // Your service ID
  'template_abc123', // Your template ID
  // ... rest of the code
);
```

## Step 6: Test Your Setup

1. Open your website
2. Fill out the contact form
3. Click "Send"
4. Check your Gmail inbox for the message
5. Verify the form shows success/error messages correctly

## Troubleshooting

- **"EmailJS is not defined"**: Make sure the EmailJS script is loaded before your contact.js
- **"Invalid service ID"**: Double-check your service ID in the EmailJS dashboard
- **"Template not found"**: Verify your template ID and that the template is published
- **Emails not received**: Check your spam folder and verify your email service is properly connected

## Security Notes

- The public key is safe to expose in client-side code
- EmailJS handles rate limiting and spam protection
- Consider setting up domain restrictions in your EmailJS account for additional security

## Free Plan Limits

- 200 emails per month
- 2 email services
- 2 email templates
- Perfect for personal portfolio sites

For higher limits, consider upgrading to a paid plan.
