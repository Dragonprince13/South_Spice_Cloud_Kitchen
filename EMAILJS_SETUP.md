# 📧 EmailJS Setup Guide for South Spice Cloud Kitchen

## 🎯 **What We're Setting Up**
- Orders automatically sent to your email inbox
- Professional email templates
- No backend needed
- Free to start

## 📋 **Step-by-Step Setup**

### **Step 1: Create EmailJS Account**

1. **Go to [emailjs.com](https://emailjs.com)**
2. **Click "Sign Up"**
3. **Create account** with your email
4. **Verify your email**

### **Step 2: Add Email Service**

1. **Login to EmailJS dashboard**
2. **Go to "Email Services"**
3. **Click "Add New Service"**
4. **Choose "Gmail"** (or your preferred email provider)
5. **Connect your email account**
6. **Note down the Service ID** (e.g., `service_abc123`)

### **Step 3: Create Email Template**

1. **Go to "Email Templates"**
2. **Click "Create New Template"**
3. **Use this template:**

```
Subject: New Order #{{order_number}} - {{customer_name}}

🍽️ NEW ORDER RECEIVED 🍽️

Order Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Order Number: {{order_number}}
Date: {{order_date}}
Customer: {{customer_name}}
Email: {{customer_email}}
Phone: {{customer_phone}}

Order Items:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{order_items}}

Order Summary:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Items: {{total_items}}
Order Summary: {{order_summary}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
South Spice Cloud Kitchen
Contact: +91 99999 99999
Email: info@southspicecloud.com
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

4. **Save the template**
5. **Note down the Template ID** (e.g., `template_xyz789`)

### **Step 4: Get Your User ID**

1. **Go to "Account" → "API Keys"**
2. **Copy your Public Key** (e.g., `user_def456`)

### **Step 5: Update Your Code**

Replace the placeholder IDs in these files:

**In `src/App.js`:**
```javascript
emailjs.init('user_def456'); // Replace with your actual User ID
```

**In `src/pages/Contact.js`:**
```javascript
const serviceID = 'service_abc123'; // Replace with your Service ID
const templateID = 'template_xyz789'; // Replace with your Template ID
const userID = 'user_def456'; // Replace with your User ID
```

### **Step 6: Enable Email Sending**

**In `src/pages/Contact.js`, uncomment this line:**
```javascript
await emailjs.send(serviceID, templateID, templateParams, userID);
```

### **Step 7: Test the Setup**

1. **Start your development server:** `npm start`
2. **Add items to cart** from the menu
3. **Fill out contact form** with your email
4. **Click "Place Order"**
5. **Check your email** for the order confirmation

## 📧 **Email Template Variables**

Your template can use these variables:
- `{{order_number}}` - Unique order ID
- `{{customer_name}}` - Customer's name
- `{{customer_email}}` - Customer's email
- `{{customer_phone}}` - Customer's phone
- `{{order_date}}` - Order date and time
- `{{order_items}}` - List of ordered items
- `{{total_items}}` - Total quantity
- `{{order_summary}}` - Brief order summary

## 🔧 **Troubleshooting**

### **Email not sending:**
1. **Check browser console** for errors
2. **Verify all IDs** are correct
3. **Check EmailJS dashboard** for service status
4. **Ensure email service** is connected

### **Template not working:**
1. **Check template syntax**
2. **Verify variable names** match code
3. **Test template** in EmailJS dashboard

## 📊 **EmailJS Dashboard Features**

- **Email History** - See all sent emails
- **Analytics** - Track email delivery
- **Templates** - Manage multiple templates
- **Services** - Connect multiple email providers

## 💡 **Pro Tips**

1. **Use Gmail** for reliable delivery
2. **Create multiple templates** for different order types
3. **Set up email filters** to organize orders
4. **Use email labels** for easy management

## 🚀 **Next Steps After Setup**

1. **Test thoroughly** with sample orders
2. **Set up email filters** in your inbox
3. **Create backup email** for orders
4. **Consider Google Sheets** integration next

## 📞 **Support**

- **EmailJS Documentation:** [docs.emailjs.com](https://docs.emailjs.com)
- **EmailJS Community:** [community.emailjs.com](https://community.emailjs.com)

---

**Once you complete these steps, every order will automatically be sent to your email inbox!** 📧✨ 