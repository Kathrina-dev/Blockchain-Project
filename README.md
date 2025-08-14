# CryptoVigil

A modern, responsive Next.js frontend application for cryptocurrency transaction monitoring, wallet management, and law enforcement tracking tools.

## Contributors

- **Adarsh Singh**
- **Anshul Ojha**
- **Aman Gangwar**
- **Kathrina Elangbam**
- **Jeston Singh**

## 🚀 Features

### 🔐 User Authentication & Management
- **User Registration & Login**: Complete authentication system with email verification
- **Profile Dashboard**: Personalized user dashboard with transaction history
- **Secure Session Management**: JWT-based authentication with localStorage
- **Password Security**: Client-side validation and secure login flows

### 💰 Cryptocurrency Wallet Integration
- **Multi-Wallet Support**: Support for Bitcoin, Ethereum, Litecoin, and other cryptocurrencies
- **Real-time Balance Display**: Live wallet balance updates
- **Transaction Management**: Send and receive cryptocurrency transactions
- **Wallet Analytics**: Portfolio overview and transaction history
- **Public Wallet Lookup**: Search and view details of any public wallet address

### 🏛️ Law Enforcement Tools
- **Police Dashboard**: Specialized dashboard for law enforcement officials
- **Transaction Monitoring**: Real-time tracking of cryptocurrency transactions
- **IP Address Tracking**: Geolocation and mapping of transaction origins
- **Suspicious Activity Alerts**: Automated flagging of high-risk transactions
- **Global Transaction Database**: Access to comprehensive blockchain data
- **Evidence Export**: Generate reports for legal proceedings

### 🗺️ Geographic Tracking
- **Real-time Location Mapping**: Pinpoint transaction locations on interactive maps
- **IP Geolocation**: Convert IP addresses to geographical coordinates
- **Google Maps Integration**: Visual representation of transaction origins
- **Location Analytics**: Geographic patterns in cryptocurrency usage

### 📊 Advanced Analytics
- **Live Crypto Prices**: Real-time cryptocurrency price feeds in INR
- **Market Trends**: Price change indicators with visual arrows
- **Transaction Analytics**: Detailed transaction logs and statistics
- **Blockchain Insights**: Deep dive into blockchain data and patterns

### 🎨 User Experience
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Dark/Light Mode**: Toggle between themes for user preference
- **Loading Animations**: Smooth loading states and progress indicators
- **Interactive Modals**: Professional modal systems for forms and confirmations
- **Typewriter Effects**: Dynamic text animations for enhanced UX

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 14+**: React-based full-stack framework with App Router
- **React 18+**: Modern React with hooks and concurrent features
- **TypeScript**: Type-safe JavaScript for better development experience

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **CSS Modules**: Component-scoped styling
- **Google Fonts**: Custom typography (Ropa Sans, Roboto)
- **Framer Motion**: Smooth animations and transitions
- **React Icons**: Comprehensive icon library

### State Management & Data
- **React Hooks**: useState, useEffect for local state management
- **Local Storage**: Client-side session persistence
- **Axios**: HTTP client for API communications
- **React Simple Typewriter**: Animated text effects

### Blockchain Integration
- **Ethers.js**: Ethereum blockchain interaction
- **Web3 APIs**: Integration with various blockchain networks
- **Crypto APIs**: Real-time cryptocurrency data (Coinbase, Etherscan)

### Mapping & Location
- **Google Maps API**: Interactive mapping functionality
- **IP Geolocation APIs**: Convert IP addresses to locations
- **Custom Map Components**: Specialized tracking interfaces

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd cryptovigil/frontend/cryptovigil
   ```

2. **Install Dependencies**
   ```bash
   # Using npm
   npm install

   # Or using yarn
   yarn install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Backend API URLs
   NEXT_PUBLIC_API_URL=http://localhost:4000
   NEXT_PUBLIC_LOCAL_RPC_URL=http://localhost:8545

   # External APIs
   NEXT_PUBLIC_ETHERSCAN_API_KEY=your_etherscan_api_key
   NEXT_PUBLIC_COINBASE_API_URL=https://api.coinbase.com/v2
   NEXT_PUBLIC_IP_STACK_API_KEY=your_ipstack_api_key
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

   # Application Settings
   NEXT_PUBLIC_APP_NAME=CryptoVigil
   NEXT_PUBLIC_ENVIRONMENT=development
   ```

4. **Start Development Server**
   ```bash
   # Using npm
   npm run dev

   # Or using yarn
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality
- `npm run lint:fix` - Fix ESLint issues automatically

## 🌐 Deployment on Vercel

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from Project Directory**
   ```bash
   vercel --prod
   ```

