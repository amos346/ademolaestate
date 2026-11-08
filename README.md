# Ademola Real Estate | Modern Luxury Real Estate Platform in Nigeria

Ademola Real Estate is a world-class, modern, minimalist luxury real estate platform showcasing high-end properties across prime Nigerian locations including Lagos (Ikoyi, Eko Atlantic, Lekki Phase 1, Victoria Island), Abuja (Maitama, Asokoro), and Port Harcourt (GRA).

---

## 🌟 Key Features

- **Modern Minimalist UI & Animations**: Built with React, Tailwind CSS, and Framer Motion / Motion.
- **Curated Luxury Listings**: Detailed specifications, high-res photo galleries, verified Nigerian titles (*Governor's Consent, C of O, Gazette*), and Naira (`₦`) pricing.
- **Interactive WhatsApp Widget**: Floating bottom-right WhatsApp concierge with instant preset messages for inquiries and bookings.
- **Ademola AI Property Matchmaker**: AI-powered advisory and property recommendation tool powered by the Google Gemini API.
- **Mortgage Calculator**: Interactive financial planning tool to calculate monthly repayments in Naira based on purchase price, down payment, interest rate, and loan tenure.
- **Saved Properties Wishlist**: Save and manage favorite properties in a slide-out drawer.
- **VIP Inspection Booking**: Seamless scheduling for in-person or virtual property tours.

---

## 🛠️ Technology Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS, Lucide React, Motion
- **Backend / API**: Node.js, Express, `@google/genai` (Gemini API integration)
- **Deployment**: Vercel (SPA routing configured via `vercel.json`)

---

## 🚀 Installation & Local Development

1. **Clone or extract the project ZIP**:
   ```bash
   cd ademola-real-estate
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   Add your `GEMINI_API_KEY` to `.env`.

4. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

---

## 📦 Production Build

To build the project for production:

```bash
npm run build
```

This generates the production output inside the `dist/` folder.

---

## 🌐 Deploying to Vercel

1. Push your complete project repository to **GitHub**.
2. Log in to [Vercel](https://vercel.com) and click **Add New > Project**.
3. Import your GitHub repository.
4. Verify Vercel project settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Add your Environment Variable:
   - `GEMINI_API_KEY`: Your Google Gemini API key.
6. Click **Deploy**!
