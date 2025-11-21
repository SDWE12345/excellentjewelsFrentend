import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { createPopper } from '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.js';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../node_modules/swiper/modules/grid.css';
import '../Assets/css/Global/Reset.css';
import 'react-phone-input-2/lib/style.css';
import 'react-range-slider-input/dist/style.css';

// Components (lazy-loaded to optimize initial load)
const Header = lazy(() => import('../Components/Global/Header'));
const Footer = lazy(() => import('../Components/Global/Footer'));
const Home = lazy(() => import('Components/Home'));
const Login = lazy(() => import('../Components/Login'));
const Signup = lazy(() => import('../Components/Signup'));
const Diamond = lazy(() => import('Components/Diamond/Diamond'));
const DiamondDetail = lazy(() => import('Components/Diamond/DiamondDetail'));
const Compare = lazy(() => import('../Components/Diamond/Compare'));
const WatchListPage = lazy(() => import('../Components/Diamond/WatchListPage'));
const ShoppingCart = lazy(() => import('../Components/ShoppingCart'));
const Jewellery = lazy(() => import('../Components/Jewellery/Jewellery'));
const JewelleryDetail = lazy(() => import('../Components/Jewellery/JewelleryDetail'));
const ContactUs2 = lazy(() => import('../Components/ContactUs2'));
const ParcelGoods = lazy(() => import('../Components/ParcelGoods'));
const ParcelGoodsDetail = lazy(() => import('../Components/ParcelGoodsDetail'));
const TermsAndConditions = lazy(() => import('../Components/Policies/TermsAndConditions'));
const PrivacyPolicy = lazy(() => import('../Components/Policies/PrivacyPolicy'));
const ReturnAndRefundPolicy = lazy(() => import('../Components/Policies/ReturnAndRefundPolicy'));
const ShippingPolicy = lazy(() => import('../Components/Policies/ShippingPolicy'));

// Account-related components
const ChangePassword = lazy(() => import('Components/Account/ChangePassword'));
const MyOrders = lazy(() => import('Components/Account/MyOrders'));
const OrderDetail = lazy(() => import('Components/Account/OrderDetail'));
const MyAccount2 = lazy(() => import('../Components/Account/MyAccount2'));
const TrackMyOrder = lazy(() => import('../Components/Account/TrackMyOrder'));
const PurchaseHistory = lazy(() => import('../Components/Account/PurchaseHistory'));
const MyHoldList = lazy(() => import('../Components/Account/MyHoldList'));
const Faq = lazy(() => import('../Components/Faq'));

// Education-related components
const Education = lazy(() => import('Components/Education/Education'));
const EducationDetail = lazy(() => import('Components/Education/EducationDetail'));
const FourCsDiamonds = lazy(() => import('Components/Education/FourCsDiamonds'));
const LabGrownDiamonds = lazy(() => import('Components/Education/LabGrownDiamonds'));
const LabGrownDiamondsCreated = lazy(() => import('Components/Education/LabGrownDiamondsCreated'));
const ChemicalVaporDeposition = lazy(() => import('Components/Education/ChemicalVaporDeposition'));
const HighPressureHighTemperature = lazy(() => import('Components/Education/HighPressureHighTemperature'));
const CVDvsHPHT = lazy(() => import('Components/Education/CVDvsHPHT'));
const NaturalvsLabGrown = lazy(() => import('Components/Education/NaturalvsLabGrown'));
const DiamondWeightChats = lazy(() => import('Components/Education/DiamondWeightChart/DiamondWeightChats'));
const AdvantagesofLabGrown = lazy(() => import('Components/Education/AdvantagesofLabGrown'));
const ChoosingEngagementRing = lazy(() => import('Components/Education/ChoosingEngagementRing'));
const CaringForLabGrownJewelry = lazy(() => import('Components/Education/CaringForLabGrownJewelry'));

// Other components
const About = lazy(() => import('../Components/About'));
const DiamondInquiry = lazy(() => import('../Components/DiamondInquiry'));
const Events = lazy(() => import('../Components/Events'));
const HipHopJewellery = lazy(() => import('../Components/HipHopJewellery/HipHopJewellery'));
const HipHopDetail = lazy(() => import('../Components/HipHopJewellery/HipHopDetail'));

// Private Routes
import PrivateRouter from './PrivateRouter';
import Loader from 'Components/Global/Loader';
import ChooseDiamond from 'Components/CustomizeRing/ChooseDiamond';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Popper initialization
  useEffect(() => {
    const popcorn = document.querySelector('#popcorn');
    const tooltip = document.querySelector('#tooltip');
    createPopper(popcorn, tooltip, { placement: 'top' });
  }, []);

  return (
    <Suspense fallback={<Loader/>}>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/diamond" element={<Diamond />} />
        <Route path="/diamond-detail" element={<DiamondDetail />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/watchlist" element={<WatchListPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/jewellery-detail" element={<JewelleryDetail />} />
        <Route path="/setting-jewellery-wise" element={<ChooseDiamond />} />
        <Route path="/hip-hop-jewellery" element={<HipHopJewellery />} />
        <Route path="/hip-hop-jewellery-detail" element={<HipHopDetail />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/share-demand" element={<DiamondInquiry />} />
        <Route path="/events" element={<Events />} />

        {/* Education Routes */}
        <Route path="/education" element={<Education />} />
        <Route path="/education/:id" element={<EducationDetail />} />
        <Route path="/education/4cs-diamond" element={<FourCsDiamonds />} />
        <Route path="/education/what-are-lab-grown-diamonds" element={<LabGrownDiamonds />} />
        <Route path="/education/how-are-lab-grown-diamonds-created" element={<LabGrownDiamondsCreated />} />
        <Route path="/education/chemical-vapor-deposition" element={<ChemicalVaporDeposition />} />
        <Route path="/education/high-pressure-high-temperature" element={<HighPressureHighTemperature />} />
        <Route path="/education/cvd-diamond-vs-hpht-diamond" element={<CVDvsHPHT />} />
        <Route path="/education/natural-diamond-vs-lab-grown-diamond" element={<NaturalvsLabGrown />} />
        <Route path="/education/diamond-mm-to-carat-weight-chats" element={<DiamondWeightChats />} />
        <Route path="/education/advantages-of-lab-grown-diamonds" element={<AdvantagesofLabGrown />} />
        <Route path="/education/choosing-the-perfect-engagement-ring" element={<ChoosingEngagementRing />} />
        <Route path="/education/caring-for-your-lab-grown-diamond-jewelry" element={<CaringForLabGrownJewelry />} />

        {/* Private Routes */}
        <Route path="/edit-profile" element={<PrivateRouter><MyAccount2 /></PrivateRouter>} />
        <Route path="/change-password" element={<PrivateRouter><ChangePassword /></PrivateRouter>} />
        <Route path="/my-orders" element={<PrivateRouter><MyOrders /></PrivateRouter>} />
        <Route path="/order-detail" element={<PrivateRouter><OrderDetail /></PrivateRouter>} />
        <Route path="/tracker-my-order" element={<TrackMyOrder />} />
        <Route path="/purchase-history" element={<PurchaseHistory />} />
        <Route path="/my-hold-list" element={<PrivateRouter><MyHoldList /></PrivateRouter>} />

        {/* Policies */}
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/return-and-refund-policy" element={<ReturnAndRefundPolicy />} />

        {/* Other Routes */}
        <Route path="/contact-us" element={<ContactUs2 />} />
        <Route path="/parcel-goods" element={<ParcelGoods />} />
        <Route path="/parcel-goods-detail" element={<ParcelGoodsDetail />} />
        <Route path="/faqs" element={<Faq />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Index;
