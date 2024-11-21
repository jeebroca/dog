import { Heart, MapPin, Calendar, DollarSign } from 'lucide-react';

interface Dog {
  id: number;
  name: string;
  breed: string;
  age: string;
  location: string;
  image: string;
  price: number;
  verified: boolean;
}

const dogs: Dog[] = [
  {
    id: 1,
    name: 'Luna',
    breed: 'German Shepherd',
    age: '2 years',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80',
    price: 1200,
    verified: true
  },
  {
    id: 2,
    name: 'Max',
    breed: 'Golden Retriever',
    age: '3 years',
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80',
    price: 1500,
    verified: true
  },
  {
    id: 3,
    name: 'Bella',
    breed: 'Labrador Retriever',
    age: '1.5 years',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80',
    price: 1000,
    verified: true
  }
];

export default function FeaturedDogs() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Dogs
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Meet some of our wonderful dogs looking for their perfect match
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dogs.map((dog) => (
            <div key={dog.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <div className="relative h-48">
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white">
                  <Heart className="h-5 w-5 text-red-500" />
                </button>
                {dog.verified && (
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-green-500 text-white text-sm rounded-full">
                    Verified
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{dog.name}</h3>
                    <p className="text-gray-600">{dog.breed}</p>
                  </div>
                  <div className="flex items-center text-lg font-semibold text-indigo-600">
                    <DollarSign className="h-5 w-5" />
                    {dog.price.toLocaleString()}
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{dog.age}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{dog.location}</span>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-300">
                    View Profile
                  </button>
                  <button className="w-full border-2 border-indigo-600 text-indigo-600 py-2 px-4 rounded-full hover:bg-indigo-50 transition duration-300">
                    Contact Owner
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}