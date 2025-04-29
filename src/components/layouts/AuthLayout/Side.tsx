import { cloneElement } from 'react'
import type { CommonProps } from '@/@types/common'
import Home from '@/views/Home'
// import Home from '@/views/Home'

type SideProps = CommonProps

const Side = ({ children, ...rest }: SideProps) => {
    return (
        <div className="">
            <div className=" flex flex-col justify-center items-center flex-1">
                <div className="w-full xl:max-w-[450px] px-8 max-w-[380px]">
                    {children
                        ? cloneElement(children as React.ReactElement, {
                              ...rest,
                          })
                        : null}
                </div>
            </div>
            <div className="">
                {/* <img
                    src="/img/others/auth-side-bg.png"
                    className="absolute h-full w-full top-0 left-0 rounded-3xl"
                /> */}
                <Home />
            </div>
        </div>
    )
}

export default Side