import { Component } from '@angular/core';
import { TitleCasePipe, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [TitleCasePipe, NgClass, NgStyle],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  // Data-driven lists instead of hardcoded <li> tags
  categories = [
    { label: 'Laces', url: 'products/laces/' },
    { label: 'Wax Prints', url: 'products/wax-prints/' },
    { label: 'Shoes & Bags', url: 'products/shoes-and-bags/' },
    { label: 'Vlisco', url: 'products/vlisco/' },
    { label: 'Getzner', url: 'products/Brocade/' },
    { label: 'Swiss Voile', url: 'products/swiss-voile/' },
    { label: 'Head Gear', url: 'products/head-gear/' },
    { label: 'Brocade', url: 'products/Brocades1/' },
    { label: 'Specials', url: 'products/specials/' },
  ];

  quickLinks = [
    { label: 'About Empire Textiles', url: 'about-us.html' },
    { label: 'Contact Us', url: 'contact-us.html' },
    { label: "Testimonials", url: 'testimonials.html' },
    { label: "FAQ's", url: 'faq.html' },
    { label: 'Shipping Details', url: 'shipping.html' },
    { label: 'Uniforms', url: 'uniforms.html' },
    { label: 'Blog', url: 'blog' },
    { label: 'Create Wholesale Account', url: 'wholesale.html' },
    { label: 'Terms & Conditions', url: 'terms-and-conditions.html' },
    { label: 'Privacy Policy', url: 'privacy-policy.html' },
  ];

  // Used for the [ngClass]/[ngStyle] demo (task b)
  isNewsletterHighlighted = true;
}