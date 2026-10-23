import { RecipeGrid } from "./RecipeGrid/RecipeGrid";
import { SideFilter } from "./SideFilter/SideFilter"
import { TopFilter } from "./TopFilter/TopFilter";
import './index.scss'

export const Index = () => {
    return(
        <section className='index'>
            <div className='index__side-filter'>
                <SideFilter />
            </div>
            <div className='index__content'>
                <div className='index__top-filter'>
                    <TopFilter />
                </div>
                <div className='index__recipe-grid'>
                    <RecipeGrid />
                </div>
            </div>
        </section>
    );
}