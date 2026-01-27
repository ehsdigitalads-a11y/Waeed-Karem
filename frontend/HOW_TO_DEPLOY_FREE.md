# Free Deployment Guide - Waeed Ameen Portfolio

This guide shows how to deploy your portfolio website for FREE using Vercel or Render.

---

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is the best option for React apps - it's free, fast, and easy.

### Step 1: Prepare Your Code

1. Create a GitHub account at https://github.com (if you don't have one)

2. Create a new repository:
   - Go to https://github.com/new
   - Name it: `waeed-ameen-portfolio`
   - Keep it Public or Private (your choice)
   - Click "Create repository"

3. Upload your code to GitHub:
   ```bash
   # Navigate to your frontend folder
   cd /app/frontend

   # Initialize git (if not already done)
   git init

   # Add all files
   git add .

   # Commit
   git commit -m "Initial commit - Waeed Ameen Portfolio"

   # Add remote (replace YOUR_USERNAME)
   git remote add origin https://github.com/YOUR_USERNAME/waeed-ameen-portfolio.git

   # Push to GitHub
   git push -u origin main
   ```

### Step 2: Deploy on Vercel

1. Go to https://vercel.com
2. Click "Sign Up" → Sign up with GitHub
3. Click "Add New Project"
4. Import your GitHub repository (`waeed-ameen-portfolio`)
5. Vercel will auto-detect it's a React app
6. Click "Deploy"
7. Wait 1-2 minutes for deployment

### Step 3: Get Your URL

After deployment, Vercel gives you a free URL like:
`https://waeed-ameen-portfolio.vercel.app`

### Custom Domain (Optional)

To use your own domain (e.g., `waeedameen.com`):
1. Go to your Vercel project settings
2. Click "Domains"
3. Add your domain
4. Update your domain's DNS settings as instructed

---

## Option 2: Deploy to Render (Alternative)

Render is another free hosting option.

### Step 1: Prepare Your Code

Same as Vercel - push your code to GitHub.

### Step 2: Create render.yaml

Create a file called `render.yaml` in your frontend folder:

```yaml
services:
  - type: web
    name: waeed-ameen-portfolio
    env: static
    buildCommand: yarn install && yarn build
    staticPublishPath: ./build
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
```

### Step 3: Deploy on Render

1. Go to https://render.com
2. Sign up with GitHub
3. Click "New +" → "Static Site"
4. Connect your GitHub repository
5. Configure:
   - Name: `waeed-ameen-portfolio`
   - Build Command: `yarn install && yarn build`
   - Publish Directory: `build`
6. Click "Create Static Site"

### Your Free URL

Render gives you: `https://waeed-ameen-portfolio.onrender.com`

---

## Option 3: Deploy to Netlify

Another excellent free option.

### Step 1: Push to GitHub

Same as above.

### Step 2: Deploy on Netlify

1. Go to https://netlify.com
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Configure:
   - Build command: `yarn build`
   - Publish directory: `build`
6. Click "Deploy site"

### Your Free URL

Netlify gives you: `https://random-name.netlify.app`

You can change this in Site Settings → Domain Management.

---

## Updating Your Site After Changes

After making changes to your code:

```bash
# Navigate to frontend folder
cd /app/frontend

# Add changes
git add .

# Commit with message
git commit -m "Updated content"

# Push to GitHub
git push
```

Vercel/Render/Netlify will automatically redeploy your site!

---

## Quick Comparison

| Feature | Vercel | Render | Netlify |
|---------|--------|--------|---------|
| Free Tier | ✅ Generous | ✅ Good | ✅ Good |
| Auto Deploy | ✅ Yes | ✅ Yes | ✅ Yes |
| Custom Domain | ✅ Free | ✅ Free | ✅ Free |
| SSL (HTTPS) | ✅ Free | ✅ Free | ✅ Free |
| Speed | ⚡ Fastest | 🚀 Fast | 🚀 Fast |
| Best For | React apps | General | General |

**Recommendation: Use Vercel** - It's made by the creators of Next.js and works perfectly with React.

---

## Troubleshooting

### Build Fails

If deployment fails, check:
1. All dependencies are in `package.json`
2. No syntax errors in code
3. Build command is correct: `yarn build`

### Page Not Found (404) on Refresh

Add a redirect rule for single-page apps:

**Vercel**: Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Netlify**: Create `_redirects` file in `public` folder:
```
/*    /index.html   200
```

### Images Not Loading

Make sure image URLs are:
1. Using HTTPS (not HTTP)
2. Accessible publicly
3. Not blocked by CORS

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Render Docs: https://render.com/docs
- Netlify Docs: https://docs.netlify.com
