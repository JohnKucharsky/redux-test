import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { Pokemon } from "./types";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
    endpoints: (builder) => ({
        getPokemon: builder.query<any, any>({
            query: (name) => `pokemon/${name}`,
        }),
    }),
    refetchOnMountOrArgChange: true,
    tagTypes: [],
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonQuery } = pokemonApi;

//  getPokemonByName: builder.query<any, string>({
//             query: (name) => `pokemon/${name}`,
//         }),
