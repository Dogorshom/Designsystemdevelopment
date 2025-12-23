import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SplashScreen } from './screens/SplashScreen';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { LoginScreen } from './screens/LoginScreen';
import { SignUpScreen } from './screens/SignUpScreen';
import { PersonalDocumentsScreen } from './screens/PersonalDocumentsScreen';
import { SignUpSuccessScreen } from './screens/SignUpSuccessScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { NewOrderNotificationScreen } from './screens/NewOrderNotificationScreen';
import { DeclineOrderScreen } from './screens/DeclineOrderScreen';
import { OrderAcceptedScreen } from './screens/OrderAcceptedScreen';
import { ActiveOrderOnTheWayScreen } from './screens/ActiveOrderOnTheWayScreen';
import { ActiveOrderArrivedScreen } from './screens/ActiveOrderArrivedScreen';
import { BeforeServicePhotosScreen } from './screens/BeforeServicePhotosScreen';
import { ServiceInProgressScreen } from './screens/ServiceInProgressScreen';
import { AfterServicePhotosScreen } from './screens/AfterServicePhotosScreen';
import { InvoiceSummaryScreen } from './screens/InvoiceSummaryScreen';
import { OrderCompletedScreen } from './screens/OrderCompletedScreen';
import { OrderDetailsScreen } from './screens/OrderDetailsScreen';
import { OrderCancelledScreen } from './screens/OrderCancelledScreen';
import { NewOrderScreen } from './screens/NewOrderScreen';
import { ActiveOrderScreen } from './screens/ActiveOrderScreen';
import { OrderStepsScreen } from './screens/OrderStepsScreen';
import { ChatScreen } from './screens/ChatScreen';
import { MyOrdersScreen } from './screens/MyOrdersScreen';
import { EarningsScreen } from './screens/EarningsScreen';
import { SupportScreen } from './screens/SupportScreen';
import { EditProfileScreen } from './screens/EditProfileScreen';
import { ManageServicesScreen } from './screens/ManageServicesScreen';
import { ChangeLanguageScreen } from './screens/ChangeLanguageScreen';
import { AboutUsScreen } from './screens/AboutUsScreen';
import { ContactUsScreen } from './screens/ContactUsScreen';
import { SupportTicketsScreen } from './screens/SupportTicketsScreen';
import { EarningsDetailScreen } from './screens/EarningsDetailScreen';
import { WalletScreen } from './screens/WalletScreen';
import { AllBanksScreen } from './screens/AllBanksScreen';
import { AddBankScreen } from './screens/AddBankScreen';
import './styles/globals.css';

export default function App() {
  return (
    <Router>
      <div className="max-w-md mx-auto bg-white shadow-2xl min-h-screen">
        <Routes>
          <Route path="/" element={<Navigate to="/splash" replace />} />
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/onboarding" element={<OnboardingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/personal-documents" element={<PersonalDocumentsScreen />} />
          <Route path="/signup-success" element={<SignUpSuccessScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          
          {/* Roadside Service Flow */}
          <Route path="/new-order-notification" element={<NewOrderNotificationScreen />} />
          <Route path="/decline-order" element={<DeclineOrderScreen />} />
          <Route path="/order-accepted" element={<OrderAcceptedScreen />} />
          <Route path="/active-order-ontheway" element={<ActiveOrderOnTheWayScreen />} />
          <Route path="/active-order-arrived" element={<ActiveOrderArrivedScreen />} />
          <Route path="/before-service-photos" element={<BeforeServicePhotosScreen />} />
          <Route path="/service-in-progress" element={<ServiceInProgressScreen />} />
          <Route path="/after-service-photos" element={<AfterServicePhotosScreen />} />
          <Route path="/invoice-summary" element={<InvoiceSummaryScreen />} />
          <Route path="/order-completed" element={<OrderCompletedScreen />} />
          <Route path="/order-details" element={<OrderDetailsScreen />} />
          <Route path="/order-cancelled" element={<OrderCancelledScreen />} />
          
          {/* Legacy routes (kept for compatibility) */}
          <Route path="/new-order" element={<NewOrderScreen />} />
          <Route path="/active-order" element={<ActiveOrderScreen />} />
          <Route path="/order-steps" element={<OrderStepsScreen />} />
          
          <Route path="/chat" element={<ChatScreen />} />
          <Route path="/orders" element={<MyOrdersScreen />} />
          <Route path="/earnings" element={<EarningsScreen />} />
          <Route path="/support" element={<SupportScreen />} />
          
          {/* Drawer Menu Routes */}
          <Route path="/edit-profile" element={<EditProfileScreen />} />
          <Route path="/manage-services" element={<ManageServicesScreen />} />
          <Route path="/change-language" element={<ChangeLanguageScreen />} />
          <Route path="/about" element={<AboutUsScreen />} />
          <Route path="/contact" element={<ContactUsScreen />} />
          <Route path="/support-tickets" element={<SupportTicketsScreen />} />
          <Route path="/earnings-detail" element={<EarningsDetailScreen />} />
          <Route path="/wallet" element={<WalletScreen />} />
          <Route path="/all-banks" element={<AllBanksScreen />} />
          <Route path="/add-bank" element={<AddBankScreen />} />
          <Route path="/edit-bank" element={<AddBankScreen />} />
        </Routes>
      </div>
    </Router>
  );
}