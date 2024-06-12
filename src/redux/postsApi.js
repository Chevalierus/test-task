import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const servicesApi = createApi ({
    reducerPath: 'servicesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/posts'}),
    endpoints: (builder) => ({
        getServices: builder.query({
                query: () => ''
        })
    })
})

export const {useGetServicesQuery} = servicesApi