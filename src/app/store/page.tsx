import React from 'react';
import { ProductPageCard, ProductPageTextBox } from '@/components/products/ProductPageTextBox';
import Image from 'next/image';


const ProductPage = () => {
  return (
    <div className="bg-[#222] text-xl">
      <ProductPageTextBox
        h="LAPTOPS & DESKTOPS"
        t="From cutting-edge gaming and creator laptops to high-end components for your dream PC build, Razer systems are meticulously crafted to provide the ultimate performance for work and play. Supported by our diverse collection of gamer accessories and PC peripherals, we've got you covered when it comes to your unique gaming or office desktop needs."
      />

      {/* First Grid Section */}
      <div className="w-4/5 mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
        <ProductPageCard
          img="https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/razer-blade-16-2023-laptop-500x500.jpg"
          h1="LAPTOPS"
          t="Sleek high-performance gaming laptops"
        />
        <ProductPageCard
          img="https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/desktops-components-category--500x500.jpg"
          h1="DESKTOPS & COMPONENTS"
          t="Enthusiasts and designed for performance"
        />
        <ProductPageCard
          img="https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/accessories-category-500x500.jpg"
          h1="ACCESSORIES"
          t="Crafting the perfect gaming experience"
        />
      </div>

      <ProductPageTextBox
        h="PC & LAPTOP PERIPHERALS"
        t="The most powerful rigs mean nothing without the best gear to match. Gain a competitive edge with PC and laptop peripherals armed with our latest technology. From award-winning mice and keyboards to industry-leading headsets and monitors, deck out your setup with our comprehensive selection of peripherals for gaming and work."
      />

      {/* Second Grid Section */}
      <div className="w-4/5 mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
        {/* Mouse Section */}
        <ProductPageCard
          img="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/mice-category-500x500.jpg"
          h1="MOUSES"
          t="Pixel-perfect precision for any hand size"
        />
        <ProductPageCard
          img="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/mousemats-category-500x500.jpg"
          h1="MOUSE MATS"
          t="Soft and hybrid designs to enhance your control"
        />
        <ProductPageCard
          img="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/keyboards-category-500x500.jpg"
          h1="KEYBOARDS"
          t="Optical, mechanical, and every type in between"
        />
        <ProductPageCard
          img="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/headsets-category-500x500.jpg"
          h1="HEADSETS"
          t="Tuned for gaming and a perfect mix"
        />
        <ProductPageCard
          img="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/speakers-category-500x500.jpg"
          h1="SPEAKERS"
          t="Set the soundstage for full-range immersion"
        />
        <ProductPageCard
          img="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/chairs-category-500x500.jpg"
          h1="CHAIRS"
          t="Perfecting the science of comfort and support"
        />
        {/* Add all other peripheral cards here following the same pattern */}
        {/* For brevity, I've removed the repeated cards but you should include all of them */}
      </div>

      <ProductPageTextBox
        h="CONTENT CREATION & STREAMING"
        t="Producing quality content requires quality hardware. From high-fidelity webcams to professional-grade microphones, deliver the best possible streaming experience with our range of content creation gear. Whether you're streaming from your gaming desktop or laptop, we've got everything you need to create content that stands out from the rest."
      />

      {/* Third Grid Section */}
      <div className="w-4/5 mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
        {/* Add content creation cards here */}
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/6db17f7284da185264c3018f26bef57a/webcams-category-500x500.jpg"
          }
          h1={"WEBCAMS"}
          t={"Stunning visual fidelity for streaming"}
        />
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/6db17f7284da185264c3018f26bef57a/microphones-category-500x500.jpg"
          }
          h1={"MICROPHONES"}
          t={"Engineered for crystal-clear voice pickup"}
        />
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/6db17f7284da185264c3018f26bef57a/capturecard&others-category-500x500.jpg"
          }
          h1={"CAPTURE CARD & OTHERS"}
          t={"For a professional streaming advantage"}
        />
      </div>

      <ProductPageTextBox
        h="SOFTWARE"
        t="From customizing keybinds and Chroma effects to optimizing audio and game performance, Razer's software platforms are designed to enhance your gaming and productivity. Seamlessly integrated with our extensive collection of gamer accessories and PC peripherals, get the most out of our devices and create a single ecosystem for your gaming or office desktop."
      />

      {/* Fourth Grid Section */}
      <div className="w-4/5 mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
        {/* Add software cards here */}
         <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/razer-axon-category-500x500.jpg"
          }
          h1={"RAZER AXON"}
          t={
            "Bring your desktop to life with high-quality wallpapers that sync with your Razer Chroma™ RGB ecosystem."
          }
        />
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/razer-chroma-rgb-category-500x500.jpg"
          }
          h1={"RAZER CHROMA™ RGB"}
          t={
            "Experience full RGB customization the world’s largest lighting ecosystem that supports hundreds of games."
          }
        />
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/razer-cortex-category-500x500.jpg"
          }
          h1={"RAZER CORTEX"}
          t={
            "From boosting system performance to discovering gaming deals, enhance your play with one powerful platform."
          }
        />
      </div>

      {/* Bottom Image Section */}
      <div className="w-full pb-5">
        <Image
          src="https://assets2.razerzone.com/images/pnx.assets/d20a9f320f5d60e2b92043b7d4cc2f7a/ms-audio-banner-desktop.jpg"
          alt="Banner"
          className="w-full object-cover"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
};

export default ProductPage;