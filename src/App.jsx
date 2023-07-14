import {
   Route,
   Navigate,
   RouterProvider,
   createRoutesFromElements,
   createBrowserRouter,
} from "react-router-dom"

import { About } from "./pages/Aboutpage"
import { Blogpage, blogLoader } from "./pages/Blogpage"
import { Homepage } from "./pages/Homepage"
import { Notfoundpage } from "./pages/Notfoundpage"
import { Layout } from "./components/Layout"
import { Singlepage, postLoader } from "./pages/Singlepage"
import { Createpost, createPostAction } from "./pages/Createpost"
import { Editpost, updatePostAction } from "./pages/Editpost"
import { LoginPage } from "./pages/Loginpage"
import { RequireAuth } from "./hoc/RequireAuth"
import { AuthProvider } from "./hoc/AuthProvider"
import { ErrorPage } from "./pages/Errorpage"

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<Layout />}>
         <Route index element={<Homepage />} />
         <Route path="about" element={<About />}>
            <Route path="contacts" element={<p>Our contacts</p>} />
            <Route path="team" element={<p>Our team</p>} />
         </Route>
         <Route path="about-us" element={<Navigate to="/about" replace />} />
         <Route
            path="posts"
            element={<Blogpage />}
            loader={blogLoader}
            errorElement={<ErrorPage />}
         />
         <Route path="posts/:id" element={<Singlepage />} loader={postLoader} />
         <Route
            path="posts/:id/edit"
            element={<Editpost />}
            loader={postLoader}
            action={updatePostAction}
         />
         <Route
            path="posts/new"
            element={
               <RequireAuth>
                  <Createpost />
               </RequireAuth>
            }
            action={createPostAction}
         />
         <Route path="login" element={<LoginPage />} />
         <Route path="*" element={<Notfoundpage />} />
      </Route>
   )
)

function App() {
   return (
      <>
         <AuthProvider>
            <RouterProvider router={router} />
         </AuthProvider>
      </>
   )
}

export default App
