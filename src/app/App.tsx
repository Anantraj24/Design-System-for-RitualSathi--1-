import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { SplashScreen } from './screens/SplashScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { CreateAccountScreen } from './screens/CreateAccountScreen';
import { SelectCeremonyScreen } from './screens/SelectCeremonyScreen';
import { SetBudgetScreen } from './screens/SetBudgetScreen';
import { ChooseCityScreen } from './screens/ChooseCityScreen';
import { OnboardingCompleteScreen } from './screens/OnboardingCompleteScreen';
import { HomeScreen } from './screens/HomeScreen';
import { CategoryListingScreen } from './screens/CategoryListingScreen';
import { NicheListingScreen } from './screens/NicheListingScreen';
import { VendorDetailScreen } from './screens/VendorDetailScreen';
import { BookingFormScreen, type BookingData } from './screens/BookingFormScreen';
import { BookingSummaryScreen } from './screens/BookingSummaryScreen';
import { UpiPaymentScreen } from './screens/UpiPaymentScreen';
import { PaymentSuccessScreen } from './screens/PaymentSuccessScreen';
import { PaymentSuccessSimpleScreen } from './screens/PaymentSuccessSimpleScreen';
import { BookingConfirmedScreen } from './screens/BookingConfirmedScreen';
import { MyBookingsScreen } from './screens/MyBookingsScreen';
import { BookingTrackingScreen } from './screens/BookingTrackingScreen';
import { BudgetPlannerScreen } from './screens/BudgetPlannerScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { CommunityScreen } from './screens/CommunityScreen';
import { ChatbotScreen } from './screens/ChatbotScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { Vendor } from '../data/vendors';

type Screen =
  | 'splash'
  | 'welcome'
  | 'login'
  | 'create-account'
  | 'select-ceremony'
  | 'set-budget'
  | 'choose-city'
  | 'onboarding-complete'
  | 'home'
  | 'category-listing'
  | 'niche-listing'
  | 'vendor-detail'
  | 'booking-form'
  | 'booking-summary'
  | 'upi-payment'
  | 'payment-success'
  | 'payment-success-simple'
  | 'booking-confirmed'
  | 'my-bookings'
  | 'booking-tracking'
  | 'budget-planner'
  | 'profile'
  | 'community'
  | 'chatbot'
  | 'notifications';

