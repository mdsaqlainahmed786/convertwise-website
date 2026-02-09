# Hosting Guide for Hostinger

This guide will help you deploy your Vite + React application to Hostinger.

## Prerequisites
- A Hostinger hosting account (Shared Hosting or VPS)
- FTP/SFTP access credentials (or File Manager access)
- Your domain name configured

## Method 1: Static File Hosting (Recommended for Vite Apps)

### Step 1: Build Your Application

First, build your production-ready application:

```bash
npm run build
```

This will create a `build` folder with optimized static files.

### Step 2: Upload Files to Hostinger

#### Option A: Using File Manager (Easiest)

1. **Log into Hostinger hPanel**
   - Go to your Hostinger account dashboard
   - Navigate to **File Manager**

2. **Navigate to your domain's public folder**
   - Usually located at: `public_html/` or `www/` or `htdocs/`
   - This is your website's root directory

3. **Upload the build files**
   - Delete any existing files in the public_html folder (backup first if needed)
   - Upload ALL contents from the `build` folder to `public_html/`
   - Make sure `index.html` is in the root of `public_html/`

#### Option B: Using FTP/SFTP Client

1. **Get FTP credentials from Hostinger**
   - Go to hPanel → **FTP Accounts**
   - Note down: Host, Username, Password, Port

2. **Connect using FTP client** (FileZilla, Cyberduck, etc.)
   - Connect to your FTP server
   - Navigate to `public_html/` directory
   - Upload all files from the `build` folder

### Step 3: Configure .htaccess for React Router (if needed)

If your app uses React Router, create a `.htaccess` file in `public_html/`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Step 4: Verify Deployment

1. Visit your domain name in a browser
2. Check browser console for any errors
3. Test all routes and functionality

---

## Method 2: Using Hostinger VPS (Advanced)

If you have a VPS, you can run the app with a Node.js server:

### Step 1: Connect to VPS via SSH

```bash
ssh username@your-server-ip
```

### Step 2: Install Node.js and npm

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js (using NodeSource repository)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version
npm --version
```

### Step 3: Upload Your Project

```bash
# Option A: Using Git
git clone your-repo-url
cd your-project-name

# Option B: Using SCP from local machine
# scp -r /path/to/project username@server-ip:/home/username/
```

### Step 4: Install Dependencies and Build

```bash
cd /path/to/your/project
npm install
npm run build
```

### Step 5: Serve with Nginx

Install and configure Nginx:

```bash
sudo apt install nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

Create Nginx configuration:

```bash
sudo nano /etc/nginx/sites-available/your-domain
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    root /path/to/your/project/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/your-domain /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Step 6: Set up SSL (Optional but Recommended)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

---

## Method 3: Using Hostinger's Node.js Hosting (If Available)

Some Hostinger plans support Node.js applications directly:

1. **Enable Node.js in hPanel**
   - Go to **Advanced** → **Node.js**
   - Select Node.js version (18.x or 20.x recommended)
   - Set application root to your project folder

2. **Configure Application**
   - Application startup file: `server.js` (you'll need to create this)
   - Application URL: Your domain

3. **Create a simple server.js** (if using this method):

```javascript
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

4. **Install Express** (if using server.js method):

```bash
npm install express
```

---

## Troubleshooting

### Issue: 404 errors on page refresh
**Solution**: Add `.htaccess` file (see Method 1, Step 3)

### Issue: Assets not loading (404 on CSS/JS files)
**Solution**: 
- Check that all files from `build` folder are uploaded
- Verify file paths in `index.html` are correct
- Ensure `base` in `vite.config.ts` matches your deployment path

### Issue: White screen
**Solution**:
- Check browser console for errors
- Verify `index.html` is in the root directory
- Check that all JavaScript files are loading correctly

### Issue: CORS errors
**Solution**: If making API calls, ensure your backend allows requests from your domain

---

## Quick Reference

### Build Command
```bash
npm run build
```

### Build Output Location
```
build/
```

### Files to Upload
Upload everything inside the `build/` folder to `public_html/`

### Important Files
- `index.html` - Must be in root of `public_html/`
- All assets (JS, CSS, images) should maintain their folder structure

---

## Additional Tips

1. **Performance Optimization**
   - Enable gzip compression in Hostinger hPanel
   - Use CDN for static assets (optional)
   - Optimize images before uploading

2. **Environment Variables**
   - If using environment variables, set them in Hostinger's environment settings
   - Or use `.env.production` file (but don't commit secrets!)

3. **Custom Domain**
   - Point your domain's A record to Hostinger's IP
   - Or use Hostinger's nameservers

4. **SSL Certificate**
   - Hostinger provides free SSL certificates
   - Enable it in hPanel → **SSL**

---

## Need Help?

- Hostinger Support: https://www.hostinger.com/contact
- Hostinger Knowledge Base: https://support.hostinger.com/

---

# Hosting Guide for Microsoft Azure

Your app is a **Vite + React (SPA)** build that outputs static files into the `build/` folder. The most “Azure-native” way to host this is **Azure Static Web Apps** (fast global CDN, free HTTPS, and automatic deploys).

## Method A: Azure Static Web Apps (Recommended)

### Step 1: Push the project to GitHub
Azure Static Web Apps deploys from a GitHub repo (via GitHub Actions).

### Step 2: Create the Static Web App in Azure
1. In the Azure Portal, search **Static Web Apps** → **Create**
2. Fill:
   - **Deployment source**: GitHub
   - **Repository / Branch**: your repo + main branch
3. **Build details** (important):
   - **App location**: `/Convertwise-website`
   - **Api location**: *(leave empty)*
   - **Output location**: `build`

Azure will create a GitHub Action workflow automatically.

### Step 3: SPA routing (React Router)
This repo includes `staticwebapp.config.json` so refreshing routes like `/about` won’t 404.

### Step 4: Verify
After the GitHub Action finishes, open the Static Web App URL and test:
- Home page
- Direct navigation to `/about` and a hard refresh

## Method B: Azure Storage Static Website (Quick + Cheap)
If you just want static hosting (no CI/CD), you can also use a Storage Account:
1. Create **Storage account** → open it → **Static website** → Enable
2. Set:
   - **Index document name**: `index.html`
   - **Error document path**: `index.html` (SPA fallback)
3. Upload the **contents** of your `build/` folder into the `$web` container

## Method C: Azure App Service (Only if you really want a “Node server”)
App Service can run a Node process, but for a Vite SPA this is usually overkill compared to Static Web Apps.

If you still want it:
1. Create **App Service** (Linux) with **Node 20 LTS**
2. Configure deployment from GitHub
3. Ensure your app serves the built `build/` folder (e.g., via Nginx, or a small Express server)









