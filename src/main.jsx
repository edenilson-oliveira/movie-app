import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App.jsx";
import GlobalStyle from "./GlobalStyles.jsx";
import Home from "./pages/Home/Home.jsx";
import Movie from "./pages/Movie/Movie.jsx";
import Search from "./pages/Search/Search.jsx"
import Favorites from "./pages/Favorites/Favorites.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"
import store from "./redux/store.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        //errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
              path: '/search',
              element: <Search />,
              children:[
                {
                  path: '/search/:movieName',
                  element: <Search />
                },
                ]
              
            },
            {
                path: "/movie/:id",
                element: <Movie />
            },
            {
              path: "/favorites",
              element: <Favorites />
            }
        ]
    }
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <RouterProvider router={router} />
                <GlobalStyle />
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>
);
