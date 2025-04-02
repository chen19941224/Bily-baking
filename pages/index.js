import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#3e342e] font-sans">
      {/* Hero Section */}
      <section className="w-full h-[80vh] bg-[url('/cake-banner.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Bily Baking
        </motion.h1>
        <p className="text-lg md:text-xl max-w-xl">
          簡約．質感．每日手作的療癒系蛋糕品牌
        </p>
      </section>

      {/* 品牌介紹 */}
      <section className="py-16 px-4 md:px-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">我們的故事</h2>
        <p className="max-w-2xl mx-auto text-base text-[#5a4f47]">
          Bily Baking 誕生於一間家庭廚房，只使用天然原料、無香精、無色素，傳遞最純粹的甜點溫度。我們相信，蛋糕不只是甜食，更是傳遞情感的載體。
        </p>
      </section>

      {/* 熱銷蛋糕展示 */}
      <section className="bg-[#f3ede7] py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold text-center mb-8">熱銷蛋糕</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["經典原味戚風", "莓果森林杯子蛋糕", "節日限定草莓塔"].map((name, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-square bg-[#e0d6cc] flex items-center justify-center text-[#a0968a] text-sm">
                假圖
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{name}</h3>
                <p className="text-sm text-[#7a6f67] mb-3">純手工製作，使用天然食材</p>
                <button className="w-full bg-[#7c5e4a] text-white py-2 rounded-md hover:bg-[#5f4435]">立即選購</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 訂閱區塊 */}
      <section className="bg-white py-12 px-4 md:px-12 text-center">
        <h2 className="text-2xl font-semibold mb-2">訂閱 Bily Baking 的甜點時光</h2>
        <p className="text-sm text-[#7a6f67] mb-4">搶先獲得新品、限量優惠與甜點靈感</p>
        <div className="flex gap-2 justify-center max-w-lg mx-auto">
          <input
            type="email"
            placeholder="輸入您的 Email"
            className="flex-1 border border-[#cbbcaf] px-4 py-2 rounded-md"
          />
          <button className="bg-[#7c5e4a] text-white px-4 py-2 rounded-md hover:bg-[#5f4435]">訂閱</button>
        </div>
      </section>
    </main>
  );
}
