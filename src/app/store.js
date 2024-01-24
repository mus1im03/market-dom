import { configureStore } from '@reduxjs/toolkit';
import application from '../features/applicationSlice';
import categories from '../features/categorySlice';
import itemCategories from '../features/itemCategorySlice';
import items from '../features/itemSlice'
import cartSlice from '../features/cartSlice';

export const store = configureStore({
    reducer: {
        application,
        categories,
        items,
        cartSlice,
    }
})