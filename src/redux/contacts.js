import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62b2c5fd20cad3685c93798a.mockapi.io/',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetContactsQuery, useDeleteContactMutation } = contactsApi;
