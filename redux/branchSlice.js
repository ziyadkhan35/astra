import { createSlice } from "@reduxjs/toolkit";

export const branchSlice = createSlice({
    name: 'branch',
    initialState:{
        branches: [
            {
                id: 1,
                name: 'Astra Downtown',
                number: '+1 (555) 123-4567',
                address: '123 Main Street, City Center, YourCity, 12345',
                stars: '★★★★☆',
                description: 'Nestled in the heart of the city, Astra Downtown epitomizes urban chic dining.',
                distanceFromCenter: '0.5 miles',
                image: '/branches/branch1.jpg',
            },
            {
                id: 2,
                name: 'Astra Riverside',
                number: '+1 (555) 987-6543',
                address: '456 Riverfront Drive, Riverside District, YourCity, 54321',
                stars: '★★★★☆',
                description: 'Overlooking the serene riverside, Astra Riverside offers a harmonious blend of scenic beauty and gastronomic delight.',
                distanceFromCenter: ' 2 miles',
                image: '/branches/branch2.jpg',
            },
            {
                id: 3,
                name: 'Astra Hilltop',
                number: '+1 (555) 321-7890',
                address: '789 Summit Avenue, Hilltop Heights, YourCity, 67890',
                stars: '★★★★☆',
                description: 'Perched atop the highest peak of city, Astra Hilltop is a beacon of fine dining elegance.',
                distanceFromCenter: '3.5 miles',
                image: '/branches/branch3.jpg',
            },
            {
                id: 4,
                name: 'Astra Seaside',
                number: '+1 (555) 678-9012',
                address: '012 Oceanfront Boulevard, Seaside Cove, YourCity, 45678',
                stars: '★★★★☆',
                description: "Embrace the serenity of coastal living at Astra Seaside, where the rhythm of the waves accompanies every culinary delight.",
                distanceFromCenter: '5 miles',
                image: '/branches/branch4.jpg',
            },
        ]
    },
})

export default branchSlice.reducer