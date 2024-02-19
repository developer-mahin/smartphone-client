# Smartphone Management System

### LIVE URL

- SERVER - URL- https://sellsmanagement.vercel.app/
- CLIENT - URL- https://loquacious-horse-20d902.netlify.app/

https://drive.google.com/file/d/1o7fIXnHqx8OIGm2IsvG-zq0UB15JljG6/view?usp=drive_link

### Objective:

The primary objective of the Smartphone Management Dashboard is to provide a comprehensive tool for efficiently managing smartphone inventory, tracking sales, and analyzing sales history. The dashboard incorporates features such as authentication, CRUD operations, state management, real-time UI updates, and advanced smartphone filtering.

Authentication:
Users are required to register and log in to access the dashboard securely. JSON Web Tokens (JWT) are used for authentication. The system currently has a single role, representing a user responsible for managing the smartphone inventory.

## Uses Technology:

For the backend used Node.js Express with MongoDB for smartphone management, And for frontend i have used React and an UI Library that is Matarial Tailwind.

### Filtering System:

- Implement a robust filtering system to narrow down smartphone selections based on various criteria.
- Filter smartphones by price range, release date, brand, model, operating system, storage capacity, screen size, and other relevant parameters.

### Sales Management:

- Users can search for a product to sell.
- Upon finding the product, they can initiate a sale by specifying the quantity, buyer's name, and sale date.
- If the product's quantity reaches zero, it is automatically removed from the inventory.
  Sales History:

* View sales history categorized by weekly, daily, monthly, and yearly intervals.
