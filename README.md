## 📌 Project Overview  
This is an Angular-based **Dynamic Form Builder** that generates a form from a JSON configuration. The form supports various field types, real-time validation, and data persistence using local storage.  
A responsive **dashboard** built with Angular 17, Tailwind CSS, and SCSS. The dashboard includes reusable components, lazy-loaded modules, and integrated data visualizations to display analytics, orders, and more.

## 🚀 Features 
✔️ Sidebar navigation to switch between pages (Dashboard, Orders, Reports, etc.).

✔️ Top navbar with user profile and space for notifications or search.

✔️ Analytics cards showing key metrics (e.g., Revenue, Users, Items Sold).

✔️ Interactive charts with options to view data by Day, Week, or Month.

✔️ Responsive layout with collapsible sidebar on smaller screens.

✔️ Charts and visuals built using a ApexCharts library.

✔️ Clean, modular UI using  Tailwind CSS, and SCSS with reusable components for cards, charts, and tables.

## 🏗️ Project Architecture
This project follows a modular architecture with a focus on separation of concerns and scalability.

 1️⃣ **Modules:**  DashboardModule – eagerly loaded to ensure core analytics are available immediately.
Other feature modules like OrdersModule, ItemsModule, ReportsModule, etc., are lazy-loaded for performance optimization.

 2️⃣ **Components:** 
Reusable components for:
Cards (MetricCardComponent)
Charts (LineChartComponent, BarChartComponent)

 3️⃣ **Layout components:** 
SidebarComponent 
TopNavbarComponent
MainContentComponent

4️⃣ **Services:** 
AnalyticsService: Handles data retrieval for metrics and charts.



## 🔧 Installation & Setup  
Follow these simple steps to set up and run the project locally:

### 1️⃣ **Clone the Repository**  
```sh
git clone https://github.com/mariammandour/Dashboard.git
cd Dashboard
```

### 2️⃣ **Install Dependencies**  
```sh
npm install
```

### 3️⃣ **Run the Development Server**  
```sh
ng serve
```