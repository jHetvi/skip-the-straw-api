# 🍋 SKIP THE STRAW API

A RESTful API built with Node.js, Express, and MongoDB for managing a lemonade stand business. This API provides endpoints for beverage management and order processing.

## 🚀 Features

- **Beverage Management**: Full CRUD operations for beverages
- **Order Processing**: Submit orders with confirmation numbers
- **Local Image Support**: Serve beverage images from local assets
- **MongoDB Integration**: Persistent data storage with Mongoose
- **Input Validation**: Comprehensive request validation and error handling
- **Real-time Logging**: Detailed console logging for debugging

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (v14 or higher)
- **MongoDB** (local installation)
- **Postman** (for API testing)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lemonade-stand-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   PORT=3001
   NODE_ENV=development
   MONGO_URI=mongodb://localhost:27017/lemonade-stand
   ```

4. **Start MongoDB**
   - For local installation:
     ```bash
     brew services start mongodb-community
     ```
   - Or use MongoDB Atlas cloud database

5. **Start the server**
   ```bash
   npm start
   # or
   node src/server.js
   ```

## 📁 Project Structure

```
lemonade-stand-api/
├── src/
│   ├── controllers/
│   │   ├── beverageController.js    # Beverage CRUD operations
│   │   └── orderController.js       # Order processing
│   ├── models/
│   │   ├── beverageModel.js        # Beverage schema
│   │   └── orderModel.js           # Order schema
│   ├── routes/
│   │   ├── beverageRoutes.js       # Beverage endpoints
│   │   └── orderRoutes.js          # Order endpoints
│   ├── assets/
│   │   └── images/                 # Local beverage images
│   └── server.js                   # Application entry point
├── .env                            # Environment variables
├── package.json                    # Dependencies and scripts
└── README.md                       # Project documentation
```

## 🔌 API Endpoints

### Beverages

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/beverages` | Get all beverages |
| `GET` | `/api/beverages/:id` | Get beverage by ID |
| `POST` | `/api/beverages` | Create new beverage |
| `PUT` | `/api/beverages/:id` | Update beverage |
| `DELETE` | `/api/beverages/:id` | Delete beverage |

### Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/orders` | Submit new order |

### Static Files

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/images/:filename` | Serve beverage images |

## 📝 API Usage Examples

### Create Beverage

```bash
POST http://localhost:3001/api/beverages
Content-Type: application/json

{
  "name": "Classic Lemonade",
  "description": "Fresh lemons, water, and sugar",
  "imageUrl": "/images/classic-lemonade.jpg",
  "category": "regular",
  "popular": true,
  "ecoFriendly": false,
  "available": true,
  "sizes": [
    { "name": "small", "price": 2.99 },
    { "name": "medium", "price": 3.99 },
    { "name": "large", "price": 4.99 }
  ],
  "ingredients": ["Lemons", "Sugar", "Water"],
  "nutritionalInfo": {
    "calories": 120,
    "sugar": "28g",
    "carbs": "30g"
  }
}
```

### Submit Order

```bash
POST http://localhost:3001/api/orders
Content-Type: application/json

{
  "customerName": "John Doe",
  "contactInfo": {
    "phoneNumber": "+1234567890",
    "email": "john@example.com",
    "countryCode": "US"
  },
  "beverages": [
    {
      "beverageId": "507f1f77bcf86cd799439011",
      "size": "medium",
      "quantity": 2
    }
  ],
  "total": 7.98
}
```

### Response

```json
{
  "status": "success",
  "data": {
    "orderId": "507f1f77bcf86cd799439012",
    "orderNumber": "ORD-123456-789",
    "customerName": "John Doe",
    "contactInfo": {
      "phoneNumber": "+1234567890",
      "email": "john@example.com",
      "countryCode": "US"
    },
    "beverages": [...],
    "total": 7.98
  }
}
```

## 📊 Data Models

### Beverage Schema

```javascript
{
  name: String (required),
  description: String,
  imageUrl: String,
  category: String,
  popular: Boolean,
  ecoFriendly: Boolean,
  available: Boolean,
  sizes: [{ name: String, price: Number }],
  ingredients: [String],
  nutritionalInfo: {
    calories: Number,
    sugar: String,
    carbs: String
  }
}
```

### Order Schema

```javascript
{
  customerName: String (required),
  contactInfo: {
    phoneNumber: String (required),
    email: String,
    countryCode: String (required)
  },
  beverages: [{
    beverageId: ObjectId (required),
    size: String (required),
    quantity: Number (required)
  }],
  total: Number (required),
  orderNumber: String (auto-generated),
  status: String (default: 'submitted')
}
```

## 🧪 Testing with Postman

1. **Import Collection**: Create a new collection named "Lemonade Stand API"
2. **Set Base URL**: `http://localhost:3001`
3. **Test Endpoints**: Use the examples above
4. **Verify Database**: Check MongoDB Compass or Atlas for data persistence

## 🖼️ Image Management

- Place beverage images in `src/assets/images/`
- Reference images in API as `/images/filename.jpg`
- Images are served at `http://localhost:3001/images/filename.jpg`

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check connection string in `.env`

2. **404 Image Not Found**
   - Verify image exists in `src/assets/images/`
   - Check filename spelling and case sensitivity

3. **Order Validation Error**
   - Ensure all required fields are included
   - Verify beverageId exists in database
   - Check size name matches exactly (case-insensitive)

## 🛠️ Development

### Available Scripts

```bash
npm start          # Start the server
npm run dev        # Start with nodemon (if configured)
node src/server.js # Direct server start
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 3001 |
| `NODE_ENV` | Environment | development |
| `MONGO_URI` | MongoDB connection string | mongodb://localhost:27017/lemonade-stand |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the HT License.

---

**Made with ❤️ for the Lemonade Stand business**
