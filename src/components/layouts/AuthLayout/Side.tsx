
import type { CommonProps } from '@/@types/common'

type SideProps = CommonProps

const Side = ({ children, ...rest }: SideProps) => {
    return (
        
        <div>
        {/* <div className="flex h-full   ">
            <div className=" flex flex-col justify-center items-center flex-1">
            <div className="w-full xl:max-w-5xl  max-w-[380px]">
            {children
            ? cloneElement(children as React.ReactElement, {
                ...rest,
                })
                : null}
                </div>
                </div> */}
            <div className="  lg:flex mt-16  invisible md:visible rounded-3xl  2xl:max-w-[720px] mr-1  xl:max-w-[340px]">
                <img
                    src="/img/others/auth-side-bg.png"
                    className="xl:h-[700px] md:h-[600px]   md:max-w-[400px] "
                    />
            </div>
                    </div>
        
    )
}

export default Side
