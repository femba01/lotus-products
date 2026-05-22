# Lotus Products Dashboard

A modern and responsive product management dashboard built with React, TypeScript, React Query, and Tailwind CSS. The application allows users to browse, search, filter, and view detailed product information using data from the DummyJSON API.

---

## Features

- Product listing with pagination
- Product search functionality
- Product details page
- Responsive dashboard layout
- Loading, empty, and error states
- Protected routes with mock authentication
- React Query data fetching and caching
- Products by brand chart visualization
- Mobile-friendly UI
- Accessible form controls and navigation

---

## Tech Stack

- React
- TypeScript
- React Router DOM
- TanStack React Query
- Tailwind CSS
- Axios
- Recharts
- Lucide React

---

## Getting Started

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate Into Project

```bash
cd lotus-products-dashboard
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Application runs on:

```txt
http://localhost:5173
```

---

## Available Scripts

### Run Development Server

```bash
npm run dev
```

### Build Application

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run Linter

```bash
npm run lint
```

---

## Folder Structure

```txt
src/
├── api/
├── components/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── types/
├── utils/
```

---

## Design Decisions

### React Query for Server State
React Query was chosen for handling API requests, caching, pagination, and background refetching. It simplifies asynchronous state management and improves performance with built-in caching support.

### Tailwind CSS
Tailwind CSS was used for rapid UI development, responsiveness, and consistent styling without writing large amounts of custom CSS.

### Component Separation
Reusable UI elements such as search filters, charts, layouts, and product cards were separated into individual components for maintainability and scalability.

### Protected Route Structure
A mock authentication flow using localStorage was implemented to demonstrate route protection and authentication flow handling.

### Responsive Design
The dashboard was designed mobile-first to ensure usability across desktop and smaller devices.

---

## Trade-Offs & Assumptions

### API Limitations
The DummyJSON API does not provide a `createdAt` field. Product ID ordering was used as a substitute for newest/oldest sorting behavior.

### Authentication
Authentication is mocked using localStorage for demonstration purposes only and is not production-ready.

### Pagination
Pagination is client-driven using API `limit` and `skip` parameters.

### Search
Search functionality uses the API search endpoint with debounce optimization to reduce unnecessary API calls.

---

## Future Improvements

Given more time, the following improvements would be added:

- Unit and integration tests
- Dark mode support
- Better accessibility enhancements
- Persistent filters using URL query params
- Improved data visualization
- Skeleton loaders across all pages
- Real authentication and authorization flow
- Product creation and editing functionality

---

## Deployment

The application is deployed on Vercel.

---