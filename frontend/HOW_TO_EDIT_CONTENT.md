# How to Edit Content - Waeed Ameen Portfolio Website

This guide explains how to edit different parts of your website. All content is centralized in easy-to-edit files.

---

## 📁 Main Content File

**File Location:** `/frontend/src/data/mock.js`

This single file contains ALL editable content for the entire website.

---

## 1. Basic Site Information

```javascript
// Located at the top of mock.js
export const siteConfig = {
  name: "Waeed Ameen",           // Your name
  title: "F&B Operations...",   // Your title
  phone: "+965 94745424",       // Your phone number
  email: "Waeed257@gmail.com",  // Your email (for resume only)
  location: "Kuwait",           // Your location
  whatsappLink: "https://wa.me/96594745424",  // WhatsApp link (remove + and spaces)
};
```

### To change phone number:
1. Update `phone` field
2. Update `whatsappLink` - format: `https://wa.me/COUNTRYCODE+NUMBER` (no + or spaces)

---

## 2. Services

Look for `export const services = [...]` in mock.js

Each service has:
```javascript
{
  id: 1,
  titleEn: "Brand & Concept Development",    // English title
  titleAr: "تطوير العلامة التجارية",          // Arabic title
  descriptionEn: "Transform initial...",     // English description
  descriptionAr: "تحويل الأفكار...",          // Arabic description
  icon: "Lightbulb",                         // Icon name (from lucide-react)
  features: [
    { en: "New Concept Ideation", ar: "ابتكار مفاهيم جديدة" },
    // Add more features...
  ],
}
```

### Available Icons:
`Lightbulb`, `Calculator`, `Truck`, `ChefHat`, `Camera`, `Megaphone`

---

## 3. Consulting Packages

Look for `export const packages = [...]`

```javascript
{
  id: 1,
  titleEn: "Full Brand Build",
  titleAr: "بناء العلامة التجارية الكاملة",
  subtitleEn: "For startups & new brands",
  subtitleAr: "للشركات الناشئة...",
  duration: "4-6 Weeks",
  durationAr: "4-6 أسابيع",
  color: "#1F4E8D",            // Package card color
  features: [...],
  outcomeEn: "A complete...",
  outcomeAr: "علامة تجارية..."
}
```

---

## 4. Restaurants/Projects

Look for `export const restaurants = [...]`

```javascript
{
  id: 1,
  nameEn: "Smoky Bites",
  nameAr: "سموكي بايتس",
  categoryEn: "Burger & Fast Food",
  categoryAr: "برجر ووجبات سريعة",
  descriptionEn: "Premium smash burger...",
  descriptionAr: "مفهوم برجر سماش ممتاز...",
  image: "https://images.unsplash.com/photo-xxx",  // Image URL
  stats: { 
    ordersPerDay: "150+", 
    foodCost: "24%", 
    rating: "4.8" 
  },
}
```

### To add a new restaurant:
1. Copy an existing restaurant object
2. Change the `id` to a unique number
3. Update all fields
4. Add to the array

---

## 5. Blog Posts

Look for `export const blogPosts = [...]`

```javascript
{
  id: 1,
  slug: "cloud-kitchen-setup-guide-kuwait",  // URL-friendly name
  titleEn: "The Complete Guide to...",
  titleAr: "الدليل الكامل لإنشاء...",
  excerptEn: "Learn the essential...",       // Short preview
  excerptAr: "تعرف على الخطوات...",
  contentEn: `<h2>Introduction</h2>...`,     // HTML content
  contentAr: `<h2>مقدمة</h2>...`,
  image: "https://images.unsplash.com/...",
  date: "2024-12-15",                        // YYYY-MM-DD format
  categoryEn: "Cloud Kitchens",
  categoryAr: "المطابخ السحابية",
  readTimeEn: "5 min read",
  readTimeAr: "5 دقائق قراءة",
}
```

### To add a new blog post:
1. Copy an existing post object
2. Change `id` and `slug` (slug must be unique, URL-friendly)
3. Update all content
4. Add to the array

---

## 6. Testimonials

Look for `export const testimonials = [...]`

```javascript
{
  id: 1,
  quoteEn: "Waeed transformed our kitchen...",
  quoteAr: "حوّل وعد مطبخنا...",
  authorEn: "Fast Food Brand, Kuwait",
  authorAr: "علامة وجبات سريعة، الكويت",
}
```

---

## 7. Resume Data

Look for `export const resumeData = {...}`

```javascript
export const resumeData = {
  name: "Waeed Ameen",
  title: "F&B Operations...",
  tagline: "Cloud Kitchen Specialist...",
  contact: {
    phone: "+965 94745424",
    email: "Waeed257@gmail.com",
    location: "Kuwait",
  },
  summary: "Experienced F&B Operations...",
  expertise: [
    "Cloud Kitchen Setup & Operations",
    // Add more skills...
  ],
  achievements: [
    "Reduced food costs from 38% to 26%...",
    // Add more achievements...
  ],
  services: [
    "Full Brand Build (4-6 weeks)",
    // Add more services...
  ],
};
```

---

## 8. Translations (Navigation & UI Text)

Look for `export const translations = {...}`

This contains all UI text in both English (`en`) and Arabic (`ar`).

```javascript
export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      // etc...
    },
    // other sections...
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      // etc...
    },
    // other sections...
  },
};
```

---

## 9. Images

### Using Unsplash Images:
Format: `https://images.unsplash.com/photo-XXXXX?w=600`

The `?w=600` sets the width. Change as needed:
- Thumbnails: `?w=400`
- Cards: `?w=600`
- Full width: `?w=1200`

### Using Your Own Images:
1. Upload images to a service like Cloudinary, Imgur, or your own server
2. Replace the URL in the respective field

---

## Quick Edit Checklist

| What to Edit | File Location | Section |
|--------------|---------------|---------|
| Phone Number | `mock.js` | `siteConfig` |
| Services | `mock.js` | `services` |
| Packages | `mock.js` | `packages` |
| Projects/Restaurants | `mock.js` | `restaurants` |
| Blog Posts | `mock.js` | `blogPosts` |
| Testimonials | `mock.js` | `testimonials` |
| Resume | `mock.js` | `resumeData` |
| Navigation Text | `mock.js` | `translations` |
| Colors | `mock.js` | `packages[].color` |

---

## Tips

1. **Always keep backups** before making changes
2. **Test after each change** by refreshing the browser
3. **Arabic text**: Use a proper Arabic keyboard or copy-paste
4. **Images**: Use high-quality images for best results
5. **IDs must be unique** when adding new items to arrays

---

## Colors Used

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Blue | `#1F4E8D` | Headers, buttons, accents |
| WhatsApp Green | `#25D366` | WhatsApp buttons |
| Package Green | `#2E6B4D` | Operations Fix package |
| Package Brown | `#8B5A2B` | Delivery Growth package |
