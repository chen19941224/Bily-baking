
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-4 md:p-12">
      <section className="text-center mb-12">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Bily Baking
        </motion.h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          極簡風格・每日手作・純粹的蛋糕美學
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {['經典原味戚風', '莓果森林杯子蛋糕', '節日限定草莓塔'].map((name, i) => (
          <div key={i} className="shadow-xl rounded-2xl bg-white p-6">
            <div className="aspect-square bg-gray-100 mb-4 rounded-xl" />
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-sm text-gray-500 mb-4">純手工製作，使用天然食材</p>
            <button className="w-full bg-black text-white py-2 rounded-lg">立即選購</button>
          </div>
        ))}
      </section>

      <section className="bg-gray-50 rounded-2xl p-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-2">訂閱最新蛋糕消息</h2>
        <p className="text-sm text-gray-600 mb-4">每月限定口味、預購優惠搶先知</p>
        <div className="flex gap-2 justify-center">
          <input
            type="email"
            placeholder="輸入您的Email"
            className="max-w-xs border border-gray-300 px-4 py-2 rounded-md"
          />
          <button className="bg-black text-white px-4 py-2 rounded-md">訂閱</button>
        </div>
      </section>
    </main>
  );
}
