import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
   reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62f243ab18493ca21f300ef7.mockapi.io/api/v1',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
   getContacts: builder.query({
   query: () => '/contacts',
   providesTags: ['Contact'],
       }),

   addContact: builder.mutation({
   query: newContact => ({
   url: '/contacts',
   method: 'POST',
   body: newContact,
   }),
   invalidatesTags: ['Contact'],
   }),

   deleteContatc: builder.mutation({
   query: id => ({
   url: `/contacts/${id}`,
   method: 'DELETE',
   }),
   invalidatesTags: ['Contact'],
   }),
   }),
   });

export const { 
ususeGetContactsQuery,
useAddContactMutation,
useDeleteContatcMutation,  
} = contactsApi;

// console.log(contactsApi);