interface OnboardingData {
  ceremony: string;
  budget: number;
  city: string;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    ceremony: '',
    budget: 100000,
    city: ''
  });
  const [bookingData, setBookingData] = useState<BookingData>({
    ceremonyType: 'wedding',
    vendorName: 'Shri Santosh Catering Service',
    date: '2026-05-25',
    timeSlot: '11:00 AM',
    guests: '150',
    address: 'Tollygunge, Kolkata',
    budget: 45000,
    specialRequirements: '',
    selectedPackage: 'Standard Package',
    packagePrice: 45000,
    advancePayment: 5000,
  });

  // Navigation state
  const [selectedCategory, setSelectedCategory] = useState<{ id: string; name: string } | null>(null);
  const [selectedNiche, setSelectedNiche] = useState<string | null>(null);
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);
  const [previousScreen, setPreviousScreen] = useState<Screen>('home');

  // Check authentication on mount
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true' && currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('home');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Auto-transition from splash to welcome
  useEffect(() => {
    if (currentScreen === 'splash') {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      if (isAuthenticated !== 'true') {
        const timer = setTimeout(() => {
          setCurrentScreen('welcome');
        }, 2000);
        return () => clearTimeout(timer);
      }
    }
  }, [currentScreen]);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen />;
      case 'welcome':
        return (
          <WelcomeScreen
            onGetStarted={() => setCurrentScreen('select-ceremony')}
            onLogin={() => setCurrentScreen('login')}
          />
        );
      case 'login':
        return (
          <LoginScreen
            onBack={() => setCurrentScreen('welcome')}
            onCreateAccount={() => setCurrentScreen('create-account')}
            onLogin={() => setCurrentScreen('home')}
          />
        );
      case 'create-account':
        return (
          <CreateAccountScreen
            onBack={() => setCurrentScreen('welcome')}
            onLogin={() => setCurrentScreen('login')}
          />
        );
      case 'select-ceremony':
        return (
          <SelectCeremonyScreen
            onBack={() => setCurrentScreen('welcome')}
            onContinue={(ceremony) => {
              setOnboardingData({ ...onboardingData, ceremony });
              setCurrentScreen('set-budget');
            }}
          />
        );
      case 'set-budget':
        return (
          <SetBudgetScreen
            onBack={() => setCurrentScreen('select-ceremony')}
            onContinue={(budget) => {
              setOnboardingData({ ...onboardingData, budget });
              setCurrentScreen('choose-city');
            }}
          />
        );
      case 'choose-city':
        return (
          <ChooseCityScreen
            onBack={() => setCurrentScreen('set-budget')}
            onDone={(city) => {
              setOnboardingData({ ...onboardingData, city });
              setCurrentScreen('onboarding-complete');
            }}
          />
        );
      case 'onboarding-complete':
        return (
          <OnboardingCompleteScreen
            ceremony={onboardingData.ceremony}
            budget={onboardingData.budget}
            city={onboardingData.city}
            onGetStarted={() => {
              console.log('Onboarding complete:', onboardingData);
              setCurrentScreen('home');
            }}
          />
        );
      case 'home':
        return (
          <HomeScreen
            onCategoryClick={(categoryId, categoryName) => {
              setSelectedCategory({ id: categoryId, name: categoryName });
              setCurrentScreen('category-listing');
            }}
            onVendorClick={(vendor) => {
              setSelectedVendor(vendor);
              setPreviousScreen('home');
              setCurrentScreen('vendor-detail');
            }}
            onNavigate={(tab) => {
              if (tab === 'bookings') {
                setCurrentScreen('my-bookings');
              } else if (tab === 'budget') {
                setCurrentScreen('budget-planner');
              } else if (tab === 'profile') {
                setCurrentScreen('profile');
              } else if (tab === 'community') {
                setCurrentScreen('community');
              }
            }}
            onOpenChatbot={() => {
              setPreviousScreen('home');
              setCurrentScreen('chatbot');
            }}
            onOpenNotifications={() => {
              setPreviousScreen('home');
              setCurrentScreen('notifications');
            }}
          />
        );
      case 'category-listing':
        return selectedCategory ? (
          <CategoryListingScreen
            categoryId={selectedCategory.id}
            categoryName={selectedCategory.name}
            onBack={() => setCurrentScreen('home')}
            onSelectNiche={(niche) => {
              setSelectedNiche(niche);
              setCurrentScreen('niche-listing');
            }}
          />
        ) : null;
      case 'niche-listing':
        return selectedCategory && selectedNiche ? (
          <NicheListingScreen
            categoryId={selectedCategory.id}
            niche={selectedNiche}
            onBack={() => setCurrentScreen('category-listing')}
            onViewVendor={(vendor) => {
              setSelectedVendor(vendor);
              setPreviousScreen('niche-listing');
              setCurrentScreen('vendor-detail');
            }}
          />
        ) : null;
      case 'vendor-detail':
        return selectedVendor ? (
          <VendorDetailScreen
            vendor={selectedVendor}
            onBack={() => setCurrentScreen(previousScreen)}
            onBookNow={() => {
              setBookingData({
                ...bookingData,
                vendorName: selectedVendor.name,
                budget: selectedVendor.packages[1]?.price || selectedVendor.startingPrice,
                selectedPackage: selectedVendor.packages[1]?.name || 'Standard Package',
                packagePrice: selectedVendor.packages[1]?.price || selectedVendor.startingPrice,
                advancePayment: Math.floor((selectedVendor.packages[1]?.price || selectedVendor.startingPrice) * 0.1),
              });
              setCurrentScreen('booking-form');
            }}
          />
        ) : null;
      case 'booking-form':
        return (
          <BookingFormScreen
            onBack={() => setCurrentScreen('vendor-detail')}
            onContinue={(data) => {
              setBookingData(data);
              setCurrentScreen('booking-summary');
            }}
          />
        );
      case 'booking-summary':
        return (
          <BookingSummaryScreen
            onBack={() => setCurrentScreen('booking-form')}
            onEdit={() => setCurrentScreen('booking-form')}
            onProceedToPayment={() => {
              console.log('Proceeding to payment:', bookingData);
              setCurrentScreen('upi-payment');
            }}
            bookingData={bookingData}
          />
        );
      case 'upi-payment':
        return (
          <UpiPaymentScreen
            onBack={() => setCurrentScreen('booking-summary')}
            onPaymentVerified={() => setCurrentScreen('payment-success-simple')}
          />
        );
      case 'payment-success':
        return (
          <PaymentSuccessScreen
            onViewBooking={() => setCurrentScreen('my-bookings')}
            onGoHome={() => setCurrentScreen('home')}
          />
        );
      case 'payment-success-simple':
        return (
          <PaymentSuccessSimpleScreen
            onContinue={() => setCurrentScreen('booking-confirmed')}
          />
        );
      case 'booking-confirmed':
        return (
          <BookingConfirmedScreen
            onViewStatus={() => setCurrentScreen('booking-tracking')}
            onGoHome={() => setCurrentScreen('home')}
          />
        );
      case 'my-bookings':
        return (
          <MyBookingsScreen
            onViewStatus={(bookingId) => {
              console.log('View status for:', bookingId);
              setCurrentScreen('booking-tracking');
            }}
            onNavigate={(tab) => {
              if (tab === 'home') {
                setCurrentScreen('home');
              } else if (tab === 'budget') {
                setCurrentScreen('budget-planner');
              } else if (tab === 'profile') {
                setCurrentScreen('profile');
              } else if (tab === 'community') {
                setCurrentScreen('community');
              }
            }}
          />
        );
      case 'booking-tracking':
        return (
          <BookingTrackingScreen
            onBack={() => setCurrentScreen('my-bookings')}
          />
        );
      case 'budget-planner':
        return (
          <BudgetPlannerScreen
            onNavigate={(tab) => {
              if (tab === 'home') {
                setCurrentScreen('home');
              } else if (tab === 'bookings') {
                setCurrentScreen('my-bookings');
              } else if (tab === 'profile') {
                setCurrentScreen('profile');
              } else if (tab === 'community') {
                setCurrentScreen('community');
              }
            }}
          />
        );
      case 'profile':
        return (
          <ProfileScreen
            onNavigate={(tab) => {
              if (tab === 'home') {
                setCurrentScreen('home');
              } else if (tab === 'budget') {
                setCurrentScreen('budget-planner');
              } else if (tab === 'bookings') {
                setCurrentScreen('my-bookings');
              } else if (tab === 'community') {
                setCurrentScreen('community');
              }
            }}
            onOpenChatbot={() => {
              setPreviousScreen('profile');
              setCurrentScreen('chatbot');
            }}
          />
        );
      case 'chatbot':
        return (
          <ChatbotScreen
            onBack={() => setCurrentScreen(previousScreen)}
            userContext={{
              selectedCeremony: onboardingData.ceremony,
              city: onboardingData.city,
              budget: onboardingData.budget,
            }}
          />
        );
      case 'notifications':
        return (
          <NotificationsScreen
            onBack={() => setCurrentScreen(previousScreen)}
          />
        );
      case 'community':
        return (
          <CommunityScreen
            onNavigate={(tab) => {
              if (tab === 'home') {
                setCurrentScreen('home');
              } else if (tab === 'budget') {
                setCurrentScreen('budget-planner');
              } else if (tab === 'bookings') {
                setCurrentScreen('my-bookings');
              } else if (tab === 'profile') {
                setCurrentScreen('profile');
              }
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <ThemeProvider>
      <div className="w-screen h-screen bg-[#F5F4F0] dark:bg-[#090D16] flex items-center justify-center overflow-hidden transition-colors duration-300">
        <div className="w-full h-full sm:max-w-[430px] sm:h-[92%] sm:rounded-[24px] sm:shadow-2xl bg-[#FFFDF8] dark:bg-[#0F172A] relative overflow-hidden device-content-container flex flex-col transition-all">
          {renderScreen()}
        </div>
      </div>
    </ThemeProvider>
  );
}