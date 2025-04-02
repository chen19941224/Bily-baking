import { useState } from 'react';
import '../styles/globals.css';

export default function Home() {
  const [products] = useState([
    { name: '經典原味戚風', desc: '鬆軟濕潤，香氣自然', img: '/cake1.jpg' },
    { name: '莓果森林杯子蛋糕', desc: '莓果酸甜清爽，人氣首選', img: '/cake2.jpg' },
    { name: '節日限定草莓塔', desc: '草莓豐富多汁，節慶限定', img: '/cake3.jpg' },
  ]);

  return (
    <main className="font-sans bg-[#fff9f5] text-[#3e342e]">
      {/* Hero */}
      <section className="w-full h-[70vh] bg-[url('/hero-bg.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-white/80 p-8 rounded-xl shadow text-center">
          <h1 className="text-4xl font-bold mb-2">Bily Baking</h1>
          <p className="text-lg">客製蛋糕 × 手作溫度 × 療癒日常</p>
        </div>
      </section>

      {/* 品牌故事 */}
      <section className="px-6 py-12 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">我們的故事</h2>
        <p className="text-gray-600">
          每一顆蛋糕，都由我們親手製作，用最天然的食材與最細膩的心意，傳遞愛與溫暖。
          Bily Baking 相信，甜點不只是味覺的享受，更是生活中的小確幸。
        </p>
      </section>

      {/* 商品列表 */}
      <section className="px-6 py-10 bg-[#fff3ea]">
        <h2 className="text-2xl font-semibold text-center mb-8">熱銷蛋糕</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="aspect-square overflow-hidden rounded-t-xl">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{item.desc}</p>
                <button className="w-full bg-[#d4a373] text-white py-2 rounded-md hover:bg-[#b9835c]">立即選購</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 訂閱區 */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-2">訂閱 Bily Baking 的甜點時光</h2>
        <p className="text-sm text-gray-600 mb-4">搶先獲得新品上市與甜點靈感</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="輸入您的 Email"
            className="flex-1 border border-gray-300 px-4 py-2 rounded-md"
          />
          <button className="bg-[#d4a373] text-white px-4 py-2 rounded-md hover:bg-[#b9835c]">訂閱</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f6e8df] text-center py-6 text-sm text-gray-500">
        © 2025 Bily Baking 甜點工作室 ｜ 手作蛋糕 × 溫暖日常
      </footer>
    </main>
  );
}
