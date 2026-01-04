<script setup lang="ts">
import { ProductCard, type Product } from "@/entities/Product";

const mockProduct: Product = {
  id: 119,
  documentId: "rbrpgus39mgt7ta6od9jh7lz",
  title: "Kaede Hair Pin Set Of 3 1",
  price: 25,
  image: "https://api.dev.cwe.su/uploads/Kaede_Hair_Pin_Set_Of_3_f49ecb8ede.png",
  description: "Kaede Hair Pin Set Of 3...",
  additionalImages: {
    additionalImages: [{ imageURL1: "..." }]
  },
  isFavorite: false,
  discountPercent: 0,
  SKU: 15,
  weight: 0.2,
  dimensions: "15 x 20 x 2",
  color: "White",
  material: "Metal",
  itemsInStock: 2,
  size: "Small",
  createdAt: "2025-04-09T09:26:58.719Z",
  updatedAt: "2026-01-02T13:30:02.529Z",
  publishedAt: "2026-01-02T13:30:02.519Z",
};
</script>

<template>
  <product-card :data="mockProduct" />
</template>
