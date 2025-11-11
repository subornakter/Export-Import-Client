import { useLoaderData } from "react-router";
import { ProductCard } from "../components/ProductCard";
import Banner from "../components/Banner";
import ExtraSection from "../components/ExtraSection";
const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <title>Alpha Global Trade - Home</title>
            <Banner></Banner>
            <div className="text-center text-xl font-bold mt-10 mb-5">Latest Product</div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-10">
         {data.map(product => <ProductCard key={product._id} product={product}/>)}
      </div>
           <ExtraSection></ExtraSection> 
        </div>
    );
};

export default Home;