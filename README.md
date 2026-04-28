# Ten-Twenty — Timesheet Management App

A timesheet management web application where employees can log in and view their weekly timesheet records with sorting and pagination.

## 🚀 Live Demo

[https://ten-twenty-omega.vercel.app](https://ten-twenty-omega.vercel.app)

**Test Credentials:**
```
Email:    manish@gmail.com
Password: Manish@1234
```

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js 18+
- npm

### 1. Clone the repository

```bash
git clone https://github.com/manish1996java/ten-twenty.git
cd ten-twenty
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root of the project:

```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-here
```

To generate a secure secret:

```bash
openssl rand -base64 32
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production

```bash
npm run build
npm start
```

---

## 🛠️ Frameworks & Libraries Used

| Library | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.4 | React framework (App Router) |
| [NextAuth.js](https://next-auth.js.org/) | ^4.24.14 | Authentication (Credentials Provider) |
| [Tailwind CSS](https://tailwindcss.com/) | ^4 | Utility-first styling |
| [Formik](https://formik.org/) | ^2.4.9 | Form state management |
| [Yup](https://github.com/jquense/yup) | ^1.7.1 | Form validation schema |
| [Lucide React](https://lucide.dev/) | ^1.11.0 | Icon library |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Type safety |

---

## 📁 Project Structure

```
ten-twenty/
├── app/
│   ├── (private)/              # Protected routes (requires authentication)
│   │   └── dashboard/          # Main timesheet dashboard
│   ├── (public)/               # Public routes
│   │   └── login/              # Login page
│   ├── api/
│   │   ├── auth/               # NextAuth handler
│   │   ├── timesheets/         # GET all timesheets (pagination + sorting)
│   │   └── timesheet/[id]/     # GET single timesheet by ID
│   └── layout.tsx              # Root layout with Inter font
├── components/                 # Reusable UI components
│   └── Pagination.tsx          # Pagination component
├── hooks/
│   └── useTimeSheets.ts        # Custom hook for fetching timesheets
├── lib/
│   ├── api/
│   │   └── timesheet.ts        # API helper functions
│   ├── mockData.ts             # Mock data (users + timesheets)
│   └── validations/
│       └── login.ts            # Yup validation schema for login
├── middleware.ts               # Route protection
├── .env.local                  # Local environment variables (not committed)
└── .gitignore
```

---

## 📝 Assumptions & Notes

- **Mock data** is used instead of a real database. User credentials and timesheet records are stored in `lib/mockData.ts`. In a production app, this would be replaced with a real database (e.g. PostgreSQL, MongoDB).
- **Passwords are stored in plain text** in mock data for simplicity. In production, passwords should be hashed using bcrypt or similar.
- **Authentication** uses NextAuth Credentials Provider with JWT session strategy. The session token is stored in a cookie.
- **Route protection** is handled in `middleware.ts` — unauthenticated users are redirected to `/login`, and authenticated users are redirected away from `/login` to `/dashboard`.
- **Pagination and sorting** are handled server-side in the API route (`/api/timesheets`) to simulate a real backend.
- **Relative URLs** are used for all API calls (`/api/...`) so the app works correctly in both local and production without any additional environment variables.
- **Inter font** is loaded via `next/font/google` for optimal performance (self-hosted at build time).

---

## ⏱️ Time Spent

| Task | Time |
|---|---|
| Project setup & configuration | 30 mins |
| Authentication (NextAuth + login form) | 1.5 hrs |
| Dashboard & timesheet listing | 1.5 hrs |
| Pagination component | 45 mins |
| Sorting functionality | 30 mins |
| Form validation (Formik + Yup) | 30 mins |
| Middleware & route protection | 30 mins |
| Deployment & Vercel configuration | 1 hr |
| Bug fixes & debugging | 1 hr |
| **Total** | **~8 hrs** |

---

## 🚀 Deployment

Deployed on Vercel with automatic deployments on every push to `main`.

**Environment variables required on Vercel:**
```
NEXTAUTH_URL=https://your-app.vercel.app
NEXTAUTH_SECRET=your-secret-here
```