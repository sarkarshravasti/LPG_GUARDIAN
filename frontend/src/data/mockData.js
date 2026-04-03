export const MOCK_REGIONS = [
  { id: 1, name: "Delhi", risk: "YELLOW", avg_demand: 500, current_demand: 620, supply: 550, days_to_shortage: 4, lat: 28.6139, lng: 77.2090 },
  { id: 2, name: "Mumbai", risk: "GREEN", avg_demand: 800, current_demand: 810, supply: 900, days_to_shortage: 14, lat: 19.0760, lng: 72.8777 },
  { id: 3, name: "Chennai", risk: "RED", avg_demand: 450, current_demand: 800, supply: 400, days_to_shortage: 1, lat: 13.0827, lng: 80.2707 },
  { id: 4, name: "Kolkata", risk: "YELLOW", avg_demand: 400, current_demand: 500, supply: 420, days_to_shortage: 5, lat: 22.5726, lng: 88.3639 },
  { id: 5, name: "Bangalore", risk: "GREEN", avg_demand: 600, current_demand: 610, supply: 650, days_to_shortage: 20, lat: 12.9716, lng: 77.5946 },
  { id: 6, name: "Hyderabad", risk: "GREEN", avg_demand: 550, current_demand: 560, supply: 600, days_to_shortage: 18, lat: 17.3850, lng: 78.4867 },
  { id: 7, name: "Ahmedabad", risk: "RED", avg_demand: 300, current_demand: 600, supply: 250, days_to_shortage: 2, lat: 23.0225, lng: 72.5714 }
];

export const MOCK_ALERTS = [
  { id: 1, type: "CRITICAL", region: "Chennai", message: "High shortage risk in 1 day", time: "10 min ago" },
  { id: 2, type: "CRITICAL", region: "Ahmedabad", message: "Supply dropped below minimum threshold", time: "25 min ago" },
  { id: 3, type: "WARNING", region: "Delhi", message: "Unusual demand spike detected (Zone D)", time: "1 hour ago" },
  { id: 4, type: "FRAUD", region: "Mumbai", message: "Suspicious booking volume from User #9421", time: "2 hours ago" },
  { id: 5, type: "INFO", region: "Bangalore", message: "15,000 units delivered to Hub #2", time: "5 hours ago" }
];

export const DEMAND_CURVE_DATA = [
  { time: "08:00", demand: 120, supply: 200 },
  { time: "10:00", demand: 250, supply: 200 },
  { time: "12:00", demand: 400, supply: 190 },
  { time: "14:00", demand: 420, supply: 180 },
  { time: "16:00", demand: 550, supply: 170 },
  { time: "18:00", demand: 800, supply: 160 },
  { time: "20:00", demand: 750, supply: 150 }
];

export const MOCK_DISTRIBUTORS = [
  // Mumbai Distributors
  { id: 1, name: "HP Gas - Andheri West", region: "Mumbai", status: "HIGH", waitTime: "1 Day", stock: 450, supply_received: 500, delivered: 48, distance: "1.2 km" },
  { id: 2, name: "Indane - Bandra", region: "Mumbai", status: "LOW", waitTime: "3 Days", stock: 12, supply_received: 300, delivered: 288, distance: "3.5 km" },
  { id: 3, name: "Bharat Gas - Colaba", region: "Mumbai", status: "HIGH", waitTime: "1 Day", stock: 210, supply_received: 250, delivered: 40, distance: "8.2 km" },
  
  // Chennai Distributors
  { id: 4, name: "Bharat Gas - T Nagar", region: "Chennai", status: "OUT", waitTime: "5 Days", stock: 0, supply_received: 200, delivered: 220, distance: "2.1 km" }, 
  { id: 5, name: "Indane - Velachery", region: "Chennai", status: "LOW", waitTime: "2 Days", stock: 45, supply_received: 300, delivered: 250, distance: "4.8 km" },
  { id: 6, name: "HP Gas - Adyar", region: "Chennai", status: "OUT", waitTime: "7 Days", stock: 0, supply_received: 150, delivered: 150, distance: "6.0 km" },
  { id: 7, name: "Bharat Gas - Mylapore", region: "Chennai", status: "LOW", waitTime: "3 Days", stock: 15, supply_received: 250, delivered: 235, distance: "1.8 km" },

  // Delhi Distributors
  { id: 8, name: "Bharat Gas - Connaught", region: "Delhi", status: "LOW", waitTime: "2 Days", stock: 45, supply_received: 300, delivered: 250, distance: "1.5 km" },
  { id: 9, name: "HP Gas - Saket", region: "Delhi", status: "HIGH", waitTime: "1 Day", stock: 320, supply_received: 400, delivered: 75, distance: "5.2 km" },
  { id: 10, name: "Indane - Dwarka", region: "Delhi", status: "HIGH", waitTime: "1 Day", stock: 500, supply_received: 600, delivered: 100, distance: "12.4 km" }
];

export const MOCK_USER_ABUSE = [
  { id: "U-8821", name: "Ramesh P.", bookings: 5, days: 3, status: "FLAGGED", limit_exceeded: true },
  { id: "U-9102", name: "Suresh K.", bookings: 7, days: 5, status: "FLAGGED", limit_exceeded: true },
  { id: "U-1120", name: "Anjali S.", bookings: 1, days: 30, status: "NORMAL", limit_exceeded: false }
];
