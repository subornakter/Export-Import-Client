import { useLoaderData } from "react-router";
import { ProductCard } from "../components/ProductCard";

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>

            <div className="text-center text-xl font-bold mt-10">Latest Product</div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-10">
         {data.map(product => <ProductCard key={product._id} product={product}/>)}
      </div>
            
        </div>
    );
};

export default Home;