### Method 2: GitHub Integration

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure build settings (Next.js auto-detected)
   - Add environment variables in Vercel dashboard

### Method 3: Vercel Dashboard Upload

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Upload to Vercel**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Drag and drop your project folder
   - Configure deployment settings

### Environment Variables for Production

In your Vercel dashboard, add these environment variables:

```env
NEXT_PUBLIC_API_URL=https://your-backend-url.com
NEXT_PUBLIC_LOCAL_RPC_URL=https://your-rpc-provider.com
NEXT_PUBLIC_ETHERSCAN_API_KEY=your_production_etherscan_key
NEXT_PUBLIC_IP_STACK_API_KEY=your_production_ipstack_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_production_maps_key
```

## 🔧 Configuration

### Tailwind CSS Setup

The project uses Tailwind CSS for styling. Configuration is in `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom theme extensions
    },
  },
  plugins: [],
}
```

### Next.js Configuration

Key settings in `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['api.coinbase.com', 'your-image-domains.com'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

module.exports = nextConfig
```

## 🔌 API Integration

### Backend Integration
The frontend communicates with the CryptoVigil backend API:

```javascript
// Example API call
const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
  body: JSON.stringify({ email, password }),
});
```

### External APIs Used
- **Etherscan API**: Blockchain data and wallet information
- **Coinbase API**: Real-time cryptocurrency prices
- **IPStack API**: IP geolocation services
- **Google Maps API**: Interactive mapping functionality

## 🎨 UI Components

### Key Components

#### LoginSuccess Component
Animated success screen with progress indicators:
```javascript
import LoginSuccess from '../components/LoginSuccess';
```

#### Modal Component
Reusable modal with backdrop blur and animations:
```javascript
import Modal from '../components/Modal';
```

#### Loader Component
Loading states with custom animations:
```javascript
import LoaderModal from '../components/loader';
```

### Styling Patterns

The project follows consistent styling patterns:
- **Glass morphism**: `bg-white bg-opacity-10 backdrop-blur-lg`
- **Gradients**: `bg-gradient-to-r from-purple-500 to-blue-500`
- **Hover effects**: `hover:scale-105 transition-transform`
- **Responsive design**: Mobile-first approach with Tailwind breakpoints

## 🔒 Security Features

### Authentication Flow
1. User registration with email verification
2. Secure login with JWT token storage
3. Protected routes with authentication middleware
4. Automatic token refresh and logout

### Data Protection
- No sensitive data in localStorage except JWT tokens
- API keys stored in environment variables
- HTTPS-only cookies in production
- Input validation and sanitization

## 📱 Responsive Design

The application is fully responsive with:
- **Mobile-first approach**: Tailwind's responsive utilities
- **Flexible layouts**: CSS Grid and Flexbox
- **Touch-friendly**: Optimized for mobile interactions
- **Progressive enhancement**: Works on all devices

## 🧪 Testing & Development

### Development Tips
1. **Use React Developer Tools** for debugging
2. **Enable Next.js Fast Refresh** for instant updates
3. **Use Tailwind CSS IntelliSense** extension
4. **Test on multiple devices** using browser dev tools

### Common Issues & Solutions

#### Build Issues
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

#### Style Issues
```bash
# Regenerate Tailwind CSS
npx tailwindcss build -i ./src/app/globals.css -o ./dist/output.css
```

## 📈 Performance Optimization

### Next.js Optimizations
- **Image Optimization**: Using Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Static Generation**: ISR for dynamic content
- **Bundle Analysis**: Regular bundle size monitoring

### Loading Performance
- **Lazy Loading**: Components loaded on demand
- **Progressive Loading**: Critical content first
- **Caching Strategy**: Efficient API response caching

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow React best practices
- Use TypeScript for new components
- Maintain consistent code formatting
- Write descriptive commit messages
- Test on multiple browsers

## 🆘 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
npx kill-port 3000
npm run dev
```

#### Environment Variables Not Loading
- Check `.env.local` file location
- Restart development server
- Verify variable names start with `NEXT_PUBLIC_`

#### API Connection Issues
- Verify backend server is running
- Check CORS settings
- Validate API URLs in environment variables

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔮 Future Enhancements

- [ ] WebSocket integration for real-time updates
- [ ] Progressive Web App (PWA) capabilities
- [ ] Advanced charting and analytics
- [ ] Multi-language support (i18n)
- [ ] Enhanced accessibility features
- [ ] Mobile app development with React Native
- [ ] Integration with more blockchain networks
- [ ] Advanced security features (2FA, biometric auth)

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the troubleshooting guide
- Contact the development team

---

**Built with ❤️ using Next.js and modern web technologies**
