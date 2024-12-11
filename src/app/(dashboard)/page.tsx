import { Suspense } from 'react'
import { Gamepad2, Laptop2, Users2, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { FeaturedGames } from '@/components/featured-games'
import { AllGames } from '@/components/all-games'
import { FetchedGameData } from '@/types/games'
import { getAllGames } from '@/lib/controllers/games'

export default async function DashboardPage() {
  const games = await getAllGames();
  const duplicatedGames = Array(200)
  .fill([])
  .flatMap(() => games);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Welcome Section */}
        <section className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="size-16 rounded-2xl bg-violet-600 flex items-center justify-center shrink-0 shadow-lg">
                <Gamepad2 className="size-10 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                  Welcome to CrazyGames
                </h1>
                <p className="text-purple-300 mt-2">Play instantly, no downloads needed</p>
              </div>
            </div>
            <div className="flex flex-wrap lg:ml-auto gap-3">
              <Button variant="ghost" size="lg" className="gap-2 text-gray-300 hover:text-white hover:bg-white/10">
                <Laptop2 className="text-pink-500 size-5" />
                {duplicatedGames.length}+ games
              </Button>
              <Button variant="ghost" size="lg" className="gap-2 text-gray-300 hover:text-white hover:bg-white/10">
                <Users2 className="text-purple-500 size-5" />
                Play with friends
              </Button>
              <Button variant="ghost" size="lg" className="gap-2 text-gray-300 hover:text-white hover:bg-white/10">
                <Sparkles className="text-yellow-500 size-5" />
                All for free
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Games */}
        <section>
          <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Featured Games
          </h2>
          <Suspense fallback={<div className="h-64 bg-white/5 rounded-3xl animate-pulse"></div>}>
            <FeaturedGames games={duplicatedGames.slice(0, 6)} />
          </Suspense>
        </section>

        {/* All Games Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            All Games
          </h2>
          <Suspense fallback={<div className="h-96 bg-white/5 rounded-3xl animate-pulse"></div>}>
            <AllGames games={duplicatedGames} />
          </Suspense>
        </section>
      </div>
    </div>
  )
}