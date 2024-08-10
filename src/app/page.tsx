
import { Inconsolata } from 'next/font/google';

const inconsolata = Inconsolata({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={`${inconsolata.className} overflow-x-hidden overflow-y-auto`}>
      <div className="h-screen bg-darkblue text-white relative">
        <img src="/images/home-bg.png" alt="hero-banner" className='opacity-40 absolute top-0 left-0 right-0 bottom-0 z-0 w-full h-full object-contain scale-75' />
        <div className='absolute left-0 right-0 top-0 bottom-0 text-center content-center'>
          <h1 className="font-bold text-5xl lg:text-8xl">PICTMUN</h1>
          <div className="h-[10px]"></div>
          <h1 className="text-2xl lg:text-2xl text-zinc-400">Think, Discuss, Prosper</h1>
          <div className="h-[25px]"></div>
          <div>
            <button className="px-[55px] py-[12px] text-md text-yellow-300 rounded-md bg-zinc-950 bg-opacity-60 md:mr-[12.5px] border-[1.5px] border-solid border-zinc-950 border-opacity-100 shadow-lg">Register</button>
            <div className='md:hidden h-[15px]' />
            <button className="px-[55px] py-[12px] text-md rounded-md bg-zinc-950 bg-opacity-60 md:ml-[12.5px] border-[1.5px] border-solid border-zinc-950 border-opacity-100 shadow-lg">Events</button>
          </div>
        </div>
      </div>

      <div className="lg:h-screen text-zinc-900 bg-darkblue">
        <div className='bg-lightblue bg-opacity-40 w-full h-full flex flex-col p-[50px] lg:py-[100px] lg:px-[250px]'>
          <div className="text-center">
            <h1 className="text-3xl lg:text-6xl font-[600] text-white">About The Club</h1>
          </div>
          <div className="flex-none h-[30px] lg:h-[50px]"></div>
          <div className="grid grid-cols-2 h-full gap-[75px]">
            <div className="col-span-2 lg:col-span-1 text-center lg:text-start">
              <div className='w-full h-full flex flex-col'>
                <div className="grow"></div>
                <p className='leading-7 text-md lg:text-3xl text-[#0b1d2b]'>
                  The PICT MUN team has developed Issue 14.0 of ‘The Inquisitor’ from scratch. It consists of In-house articles that have been written by the club’s members after carrying out extensive research in order to serve reports to the readers with the maximum possible factual accuracy. We plan on expanding the outreach of this esteemed newsletter with each edition and would love to accept articles from individuals who would be interested to get their work published.
                </p>
                <div className="grow"></div>
              </div>
            </div>
            <div className="col-span-1 bg-zinc-900 bg-opacity-30 h-full rounded-md shadow-lg hidden lg:block" style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}></div>
          </div>
        </div>
      </div>

      <div className="relative lg:h-screen text-zinc-200 bg-darkblue p-[50px] lg:py-[100px] lg:px-[250px] flex flex-col">
        <img src="/images/bg-pattern.png"  alt="" className="z-[0] hidden lg:block absolute w-[900px] opacity-80 overflow-hidden top-[-3%] left-[-5%] rotate-[5deg]"/>

        <div className="text-center">
          <h1 className="text-3xl lg:text-6xl font-[600]">Our Newsletter - The Inquisitor</h1>
        </div>
        <div className="flex-none h-[30px] lg:h-[50px]"></div>
        <div className="grid grid-cols-2 h-full gap-[75px]">
          <div className="col-span-1 bg-zinc-900 bg-opacity-30 h-full rounded-md shadow-lg hidden lg:block" style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}></div>
          <div className="col-span-2 lg:col-span-1 text-center lg:text-start">
            <div className='w-full h-full flex flex-col'>
              <div className="grow"></div>
              <p className='leading-7 text-md lg:text-3xl text-[#ADB8BB]'>
                The PICT MUN team has developed Issue 14.0 of ‘The Inquisitor’ from scratch. It consists of In-house articles that have been written by the club’s members after carrying out extensive research in order to serve reports to the readers with the maximum possible factual accuracy. We plan on expanding the outreach of this esteemed newsletter with each edition and would love to accept articles from individuals who would be interested to get their work published.
              </p>
              <div className="grow"></div>
            </div>
          </div>
        </div>

        <div className="block lg:hidden bg-zinc-900 bg-opacity-30 rounded-md shadow-lg w-full h-[200px] md:h-[400px] mt-[50px]" style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}></div>
      </div>

      <div className="relative lg:h-screen text-zinc-900 bg-darkblue overflow-hidden">
        <img src="/images/bg-pattern.png"  alt="" className="z-[0] hidden lg:block absolute w-[900px] opacity-80 overflow-hidden bottom-[-3%] right-[-5%] rotate-[180deg]"/>

        <div className='bg-lightblue p-[50px] lg:py-[100px] lg:px-[250px] flex flex-col w-full h-full bg-opacity-40'>
          <div className="text-center">
            <h1 className="text-3xl lg:text-6xl font-[600] text-white">Highlights</h1>
          </div>
          <div className="flex-none h-[30px] lg:h-[50px]"></div>
          <div className='block md:hidden'>
            <div className="bg-zinc-900 bg-opacity-30 rounded-md shadow-lg w-full h-[200px] my-[10px]" style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}></div>
            <div className="bg-zinc-900 bg-opacity-30 rounded-md shadow-lg w-full h-[200px] my-[10px]" style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}></div>
            <div className="bg-zinc-900 bg-opacity-30 rounded-md shadow-lg w-full h-[200px] my-[10px]" style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}></div>
          </div>
          <div className='hidden md:block lg:hidden'>
            <div className="bg-zinc-900 bg-opacity-30 rounded-md shadow-lg w-full h-[500px] my-[10px]" style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}></div>
          </div>
          <div className='hidden lg:block'>
            <div className='flex'>
              <div className='grow'></div>
              <div className="bg-zinc-900 bg-opacity-30 rounded-md shadow-lg w-[600px] h-[400px]" style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}></div>
              <div className='w-[60px]'></div>
              <div className="bg-zinc-900 bg-opacity-30 rounded-md shadow-lg w-[600px] h-[400px]" style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}></div>
              <div className='grow'></div>
            </div>
            <div className='absolute top-[450px] left-0 right-0 z-50 flex'>
              <div className="grow"></div>
              <div className="bg-zinc-900 bg-opacity-30 w-[600px] h-[400px] rounded-md shadow-lg" style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}></div>
              <div className="grow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
