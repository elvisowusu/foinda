"use client";

import { motion } from "framer-motion";
import { ShoppingBag, TrendingUp, Package, Star, Zap } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const growthFeatures = [
  { icon: <ShoppingBag className="w-6 h-6 text-orange-500" />, title: "Digital Storefront", description: "Launch your store in minutes with pre-built templates" },
  { icon: <TrendingUp className="w-6 h-6 text-orange-500" />, title: "Growth Insights", description: "AI-powered analytics to optimize your content strategy" },
  { icon: <Package className="w-6 h-6 text-orange-500" />, title: "Product Recommendations", description: "Sell merch, courses, and presets based on your audience" },
  { icon: <Star className="w-6 h-6 text-orange-500" />, title: "Trending Alerts", description: "Get notified when your content is gaining traction" },
];

const productTypes = [
  { name: "Ghana Trip Preset", type: "Photo Preset", price: "₵50", trending: true },
  { name: "Creator Course", type: "Online Course", price: "₵200", trending: false },
  { name: "Brand Merch", type: "Physical Product", price: "₵80", trending: true },
  { name: "Music Beat", type: "Audio File", price: "₵30", trending: false },
];

export default function StoreGrowthLayer() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-[#F97316]/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Turn Followers Into a <span className="text-orange-500">Business</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Launch your digital storefront in minutes. Sell merch, courses, and presets — all powered by Foinda Growth insights.</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left - Transformation mock */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative">
            <div className="bg-gradient-to-br from-[#1B2A41] to-[#0F1A2B] rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Video thumb */}
              <motion.div initial={{ scale: 1 }} whileInView={{ scale: 0.85, y: -20 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="bg-gray-800 rounded-2xl p-4 mb-6">
                <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-3">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-bold">▶</span>
                    </div>
                    <div className="text-sm text-gray-300">"Ghana Trip Vlog"</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">2.3K views</span>
                  <span className="text-orange-500">Trending!</span>
                </div>
              </motion.div>

              {/* Arrow */}
              <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1 }} viewport={{ once: true }} className="flex justify-center mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
              </motion.div>

              {/* Product grid */}
              <div className="grid grid-cols-2 gap-4">
                {productTypes.map((product, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }} viewport={{ once: true }} className={`bg-white/10 rounded-xl p-3 relative ${product.trending ? "ring-2 ring-orange-500" : ""}`}>
                    {product.trending && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <div className="text-sm font-semibold mb-1">{product.name}</div>
                    <div className="text-xs text-gray-300 mb-2">{product.type}</div>
                    <div className="text-orange-500 font-bold">{product.price}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Features */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-[#1B2A41]">From Content to Commerce</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">Transform your most popular content into sellable products. Our AI analyzes your audience and suggests the perfect products to monetize your creativity.</p>
            </div>
            <div className="space-y-6">
              {growthFeatures.map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-[#1B2A41] mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Success Stories Carousel */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#1B2A41]">Creators Making It Happen</h3>
          <div className="max-w-4xl mx-auto relative">
            <Carousel opts={{ align: "start" }} className="w-full">
              <CarouselContent>
                {[{ name: "Ama Osei", product: "Travel Presets", revenue: "₵2,400", growth: "+340%" }, { name: "Kwame Asante", product: "Music Beats", revenue: "₵1,800", growth: "+280%" }, { name: "Fatima Ali", product: "Fashion Course", revenue: "₵3,200", growth: "+420%" }].map((creator, i) => (
                  <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="p-6 text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-[#4e80ca] rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">{creator.name[0]}</span>
                          </div>
                          <h4 className="font-semibold text-[#1B2A41] mb-2">{creator.name}</h4>
                          <p className="text-sm text-gray-600 mb-3">{creator.product}</p>
                          <div className="text-orange-500 font-bold text-lg mb-1">{creator.revenue}</div>
                          <div className="text-green-500 text-sm font-medium">{creator.growth}</div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


