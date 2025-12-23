# Fazaa 2.0 - Roadside Assistance Provider App

A complete roadside assistance provider app prototype built with React, TypeScript, and Tailwind CSS, following the Fazaa 2.0 design system.

## 🎨 Design System

The app follows a premium, Uber/Careem-inspired design with:
- **Speed First Philosophy**: Minimal cognitive load, fast interactions
- **Color Palette**: Dark primary (#0A1628), Bright secondary (#2D7FF9), Success green (#00D4AA)
- **Typography**: Inter font with 8px grid spacing system
- **Components**: 56px buttons, 24px radius cards, gradient backgrounds

## 🚗 App Type: Roadside Assistance Services

Fazaa connects **roadside service providers** with stranded drivers who need immediate help. Services include:
- 🔋 Battery Replacement
- 🛞 Tire Change & Repair
- ⚡ Jump Start
- ⛽ Fuel Delivery
- 🔑 Lockout Service
- 🚛 Towing & Recovery

## 📱 Complete Screen Flow (37 Screens)

### Authentication & Onboarding (6 screens)
1. **Splash Screen** - Animated loading with Fazaa branding
2. **Onboarding** - 3 slides introducing roadside services
3. **Login** - Phone & password authentication
4. **Sign Up** - Complete registration form:
   - Phone (+966 prefix), Username, Email
   - Nationality/Country dropdown
   - Password with visibility toggle
   - ID Number (10 digits), License Number & Expiry
   - Terms & Conditions checkbox
5. **Personal Documents** - Upload verification:
   - Toggle between National ID / Iqama
   - Profile photo, ID image, License image
6. **Sign Up Success** - Animated success confirmation

### Main Dashboard (1 screen)
7. **Dashboard** - Provider hub with:
   - Online/Offline toggle
   - Today's earnings & services completed
   - Quick actions (New Requests, Navigate)
   - Active service card
   - Enhanced drawer menu with all navigation

### Roadside Service Order Flow (13 screens)

#### New Order Request
8. **New Order Notification** - 45-second countdown with:
   - Map background with location markers
   - Circular animated timer with progress ring
   - Service details (Battery Replacement, etc.)
   - Customer location & distance
   - Accept/Decline actions

9. **Decline Order** - Confirmation screen for declining

10. **Order Accepted** - Success animation with auto-redirect

#### On The Way to Customer
11. **Active Order - On The Way** - Navigation phase:
   - Live map view with markers
   - Draggable bottom sheet (expandable/collapsible)
   - Order timeline (Accepted → On Way → Arrived → Complete)
   - Customer info card with vehicle details
   - Customer notes/special instructions
   - Quick actions (Call, Chat, Navigate)
   - "I'VE ARRIVED" button

#### Arrived at Location
12. **Active Order - Arrived** - Arrival confirmation:
   - Zoomed map showing proximity
   - "Customer Notified" success message
   - Waiting time tracker
   - Customer & vehicle information
   - "START SERVICE" button

#### Service Execution
13. **Before Service Photos** - Photo documentation:
   - Instructions for photo requirements
   - Photo grid (minimum 2, maximum 4 photos)
   - Add photo slots with camera icon
   - Photo counter with validation
   - Remove photo option

14. **Service In Progress** - Active service tracking:
   - Live duration timer (HH:MM:SS format)
   - Pause/Resume timer controls
   - Service details card
   - Customer contact actions
   - Service notes textarea
   - "COMPLETE SERVICE" button

15. **After Service Photos** - Completion documentation:
   - Similar to before photos screen
   - Photo validation (minimum 2 required)
   - Continue to invoice option

#### Payment & Completion
16. **Invoice Summary** - Payment collection:
   - Order details with duration
   - Service breakdown line items
   - Total amount calculation
   - Payment method selection (Cash, Card, Wallet)
   - Payment confirmation checkbox
   - "COMPLETE & CLOSE ORDER" button

17. **Order Completed** - Success celebration:
   - Animated success screen
   - Earnings summary
   - Customer rating option
   - Back to dashboard / View orders

#### Additional Order Screens
18. **Order Details** - Full order information view
19. **Order Cancelled** - Cancellation confirmation
20. **Chat** - Customer communication:
    - Text message bubbles
    - Voice messages with waveform visualization
    - Play/Pause controls for voice playback
    - Recording animation
    - Attachment support

### Order Management (1 screen)
21. **My Orders** - Order history:
    - Search functionality
    - Filter chips (All, Completed, Cancelled)
    - Orders grouped by date
    - Service type, customer, location
    - Earnings per order

### Earnings & Wallet (3 screens)
22. **Earnings Overview** - Weekly summary:
    - Current balance with trend
    - Weekly/Monthly totals
    - Weekly chart visualization
    - Quick stats (Orders, Avg/Order, Hours/Day)
    - Recent transactions list

23. **Earnings Detail** - Monthly breakdown:
    - Online hours, trips, total earnings
    - Services fee, platform fee, tax breakdown
    - Create ticket button

24. **Wallet** - Balance management:
    - Available balance card
    - Add Money & Withdraw actions
    - Transaction history with credit/debit indicators

### Banking (2 screens)
25. **All Banks** - Saved accounts:
    - Bank accounts list with masked IBAN
    - Edit/Delete actions per account
    - Add new bank FAB

26. **Add/Edit Bank** - Account setup:
    - Bank selection dropdown
    - Account holder name
    - IBAN number input

### Profile & Settings (5 screens)
27. **Edit Profile** - Provider information:
    - Profile photo with camera overlay
    - Personal details (Phone, Name, Email)
    - ID & License information
    - Document images section

28. **Manage Services** - Service offerings:
    - Toggle switches for each service:
      - Battery Replacement, Tire Change, Jump Start
      - Fuel Delivery, Lockout, Towing, Flat Tire Repair
    - Organized by category (Roadside, Emergency, Recovery)

29. **Change Language** - Locale selection:
    - Arabic, English, Urdu, Bengali
    - Flag icons with radio buttons

30. **About Us** - Company information:
    - Service offerings list
    - Company values
    - Contact information

31. **Contact Us** - Support channels:
    - WhatsApp, Instagram, TikTok links
    - Phone & Email contacts
    - Business hours

### Support (2 screens)
32. **Support Screen** - Help center:
    - Emergency alert card
    - Quick help buttons
    - Support tickets list
    - Contact information

33. **Support Tickets** - Ticket management:
    - Tickets with status badges (Open, In Progress, Resolved)
    - Create new ticket FAB
    - Ticket details view

### Legacy Screens (3 screens - kept for backward compatibility)
34-36. **Legacy delivery screens** (New Order, Active Order, Order Steps)

## 🎯 Complete Roadside Service Journey

```
New Order → Accept (45s timer) → Navigate to Customer → Arrive
   ↓
Take Before Photos → Perform Service (with timer) → Take After Photos
   ↓
Create Invoice → Collect Payment → Complete Order → Customer Rating
```

## 🧩 Reusable Components

- **Button** - Primary, secondary, ghost variants
- **Input** - With labels, icons, error states
- **Card** - Shadow, radius, hover effects
- **StatusPill** - Color-coded status indicators
- **BottomSheet** - Draggable modal with handle
- **BottomNav** - 4-item navigation (Home, Orders, Earnings, Support)
- **Header** - Gradient with menu/back buttons
- **OrderTimeline** - Service progress visualization

## 🎯 Key Features

- **Roadside Service Focus**: Battery, tires, fuel, lockout, towing
- **Real-time Timer**: Track service duration with pause/resume
- **Photo Documentation**: Before/after service photos required
- **Payment Collection**: Cash, card, wallet options with confirmation
- **Live Navigation**: Maps integration for customer location
- **Customer Communication**: Voice & text chat
- **Earnings Tracking**: Real-time earnings, weekly charts
- **Multi-language**: Arabic, English, Urdu, Bengali support
- **Banking Integration**: Multiple payment accounts
- **Service Toggle**: Enable/disable specific roadside services

## 🚀 Quick Start

The app flow for providers:
1. Sign Up → Upload Documents → Activate Services
2. Go Online → Receive Service Request → Accept
3. Navigate to Customer → Arrive → Start Service
4. Take Photos → Perform Service → Complete with Payment
5. Track Earnings → Withdraw to Bank

## 🔄 Navigation Flow

```
Splash → Onboarding → Login/SignUp → Dashboard (Go Online)
                                      ↓
                    New Service Request (45s countdown)
                                      ↓
                Accept → On The Way → Arrived → Start Service
                                      ↓
          Before Photos → Service In Progress → After Photos
                                      ↓
                    Invoice → Payment → Completed
                    
Bottom Nav: Home | Orders | Earnings | Support
Drawer: Profile, Documents, Services, Wallet, Settings
```

## 📦 Tech Stack

- **React 18** - Component framework
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Tailwind CSS 4** - Utility-first styling
- **Lucide React** - Icon library
- **Unsplash** - Stock images

## 🎨 Design Tokens

All tokens defined in `/styles/globals.css`:
- Colors: Brand, neutrals, semantic colors
- Spacing: 8px grid system
- Radius: 6px to full rounded
- Gradients: Hero, action, glass effects
- Typography: Inter font family

---

**Version**: 2.0.0  
**Type**: Roadside Assistance Provider Platform  
**Region**: Saudi Arabia (SAR currency, Arabic support)
