import Image from "next/image";

const MyImage = ({ image, width, height }) => {

    return(
        <div>
            <Image
                src={image}
                width={width}
                height={height}
                quality={100}
            />
        </div>
    )
}

export default MyImage;