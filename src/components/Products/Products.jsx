import CategoryMenu from "../CategoryMenu/CategoryMenu";
import ItemList from "../ItemList/ItemList";

export default function ProductsPage() {
    return (
        <div className="container mx-auto max-w-[1170px]">
            <CategoryMenu />
            <ItemList />
        </div>
    );
}
