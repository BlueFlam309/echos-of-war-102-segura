import { Route, Routes, Navigate } from "react-router-dom";
import { Index } from "../views/Index/Index";
import { AppLayout } from "../layouts/AppLayout";
import { RecipeInfo } from "../views/RecipeInfo/RecipeInfo";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route element={ <AppLayout /> }>
                    <Route path='*' element={<Navigate to="/" />} />
                    <Route path='/' element={<Index />} />
                    <Route path='/receta/:id' element={<RecipeInfo />} />
                </Route>
            </Routes>
        </>
    );
}