import React, { useEffect, useState } from 'react';

// API Services
import { getArticles, getProducts, getReviews, getSlider, getTrailers, getTrailerVideo } from '../services/home.service';

// Images
import Logo from '../assets/Logo.svg'

// Components
import Navbar from '../components/public/Navbar';
import Footer from '../components/home/Footer';
import Slider from '../modules/Slider';
import Products from '../components/home/Products';
import Articles from '../components/home/Articles';
import Reviews from '../components/home/Reviews';
import TrailerVideo from '../components/home/TrailerVideo';
import Trailers from '../components/home/Trailers';
import Background from '../components/public/Background';

const Home = () => {
    const [data, setData] = useState({
        sliders: null,
        products: null,
        articles: null,
        reviews: null,
        trailers: null,
        trailerVideo: null
    })
    const [loading, setLoading] = useState(true)
    const setHomeData = (key, value) => setData(prevData => ({ ...prevData, [key]: value }))
    const getSlidersData = async () => {
        const slidersData = await getSlider()
        setHomeData("sliders", slidersData[0])
    }
    const getProductsData = async () => {
        const productsData = await getProducts()
        setHomeData("products", productsData)
    }
    const getArticlesData = async () => {
        const articletsData = await getArticles()
        setHomeData("articles", articletsData)
    }
    const getReviewsData = async () => {
        const reviewsData = await getReviews()
        setHomeData("reviews", reviewsData)
    }
    const getTrailerVideoData = async () => {
        const trailerVideoData = await getTrailerVideo()
        setHomeData("trailerVideo", trailerVideoData[0])
    }
    const getTrailersData = async () => {
        const trailersData = await getTrailers()
        setHomeData("trailers", trailersData)
    }
    const handleLoading = () => {
        const result = Object.values(data).filter(value => !value)
        !result.includes(null) && setLoading(false)
    }
    useEffect(() => {
        setTimeout(() => {
            handleLoading()
        }, 3000);
    }, [data])
    useEffect(() => {
        getSlidersData()
        getProductsData()
        getArticlesData()
        getReviewsData()
        getTrailerVideoData()
        getTrailersData()
    }, [])

    if (loading) return <div className='flex justify-center items-center w-screen h-screen bg-dark-gray'>
        <img className='animate-pulse h-12' src={Logo} />
        <div class="card">
            <div class="loader">
                <p>Loading</p>
                <div class="words">
                    <span class="word">games</span>
                    <span class="word">trailers</span>
                    <span class="word">news</span>
                    <span class="word">reviews</span>
                    <span class="word">guides</span>
                </div>
            </div>
        </div>
    </div>

    return (
        <>
            <Background>
                <Navbar />
                <div className="w-full max-w-screen-xl m-auto">
                    <Slider data={data.sliders} />
                    <Products data={data.products} />
                    <Articles data={data.articles} />
                    <Reviews data={data.reviews} />
                    <TrailerVideo data={data.trailerVideo} />
                    <Trailers data={data.trailers} />
                </div>
            </Background>
            <div className="w-full mt-auto z-20">
                <Footer />
            </div>
        </>
    );
};

export default Home;