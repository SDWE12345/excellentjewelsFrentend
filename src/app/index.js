import React, { Suspense, memo, useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Loader from '../Components/Global/Loader';
import {
  getLoginInfo,
  setIsLogin,
} from '../Components/Redux/reducers/auth.slice';
import { getSessionData } from '../Helper/AuthTokenHelper';
import { checkIsEmpty } from '../Helper/CommonHelper';
import Routes from './../routes/index';

// Set Axios base URL globally
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// SEO Configuration - Centralized for better maintainability
const SEO_CONFIG = {
  default: {
    title: 'Excellent Jewels | Premier Natural and Lab-Grown Diamonds',
    description: 'Explore Excellent Jewels for the finest in natural and lab-grown diamonds. Experience unmatched luxury with our exclusive collections tailored for every occasion.',
    keywords: 'diamonds, lab-grown diamonds, natural diamonds, jewelry, luxury diamonds, engagement rings',
    ogType: 'website',
    twitterCard: 'summary_large_image',
  },
  '/diamond-detail': {
    title: 'Diamond Details | Excellent Jewels',
    description: 'Explore the finest diamonds available at Excellent Jewels. View detailed specifications, certifications, and high-quality images of our premium diamond collection.',
    keywords: 'diamond details, diamond specifications, certified diamonds, diamond quality',
    ogType: 'product',
  },
  '/education': {
    title: 'Diamond Education | Learn More | Excellent Jewels',
    description: 'Learn everything about diamonds with Excellent Jewels educational content. Understand the 4Cs, diamond grading, and make informed purchasing decisions.',
    keywords: 'diamond education, 4Cs, diamond grading, diamond guide, diamond knowledge',
    ogType: 'article',
  },
  '/about': {
    title: 'About Us | Excellent Jewels',
    description: 'Discover the story behind Excellent Jewels. Learn about our commitment to quality, craftsmanship, and ethical sourcing of diamonds.',
    keywords: 'about excellent jewels, diamond company, ethical diamonds',
  },
  '/contact': {
    title: 'Contact Us | Excellent Jewels',
    description: 'Get in touch with Excellent Jewels. Our diamond experts are ready to assist you with your jewelry needs.',
    keywords: 'contact, customer service, diamond experts',
  },
};

// Site-wide constants
const SITE_INFO = {
  siteName: 'Excellent Jewels',
  siteUrl: process.env.REACT_APP_SITE_URL || 'http://excellentjewels.com',
  logo: `${process.env.REACT_APP_SITE_URL}/logo.png`,
  twitterHandle: '@ExcellentJewels',
  locale: 'en_US',
};

// Separate component that uses useLocation (must be inside BrowserRouter)
const AppContent = memo(() => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Fetch session data and set login state
  useEffect(() => {
    const sessionData = getSessionData();
    if (!checkIsEmpty(sessionData)) {
      dispatch(setIsLogin(true));
      dispatch(getLoginInfo(sessionData));
    }
    setLoading(false);
  }, [dispatch]);

  // Update page view on route change for analytics
  useEffect(() => {
    // Track page views with your analytics service
    if (window.gtag) {
      window.gtag('config', "G-XMCPZEMSKL", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  // Memoized SEO data based on current route
  const seoData = useMemo(() => {
    const pathname = location.pathname;
    
    // Find matching route in SEO_CONFIG
    const matchedRoute = Object.keys(SEO_CONFIG).find(route => {
      if (route === 'default') return false;
      return pathname.includes(route);
    });

    const routeSEO = matchedRoute ? SEO_CONFIG[matchedRoute] : SEO_CONFIG.default;
    
    // Merge with defaults
    return {
      ...SEO_CONFIG.default,
      ...routeSEO,
    };
  }, [location.pathname]);

  // Construct canonical URL
  const canonicalUrl = `${SITE_INFO.siteUrl}${location.pathname}`;

  return (
    <Suspense fallback={<Loader />}>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="title" content={seoData.title} />
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={seoData.ogType} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={SITE_INFO.logo} />
        <meta property="og:site_name" content={SITE_INFO.siteName} />
        <meta property="og:locale" content={SITE_INFO.locale} />
        
        {/* Twitter */}
        <meta name="twitter:card" content={seoData.twitterCard} />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={SITE_INFO.logo} />
        <meta name="twitter:site" content={SITE_INFO.twitterHandle} />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content={SITE_INFO.siteName} />
        
        {/* Theme and Mobile */}
        <meta name="theme-color" content="#E6E6FA" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": SITE_INFO.siteName,
            "url": SITE_INFO.siteUrl,
            "logo": SITE_INFO.logo,
            "description": SEO_CONFIG.default.description,
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "availableLanguage": ["English"]
            },
            "sameAs": [
              "https://www.facebook.com/excellentjewels",
              "https://www.instagram.com/excellentjewels",
              "https://twitter.com/excellentjewels"
            ]
          })}
        </script>
      </Helmet>

      {loading ? <Loader /> : <Routes />}
    </Suspense>
  );
});

AppContent.displayName = 'AppContent';

// Main App component with BrowserRouter wrapper
const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;