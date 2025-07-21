import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nautika',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nautika.component.html',
  styleUrls: ['./nautika.component.scss'],
})
export class NautikaComponent {
  ferries: Ferry[] = [
    {
      name: 'Nautika Classic',
      description:
        '400 comfortable seats, 24-knot cruising speed, private cabin options, redefining inter-island travel, comfort, speed, panoramic views for Havelock or Neil Island journeys.',
      image: 'assets/images/ferry-classic.jpg',
      buttonText: 'Explore Nautika Classic',
    },
    {
      name: 'Nautika Pro',
      description:
        'Premium ferry experience with enhanced amenities, faster cruising speed, and luxury seating options for discerning travelers seeking comfort and style.',
      image: 'assets/images/ferry-pro.jpg',
      buttonText: 'Explore Nautika Pro',
    },
    {
      name: 'Nautika Pride',
      description:
        "India's largest passenger ferry with state-of-the-art facilities, multiple cabin options, and premium business class seating for the ultimate travel experience.",
      image: 'assets/images/ferry-pride.jpg',
      buttonText: 'Explore Nautika Pride',
    },
  ];

  amenities: Amenity[] = [
    {
      name: 'Air-conditioned cabins',
      icon: 'fas fa-snowflake',
      description: 'Climate controlled comfort throughout your journey',
    },
    {
      name: 'Reclining luxury seats',
      icon: 'fas fa-chair',
      description:
        'Premium seating with adjustable recline for maximum comfort',
    },
    {
      name: 'Onboard refreshments',
      icon: 'fas fa-coffee',
      description: 'Complimentary beverages and snacks available',
    },
    {
      name: 'Clean Washrooms',
      icon: 'fas fa-restroom',
      description:
        'Modern, hygienic facilities maintained to highest standards',
    },
    {
      name: 'Wi-Fi Connectivity',
      icon: 'fas fa-wifi',
      description: 'High-speed internet access throughout the vessel',
    },
    {
      name: 'Instant Booking & Digital Boarding',
      icon: 'fas fa-mobile-alt',
      description: 'Seamless digital experience from booking to boarding',
    },
  ];

  prideFeatures: PrideFeature[] = [
    { title: 'Capacity', value: '400 Passengers' },
    { title: 'Speed', value: '24 Knots' },
    { title: 'Views', value: 'Panoramic windows' },
    { title: 'Classes', value: 'Economy to Premier' },
  ];

  premiumFeatures: PremiumFeature[] = [
    { name: "India's largest domestic ferry", icon: 'fas fa-ship' },
    { name: 'Multiple private cabin options', icon: 'fas fa-bed' },
    { name: 'Premium business class seating', icon: 'fas fa-star' },
    { name: 'Onboard dining facilities', icon: 'fas fa-utensils' },
    { name: 'Advanced navigation system', icon: 'fas fa-compass' },
    { name: 'Spacious observation decks', icon: 'fas fa-eye' },
  ];
}

interface Ferry {
  name: string;
  description: string;
  image: string;
  buttonText: string;
}

interface Amenity {
  name: string;
  icon: string;
  description: string;
}

interface PrideFeature {
  title: string;
  value: string;
}

interface PremiumFeature {
  name: string;
  icon: string;
}
