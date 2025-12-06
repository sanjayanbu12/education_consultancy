#!/bin/bash

# This script updates all remaining components with dark mode support
echo "Updating all components with dark mode support..."

# List of components to update
components=(
  "course-catalog-section.tsx"
  "college-showcase-section.tsx"
  "facilities-marquee-section.tsx"
  "why-us-section.tsx"
  "process-timeline-section.tsx"
  "testimonials-grid-section.tsx"
  "faq-section.tsx"
  "contact-section.tsx"
  "footer-section.tsx"
)

echo "Components to update: ${#components[@]}"
for component in "${components[@]}"; do
  echo "- $component"
done

echo "Done listing components"
