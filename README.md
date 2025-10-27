# 🌍 **Foinda — Empowering African Creators with Borderless Finance**

Foinda is a modern financial platform built to empower **African creators, freelancers, and digital entrepreneurs**.  
It provides **borderless payment solutions**, **instant capital access**, and **smart financial tools** — helping creators transform creativity into capital.

---

## 🚀 **Core Features**

### 💳 **Foinda Wallet**
A multi-currency digital wallet that lets creators receive, hold, and send funds globally — supporting **MoMo, cards, wallets, and USSD**.

### 🌐 **Cross-Border Payments**
Real-time foreign exchange (FX) conversion across **USD, GHS, NGN, and KES**, ensuring transparent and instant settlements.

### ⚡ **Foinda Advance**
Instant creator funding — automatically unlocked based on verified earnings and transaction history.

### 🔗 **Payment Links**
Generate a universal link to accept payments across multiple methods instantly.

### 💸 **Instant Payouts**
Withdraw directly to any connected account or Foinda wallet with no delays.

---

## 💡 **Why Foinda**

✅ Borderless payments across Africa  
✅ Instant creator funding  
✅ Transparent FX conversion  
✅ Secure, compliant infrastructure  
✅ Mobile-first responsive design  
✅ Modern and accessible UI/UX

---

## 🧠 **Tech Stack**

| Category | Tools |
|-----------|--------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Framer Motion |
| **UI Components** | Radix UI + Custom ShadCN components |
| **Icons** | Lucide React |
| **Fonts** | Poppins, Comfortaa, Bodoni Moda |
| **Analytics** | Vercel Speed Insights |
| **Deployment** | Vercel |

---

## 🧩 **Project Architecture**

```
src/
├── app/
│ ├── (auth)/ # Authentication flows
│ │ ├── login/
│ │ ├── signup/
│ │ └── layout.tsx
│ ├── (client)/ # Public client-facing pages
│ │ ├── about-us/
│ │ ├── contact-us/
│ │ ├── hero/ # Hero / Landing
│ │ ├── main/ # Main product layers
│ │ │ ├── FinancialLayer/
│ │ │ ├── IdentityLayer/
│ │ │ ├── StoreGrowthLayer/
│ │ │ ├── TrustNetworkLayer/
│ │ │ ├── CopilotLayer/
│ │ │ └── CommunityImpactLayer/
│ │ └── layout.tsx
│ ├── globals.css
│ ├── layout.tsx
│ └── not-found.tsx
├── components/
│ ├── NavBar/
│ ├── Footer/
│ ├── ContactForm/
│ │ ├── ContactFormSection.tsx
│ │ ├── ContactInput.tsx
│ │ └── ContactTextArea.tsx
│ └── ui/ # Generic UI components (buttons, cards, etc.)
├── hooks/ # Custom React hooks
├── lib/ # Reusable logic and constants
│ ├── constants.ts
│ └── utils.ts
└── types/
└── common.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd foinda_web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages Overview

### Main Pages
- **Home** (`/`): Hero section with animated coins and main features
- **About Us** (`/about-us`): Company story, mission, values, and team
- **Contact Us** (`/contact-us`): Contact form, office locations, and FAQ

## 🎨 Design System

### 🎨 Color Palette
- **Primary Orange**: `#F97316` - Main brand color
- **Dark Blue**: `#1B2A41` - Text and dark sections
- **Light Blue**: `#74CBE3` - Accent color
- **Background**: Gradient from `#FFF8F4` to `#E6F7FB`

### 🅰️ Typography
- **Primary Font**: Poppins (400, 500, 600, 700)
- **Secondary Font**: Comfortaa (400, 500, 600, 700)

### Components
- Responsive design with mobile-first approach
- Smooth animations using Framer Motion
- Accessible UI components with Radix UI
- Custom button variants and form elements

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Key Dependencies

### Core
- `next`: React framework with App Router
- `react`: UI library
- `typescript`: Type safety

### Styling & UI
- `tailwindcss`: Utility-first CSS framework
- `framer-motion`: Animation library
- `@radix-ui/react-*`: Accessible UI primitives
- `lucide-react`: Icon library

### Animation
- `@lottiefiles/dotlottie-react`: Lottie animations
- `lottie-react`: JSON animations

## 🌍 Target Markets

- **Primary**: Ghana, Nigeria, Kenya
- **Secondary**: Other African countries
- **Currencies**: USD, GHS, NGN, KES
- **Payment Methods**: Mobile Money, Bank Cards, Digital Wallets, USSD

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

### Other Platforms
The app is built with Next.js and can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Support

- **Email**: support@foinda.com
- **Phone**: +233 20 123 4567
- **Office**: Accra, Ghana & Lagos, Nigeria

## 🔮 Roadmap

### Phase 1 (Current)
- ✅ Core wallet functionality
- ✅ Cross-border payments
- ✅ Creator advance system
- ✅ Responsive web platform

### Phase 2 (Upcoming)
- 📱 Mobile app (iOS/Android)
- 🔌 API for third-party integrations
- 📊 Advanced analytics dashboard
- 🤖 AI-powered financial insights

### Phase 3 (Future)
- 🌍 Expansion to more African countries
- 💳 Physical card offerings
- 🏦 Banking partnerships
- 📈 Investment products

---

Built with ❤️ for African creators by the Foinda team.