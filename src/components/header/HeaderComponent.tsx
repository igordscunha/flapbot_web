import { MenuComponent } from "../menu/MenuComponent"

export const Header = () => {
  return(
    <header className="w-full flex items-center bg-[#9d4edd] p-3 md:px-8 md:py-5">
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-4">
          <a href="/">
            <img src="flapjack-cara.jpg" className="rounded-sm transform scale-x-[-1] shadow-xl w-24 md:w-40"/>
          </a>
          <p className="hidden md:block cursor-default tracking-[0.8rem] font-thin text-xl">FlapBot</p>
        </div>

        <MenuComponent/>
      </div>
    </header>
  )
}